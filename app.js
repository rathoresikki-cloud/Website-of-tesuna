/* Decor Tesuna | App Logic & Dynamic Product Catalog Data */

// Default data (used for first-time initialization in localStorage)
const defaultCatalogData = {
    "hardware": {
        title: "Hardware",
        displayOrder: 1,
        subcategories: {
            "decorative-hardware": {
                title: "Decorative Hardware",
                displayOrder: 1,
                items: [
                    {
                        name: "Main Door Handles",
                        desc: "Make a striking first impression with our collection of heavy-duty, designer main door handles. Crafted from premium brass and zinc alloys, these handles feature hand-polished details, intricate modern lines, and are available in satin gold, matte charcoal, and polished chrome finishes.",
                        use: "Main Entrance Doors, Wooden Single/Double Doors",
                        finishes: "Satin Gold, Matte Black, Antique Brass",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Cabinet Handles",
                        desc: "Add a touch of elegance to your kitchen and wardrobes with our designer cabinet handles. Our range includes sleek T-bars, classic gold D-handles, and textured knurled bars that offer a solid grip and a sophisticated luxury aesthetic.",
                        use: "Kitchen Cabinets, Wardrobes, Sideboards",
                        finishes: "Knurled Gold, Matte Charcoal, Brushed Brass",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1600566752355-35792bec3ad7?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Mortise Handles",
                        desc: "Elegant and highly functional, our mortise handle sets combine durable locking mechanisms with smooth lever actions. Designed to complement standard mortise locks, they are perfect for internal bedroom and office doors.",
                        use: "Internal Bedroom Doors, Executive Office Doors",
                        finishes: "Matte Grey, Satin Gold, Rose Gold",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Concealed Handles",
                        desc: "Achieve a seamless, minimalist look with our premium concealed and flush-fit handles. Ideal for sliding doors and modern push-to-open cabinets, these handles sit flush with the wood surface, showing zero protruding edges.",
                        use: "Sliding Wardrobe Doors, Minimalist Cabinets",
                        finishes: "Anodized Silver, Matte Black, Satin Gold",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600566752355-35792bec3ad7?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Knobs",
                        desc: "Small details make the biggest difference. Our decorative knobs range from geometric metallic shapes to luxury glass and marble infills. Perfect for adding a personalized touch to drawers, vanity units, and dresser tables.",
                        use: "Drawers, Vanity Cabinets, Dressers",
                        finishes: "Polished Gold, Slate Grey, White Marble",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600566752355-35792bec3ad7?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Sofa Legs",
                        desc: "Support your luxury sofas and armchairs with our stylish metallic sofa legs. Engineered to support high loads, they feature protective base glides and are available in elegant conical, square, and hairpin designs.",
                        use: "Sofas, Loungers, Ottoman Benches",
                        finishes: "Shiny Gold, Matte Black, Hairline Bronze",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Curtain Sockets",
                        desc: "Hang your drapes in style with our premium curtain rod brackets and sockets. These heavy-duty fixtures ensure your curtain poles sit securely while matching the golden and metallic detailing of your window frames.",
                        use: "Window Drapes, Curtains, Shower Rods",
                        finishes: "Polished Gold, Pearl Grey, Matte Charcoal",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Aldrop",
                        desc: "Combine traditional security with modern luxury. Our premium aldrop latches provide strong locking for double doors and main entrances. Easy to mount and built from high-tensile brass to prevent bending or weathering.",
                        use: "Main Wooden Entrance Doors, Double Patio Doors",
                        finishes: "Antique Gold, Matte Black, Satin Chrome",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80"
                        ]
                    }
                ]
            },
            "locks": {
                title: "Locks",
                displayOrder: 2,
                items: [
                    {
                        name: "Digital Door Locks",
                        desc: "Step into the future of security. Our smart digital door locks feature high-grade biometric fingerprint recognition, customizable passcodes, RFID key cards, emergency physical keys, and complete mobile app integration.",
                        use: "Main Entrance Doors, Smart Homes, Offices",
                        finishes: "Sleek Charcoal Grey, Mirror Black, Brushed Gold",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Rim Locks",
                        desc: "Heavy-duty security for standard main doors. These surface-mounted rim locks offer multi-bolt protection, double-throw throwbolts, and premium cylinders to withstand forced entry attempts.",
                        use: "Wooden Main Doors, Apartment Entrances",
                        finishes: "Textured Grey, Satin Nickel, Metallic Gold",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Tubular Locks",
                        desc: "Commonly used for interior passage and privacy doors, our tubular latch locksets offer quiet latching, smooth turning motion, and easy installation with high-end aesthetic finishes.",
                        use: "Bedroom Doors, Bathroom Privacy Doors",
                        finishes: "Polished Chrome, Satin Gold, Matte Black",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Cupboard Locks",
                        desc: "Keep your files, documents, and personal valuables secure. Our compact cupboard locks are engineered with micro-cylinder technology for precise key alignment and resistance to lockpicking.",
                        use: "Wardrobes, Office File Cabinets, Dressing Tables",
                        finishes: "Polished Gold, Shiny Chrome, Brushed Nickel",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600566752355-35792bec3ad7?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Multi Locks",
                        desc: "For places requiring ultimate security. Multi-point locking systems engage several bolts along the door frame with a single turn of the key, dispersing force and ensuring maximum security.",
                        use: "Main Entrance Doors, Safe Rooms, Cash Chests",
                        finishes: "Matte Charcoal, Chrome Steel, Antique Gold",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Sliding Locks",
                        desc: "Specifically designed for sliding panels, these locks lock flush with the door post or feature hook-bolt systems to ensure sliding doors cannot be pried apart when locked.",
                        use: "Sliding Balcony Doors, Wardrobe Sliding Doors",
                        finishes: "Satin Gold, Matte Black, Chrome Steel",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Overhead Loft Lock",
                        desc: "Discreet and secure locks for overhead storage panels. Engineered with a spring-latch system to keep ceiling loft doors shut securely, preventing them from opening on their own.",
                        use: "Ceiling Lofts, Attics, High Cupboards",
                        finishes: "Polished Nickel, Gold Brass",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600566752355-35792bec3ad7?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Glass Door Locks",
                        desc: "Zero-drilling glass door locks designed specifically for frameless glass. These sleek locking fixtures use high-grade adhesive clamps or side cuts to secure glass panels without cracking them.",
                        use: "Frameless Glass Showcases, Glass Partition Doors",
                        finishes: "Polished Chrome, Matte Charcoal Grey, Gold Brushed",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Lock Body",
                        desc: "The inner mechanism of a secure door lock. Built from thick stainless steel with brass bolt tongues, our mortise lock bodies ensure durability for millions of locking cycles.",
                        use: "Inside Wooden and Metal Doors",
                        finishes: "Metallic Silver, Zinc Yellow",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Cylinders",
                        desc: "The heart of your locking system. Our brass double-entry lock cylinders feature high-precision pin tumblers and anti-drill pins to ensure safety against key bumping and picking.",
                        use: "Mortise Lock Bodies, Rim Locks",
                        finishes: "Polished Brass, Satin Nickel, Antique Copper",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                        ]
                    }
                ]
            },
            "furniture-fitting": {
                title: "Furniture Fitting Hardware",
                displayOrder: 3,
                items: [
                    {
                        name: "Hinges",
                        desc: "Experience soft, silent door closing. Our soft-close hydraulic cabinet hinges prevent slamming, are adjustable in 3 directions, and are made from stainless steel to resist rust in humid environments like kitchens.",
                        use: "Kitchen Cabinets, Wardrobe Doors",
                        finishes: "Stainless Nickel, Metallic Satin",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Telescopic Channels",
                        desc: "Ensure your drawers glide open with zero effort. Built with hardened steel ball bearings, these heavy-duty telescopic drawer slides support loads up to 45kg and offer full-extension drawer access.",
                        use: "Modular Kitchen Drawers, Office Desks",
                        finishes: "Zinc Steel, Electrophoretic Black",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600566752355-35792bec3ad7?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Screws",
                        desc: "High-tensile wood and drywall screws crafted from hardened steel. Designed with deep-cut threads and countersunk heads for tight wood-to-wood clamping without wood splitting.",
                        use: "Wood Joinery, Drywall Panels, Wall Plugs",
                        finishes: "Yellow Zinc, Black Phosphate, Brass Steel",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Gas Pump",
                        desc: "Pneumatic cabinet lid stays (gas springs) that hold overhead cabinets open. Available in different pressure ratings (80N to 150N) for smooth, soft-opening overhead loft doors.",
                        use: "Overhead Kitchen Shutters, Toy Boxes",
                        finishes: "Metallic Silver, Charcoal Black",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Magnets",
                        desc: "Strong permanent magnets encased in protective steel casings to ensure lightweight kitchen shutters and cupboard doors shut tightly and stay closed.",
                        use: "Cupboards, Wardrobes, Display Shelves",
                        finishes: "White Plastic Case, Brown Casing",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600566752355-35792bec3ad7?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Door Magnets",
                        desc: "Heavy-duty magnetic door catches designed for large wooden or glass room doors. Features a strong magnetic pull that prevents wind drafts from blowing doors open or shut.",
                        use: "Room Entrance Doors, Balcony Single Doors",
                        finishes: "Polished Gold, Matte Grey, Satin Nickel",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Door Stopper",
                        desc: "Protect your designer walls and doors. Our door stoppers are fitted with thick, shock-absorbing rubber buffers. Available in floor-mount dome shapes and wall-mount pillar styles.",
                        use: "All Internal Swing Doors, Main Entrance Doors",
                        finishes: "Satin Gold, Brushed Gold, Matte Charcoal",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Tower Bolt",
                        desc: "Durable and secure sliding tower bolts for secondary latching. Ideal for back doors and bathroom shutters. Made of thick solid brass rods to ensure high shear strength.",
                        use: "Bathroom Doors, Storage Cabinets, Windows",
                        finishes: "Polished Gold, Hairline Grey, Antique Brass",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Door Chain",
                        desc: "Add security before opening your door. Our heavy-link sliding security door chains allow doors to open slightly for identification while keeping them locked from intruder entry.",
                        use: "Main Entrance Wooden Doors",
                        finishes: "Satin Gold, Chrome Steel, Matte Black",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1507208773393-4009623d7f19?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Shelf Bracket",
                        desc: "Heavy-duty shelf support brackets. From decorative scrollwork to minimalist floating shelf anchors, these brackets hold up wood or glass shelves with maximum structural stability.",
                        use: "Wall Shelves, Bookshelves, Display Glass Panels",
                        finishes: "Brushed Gold, Charcoal Grey, Pure White",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Shelf Button",
                        desc: "Compact metallic pegs designed to sit in pre-drilled cabinet panels to support moveable shelves. Includes plastic cushioning to protect wooden shelf bases.",
                        use: "Wardrobe Shelving, Kitchen Cabinets",
                        finishes: "Polished Chrome, Yellow Brass",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600566752355-35792bec3ad7?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
                        ]
                    },

                    {
                        name: "Silicon",
                        desc: "High-grade waterproof joint sealant. Perfect for sealing gaps in bathroom sanitaryware, glass partitions, and kitchen countertops. Dries clear or matching white/grey tones.",
                        use: "Sanitaryware Joints, Kitchen Countertops, Glass Gaps",
                        finishes: "Clear Transparent, Glossy White, Matte Grey",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "No More Nails",
                        desc: "Ultra-strong construction adhesive that replaces screws and drills. Bonds instantly to wood, plaster, tiles, and metal. Perfect for mounting wall decor paneling and louvers.",
                        use: "WPC Louvers Mounting, Mirrors, Wallpaper Trims",
                        finishes: "Opaque Paste",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1635013913023-48b6f3c1b6ad?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Abrotape",
                        desc: "Premium paper masking tape for painting, varnishing, and furniture marking. Leaves zero residue and prevents paint bleeding along crisp corner boundaries.",
                        use: "Painting Masks, Cabinet Assembly Markings",
                        finishes: "Cream White Paper",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "VHB Double Side Tape",
                        desc: "3M-grade Very High Bond double-sided foam tape. Highly recommended for bonding metal trims, wall hooks, glass panels, and lightweight ledges without mechanical drilling.",
                        use: "Signages, Heavy Mirrors, Panel Trims",
                        finishes: "Dark Grey Foam, Red Liner",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Mirror Stud",
                        desc: "Exquisite metallic caps designed to cover mounting screws on heavy glass mirrors. Features rubber washers inside to prevent cracking mirror corners.",
                        use: "Bathroom Vanity Mirrors, Glass Wall Signs",
                        finishes: "Polished Gold, Chrome Mirror, Satin Silver",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Khuti",
                        desc: "Decorative multi-pin cloth hooks. Designed for closet doors and bedroom partitions. Handcrafted brass detailing coordinates perfectly with high-end designer rooms.",
                        use: "Closets, Entryways, Bathroom Doors",
                        finishes: "Satin Gold, Antique Brass, Metallic Charcoal",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                        ]
                    }
                ]
            }
        }
    },
    "bathroom": {
        title: "Bathroom Accessories",
        displayOrder: 2,
        subcategories: {
            "bathroom-accessories": {
                title: "Premium Accessories",
                displayOrder: 1,
                items: [
                    {
                        name: "Soap Dish",
                        desc: "Keep your basin clean and elegant. Features high-grade solid brass wiring with slots for water drainage. Available in round, square, and wall-mount models.",
                        use: "Basin Areas, Shower Enclosures",
                        finishes: "Glossy Gold, Matte Black, Satin Nickel",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Robehook",
                        desc: "Durable wall-mount clothing hooks for your bathrooms. Features dual or single prong designs with a heavy base plate to handle wet towels and luxury bathrobes.",
                        use: "Behind Bathroom Doors, Shower Walls",
                        finishes: "Polished Gold, Slate Grey, Chrome Steel",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Tumbler Holder",
                        desc: "Organize your toothbrushes and paste in style. A luxury glass tumbler set mounted on a designer metallic ring, keeping vanity counters completely clear.",
                        use: "Vanity Basin Counters, Wall Mounts",
                        finishes: "Frosted Glass & Gold, Clear & Silver",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Liquid Soap Dispenser",
                        desc: "Indulge in comfort. Our refillable soap pump dispenser features smooth piston action, drip-free nozzle, and a premium casing that resists corrosion.",
                        use: "Sanitary Basin Counters, Kitchen Sinks",
                        finishes: "Satin Gold Pump, Ceramic Grey body, Matt Black",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Napkin Ring",
                        desc: "Perfect hand towel display. These luxury closed-loop napkin rings are polished to mirror finishes and coordinate with premium gold accents around vanity drawers.",
                        use: "Beside Basin Units, Guest Bathrooms",
                        finishes: "Glossy Gold, Satin Chrome, Charcoal Grey",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Paper Holder",
                        desc: "A clean, modern toilet tissue roll holder with a protective flap cover. Designed with a curved lip to ensure rolls slide smoothly and never slip off.",
                        use: "Toilets, Restroom partitions",
                        finishes: "Matte Black, Polished Gold, Chrome Nickel",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Towel Bar",
                        desc: "Hang damp towels to dry neatly. Our single and double towel rails are made of thick anti-rust metal tubes, available in 18 and 24-inch length sizes.",
                        use: "Shower glass walls, Vanity surrounds",
                        finishes: "Polished Gold, Matte Charcoal, Chrome Steel",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Towel Rack",
                        desc: "The ultimate luxury storage for guest towels. Features a top shelf to stack fresh dry towels and a lower hanging rail for active towels.",
                        use: "Hotel-style Bathrooms, Large Master Suites",
                        finishes: "Satin Gold, Matte Black, Brushed Platinum",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                        ]
                    }
                ]
            }
        }
    },
    "wall-decor": {
        title: "Wall Decor & Louvers",
        displayOrder: 3,
        subcategories: {
            "wall-decor": {
                title: "Luxury Wall Panels & Wallpaper",
                displayOrder: 1,
                items: [
                    {
                        name: "Wallpaper",
                        desc: "Transform your empty walls with our designer wallcoverings. We offer heavy-textured non-woven wallpaper rolls featuring abstract gold leaf overlays, premium slate-grey geometric patterns, and embossed structures.",
                        use: "Living Room Feature Walls, Master Bedroom backdrops",
                        finishes: "Geometric Gold, Slate Silk, Classic Charcoal Texture",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Charcoal Louvers",
                        desc: "Make your interiors stand out with charcoal louvers. Crafted from eco-friendly polymer blends infused with active charcoal, these fluted panels offer water resistance, termite protection, and a sleek modern look with gold trim accents.",
                        use: "TV Accent Walls, Office Lobby backdrops",
                        finishes: "Matte Charcoal with Gold, Slate Grey, Dark Ebony",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1635013913023-48b6f3c1b6ad?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Wpc Louvers",
                        desc: "Durable Wood Plastic Composite (WPC) fluted wall louvers. Perfectly combines the warm look of natural teak wood with the high durability of composite plastics. Ideal for adding vertical lines to highlight tall spaces.",
                        use: "High-ceiling Entrances, Commercial Retail decor, Balcony walls",
                        finishes: "Natural Teak, Smoked Walnut, Cool Ash Grey",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1635013913023-48b6f3c1b6ad?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "Stonesheet",
                        desc: "Real stone textures, thin and flexible. These ultra-thin natural slate stonesheets allow you to cover curved columns and long walls with genuine solid stone surfaces without high costs.",
                        use: "Pillar Wrappings, Feature Fireplace walls",
                        finishes: "Slate Silver, Copper Mica, Quartz Grey",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                        ]
                    },
                    {
                        name: "PU Panels",
                        desc: "Ultra-realistic Polyurethane (PU) wall stone blocks. These lightweight panels mimic stacked slate stone slabs and concrete bricks. Installs easily with glue or nails.",
                        use: "Industrial Office styling, Cafe accents",
                        finishes: "Rough Concrete Slate, White Stacked Brick, Charcoal Lava Stone",
                        visible: true,
                        images: [
                            "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1635013913023-48b6f3c1b6ad?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80"
                        ]
                    }
                ]
            }
        }
    }
};

