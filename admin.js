/* Decor Tesuna | Admin Dashboard Logic */

// Initialize default credentials
if (!localStorage.getItem("decor_tesuna_admin_username")) {
    localStorage.setItem("decor_tesuna_admin_username", "Tesuna.co");
}
if (!localStorage.getItem("decor_tesuna_admin_password")) {
    localStorage.setItem("decor_tesuna_admin_password", "Tesuna@123");
}

// Global state variables
let catalogData = {};
let contactsData = {};
let homepageData = {};
let inquiriesData = [];

let activeTab = "homepage"; // Homepage settings active tab
let deleteTarget = null; // Stores { type: 'category'|'subcategory'|'product'|'inquiry', id: string, extraId?: string }

// 1. DOM Content Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Check Authentication
    checkAuth();

    // Setup Auth form listener
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    // Logout button
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", handleLogout);
    }

    // Sidebar navigation click routing
    setupSidebarRouting();

    // Settings Panel tabs switching
    setupSettingsTabs();

    // Settings Forms submissions
    setupSettingsForms();

    // Setup Category modal and form listeners
    setupCategoryForm();

    // Setup Subcategory modal and form listeners
    setupSubcategoryForm();

    // Setup Product modal and form listeners
    setupProductForm();

    // Confirm Delete button listener
    const confirmDeleteBtn = document.getElementById("btn-confirm-delete");
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener("click", executeDelete);
    }

    // Select category dropdown filters inside Product list
    const filterCat = document.getElementById("filter-category");
    if (filterCat) {
        filterCat.addEventListener("change", renderProductsTable);
    }

    // Setup Forgot Password recovery wizards
    setupForgotPassword();
});

// Load database from localStorage
function loadData() {
    // Clean up old address from previous demo load
    if (localStorage.getItem("decor_tesuna_contacts")) {
        try {
            const contacts = JSON.parse(localStorage.getItem("decor_tesuna_contacts"));
            if (contacts.address === "Decor Tesuna Store, Mumbai, India") {
                localStorage.removeItem("decor_tesuna_contacts");
            }
        } catch(e) {}
    }
    catalogData = JSON.parse(localStorage.getItem("decor_tesuna_catalog")) || {};
    
    // Dynamic migration/default-filler for product material
    try {
        let catalogUpdated = false;
        Object.keys(catalogData).forEach(catId => {
            const subcats = catalogData[catId].subcategories || {};
            Object.keys(subcats).forEach(subcatId => {
                const items = subcats[subcatId].items || [];
                items.forEach(item => {
                    if (!item.material) {
                        if (catId === 'wallpaper-louvers') {
                            item.material = item.name.toLowerCase().includes('wallpaper') ? 'Premium Non-woven Fabric' : 'Charcoal / WPC Composite';
                        } else if (catId === 'bathroom-accessories') {
                            item.material = 'Grade 304 Stainless Steel';
                        } else if (item.name.toLowerCase().includes('lock') || item.name.toLowerCase().includes('body')) {
                            item.material = 'Heavy-duty Solid Brass & Steel';
                        } else {
                            item.material = 'Premium Brass & Zinc Alloy';
                        }
                        catalogUpdated = true;
                    }
                });
            });
        });
        if (catalogUpdated) {
            saveCatalog();
        }
    } catch(e) {
        console.error("Failed to run material property migration:", e);
    }

    contactsData = JSON.parse(localStorage.getItem("decor_tesuna_contacts")) || {};
    homepageData = JSON.parse(localStorage.getItem("decor_tesuna_homepage")) || {};
    inquiriesData = JSON.parse(localStorage.getItem("decor_tesuna_inquiries")) || [];
}

// Save database to localStorage
function saveCatalog() {
    localStorage.setItem("decor_tesuna_catalog", JSON.stringify(catalogData));
}

// 2. Authentication handlers
function checkAuth() {
    const sessionActive = sessionStorage.getItem("decor_tesuna_admin_session");
    const loginContainer = document.getElementById("login-container");
    const dashboardContainer = document.getElementById("dashboard-container");

    if (sessionActive === "active") {
        loginContainer.classList.add("hidden");
        dashboardContainer.classList.remove("hidden");
        // Load database assets
        loadData();
        // Render initial view
        navigateToModule("overview");
    } else {
        loginContainer.classList.remove("hidden");
        dashboardContainer.classList.add("hidden");
    }
}

function handleLogin(e) {
    e.preventDefault();
    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("login-error");

    const savedUser = localStorage.getItem("decor_tesuna_admin_username") || "Tesuna.co";
    const savedPass = localStorage.getItem("decor_tesuna_admin_password") || "Tesuna@123";

    // Dynamic credentials check
    if (usernameInput === savedUser && passwordInput === savedPass) {
        sessionStorage.setItem("decor_tesuna_admin_session", "active");
        errorMsg.classList.add("hidden");
        // Clear login form
        document.getElementById("login-form").reset();
        checkAuth();
    } else {
        errorMsg.classList.remove("hidden");
    }
}

function handleLogout() {
    sessionStorage.removeItem("decor_tesuna_admin_session");
    checkAuth();
}

