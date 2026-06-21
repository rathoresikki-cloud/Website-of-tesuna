/**
 * shared image IndexedDB helper
 * allows storing 100% uncompressed images without local storage size limits
 */

const ImageDB = {
    dbName: "DecorTesunaDB",
    storeName: "images",
    db: null,

    init() {
        return new Promise((resolve) => {
            if (this.db) {
                return resolve(this.db);
            }
            try {
                const request = indexedDB.open(this.dbName, 1);
                request.onupgradeneeded = (e) => {
                    const db = e.target.result;
                    if (!db.objectStoreNames.contains(this.storeName)) {
                        db.createObjectStore(this.storeName);
                    }
                };
                request.onsuccess = (e) => {
                    this.db = e.target.result;
                    resolve(this.db);
                };
                request.onerror = (e) => {
                    console.error("IndexedDB open error:", e.target.error);
                    resolve(null);
                };
            } catch (err) {
                console.error("IndexedDB initialization failed:", err);
                resolve(null);
            }
        });
    },

    storeImage(base64Data) {
        return this.init().then((db) => {
            if (!db) return Promise.resolve(null);
            const id = "idb_img_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
            return new Promise((resolve) => {
                try {
                    const transaction = db.transaction([this.storeName], "readwrite");
                    const store = transaction.objectStore(this.storeName);
                    const request = store.put(base64Data, id);
                    request.onsuccess = () => resolve(id);
                    request.onerror = (e) => {
                        console.error("Store image error:", e.target.error);
                        resolve(null);
                    };
                } catch (err) {
                    console.error("Store image transaction failed:", err);
                    resolve(null);
                }
            });
        });
    },

    loadImage(id) {
        if (!id || !id.startsWith("idb_img_")) {
            return Promise.resolve(id); // Return URL directly if it's not an IndexedDB key
        }
        return this.init().then((db) => {
            if (!db) return Promise.resolve("");
            return new Promise((resolve) => {
                try {
                    const transaction = db.transaction([this.storeName], "readonly");
                    const store = transaction.objectStore(this.storeName);
                    const request = store.get(id);
                    request.onsuccess = (e) => {
                        resolve(e.target.result || "");
                    };
                    request.onerror = (e) => {
                        console.error("Load image error:", e.target.error);
                        resolve("");
                    };
                } catch (err) {
                    console.error("Load image transaction failed:", err);
                    resolve("");
                }
            });
        });
    },

    deleteImage(id) {
        if (!id || !id.startsWith("idb_img_")) {
            return Promise.resolve();
        }
        return this.init().then((db) => {
            if (!db) return;
            return new Promise((resolve) => {
                try {
                    const transaction = db.transaction([this.storeName], "readwrite");
                    const store = transaction.objectStore(this.storeName);
                    const request = store.delete(id);
                    request.onsuccess = () => resolve();
                    request.onerror = () => resolve();
                } catch (err) {
                    resolve();
                }
            });
        });
    },

    // Helper to resolve an <img> element's source dynamically
    resolveElementSrc(imgEl, idOrUrl) {
        if (!idOrUrl) {
            imgEl.src = "";
            imgEl.removeAttribute("data-idb-id");
            return;
        }
        if (idOrUrl.startsWith("idb_img_")) {
            imgEl.setAttribute("data-idb-id", idOrUrl);
            this.loadImage(idOrUrl).then((dataUrl) => {
                if (dataUrl) {
                    imgEl.src = dataUrl;
                }
            });
        } else {
            imgEl.src = idOrUrl;
            imgEl.removeAttribute("data-idb-id");
        }
    },

    // Helper to resolve background image style
    resolveElementBg(el, idOrUrl, variableName = "--hero-bg-url") {
        const isCustomProp = variableName.startsWith("--");
        if (!idOrUrl) {
            if (isCustomProp) {
                el.style.setProperty(variableName, "none");
            } else {
                el.style.backgroundImage = "none";
            }
            return;
        }
        if (idOrUrl.startsWith("idb_img_")) {
            this.loadImage(idOrUrl).then((dataUrl) => {
                if (dataUrl) {
                    if (isCustomProp) {
                        el.style.setProperty(variableName, `url('${dataUrl}')`);
                    } else {
                        el.style.backgroundImage = `url('${dataUrl}')`;
                    }
                }
            });
        } else {
            if (isCustomProp) {
                el.style.setProperty(variableName, `url('${idOrUrl}')`);
            } else {
                el.style.backgroundImage = `url('${idOrUrl}')`;
            }
        }
    }
};