const defaultContacts = {
    phone: "+91 91 522 441 89",
    whatsapp: "919152244189",
    email: "tesuna.co@gmail.com",
    address: "Shop no 03, Shri Ram Bhavan, Station Rd, opp. HDFC ATM, Bhayandar, Janata Nagar, Bhayandar West, Mumbai, Mira Bhayandar, Maharashtra 401101",
    hours: "Mon - Sat: 10:00 AM - 8:00 PM"
};

const defaultHomepage = {
    heroTitle: "Elevate Your Living Space",
    heroDesc: "Discover our premium range of luxury decorative hardware, security locks, elegant wall decor, and designer bathroom fittings, curated for the modern aesthetic.",
    heroSubtitle: "EXQUISITE CRAFTSMANSHIP & DESIGN",
    heroImage: "assets/images/hero_bg.png"
};

// 1. Local Storage Database Initialization
if (localStorage.getItem("decor_tesuna_contacts")) {
    try {
        const contacts = JSON.parse(localStorage.getItem("decor_tesuna_contacts"));
        if (contacts.address === "Decor Tesuna Store, Mumbai, India") {
            localStorage.removeItem("decor_tesuna_contacts");
        }
    } catch(e) {}
}

if (!localStorage.getItem("decor_tesuna_catalog")) {
    localStorage.setItem("decor_tesuna_catalog", JSON.stringify(defaultCatalogData));
} else {
    // Migration: Remove "Curtain Socket Pipe" if it exists in local storage catalog
    try {
        let catalog = JSON.parse(localStorage.getItem("decor_tesuna_catalog"));
        let updated = false;
        for (let catKey in catalog) {
            let cat = catalog[catKey];
            if (cat.subcategories) {
                for (let subcatKey in cat.subcategories) {
                    let subcat = cat.subcategories[subcatKey];
                    if (subcat.items && Array.isArray(subcat.items)) {
                        const originalLength = subcat.items.length;
                        subcat.items = subcat.items.filter(item => item.name !== "Curtain Socket Pipe");
                        if (subcat.items.length !== originalLength) {
                            updated = true;
                        }
                    }
                }
            }
        }
        if (updated) {
            localStorage.setItem("decor_tesuna_catalog", JSON.stringify(catalog));
        }
    } catch(e) {}
}
if (!localStorage.getItem("decor_tesuna_contacts")) {
    localStorage.setItem("decor_tesuna_contacts", JSON.stringify(defaultContacts));
}
if (!localStorage.getItem("decor_tesuna_homepage")) {
    localStorage.setItem("decor_tesuna_homepage", JSON.stringify(defaultHomepage));
} else {
    try {
        const hp = JSON.parse(localStorage.getItem("decor_tesuna_homepage"));
        if (hp && hp.heroImage && hp.heroImage !== "assets/images/hero_bg.png" && !hp.heroImage.startsWith("data:")) {
            // Let it be, but if it is an old custom path, reset it
        }
        // Actually, we want to force the default image for this task to show the new louvers + wallpaper image
        if (hp && hp.heroImage && hp.heroImage.startsWith("data:image")) {
            // If the user has a custom base64 uploaded image, we will reset it so they see the new default louvers + wallpaper image
            hp.heroImage = "assets/images/hero_bg.png";
            localStorage.setItem("decor_tesuna_homepage", JSON.stringify(hp));
        }
    } catch(e) {}
}
if (!localStorage.getItem("decor_tesuna_inquiries")) {
    localStorage.setItem("decor_tesuna_inquiries", JSON.stringify([]));
}