// Forgot Password Flow
function setupForgotPassword() {
    const forgotLink = document.getElementById("forgot-password-link");
    const backToLogin = document.getElementById("back-to-login");
    const loginView = document.getElementById("login-view");
    const forgotView = document.getElementById("forgot-view");

    const selectForm = document.getElementById("recovery-select-form");
    const codeForm = document.getElementById("recovery-code-form");
    const passwordForm = document.getElementById("recovery-password-form");

    const step1 = document.getElementById("forgot-step-1");
    const step2 = document.getElementById("forgot-step-2");
    const step3 = document.getElementById("forgot-step-3");
    
    const codeSentMsg = document.getElementById("code-sent-message");

    if (forgotLink) {
        forgotLink.addEventListener("click", (e) => {
            e.preventDefault();
            loginView.classList.add("hidden");
            forgotView.classList.remove("hidden");
            document.getElementById("login-error").classList.add("hidden");
            // Reset steps
            step1.classList.remove("hidden");
            step2.classList.add("hidden");
            step3.classList.add("hidden");
            selectForm.reset();
            codeForm.reset();
            passwordForm.reset();
        });
    }

    if (backToLogin) {
        backToLogin.addEventListener("click", (e) => {
            e.preventDefault();
            forgotView.classList.add("hidden");
            loginView.classList.remove("hidden");
            document.getElementById("login-error").classList.add("hidden");
        });
    }

    if (selectForm) {
        selectForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const method = selectForm.querySelector('input[name="recovery-method"]:checked').value;
            
            // Build direct inquiry/recovery links
            if (method === "email") {
                const subject = encodeURIComponent("Decor Tesuna Admin Password Reset");
                const body = encodeURIComponent("Hello Support,\n\nPlease send the recovery verification code to reset my Decor Tesuna admin password.\n\nAccount: Tesuna.co");
                window.open(`mailto:tesuna.co@gmail.com?subject=${subject}&body=${body}`, "_blank");
                codeSentMsg.innerText = "Verification request sent to tesuna.co@gmail.com. Check your email or use the demo code (TESUNA2026) below.";
            } else {
                const text = encodeURIComponent("Hello Decor Tesuna Support, please send the recovery verification code to reset the admin password. Account: Tesuna.co");
                window.open(`https://wa.me/919152244189?text=${text}`, "_blank");
                codeSentMsg.innerText = "Verification request sent via WhatsApp to +91 91 522 441 89. Check your phone or use the demo code (TESUNA2026) below.";
            }

            // Move to Step 2
            step1.classList.add("hidden");
            step2.classList.remove("hidden");
        });
    }

    if (codeForm) {
        codeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const codeInput = document.getElementById("verification-code").value.trim();
            
            if (codeInput === "TESUNA2026") {
                step2.classList.add("hidden");
                step3.classList.remove("hidden");
            } else {
                alert("Invalid verification code! Please check your message or enter 'TESUNA2026' for verification.");
            }
        });
    }

    if (passwordForm) {
        passwordForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newPass = document.getElementById("new-password").value;
            const confirmPass = document.getElementById("confirm-password").value;

            if (newPass.length < 6) {
                alert("Password must be at least 6 characters long!");
                return;
            }

            if (newPass !== confirmPass) {
                alert("Passwords do not match!");
                return;
            }

            // Update in localStorage
            localStorage.setItem("decor_tesuna_admin_password", newPass);
            alert("Your password has been successfully updated! You can now login with your new password.");
            
            // Redirect back to login
            forgotView.classList.add("hidden");
            loginView.classList.remove("hidden");
            document.getElementById("login-error").classList.add("hidden");
        });
    }
}

// 3. SPA Routing & Navigation
function setupSidebarRouting() {
    const menuItems = document.querySelectorAll(".sidebar-menu .menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Mark active
            menuItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");

            // Navigate to page
            const targetPage = item.getAttribute("data-page");
            navigateToModule(targetPage);
        });
    });
}

function navigateToModule(moduleName) {
    // Hide all modules
    const modules = document.querySelectorAll(".page-module");
    modules.forEach(mod => mod.classList.add("hidden"));

    // Update Page Header Title
    const pageTitle = document.getElementById("page-title");
    
    // Reload data before rendering to ensure fresh synced states
    loadData();

    switch (moduleName) {
        case "overview":
            if (pageTitle) pageTitle.innerText = "Dashboard Overview";
            document.getElementById("page-overview").classList.remove("hidden");
            renderDashboardOverview();
            break;
            
        case "categories":
            if (pageTitle) pageTitle.innerText = "Categories & Subcategories";
            document.getElementById("page-categories").classList.remove("hidden");
            renderCategoriesTree();
            break;

        case "products":
            if (pageTitle) pageTitle.innerText = "Product Types Management";
            document.getElementById("page-products").classList.remove("hidden");
            populateFilterCategoryDropdown();
            renderProductsTable();
            break;

        case "homepage-contacts":
            if (pageTitle) pageTitle.innerText = "Homepage Banner & Contact Details";
            document.getElementById("page-homepage-contacts").classList.remove("hidden");
            populateSettingsForms();
            break;

        case "inquiries":
            if (pageTitle) pageTitle.innerText = "Customer Inquiries Inbox";
            document.getElementById("page-inquiries").classList.remove("hidden");
            renderInquiriesList();
            break;
    }
}