// 2. Load active datasets
let catalogData = JSON.parse(localStorage.getItem("decor_tesuna_catalog"));

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
        localStorage.setItem("decor_tesuna_catalog", JSON.stringify(catalogData));
    }
} catch(e) {
    console.error("Failed to run material property migration:", e);
}

// State variables for Modal Slider
let currentSlideIndex = 0;
let modalImages = [];

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    // Render dynamic static content (contacts, hero details)
    renderDynamicContent();

    // Inject Catalog structure and items dynamically
    injectCatalogItems();

    // Setup Modal controls
    setupModal();

    // Setup Autocomplete Search
    setupSearch();

    // Setup Inquiry Form
    setupInquiryForm();

    // Setup Mobile menu drawer
    setupMobileMenu();

    // Setup Collections Navbar Dropdown
    setupNavbarDropdown();
});

// Render Hero and Contacts dynamically from Local Storage
function renderDynamicContent() {
    const contacts = JSON.parse(localStorage.getItem("decor_tesuna_contacts")) || defaultContacts;
    const homepage = JSON.parse(localStorage.getItem("decor_tesuna_homepage")) || defaultHomepage;

    // Render Hero elements
    const heroEl = document.getElementById("hero");
    const heroTitleEl = document.getElementById("hero-title");
    const heroDescEl = document.getElementById("hero-desc");
    const heroSubtitleEl = document.getElementById("hero-subtitle");
    const heroWhatsappLink = document.getElementById("hero-whatsapp-link");

    if (heroEl && homepage.heroImage) {
        ImageDB.resolveElementBg(heroEl, homepage.heroImage, '--hero-bg-url');
    }
    if (heroTitleEl) heroTitleEl.innerText = homepage.heroTitle;
    if (heroDescEl) heroDescEl.innerText = homepage.heroDesc;
    if (heroSubtitleEl) heroSubtitleEl.innerText = homepage.heroSubtitle;
    if (heroWhatsappLink) {
        heroWhatsappLink.href = `https://wa.me/${contacts.whatsapp.replace(/\s+/g, '')}`;
    }

    // Render Contacts elements
    const phoneEl = document.getElementById("contact-phone");
    const whatsappEl = document.getElementById("contact-whatsapp");
    const emailEl = document.getElementById("contact-email");
    const addressEl = document.getElementById("contact-address");
    const hoursEl = document.getElementById("contact-hours");

    if (phoneEl) {
        phoneEl.innerText = contacts.phone;
        phoneEl.href = `tel:${contacts.phone.replace(/\s+/g, '')}`;
    }
    if (whatsappEl) {
        whatsappEl.href = `https://wa.me/${contacts.whatsapp.replace(/\s+/g, '')}`;
    }
    if (emailEl) {
        emailEl.innerText = contacts.email;
        emailEl.href = `mailto:${contacts.email}`;
    }
    if (addressEl) {
        addressEl.innerText = "Decor Tesuna Shop";
        if (contacts.address.includes("Shri Ram Bhavan") || contacts.address.includes("Shop no 03")) {
            addressEl.href = "https://maps.app.goo.gl/skPsqVmfBdSGcM4QA";
        } else {
            addressEl.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contacts.address)}`;
        }
    }
    if (hoursEl) hoursEl.innerText = contacts.hours;
}

// Inject Dynamic Categories, Subcategories, and Products into DOM
function injectCatalogItems() {
    const gridContainer = document.getElementById("categories-grid");
    if (!gridContainer) return;
    
    gridContainer.innerHTML = "";
    
    // Sort categories by displayOrder
    const categoriesArray = Object.entries(catalogData).map(([id, data]) => ({ id, ...data }));
    categoriesArray.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

    categoriesArray.forEach((category, index) => {
        // Create Category Card
        const catCard = document.createElement("div");
        catCard.className = "category-card";
        catCard.setAttribute("data-category", category.id);

        // Category Header
        const catHeader = document.createElement("div");
        catHeader.className = "category-header";
        
        const numStr = String(index + 1).padStart(2, '0');
        catHeader.innerHTML = `
            <div class="category-title-wrapper">
                <span class="category-number">${numStr}</span>
                <h3 class="category-title">${category.title}</h3>
            </div>
            <button class="expand-btn" aria-label="Expand subcategories">
                <span class="plus-icon"></span>
            </button>
        `;
        
        // Subcategory Drawer
        const drawer = document.createElement("div");
        drawer.className = "subcategory-drawer collapsed";
        
        // Render each subcategory
        const subcategories = category.subcategories || {};
        const subcategoriesArray = Object.entries(subcategories).map(([subId, subData]) => ({ id: subId, ...subData }));
        subcategoriesArray.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

        let hasVisibleContent = false;

        subcategoriesArray.forEach(subcat => {
            const subSection = document.createElement("div");
            subSection.className = "sub-category-section";
            subSection.innerHTML = `<h4 class="sub-category-title">${subcat.title}</h4>`;
            
            const itemsGrid = document.createElement("div");
            itemsGrid.className = "items-grid";
            
            // Render each product item
            const items = subcat.items || [];
            // Filter visible items (Hide/Show toggle in Admin Panel)
            const visibleItems = items.filter(item => item.visible !== false);
            
            if (visibleItems.length > 0) {
                hasVisibleContent = true;
            }

            visibleItems.forEach(item => {
                const itemCard = document.createElement("div");
                itemCard.className = "product-item";
                itemCard.innerHTML = `<span class="product-item-title">${item.name}</span>`;
                itemCard.addEventListener("click", () => {
                    openProductModal(item, subcat.title);
                });
                itemsGrid.appendChild(itemCard);
            });
            
            subSection.appendChild(itemsGrid);
            drawer.appendChild(subSection);
        });

        // Only append and render categories that have content to display
        if (hasVisibleContent || subcategoriesArray.length === 0) {
            catCard.appendChild(catHeader);
            catCard.appendChild(drawer);
            gridContainer.appendChild(catCard);
        }
    });
    
    // Setup Accordion toggling click listeners
    setupAccordions();
}

// Category Accordion Toggling
function setupAccordions() {
    const categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach(card => {
        const header = card.querySelector(".category-header");
        
        header.addEventListener("click", () => {
            const isActive = card.classList.contains("active");
            
            // Close other category drawers
            categoryCards.forEach(otherCard => {
                otherCard.classList.remove("active");
            });

            // Toggle selected category drawer
            if (!isActive) {
                card.classList.add("active");
            }
        });
    });
}

// Modal Detail Dialog functions
function setupModal() {
    const modal = document.getElementById("product-modal");
    if (!modal) return;
    
    const closeBtn = document.getElementById("modal-close-btn");
    const prevBtn = document.getElementById("slider-prev");
    const nextBtn = document.getElementById("slider-next");

    closeBtn.addEventListener("click", closeProductModal);
    
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });

    prevBtn.addEventListener("click", () => navigateSlider(-1));
    nextBtn.addEventListener("click", () => navigateSlider(1));

    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;
        
        if (e.key === "Escape") closeProductModal();
        if (e.key === "ArrowLeft") navigateSlider(-1);
        if (e.key === "ArrowRight") navigateSlider(1);
    });
}

function openProductModal(product, subcatTitle) {
    const modal = document.getElementById("product-modal");
    if (!modal) return;
    
    document.getElementById("modal-product-title").innerText = product.name;
    document.getElementById("modal-product-desc").innerText = product.desc;
    document.getElementById("modal-product-material").innerText = product.material || "Premium Alloys & Brass";
    document.getElementById("modal-product-use").innerText = product.use || "Interior Styling";
    document.getElementById("modal-product-finishes").innerText = product.finishes || "Gold Satin, Matte Grey, Brass Chrome";
    document.getElementById("modal-product-category").innerText = subcatTitle.toUpperCase();

    // Image slider setup
    modalImages = product.images || [];
    currentSlideIndex = 0;
    renderSlides();

    // Hide navigation dots if only 1 image
    const dotsContainer = document.getElementById("slider-dots");
    if (dotsContainer) {
        if (modalImages.length <= 1) {
            dotsContainer.classList.add("hidden");
        } else {
            dotsContainer.classList.remove("hidden");
        }
    }

    // Dynamic WhatsApp Enquiry Link
    const contacts = JSON.parse(localStorage.getItem("decor_tesuna_contacts")) || defaultContacts;
    const inquiryText = `Hello Decor Tesuna, I am interested in inquiring about "${product.name}" from the "${subcatTitle}" category. Please share details regarding designs, finishes, pricing, and availability.`;
    const encodedInquiry = encodeURIComponent(inquiryText);
    const whatsappBtn = document.getElementById("modal-whatsapp-btn");
    if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${contacts.whatsapp.replace(/\s+/g, '')}?text=${encodedInquiry}`;
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    const modal = document.getElementById("product-modal");
    if (modal) {
        modal.classList.remove("active");
    }
    document.body.style.overflow = "";
}

// Slider Carousel Render
function renderSlides() {
    const slidesContainer = document.getElementById("modal-slides");
    const dotsContainer = document.getElementById("slider-dots");
    
    if (!slidesContainer || !dotsContainer) return;
    
    slidesContainer.innerHTML = "";
    dotsContainer.innerHTML = "";

    const numImages = modalImages.length || 1;
    slidesContainer.style.width = `${numImages * 100}%`;

    modalImages.forEach((imgUrl, idx) => {
        // Create slide container div
        const slide = document.createElement("div");
        slide.className = "slider-slide";
        slide.style.width = `${100 / numImages}%`;

        // Blurred background image
        const bgImg = document.createElement("div");
        bgImg.className = "slider-slide-bg";
        ImageDB.resolveElementBg(bgImg, imgUrl, "background-image");
        slide.appendChild(bgImg);

        // Foreground contained image
        const fgImg = document.createElement("img");
        ImageDB.resolveElementSrc(fgImg, imgUrl);
        fgImg.alt = `Product view ${idx + 1}`;
        fgImg.className = "slider-slide-img";
        slide.appendChild(fgImg);

        slidesContainer.appendChild(slide);

        // Slide dot indicator
        const dot = document.createElement("div");
        dot.className = `slider-dot ${idx === 0 ? "active" : ""}`;
        dot.addEventListener("click", () => jumpToSlide(idx));
        dotsContainer.appendChild(dot);
    });

    updateSliderPosition();
}