// 4. Dashboard Overview renderer
function renderDashboardOverview() {
    // Calculate stats
    let totalCategories = Object.keys(catalogData).length;
    let totalSubcategories = 0;
    let totalProductTypes = 0;
    let totalInquiries = inquiriesData.length;

    Object.keys(catalogData).forEach(catId => {
        const subcats = catalogData[catId].subcategories || {};
        totalSubcategories += Object.keys(subcats).length;
        
        Object.keys(subcats).forEach(subcatId => {
            const items = subcats[subcatId].items || [];
            totalProductTypes += items.length;
        });
    });

    // Set stats text
    document.getElementById("stat-categories").innerText = totalCategories;
    document.getElementById("stat-subcategories").innerText = totalSubcategories;
    document.getElementById("stat-products").innerText = totalProductTypes;
    document.getElementById("stat-inquiries").innerText = totalInquiries;

    // Render Recent Inquiries (first 5)
    const recentInquiriesContainer = document.getElementById("recent-inquiries-list");
    if (!recentInquiriesContainer) return;
    
    recentInquiriesContainer.innerHTML = "";

    if (inquiriesData.length === 0) {
        recentInquiriesContainer.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--color-grey-light);">No inquiries received yet.</td></tr>`;
        return;
    }

    inquiriesData.slice(0, 5).forEach((inq, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="th-info">
                    <span class="th-name">${inq.name}</span>
                    <span class="th-subinfo">${inq.email || "No Email"} | ${inq.phone || "No Phone"}</span>
                </div>
            </td>
            <td><span class="status-badge" style="background: rgba(212,175,55,0.08); color: var(--gold-solid);">${inq.interest}</span></td>
            <td><span class="th-subinfo">${inq.date || "N/A"}</span></td>
            <td>
                <button class="btn btn-outline-white btn-small" onclick="viewInquiryDetail(${index})">View Msg</button>
            </td>
        `;
        recentInquiriesContainer.appendChild(row);
    });
}

function viewInquiryDetail(index) {
    const inq = inquiriesData[index];
    alert(`Inquiry Details:\n\nName: ${inq.name}\nPhone: ${inq.phone || "N/A"}\nEmail: ${inq.email || "N/A"}\nInterest: ${inq.interest}\n\nMessage:\n"${inq.message}"\n\nReceived on: ${inq.date}`);
}

// 5. Category and Subcategory tree renderer
function renderCategoriesTree() {
    const container = document.getElementById("categories-tree-container");
    if (!container) return;
    
    container.innerHTML = "";

    // Sort categories by displayOrder
    const categoriesArray = Object.entries(catalogData).map(([id, data]) => ({ id, ...data }));
    categoriesArray.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

    if (categoriesArray.length === 0) {
        container.innerHTML = `<p style="color: var(--color-grey-light); text-align: center;">No categories found. Click "+ Add Category" to start.</p>`;
        return;
    }

    categoriesArray.forEach((category, index) => {
        const catNode = document.createElement("div");
        catNode.className = "cat-tree-node";
        
        // Render category header with weights and controls
        catNode.innerHTML = `
            <div class="cat-tree-header">
                <div>
                    <span class="cat-tree-title">${category.title}</span>
                    <span class="tree-weight-badge">Order: ${category.displayOrder || 0}</span>
                </div>
                <div class="action-btns">
                    <!-- Reordering Buttons -->
                    <button class="btn-icon" title="Move Up" onclick="moveCategory(${index}, -1)">▲</button>
                    <button class="btn-icon" title="Move Down" onclick="moveCategory(${index}, 1)">▼</button>
                    
                    <button class="btn-icon edit" title="Edit Category Name" onclick="openEditCategoryModal('${category.id}')">✏️</button>
                    <button class="btn-icon delete" title="Delete Category" onclick="confirmDelete('category', '${category.id}')">🗑️</button>
                </div>
            </div>
            <div class="subcat-tree-list" id="subcat-list-${category.id}">
                <!-- Subcategories injected here -->
            </div>
        `;

        container.appendChild(catNode);

        // Render Subcategories
        const subcatContainer = document.getElementById(`subcat-list-${category.id}`);
        const subcategories = category.subcategories || {};
        const subcategoriesArray = Object.entries(subcategories).map(([subId, subData]) => ({ id: subId, ...subData }));
        subcategoriesArray.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

        if (subcategoriesArray.length === 0) {
            subcatContainer.innerHTML = `<span style="font-size: 0.8rem; color: var(--color-grey-light); padding-left: 8px;">No subcategories.</span>`;
            return;
        }

        subcategoriesArray.forEach((subcat, subIdx) => {
            const subitem = document.createElement("div");
            subitem.className = "subcat-tree-item";
            subitem.innerHTML = `
                <div>
                    <span class="subcat-tree-title">${subcat.title}</span>
                    <span class="tree-weight-badge">Order: ${subcat.displayOrder || 0}</span>
                </div>
                <div class="action-btns">
                    <!-- Subcategory Reordering -->
                    <button class="btn-icon" title="Move Up" onclick="moveSubcategory('${category.id}', ${subIdx}, -1)">▲</button>
                    <button class="btn-icon" title="Move Down" onclick="moveSubcategory('${category.id}', ${subIdx}, 1)">▼</button>
                    
                    <button class="btn-icon edit" title="Edit Subcategory" onclick="openEditSubcategoryModal('${category.id}', '${subcat.id}')">✏️</button>
                    <button class="btn-icon delete" title="Delete Subcategory" onclick="confirmDelete('subcategory', '${subcat.id}', '${category.id}')">🗑️</button>
                </div>
            `;
            subcatContainer.appendChild(subitem);
        });
    });
}

// Move Category weight indices (Up/Down)
function moveCategory(index, direction) {
    const categoriesArray = Object.entries(catalogData).map(([id, data]) => ({ id, ...data }));
    categoriesArray.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= categoriesArray.length) return; // Out of bounds

    // Swap displayOrder values
    const tempOrder = categoriesArray[index].displayOrder || 0;
    categoriesArray[index].displayOrder = categoriesArray[targetIndex].displayOrder || 0;
    categoriesArray[targetIndex].displayOrder = tempOrder;

    // If orders were identical, set manual unique order values
    if (categoriesArray[index].displayOrder === categoriesArray[targetIndex].displayOrder) {
        categoriesArray[index].displayOrder = index + direction;
        categoriesArray[targetIndex].displayOrder = index;
    }

    // Write back changes to main catalogData object
    categoriesArray.forEach(cat => {
        catalogData[cat.id].displayOrder = cat.displayOrder;
    });

    saveCatalog();
    renderCategoriesTree();
}

// Move Subcategory weight indices
function moveSubcategory(catId, index, direction) {
    const subcategories = catalogData[catId].subcategories || {};
    const subcategoriesArray = Object.entries(subcategories).map(([subId, subData]) => ({ id: subId, ...subData }));
    subcategoriesArray.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= subcategoriesArray.length) return;

    // Swap displayOrder
    const tempOrder = subcategoriesArray[index].displayOrder || 0;
    subcategoriesArray[index].displayOrder = subcategoriesArray[targetIndex].displayOrder || 0;
    subcategoriesArray[targetIndex].displayOrder = tempOrder;

    if (subcategoriesArray[index].displayOrder === subcategoriesArray[targetIndex].displayOrder) {
        subcategoriesArray[index].displayOrder = index + direction;
        subcategoriesArray[targetIndex].displayOrder = index;
    }

    subcategoriesArray.forEach(sub => {
        catalogData[catId].subcategories[sub.id].displayOrder = sub.displayOrder;
    });

    saveCatalog();
    renderCategoriesTree();
}

// 6. Category CRUD Modals & Actions
function setupCategoryForm() {
    const addCatBtn = document.getElementById("btn-add-category");
    const form = document.getElementById("form-category");

    if (addCatBtn) {
        addCatBtn.addEventListener("click", () => {
            document.getElementById("category-modal-title").innerText = "Add Category";
            document.getElementById("edit-category-id").value = "";
            form.reset();
            openAdminModal("modal-category");
        });
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const editId = document.getElementById("edit-category-id").value;
            const titleInput = document.getElementById("category-title-input").value.trim();
            const orderInput = parseInt(document.getElementById("category-order-input").value) || 0;

            if (editId) {
                // Edit existing category
                catalogData[editId].title = titleInput;
                catalogData[editId].displayOrder = orderInput;
            } else {
                // Add new category
                const newId = titleInput.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                if (catalogData[newId]) {
                    alert("A category with this title or slug already exists!");
                    return;
                }
                catalogData[newId] = {
                    title: titleInput,
                    displayOrder: orderInput,
                    subcategories: {}
                };
            }

            saveCatalog();
            closeAdminModal("modal-category");
            renderCategoriesTree();
        });
    }
}

function openEditCategoryModal(catId) {
    const category = catalogData[catId];
    document.getElementById("category-modal-title").innerText = "Edit Category";
    document.getElementById("edit-category-id").value = catId;
    document.getElementById("category-title-input").value = category.title;
    document.getElementById("category-order-input").value = category.displayOrder || 0;
    openAdminModal("modal-category");
}

// 7. Subcategory CRUD Modals & Actions
function setupSubcategoryForm() {
    const addSubcatBtn = document.getElementById("btn-add-subcategory");
    const form = document.getElementById("form-subcategory");

    if (addSubcatBtn) {
        addSubcatBtn.addEventListener("click", () => {
            document.getElementById("subcategory-modal-title").innerText = "Add Subcategory";
            document.getElementById("edit-subcategory-id").value = "";
            document.getElementById("edit-subcategory-parent-id").value = "";
            document.getElementById("parent-cat-select-wrapper").classList.remove("hidden");
            
            // Populate parent selector options
            const parentSelect = document.getElementById("subcategory-parent-select");
            parentSelect.innerHTML = "";
            Object.keys(catalogData).forEach(catId => {
                const option = document.createElement("option");
                option.value = catId;
                option.innerText = catalogData[catId].title;
                parentSelect.appendChild(option);
            });

            form.reset();
            openAdminModal("modal-subcategory");
        });
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const editId = document.getElementById("edit-subcategory-id").value;
            const titleInput = document.getElementById("subcategory-title-input").value.trim();
            const orderInput = parseInt(document.getElementById("subcategory-order-input").value) || 0;
            
            let parentId = document.getElementById("edit-subcategory-parent-id").value;
            if (!parentId) {
                parentId = document.getElementById("subcategory-parent-select").value;
            }

            if (!catalogData[parentId]) {
                alert("Parent category not found!");
                return;
            }

            if (editId) {
                // Edit existing subcategory
                catalogData[parentId].subcategories[editId].title = titleInput;
                catalogData[parentId].subcategories[editId].displayOrder = orderInput;
            } else {
                // Add new subcategory
                const subId = titleInput.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                if (catalogData[parentId].subcategories[subId]) {
                    alert("A subcategory with this name already exists under this category!");
                    return;
                }
                catalogData[parentId].subcategories[subId] = {
                    title: titleInput,
                    displayOrder: orderInput,
                    items: []
                };
            }

            saveCatalog();
            closeAdminModal("modal-subcategory");
            renderCategoriesTree();
        });
    }
}

function openEditSubcategoryModal(parentId, subcatId) {
    const subcat = catalogData[parentId].subcategories[subcatId];
    
    document.getElementById("subcategory-modal-title").innerText = "Edit Subcategory";
    document.getElementById("edit-subcategory-id").value = subcatId;
    document.getElementById("edit-subcategory-parent-id").value = parentId;
    document.getElementById("parent-cat-select-wrapper").classList.add("hidden"); // Hide parent selector during edit
    
    document.getElementById("subcategory-title-input").value = subcat.title;
    document.getElementById("subcategory-order-input").value = subcat.displayOrder || 0;
    
    openAdminModal("modal-subcategory");
}

// 8. Products List Management
function populateFilterCategoryDropdown() {
    const filterCat = document.getElementById("filter-category");
    if (!filterCat) return;
    
    // Save current selection value
    const currentSel = filterCat.value;
    
    filterCat.innerHTML = `<option value="all">All Categories</option>`;
    Object.keys(catalogData).forEach(catId => {
        const option = document.createElement("option");
        option.value = catId;
        option.innerText = catalogData[catId].title;
        filterCat.appendChild(option);
    });

    // Restore selection if valid
    if (catalogData[currentSel]) {
        filterCat.value = currentSel;
    }
}

function renderProductsTable() {
    const tbody = document.getElementById("admin-products-list");
    if (!tbody) return;
    
    tbody.innerHTML = "";

    const filterVal = document.getElementById("filter-category").value;

    const products = [];
    Object.keys(catalogData).forEach(catId => {
        // Skip if filtering by another category
        if (filterVal !== "all" && filterVal !== catId) return;

        const subcats = catalogData[catId].subcategories || {};
        Object.keys(subcats).forEach(subcatId => {
            const items = subcats[subcatId].items || [];
            items.forEach((item, itemIndex) => {
                products.push({
                    ...item,
                    itemIndex: itemIndex,
                    catId: catId,
                    subcatId: subcatId,
                    categoryLabel: catalogData[catId].title,
                    subcategoryLabel: subcats[subcatId].title
                });
            });
        });
    });

    if (products.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--color-grey-light);">No products found matching filters.</td></tr>`;
        return;
    }

    products.forEach(prod => {
        const row = document.createElement("tr");
        
        // Images thumbnail count
        const imgCount = prod.images ? prod.images.length : 0;
        
        // Status Badge
        const isVisible = prod.visible !== false;
        const statusBadge = isVisible 
            ? `<span class="status-badge visible">Visible</span>` 
            : `<span class="status-badge hidden-status">Hidden</span>`;
        
        const visibilityTitle = isVisible ? "Hide Product" : "Show Product";
        const visibilityIcon = isVisible ? "👁️" : "🙈";

        row.innerHTML = `
            <td>
                <div class="th-info">
                    <span class="th-name">${prod.name}</span>
                    <span class="th-subinfo">${prod.categoryLabel}</span>
                </div>
            </td>
            <td><span class="th-subinfo" style="font-weight: 500;">${prod.subcategoryLabel}</span></td>
            <td>${statusBadge}</td>
            <td><span class="tree-weight-badge" style="margin:0; background: rgba(212, 175, 55, 0.15); color: var(--gold-solid); border: 1px solid rgba(212, 175, 55, 0.3); font-size: 0.8rem; font-weight: 500; border-radius: 4px; padding: 2px 8px; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${prod.material || "Premium Alloy"}">${prod.material || "Premium Alloy"}</span></td>
            <td><span class="tree-weight-badge" style="margin:0; background: var(--color-grey-dark); color: #fff;">${imgCount} Images</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-icon" title="${visibilityTitle}" onclick="toggleProductVisibility('${prod.catId}', '${prod.subcatId}', ${prod.itemIndex})">${visibilityIcon}</button>
                    <button class="btn-icon edit" title="Edit Product" onclick="openEditProductModal('${prod.catId}', '${prod.subcatId}', ${prod.itemIndex})">✏️</button>
                    <button class="btn-icon delete" title="Delete Product" onclick="confirmDelete('product', '${prod.itemIndex}', '${prod.catId}|${prod.subcatId}')">🗑️</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function toggleProductVisibility(catId, subcatId, itemIndex) {
    const item = catalogData[catId].subcategories[subcatId].items[itemIndex];
    // Toggle visible boolean
    item.visible = item.visible === false ? true : false;
    
    saveCatalog();
    renderProductsTable();
}

// 9. Product CRUD Modals & Actions
function setupProductForm() {
    const addProdBtn = document.getElementById("btn-add-product");
    const form = document.getElementById("form-product");
    
    const catSelect = document.getElementById("product-category-select");
    const subcatSelect = document.getElementById("product-subcategory-select");

    // Dynamic subcategory populate listener on category change
    catSelect.addEventListener("change", () => {
        const catId = catSelect.value;
        populateSubcatSelect(catId);
    });

    if (addProdBtn) {
        addProdBtn.addEventListener("click", () => {
            document.getElementById("product-modal-title").innerText = "Add Product Type";
            document.getElementById("edit-product-id").value = "";
            document.getElementById("edit-product-parent-cat").value = "";
            document.getElementById("edit-product-parent-subcat").value = "";
            
            // Show category/subcategory selectors
            document.getElementById("product-parent-selectors").classList.remove("hidden");
            
            // Populate category select options
            catSelect.innerHTML = "";
            Object.keys(catalogData).forEach(catId => {
                const option = document.createElement("option");
                option.value = catId;
                option.innerText = catalogData[catId].title;
                catSelect.appendChild(option);
            });
            
            // Trigger subcat load
            if (catSelect.value) {
                populateSubcatSelect(catSelect.value);
            }

            form.reset();
            clearFormImageSlots();
            openAdminModal("modal-product");
        });
    }

    // Setup file inputs listeners inside image manager slots
    setupImageSlotListeners();

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const editIndexStr = document.getElementById("edit-product-id").value;
            const nameInput = document.getElementById("product-name-input").value.trim();
            const materialInput = document.getElementById("product-material-input").value.trim();
            const finishesInput = document.getElementById("product-finishes-input").value.trim();
            const useInput = document.getElementById("product-use-input").value.trim();
            const descInput = document.getElementById("product-desc-input").value.trim();

            let catId = document.getElementById("edit-product-parent-cat").value;
            let subcatId = document.getElementById("edit-product-parent-subcat").value;
            
            if (!catId || !subcatId) {
                catId = catSelect.value;
                subcatId = subcatSelect.value;
            }

            if (!catalogData[catId] || !catalogData[catId].subcategories[subcatId]) {
                alert("Category/Subcategory hierarchy error!");
                return;
            }

            // Gather images from slots
            const images = collectFormImages();

            const productData = {
                name: nameInput,
                desc: descInput,
                use: useInput,
                finishes: finishesInput,
                material: materialInput,
                images: images,
                visible: true
            };

            const items = catalogData[catId].subcategories[subcatId].items || [];

            if (editIndexStr !== "") {
                const idx = parseInt(editIndexStr);
                // Keep the visible flag state of existing item
                productData.visible = items[idx].visible !== false;
                catalogData[catId].subcategories[subcatId].items[idx] = productData;
            } else {
                // Create new item
                catalogData[catId].subcategories[subcatId].items.push(productData);
            }

            saveCatalog();
            closeAdminModal("modal-product");
            renderProductsTable();
        });
    }
}

function populateSubcatSelect(catId) {
    const subcatSelect = document.getElementById("product-subcategory-select");
    subcatSelect.innerHTML = "";
    
    if (!catalogData[catId]) return;

    const subcats = catalogData[catId].subcategories || {};
    Object.keys(subcats).forEach(subId => {
        const option = document.createElement("option");
        option.value = subId;
        option.innerText = subcats[subId].title;
        subcatSelect.appendChild(option);
    });
}

// Image upload preview setup inside modals
function setupImageSlotListeners() {
    const slots = document.querySelectorAll(".img-manage-slot");
    slots.forEach(slot => {
        const fileInput = slot.querySelector(".slot-file-input");
        const removeBtn = slot.querySelector(".slot-remove-btn");
        const placeholder = slot.querySelector(".slot-placeholder");
        const img = slot.querySelector("img");

        // Click slot to open file dialog reliably
        slot.addEventListener("click", (e) => {
            if (e.target !== fileInput && e.target !== removeBtn) {
                fileInput.click();
            }
        });

        fileInput.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;

            compressAndLoadImage(file, (id) => {
                ImageDB.resolveElementSrc(img, id);
                img.classList.remove("hidden");
                placeholder.classList.add("hidden");
                removeBtn.classList.remove("hidden");
            });
        });

        removeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            fileInput.value = "";
            img.src = "";
            img.removeAttribute("data-idb-id");
            img.classList.add("hidden");
            placeholder.classList.remove("hidden");
            removeBtn.classList.add("hidden");
        });
    });
}

function clearFormImageSlots() {
    const slots = document.querySelectorAll(".img-manage-slot");
    slots.forEach(slot => {
        slot.querySelector(".slot-file-input").value = "";
        const img = slot.querySelector("img");
        img.src = "";
        img.removeAttribute("data-idb-id");
        img.classList.add("hidden");
        slot.querySelector(".slot-placeholder").classList.remove("hidden");
        slot.querySelector(".slot-remove-btn").classList.add("hidden");
    });
}

function populateFormImageSlots(imagesList) {
    clearFormImageSlots();
    if (!imagesList) return;

    const slots = document.querySelectorAll(".img-manage-slot");
    imagesList.forEach((url, idx) => {
        if (idx >= slots.length) return;
        
        const slot = slots[idx];
        const img = slot.querySelector("img");
        ImageDB.resolveElementSrc(img, url);
        img.classList.remove("hidden");
        slot.querySelector(".slot-placeholder").classList.add("hidden");
        slot.querySelector(".slot-remove-btn").classList.remove("hidden");
    });
}

function collectFormImages() {
    const imagesList = [];
    const slots = document.querySelectorAll(".img-manage-slot");
    slots.forEach(slot => {
        const img = slot.querySelector("img");
        if (img.src && !img.classList.contains("hidden")) {
            const idbId = img.getAttribute("data-idb-id");
            imagesList.push(idbId || img.getAttribute("src") || img.src);
        }
    });
    return imagesList;
}

function openEditProductModal(catId, subcatId, itemIndex) {
    const item = catalogData[catId].subcategories[subcatId].items[itemIndex];
    
    document.getElementById("product-modal-title").innerText = "Edit Product Type";
    document.getElementById("edit-product-id").value = itemIndex;
    document.getElementById("edit-product-parent-cat").value = catId;
    document.getElementById("edit-product-parent-subcat").value = subcatId;
    
    // Hide parent selector category dropdowns during edit
    document.getElementById("product-parent-selectors").classList.add("hidden");

    document.getElementById("product-name-input").value = item.name;
    document.getElementById("product-material-input").value = item.material || "";
    document.getElementById("product-finishes-input").value = item.finishes || "";
    document.getElementById("product-use-input").value = item.use || "";
    document.getElementById("product-desc-input").value = item.desc;

    // Load images
    populateFormImageSlots(item.images);

    openAdminModal("modal-product");
}

// 10. Settings Forms handlers (Homepage, Contacts)
function setupSettingsTabs() {
    const tabBtns = document.querySelectorAll(".settings-tabs .tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(el => el.classList.remove("active"));
            btn.classList.add("active");
            
            const tabId = btn.getAttribute("data-tab");
            activeTab = tabId;

            const panels = document.querySelectorAll(".settings-tab-panel");
            panels.forEach(p => p.classList.add("hidden"));
            document.getElementById(`tab-${tabId}`).classList.remove("hidden");
        });
    });
}

function populateSettingsForms() {
    // Homepage Banner settings
    document.getElementById("home-hero-subtitle").value = homepageData.heroSubtitle || "";
    document.getElementById("home-hero-title").value = homepageData.heroTitle || "";
    document.getElementById("home-hero-desc").value = homepageData.heroDesc || "";
    
    // Hero preview
    const heroPreview = document.getElementById("hero-image-preview");
    if (homepageData.heroImage) {
        heroPreview.innerHTML = "";
        const img = document.createElement("img");
        img.alt = "Hero Banner Preview";
        ImageDB.resolveElementSrc(img, homepageData.heroImage);
        heroPreview.appendChild(img);
    } else {
        heroPreview.innerHTML = `<span style="font-size:0.75rem; color:var(--color-grey-light);">No Image selected</span>`;
    }

    // Contacts Settings
    document.getElementById("contact-settings-phone").value = contactsData.phone || "";
    document.getElementById("contact-settings-whatsapp").value = contactsData.whatsapp || "";
    document.getElementById("contact-settings-email").value = contactsData.email || "";
    document.getElementById("contact-settings-hours").value = contactsData.hours || "";
    document.getElementById("contact-settings-address").value = contactsData.address || "";
}

function setupSettingsForms() {
    const formHome = document.getElementById("form-homepage-settings");
    const formContacts = document.getElementById("form-contact-settings");
    const heroFileInput = document.getElementById("home-hero-image-file");

    // Homepage image reader
    let newHeroImageBase64 = null;
    if (heroFileInput) {
        heroFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            compressAndLoadImage(file, (id) => {
                newHeroImageBase64 = id;
                const previewContainer = document.getElementById("hero-image-preview");
                previewContainer.innerHTML = "";
                const img = document.createElement("img");
                img.alt = "Hero Banner Preview";
                ImageDB.resolveElementSrc(img, id);
                previewContainer.appendChild(img);
            });
        });
    }

    if (formHome) {
        formHome.addEventListener("submit", (e) => {
            e.preventDefault();
            homepageData.heroSubtitle = document.getElementById("home-hero-subtitle").value.trim();
            homepageData.heroTitle = document.getElementById("home-hero-title").value.trim();
            homepageData.heroDesc = document.getElementById("home-hero-desc").value.trim();

            if (newHeroImageBase64) {
                homepageData.heroImage = newHeroImageBase64;
            }

            localStorage.setItem("decor_tesuna_homepage", JSON.stringify(homepageData));
            alert("Homepage settings updated successfully!");
            newHeroImageBase64 = null;
            heroFileInput.value = "";
        });
    }

    if (formContacts) {
        formContacts.addEventListener("submit", (e) => {
            e.preventDefault();
            contactsData.phone = document.getElementById("contact-settings-phone").value.trim();
            contactsData.whatsapp = document.getElementById("contact-settings-whatsapp").value.trim();
            contactsData.email = document.getElementById("contact-settings-email").value.trim();
            contactsData.hours = document.getElementById("contact-settings-hours").value.trim();
            contactsData.address = document.getElementById("contact-settings-address").value.trim();

            localStorage.setItem("decor_tesuna_contacts", JSON.stringify(contactsData));
            alert("Contact details updated successfully!");
        });
    }
}

// 11. Customer Inquiries Inbox
function renderInquiriesList() {
    const tbody = document.getElementById("admin-inquiries-list");
    if (!tbody) return;

    tbody.innerHTML = "";

    if (inquiriesData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--color-grey-light);">No inquiries received yet.</td></tr>`;
        return;
    }

    inquiriesData.forEach((inq, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="th-info">
                    <span class="th-name">${inq.name}</span>
                    <span class="th-subinfo">${inq.email || "No Email"}</span>
                    <span class="th-subinfo">${inq.phone || "No Phone"}</span>
                </div>
            </td>
            <td><span class="status-badge" style="background: rgba(212,175,55,0.08); color: var(--gold-solid);">${inq.interest}</span></td>
            <td style="max-width: 300px;"><span class="th-subinfo" style="white-space: pre-wrap; display: block; max-height: 80px; overflow-y: auto;">${inq.message}</span></td>
            <td><span class="th-subinfo">${inq.date || "N/A"}</span></td>
            <td>
                <button class="btn-icon delete" title="Delete Message" onclick="confirmDelete('inquiry', '${index}')">🗑️</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// 12. Delete Confirmation Handling
function confirmDelete(type, id, extraId = "") {
    deleteTarget = { type, id, extraId };
    
    let deleteMsg = "Are you sure you want to delete this item? This action cannot be undone.";
    if (type === "category") {
        deleteMsg = `Are you sure you want to delete the "${catalogData[id].title}" category? Doing so will delete all of its subcategories and product listings.`;
    } else if (type === "subcategory") {
        deleteMsg = `Are you sure you want to delete this subcategory? Doing so will delete all of its product listings.`;
    }

    document.getElementById("delete-modal-msg").innerText = deleteMsg;
    openAdminModal("modal-delete");
}

function executeDelete() {
    if (!deleteTarget) return;

    const { type, id, extraId } = deleteTarget;

    if (type === "category") {
        delete catalogData[id];
        saveCatalog();
        renderCategoriesTree();
    } else if (type === "subcategory") {
        const parentId = extraId;
        delete catalogData[parentId].subcategories[id];
        saveCatalog();
        renderCategoriesTree();
    } else if (type === "product") {
        const parts = extraId.split("|");
        const catId = parts[0];
        const subcatId = parts[1];
        const itemIdx = parseInt(id);
        
        catalogData[catId].subcategories[subcatId].items.splice(itemIdx, 1);
        saveCatalog();
        renderProductsTable();
    } else if (type === "inquiry") {
        const itemIdx = parseInt(id);
        inquiriesData.splice(itemIdx, 1);
        localStorage.setItem("decor_tesuna_inquiries", JSON.stringify(inquiriesData));
        
        // Refresh appropriate view
        const currentActiveMenu = document.querySelector(".sidebar-menu .menu-item.active").getAttribute("data-page");
        if (currentActiveMenu === "overview") {
            renderDashboardOverview();
        } else {
            renderInquiriesList();
        }
    }

    closeAdminModal("modal-delete");
    deleteTarget = null;
}

// 13. UI Modal utilities
function openAdminModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("active");
    }
}

function closeAdminModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("active");
    }
}
window.closeAdminModal = closeAdminModal; // Expose globally to allow inline onclick calls

// Image utility to store original uncompressed images in IndexedDB to preserve 100% quality and transparency
function compressAndLoadImage(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const originalBase64 = e.target.result;
        ImageDB.storeImage(originalBase64).then((id) => {
            if (id) {
                callback(id);
            } else {
                // Fallback to original base64 directly if IndexedDB fails
                callback(originalBase64);
            }
        });
    };
    reader.readAsDataURL(file);
}