function navigateSlider(direction) {
    if (modalImages.length <= 1) return;
    currentSlideIndex += direction;
    
    if (currentSlideIndex < 0) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex >= modalImages.length) {
        currentSlideIndex = modalImages.length - 1;
    }

    updateSliderPosition();
}

function jumpToSlide(index) {
    currentSlideIndex = index;
    updateSliderPosition();
}

function updateSliderPosition() {
    const slidesContainer = document.getElementById("modal-slides");
    const dots = document.querySelectorAll(".slider-dot");
    if (!slidesContainer) return;
    
    const numImages = modalImages.length || 1;
    slidesContainer.style.transform = `translateX(-${currentSlideIndex * (100 / numImages)}%)`;

    dots.forEach((dot, idx) => {
        if (idx === currentSlideIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    // Hide/show navigation buttons depending on slide position
    const prevBtn = document.getElementById("slider-prev");
    const nextBtn = document.getElementById("slider-next");

    if (prevBtn && nextBtn) {
        if (numImages <= 1) {
            prevBtn.classList.add("hidden");
            nextBtn.classList.add("hidden");
        } else {
            if (currentSlideIndex === 0) {
                prevBtn.classList.add("hidden");
                nextBtn.classList.remove("hidden");
            } else if (currentSlideIndex === numImages - 1) {
                prevBtn.classList.remove("hidden");
                nextBtn.classList.add("hidden");
            } else {
                prevBtn.classList.remove("hidden");
                nextBtn.classList.remove("hidden");
            }
        }
    }
}

// Client-side Product Autocomplete Search
function setupSearch() {
    const searchInput = document.getElementById("catalog-search");
    const dropdown = document.getElementById("search-results");
    if (!searchInput || !dropdown) return;

    // Gather flat list of all searchable products from current catalogData
    const getSearchableList = () => {
        const searchableProducts = [];
        Object.keys(catalogData).forEach(catId => {
            const subcats = catalogData[catId].subcategories || {};
            Object.keys(subcats).forEach(subcatId => {
                const items = subcats[subcatId].items || [];
                items.forEach(item => {
                    if (item.visible !== false) {
                        searchableProducts.push({
                            ...item,
                            categoryLabel: subcats[subcatId].title,
                            subcatTitle: subcats[subcatId].title
                        });
                    }
                });
            });
        });
        return searchableProducts;
    };

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            dropdown.classList.add("hidden");
            return;
        }

        const flatList = getSearchableList();
        const matches = flatList.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.desc.toLowerCase().includes(query) ||
            product.categoryLabel.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            dropdown.innerHTML = "";
            matches.slice(0, 5).forEach(product => {
                const row = document.createElement("div");
                row.className = "search-result-item";
                row.innerHTML = `
                    <span class="search-result-title">${product.name}</span>
                    <span class="search-result-category">${product.categoryLabel}</span>
                `;
                
                row.addEventListener("click", () => {
                    dropdown.classList.add("hidden");
                    searchInput.value = "";
                    openProductModal(product, product.subcatTitle);
                });

                dropdown.appendChild(row);
            });
            dropdown.classList.remove("hidden");
        } else {
            dropdown.innerHTML = `<div class="search-result-item" style="cursor: default; justify-content: center; color: var(--color-grey-light);">No items found matching "${e.target.value}"</div>`;
            dropdown.classList.remove("hidden");
        }
    });

    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add("hidden");
        }
    });
}

// Quick Inquiry Form submit handler
function setupInquiryForm() {
    const form = document.getElementById("quick-inquiry-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("form-name").value.trim();
        const interest = document.getElementById("form-interest").value;
        const msg = document.getElementById("form-message").value.trim();

        // 1. Save Inquiry details in local storage
        const inquiries = JSON.parse(localStorage.getItem("decor_tesuna_inquiries")) || [];
        const newInquiry = {
            name: name,
            phone: "", // pre-filled on submit or left for WhatsApp details
            email: "",
            interest: interest,
            message: msg,
            date: new Date().toLocaleString()
        };
        inquiries.unshift(newInquiry); // Insert at beginning of list
        localStorage.setItem("decor_tesuna_inquiries", JSON.stringify(inquiries));

        // 2. Open WhatsApp integration Link
        const formattedText = `Hello Decor Tesuna, my name is ${name}. I am visiting your display catalog and have an inquiry regarding: ${interest}.\n\nMessage: ${msg}`;
        const encodedText = encodeURIComponent(formattedText);
        
        const contacts = JSON.parse(localStorage.getItem("decor_tesuna_contacts")) || defaultContacts;
        const whatsappUrl = `https://wa.me/${contacts.whatsapp.replace(/\s+/g, '')}?text=${encodedText}`;
        window.open(whatsappUrl, "_blank");

        form.reset();
    });
}

// Mobile drawer menu
function setupMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const drawer = document.getElementById("mobile-drawer");
    if (!menuBtn || !drawer) return;
    
    const links = document.querySelectorAll(".drawer-link");

    const toggleMenu = () => {
        menuBtn.classList.toggle("active");
        drawer.classList.toggle("active");
    };

    menuBtn.addEventListener("click", toggleMenu);

    links.forEach(link => {
        // Do not close mobile drawer when clicking the Collections toggle link
        if (link.id !== "mobile-collections-nav-link") {
            link.addEventListener("click", toggleMenu);
        }
    });
}

// Setup and build Collections Navbar Dropdown dynamically from localStorage catalog data
function setupNavbarDropdown() {
    const desktopDropdown = document.getElementById("nav-collections-dropdown");
    const mobileDropdown = document.getElementById("mobile-nav-collections-dropdown");
    const desktopToggle = document.getElementById("collections-nav-link");
    const mobileToggle = document.getElementById("mobile-collections-nav-link");

    if (!desktopDropdown || !mobileDropdown || !desktopToggle || !mobileToggle) return;

    // Build the accordion structure programmatically
    const generateDropdownHTML = () => {
        desktopDropdown.innerHTML = "";
        mobileDropdown.innerHTML = "";

        // Get catalog data from localStorage or default
        const catalog = JSON.parse(localStorage.getItem("decor_tesuna_catalog")) || defaultCatalogData;

        // Sort categories by displayOrder
        const categoriesArray = Object.entries(catalog).map(([id, data]) => ({ id, ...data }));
        categoriesArray.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

        categoriesArray.forEach((category) => {
            const subcategories = category.subcategories || {};
            const subcategoriesArray = Object.entries(subcategories).map(([subId, subData]) => ({ id: subId, ...subData }));
            subcategoriesArray.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

            // Filter out subcategories and items that are invisible
            const subcatFilteredArray = [];
            let hasVisibleContent = false;

            subcategoriesArray.forEach(subcat => {
                const items = subcat.items || [];
                const visibleItems = items.filter(item => item.visible !== false);
                if (visibleItems.length > 0) {
                    hasVisibleContent = true;
                    subcatFilteredArray.push({
                        ...subcat,
                        items: visibleItems
                    });
                }
            });

            // Only append category if there are visible items
            if (hasVisibleContent) {
                desktopDropdown.appendChild(createCategoryNode(category.title, subcatFilteredArray, false));
                mobileDropdown.appendChild(createCategoryNode(category.title, subcatFilteredArray, true));
            }
        });
    };

    const createCategoryNode = (categoryTitle, subcategories, isMobile) => {
        const catDiv = document.createElement("div");
        catDiv.className = "dropdown-category";

        const headerDiv = document.createElement("div");
        headerDiv.className = "dropdown-category-header";
        headerDiv.innerHTML = `
            <h4>${categoryTitle}</h4>
            <span class="dropdown-category-arrow">▼</span>
        `;

        const contentDiv = document.createElement("div");
        contentDiv.className = "dropdown-category-content";

        if (!isMobile) {
            // --- DESKTOP TABBED HORIZONTAL LAYOUT ---
            
            // Subcategories horizontal tab bar
            const tabsBar = document.createElement("div");
            tabsBar.className = "dropdown-subcategories-tabs";

            const panelsContainer = document.createElement("div");
            panelsContainer.className = "dropdown-products-container";

            subcategories.forEach((subcat, idx) => {
                const tab = document.createElement("div");
                tab.className = "dropdown-subcategory-tab";
                tab.innerText = subcat.title;
                tab.setAttribute("data-subid", `${categoryTitle.replace(/\s+/g, '')}-${idx}`);

                const panel = document.createElement("div");
                panel.className = "dropdown-products-panel";
                panel.id = `panel-${categoryTitle.replace(/\s+/g, '')}-${idx}`;

                subcat.items.forEach(item => {
                    const productLink = document.createElement("a");
                    productLink.className = "dropdown-product-link";
                    productLink.innerText = item.name;
                    productLink.href = "#";
                    productLink.addEventListener("click", (e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        openProductModal(item, subcat.title);

                        // Close dropdowns
                        desktopDropdown.classList.remove("active");
                        desktopToggle.classList.remove("active");
                        desktopDropdown.classList.remove("expanded");
                    });
                    panel.appendChild(productLink);
                });

                tabsBar.appendChild(tab);
                panelsContainer.appendChild(panel);

                // Tab hover handler (desktop mega-menu triggers on hover)
                tab.addEventListener("mouseenter", () => {
                    tabsBar.querySelectorAll(".dropdown-subcategory-tab").forEach(t => t.classList.remove("active"));
                    panelsContainer.querySelectorAll(".dropdown-products-panel").forEach(p => p.classList.remove("active"));

                    tab.classList.add("active");
                    panel.classList.add("active");
                });

                tab.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                });
            });

            contentDiv.appendChild(tabsBar);
            contentDiv.appendChild(panelsContainer);

            // Desktop Category hover expander
            headerDiv.addEventListener("mouseenter", () => {
                const isActive = catDiv.classList.contains("active");
                if (isActive) return;

                // Close other categories
                desktopDropdown.querySelectorAll(".dropdown-category").forEach(otherCat => {
                    if (otherCat !== catDiv) {
                        otherCat.classList.remove("active");
                        otherCat.querySelectorAll(".dropdown-subcategory-tab").forEach(t => t.classList.remove("active"));
                        otherCat.querySelectorAll(".dropdown-products-panel").forEach(p => p.classList.remove("active"));
                    }
                });

                catDiv.classList.add("active");
                desktopDropdown.classList.add("expanded");
            });

            headerDiv.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
            });

            // Collapse category and restore dropdown width when mouse leaves this category
            catDiv.addEventListener("mouseleave", () => {
                catDiv.classList.remove("active");
                desktopDropdown.classList.remove("expanded");
                // Reset active tabs and panels inside this category
                catDiv.querySelectorAll(".dropdown-subcategory-tab").forEach(t => t.classList.remove("active"));
                catDiv.querySelectorAll(".dropdown-products-panel").forEach(p => p.classList.remove("active"));
            });

        } else {
            // --- MOBILE ACCORDION VERTICAL LAYOUT ---
            
            subcategories.forEach((subcat, idx) => {
                const subcatDiv = document.createElement("div");
                subcatDiv.className = "dropdown-subcategory";

                const subTitle = document.createElement("div");
                subTitle.className = "dropdown-subcategory-title";
                subTitle.innerHTML = `
                    <span>${subcat.title}</span>
                    <span class="sub-arrow">▼</span>
                `;
                subcatDiv.appendChild(subTitle);

                const productsList = document.createElement("div");
                productsList.className = "dropdown-products-list";

                subcat.items.forEach(item => {
                    const productLink = document.createElement("a");
                    productLink.className = "dropdown-product-link";
                    productLink.innerText = item.name;
                    productLink.href = "#";
                    productLink.addEventListener("click", (e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        openProductModal(item, subcat.title);

                        // Close mobile drawer and dropdown
                        mobileDropdown.classList.remove("active");
                        mobileToggle.classList.remove("active");

                        const menuBtn = document.getElementById("mobile-menu-btn");
                        const drawer = document.getElementById("mobile-drawer");
                        if (menuBtn && drawer && drawer.classList.contains("active")) {
                            menuBtn.classList.remove("active");
                            drawer.classList.remove("active");
                        }
                    });
                    productsList.appendChild(productLink);
                });

                subcatDiv.appendChild(productsList);
                contentDiv.appendChild(subcatDiv);

                // Mobile subcategory accordion toggler (click)
                subTitle.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    const isActive = subcatDiv.classList.contains("active");

                    // Close all other subcategories in this mobile menu
                    contentDiv.querySelectorAll(".dropdown-subcategory").forEach(otherSub => {
                        if (otherSub !== subcatDiv) {
                            otherSub.classList.remove("active");
                        }
                    });

                    if (isActive) {
                        subcatDiv.classList.remove("active");
                    } else {
                        subcatDiv.classList.add("active");
                    }
                });
            });

            // Mobile Category expander (click)
            headerDiv.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isActive = catDiv.classList.contains("active");

                mobileDropdown.querySelectorAll(".dropdown-category").forEach(otherCat => {
                    if (otherCat !== catDiv) {
                        otherCat.classList.remove("active");
                        otherCat.querySelectorAll(".dropdown-subcategory").forEach(s => s.classList.remove("active"));
                    }
                });

                if (isActive) {
                    catDiv.classList.remove("active");
                    contentDiv.querySelectorAll(".dropdown-subcategory").forEach(s => s.classList.remove("active"));
                } else {
                    catDiv.classList.add("active");
                }
            });
        }

        catDiv.appendChild(headerDiv);
        catDiv.appendChild(contentDiv);

        return catDiv;
    };

    // Initial population
    generateDropdownHTML();

    // Hover-based activation on Desktop
    let hoverTimeout;
    const navDropdownContainer = document.querySelector(".nav-dropdown-container");
    if (navDropdownContainer) {
        navDropdownContainer.addEventListener("mouseenter", () => {
            clearTimeout(hoverTimeout);
            generateDropdownHTML();
            desktopDropdown.classList.add("active");
            desktopToggle.classList.add("active");
        });

        navDropdownContainer.addEventListener("mouseleave", () => {
            hoverTimeout = setTimeout(() => {
                desktopDropdown.classList.remove("active");
                desktopToggle.classList.remove("active");
                desktopDropdown.classList.remove("expanded");
                // Reset active categories when mouse leaves
                desktopDropdown.querySelectorAll(".dropdown-category").forEach(otherCat => {
                    otherCat.classList.remove("active");
                    otherCat.querySelectorAll(".dropdown-subcategory-tab").forEach(t => t.classList.remove("active"));
                    otherCat.querySelectorAll(".dropdown-products-panel").forEach(p => p.classList.remove("active"));
                });
            }, 300); // 300ms grace period to allow smooth cursor movements
        });
    }

    // Stop click navigation for Desktop trigger
    desktopToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
    });

    // Toggle Mobile dropdown inside drawer (using click since touch devices don't have hover)
    mobileToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        generateDropdownHTML();

        const isActive = mobileDropdown.classList.contains("active");
        if (isActive) {
            mobileDropdown.classList.remove("active");
            mobileToggle.classList.remove("active");
        } else {
            mobileDropdown.classList.add("active");
            mobileToggle.classList.add("active");
        }
    });

    // General outside clicks closing for mobile dropdown
    document.addEventListener("click", (e) => {
        if (!mobileToggle.contains(e.target) && !mobileDropdown.contains(e.target)) {
            mobileDropdown.classList.remove("active");
            mobileToggle.classList.remove("active");
        }
    });
}
