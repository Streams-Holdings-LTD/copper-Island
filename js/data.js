// ============================================================
// COPPER ISLAND COLLECTABLES — Mock Data
// ============================================================

const SITE_NAME = "Copper Island Collectables";
const SITE_URL  = "https://copperislandcollectables.com";

// ---------- CATEGORIES ----------
const CATEGORIES = [
  {
    id: "printers",
    name: "3D Printers",
    icon: "🖨️",
    count: 48,
    desc: "FDM, resin, and multi-material printers for every skill level",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "filaments",
    name: "Filaments",
    icon: "🎨",
    count: 124,
    desc: "PLA, PETG, ABS, TPU, silk, and specialty filaments",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "resin",
    name: "Resin & UV",
    icon: "💧",
    count: 67,
    desc: "Standard, ABS-like, flexible, and water-washable resins",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "miniatures",
    name: "Miniatures & Figurines",
    icon: "🏰",
    count: 203,
    desc: "Fantasy, sci-fi, terrain, and custom printed collectables",
    image: "https://images.unsplash.com/photo-1559532899-2c08a6e3c8ac?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "parts",
    name: "Parts & Components",
    icon: "⚙️",
    count: 89,
    desc: "Hotends, extruders, beds, motors, and electronics",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "tools",
    name: "Tools & Accessories",
    icon: "🔧",
    count: 156,
    desc: "Scrapers, spatulas, cutters, UV lamps, and wash stations",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=400&fit=crop&auto=format"
  }
];

// ---------- BRANDS ----------
const BRANDS = [
  {
    id: 1,
    name: "PrintCraft Pro",
    slug: "printcraft-pro",
    tagline: "Professional-grade filaments for serious makers",
    category: "Filaments",
    location: "Vancouver, BC",
    rating: 4.9,
    reviewCount: 312,
    productCount: 34,
    founded: 2018,
    minOrder: "$50",
    cover: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=300&fit=crop&auto=format",
    about: "PrintCraft Pro has been manufacturing premium 3D printing filaments since 2018. Our Vancouver facility produces consistent, high-quality materials trusted by professionals worldwide. We offer PLA, PETG, ABS, TPU, silk, and a growing range of specialty composites.",
    certifications: ["ISO 9001", "RoHS", "REACH"],
    tags: ["PLA", "PETG", "ABS", "TPU", "Silk"]
  },
  {
    id: 2,
    name: "MakerVault",
    slug: "makervault",
    tagline: "Where innovation meets reliability",
    category: "3D Printers",
    location: "Toronto, ON",
    rating: 4.7,
    reviewCount: 198,
    productCount: 18,
    founded: 2016,
    minOrder: "$150",
    cover: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=300&fit=crop&auto=format",
    about: "MakerVault designs and distributes cutting-edge 3D printers for hobbyists and professionals alike. From entry-level FDM machines to industrial-grade multi-material systems, we have the hardware to bring your ideas to life.",
    certifications: ["CE", "FCC", "RoHS"],
    tags: ["FDM", "CoreXY", "Beginner", "Professional"]
  },
  {
    id: 3,
    name: "ResinArt Studio",
    slug: "resinart-studio",
    tagline: "Crystal-clear prints, every time",
    category: "Resin & UV",
    location: "Victoria, BC",
    rating: 4.8,
    reviewCount: 245,
    productCount: 27,
    founded: 2020,
    minOrder: "$40",
    cover: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=300&fit=crop&auto=format",
    about: "ResinArt Studio specialises in MSLA and DLP resin formulations designed for maximum detail and minimal odour. Our water-washable and standard resins are favourites among miniature painters, jewellers, and dental professionals.",
    certifications: ["CE", "RoHS"],
    tags: ["Standard", "ABS-Like", "Water-Washable", "Flexible", "Castable"]
  },
  {
    id: 4,
    name: "TinkerForge Parts",
    slug: "tinkerforge-parts",
    tagline: "Quality components for your build",
    category: "Parts & Components",
    location: "Calgary, AB",
    rating: 4.6,
    reviewCount: 176,
    productCount: 52,
    founded: 2019,
    minOrder: "$25",
    cover: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=300&fit=crop&auto=format",
    about: "TinkerForge Parts sources and manufactures high-precision 3D printer components. Our catalogue covers hotends, extruders, linear rails, stepper motors, heated beds, and control boards — all tested to exceed OEM specs.",
    certifications: ["ISO 9001"],
    tags: ["Hotends", "Extruders", "Electronics", "Motion", "Heated Beds"]
  },
  {
    id: 5,
    name: "MiniatureMasters",
    slug: "miniaturemasters",
    tagline: "Handcrafted digital designs, printed to perfection",
    category: "Miniatures",
    location: "Montreal, QC",
    rating: 4.9,
    reviewCount: 423,
    productCount: 87,
    founded: 2021,
    minOrder: "$30",
    cover: "https://images.unsplash.com/photo-1559532899-2c08a6e3c8ac?w=800&h=300&fit=crop&auto=format",
    about: "MiniatureMasters is a Quebec-based studio specialising in high-detail resin-printed miniatures, terrain, and collectables. Our team of sculptors and painters creates exclusive designs monthly — from epic dragons to intricate dungeon accessories.",
    certifications: [],
    tags: ["Fantasy", "Sci-Fi", "Terrain", "Dragons", "Dungeons"]
  },
  {
    id: 6,
    name: "FusionFilament Co",
    slug: "fusionfilament",
    tagline: "Silk, glow, and composite — beyond ordinary",
    category: "Filaments",
    location: "Edmonton, AB",
    rating: 4.7,
    reviewCount: 209,
    productCount: 41,
    founded: 2019,
    minOrder: "$35",
    cover: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=300&fit=crop&auto=format",
    about: "FusionFilament Co pushes the boundaries of what filament can be. Specialising in silk metallics, glow-in-the-dark, colour-changing, wood-fill, and metal composites, our filaments turn ordinary prints into extraordinary objects.",
    certifications: ["RoHS"],
    tags: ["Silk", "Glow", "Wood Fill", "Metal Fill", "Colour Change"]
  },
  {
    id: 7,
    name: "BuildRight Tools",
    slug: "buildright-tools",
    tagline: "Every tool a maker needs",
    category: "Tools & Accessories",
    location: "Ottawa, ON",
    rating: 4.5,
    reviewCount: 134,
    productCount: 63,
    founded: 2017,
    minOrder: "$20",
    cover: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=300&fit=crop&auto=format",
    about: "BuildRight Tools curates the finest hand tools and accessories for 3D printing post-processing. From deburring kits and flush cutters to UV curing stations and resin wash systems, we outfit your workspace for flawless finishing.",
    certifications: ["CE"],
    tags: ["Cutters", "Scrapers", "UV Lamps", "Wash Stations", "Post-Processing"]
  }
];

// ---------- PRODUCTS ----------
const PRODUCTS = [
  // --- PRINTERS ---
  {
    id: 1, name: "Ender Pro X1 — FDM Starter Kit", brandId: 2, brand: "MakerVault",
    category: "printers", categoryName: "3D Printers",
    wholesalePrice: 189.99, retailPrice: 269.99, minOrder: 1,
    rating: 4.8, reviewCount: 234, inStock: true, isNew: false, isFeatured: true,
    tags: ["FDM", "beginner", "open-source"],
    sku: "MV-EPX1",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=450&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=700&h=520&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=700&h=520&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&h=520&fit=crop&auto=format"
    ],
    desc: "The perfect entry into FDM printing. The Ender Pro X1 features a 220×220×250mm build volume, auto-levelling, a direct-drive extruder, and silent stepper drivers. Ships fully assembled with a test print included.",
    specs: {
      "Build Volume": "220 × 220 × 250 mm",
      "Layer Resolution": "0.1 – 0.4 mm",
      "Print Speed": "Up to 180 mm/s",
      "Nozzle Diameter": "0.4 mm (swappable)",
      "Filament Diameter": "1.75 mm",
      "Connectivity": "USB, SD Card",
      "Bed Type": "PEI Spring Steel",
      "Frame": "Aluminium Extrusion",
      "Power": "110/220V AC, 350W",
      "Weight": "7.8 kg"
    },
    variants: ["Black", "White"],
    reviews: [
      { name: "Jake T.", date: "Mar 2025", rating: 5, text: "Perfect first printer. Auto-levelling saved me hours of frustration. Printed clean overnight straight out of the box." },
      { name: "Sarah M.", date: "Feb 2025", rating: 5, text: "Sold five of these to our makerspace members. Everyone loves it. Build quality is excellent for the price." }
    ]
  },
  {
    id: 2, name: "CoreMax Pro — High-Speed CoreXY", brandId: 2, brand: "MakerVault",
    category: "printers", categoryName: "3D Printers",
    wholesalePrice: 499.99, retailPrice: 699.99, minOrder: 1,
    rating: 4.9, reviewCount: 112, inStock: true, isNew: true, isFeatured: true,
    tags: ["FDM", "CoreXY", "high-speed", "professional"],
    sku: "MV-CMP",
    image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&h=450&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=700&h=520&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=700&h=520&fit=crop&auto=format"
    ],
    desc: "CoreMax Pro is a fully enclosed CoreXY printer capable of 350 mm/s print speeds with Input Shaper. Dual-zone heated chamber, Klipper pre-installed, and a 350×350×340mm build volume make this the workhorse your shop needs.",
    specs: {
      "Build Volume": "350 × 350 × 340 mm",
      "Max Speed": "350 mm/s",
      "Acceleration": "Up to 20,000 mm/s²",
      "Nozzle Temp": "Up to 300 °C",
      "Bed Temp": "Up to 120 °C",
      "Firmware": "Klipper (pre-installed)",
      "Enclosure": "Yes — heated chamber",
      "Connectivity": "WiFi, USB, Ethernet",
      "Power": "220V AC, 600W"
    },
    variants: ["Black"],
    reviews: [
      { name: "Mike R.", date: "Apr 2025", rating: 5, text: "Absolute beast. Went from 6-hour prints to under 2 hours. Klipper setup was seamless. Worth every cent." }
    ]
  },
  {
    id: 3, name: "MarsLight 4K — MSLA Resin Printer", brandId: 3, brand: "ResinArt Studio",
    category: "printers", categoryName: "3D Printers",
    wholesalePrice: 249.99, retailPrice: 339.99, minOrder: 1,
    rating: 4.7, reviewCount: 89, inStock: true, isNew: false, isFeatured: false,
    tags: ["resin", "MSLA", "4K", "miniatures"],
    sku: "RA-ML4K",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=450&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&h=520&fit=crop&auto=format"
    ],
    desc: "4K mono LCD MSLA printer with a 6.6\" screen, 35μm XY resolution, and 2-second layer curing. Ideal for miniatures, jewellery, and dental models. Includes resin vat, FEP film, and USB drive.",
    specs: {
      "Build Volume": "132 × 74 × 165 mm",
      "XY Resolution": "35 μm",
      "Z Layer Thickness": "0.01 – 0.2 mm",
      "Light Source": "Matrix UV LED 405nm",
      "Screen": "6.6\" 4K Mono LCD",
      "Layer Cure Time": "1 – 3 s",
      "Interface": "3.5\" Colour Touch",
      "Connectivity": "USB",
      "Power": "110/220V, 85W"
    },
    variants: ["Black"],
    reviews: [
      { name: "Elena V.", date: "Jan 2025", rating: 5, text: "Detail is insane. Printed 28mm minis with chainmail texture — completely readable. I'm never going back to FDM for minis." }
    ]
  },

  // --- FILAMENTS ---
  {
    id: 4, name: "PLA+ Premium — 1kg Spool", brandId: 1, brand: "PrintCraft Pro",
    category: "filaments", categoryName: "Filaments",
    wholesalePrice: 19.99, retailPrice: 29.99, minOrder: 3,
    rating: 4.9, reviewCount: 567, inStock: true, isNew: false, isFeatured: true,
    tags: ["PLA", "1.75mm", "premium"],
    sku: "PC-PLA1K",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=450&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&h=520&fit=crop&auto=format"
    ],
    desc: "Our best-selling PLA+ formula with improved toughness over standard PLA. Consistent diameter (±0.02mm), vibrant colours, excellent bed adhesion, and minimal stringing. Available in 32 colours.",
    specs: {
      "Diameter": "1.75 mm ± 0.02 mm",
      "Net Weight": "1 kg",
      "Print Temp": "200 – 225 °C",
      "Bed Temp": "0 – 60 °C",
      "Density": "1.24 g/cm³",
      "Tensile Strength": "52 MPa",
      "Elongation at Break": "7%",
      "Colours Available": "32"
    },
    variants: ["True Black", "Pure White", "Copper Metallic", "Ocean Blue", "Sunset Orange", "Forest Green", "Crimson Red", "Galaxy Purple"],
    reviews: [
      { name: "Chris D.", date: "May 2025", rating: 5, text: "Best PLA I've used in 5 years. Perfect roundness, no tangles, prints beautifully at 220°C. Highly recommend." },
      { name: "Ama S.", date: "Apr 2025", rating: 5, text: "Ordered 10 spools for our school makerspace. Zero issues, students love the colour range." }
    ]
  },
  {
    id: 5, name: "PETG Pro — 1kg Spool", brandId: 1, brand: "PrintCraft Pro",
    category: "filaments", categoryName: "Filaments",
    wholesalePrice: 22.99, retailPrice: 34.99, minOrder: 3,
    rating: 4.8, reviewCount: 301, inStock: true, isNew: false, isFeatured: false,
    tags: ["PETG", "1.75mm", "moisture-resistant"],
    sku: "PC-PETG1K",
    image: "https://picsum.photos/seed/petg/600/450",
    images: ["https://picsum.photos/seed/petg/700/520"],
    desc: "Food-safe, moisture-resistant PETG that bridges the gap between PLA ease and ABS strength. Perfect for functional parts, containers, and mechanical prints. 16 colours available.",
    specs: {
      "Diameter": "1.75 mm ± 0.02 mm",
      "Net Weight": "1 kg",
      "Print Temp": "230 – 250 °C",
      "Bed Temp": "70 – 85 °C",
      "Density": "1.27 g/cm³",
      "Tensile Strength": "51 MPa"
    },
    variants: ["Clear", "True Black", "Natural White", "Ocean Blue", "Smoke Grey"],
    reviews: [
      { name: "Tom B.", date: "Mar 2025", rating: 5, text: "My go-to for functional parts. Never had a failed print, and the strength is excellent." }
    ]
  },
  {
    id: 6, name: "Silk Rainbow Shift PLA — 1kg", brandId: 6, brand: "FusionFilament Co",
    category: "filaments", categoryName: "Filaments",
    wholesalePrice: 28.99, retailPrice: 44.99, minOrder: 2,
    rating: 4.7, reviewCount: 189, inStock: true, isNew: true, isFeatured: true,
    tags: ["Silk", "PLA", "rainbow", "multicolour"],
    sku: "FF-SR1K",
    image: "https://picsum.photos/seed/silk-rainbow/600/450",
    images: ["https://picsum.photos/seed/silk-rainbow/700/520"],
    desc: "Stunning silk PLA that transitions through a full rainbow spectrum across a single spool. The silk sheen and colour shifts create jaw-dropping vases, figurines, and decorative objects. A customer favourite.",
    specs: {
      "Diameter": "1.75 mm ± 0.03 mm",
      "Net Weight": "1 kg",
      "Print Temp": "210 – 230 °C",
      "Bed Temp": "0 – 60 °C",
      "Finish": "High-gloss Silk"
    },
    variants: ["Rainbow (Original)", "Copper-Gold Shift", "Ocean Sunset", "Galaxy Nebula"],
    reviews: [
      { name: "Priya K.", date: "Apr 2025", rating: 5, text: "I printed a vase and it stopped everyone in my office. The colour transitions are absolutely beautiful." }
    ]
  },
  {
    id: 7, name: "Glow-in-Dark PLA — 500g", brandId: 6, brand: "FusionFilament Co",
    category: "filaments", categoryName: "Filaments",
    wholesalePrice: 24.99, retailPrice: 37.99, minOrder: 2,
    rating: 4.6, reviewCount: 143, inStock: true, isNew: false, isFeatured: false,
    tags: ["glow", "PLA", "glow-in-dark"],
    sku: "FF-GITD500",
    image: "https://picsum.photos/seed/glowpla/600/450",
    images: ["https://picsum.photos/seed/glowpla/700/520"],
    desc: "Strontium aluminate phosphorescent PLA that glows bright green for hours after UV exposure. Perfect for Halloween props, escape room items, emergency markers, and novelty decorations.",
    specs: {
      "Diameter": "1.75 mm ± 0.03 mm",
      "Net Weight": "500 g",
      "Print Temp": "200 – 220 °C",
      "Bed Temp": "0 – 60 °C",
      "Glow Colour": "Green",
      "Glow Duration": "4–8 hours"
    },
    variants: ["Green Glow", "Blue Glow", "Purple Glow"],
    reviews: [
      { name: "Liam F.", date: "Feb 2025", rating: 5, text: "Made a set of glow dungeon tiles. The effect is incredible in a dark room!" }
    ]
  },
  {
    id: 8, name: "ABS Engineering Grade — 1kg", brandId: 1, brand: "PrintCraft Pro",
    category: "filaments", categoryName: "Filaments",
    wholesalePrice: 21.99, retailPrice: 32.99, minOrder: 3,
    rating: 4.5, reviewCount: 98, inStock: true, isNew: false, isFeatured: false,
    tags: ["ABS", "engineering", "heat-resistant"],
    sku: "PC-ABS1K",
    image: "https://picsum.photos/seed/abs-eng/600/450",
    images: ["https://picsum.photos/seed/abs-eng/700/520"],
    desc: "High-quality ABS with reduced warping tendency, excellent chemical resistance, and heat deflection up to 100°C. Recommended for enclosure use. 8 colours available.",
    specs: {
      "Diameter": "1.75 mm ± 0.02 mm",
      "Net Weight": "1 kg",
      "Print Temp": "230 – 250 °C",
      "Bed Temp": "100 – 110 °C",
      "HDT": "~100 °C",
      "Enclosure": "Recommended"
    },
    variants: ["True Black", "White", "Grey", "Natural"],
    reviews: []
  },

  // --- RESIN ---
  {
    id: 9, name: "Ultra Detail Standard Resin — 1L", brandId: 3, brand: "ResinArt Studio",
    category: "resin", categoryName: "Resin & UV",
    wholesalePrice: 29.99, retailPrice: 44.99, minOrder: 2,
    rating: 4.8, reviewCount: 276, inStock: true, isNew: false, isFeatured: true,
    tags: ["resin", "standard", "1L", "MSLA", "DLP"],
    sku: "RA-UD1L",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=450&fit=crop&auto=format",
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&h=520&fit=crop&auto=format"],
    desc: "Low-odour standard resin with excellent detail reproduction and minimal shrinkage. Compatible with all 405nm MSLA/DLP printers. 12 colours including transparent, skin tone, and pigment sets.",
    specs: {
      "Volume": "1 L",
      "Wavelength": "405 nm",
      "Viscosity": "180–280 mPa·s (25°C)",
      "Shrinkage": "< 1%",
      "Shore Hardness": "80D",
      "Tensile Strength": "38 MPa",
      "Layer Cure Time": "2 – 5 s"
    },
    variants: ["Translucent Clear", "Pure White", "True Black", "Skin Tone", "Grey (Miniature)", "Copper Metallic", "Navy Blue", "Blood Red"],
    reviews: [
      { name: "Dana R.", date: "May 2025", rating: 5, text: "Low odour as advertised. Prints incredibly crisp. This is now my default resin." }
    ]
  },
  {
    id: 10, name: "Water-Washable Resin — 1L", brandId: 3, brand: "ResinArt Studio",
    category: "resin", categoryName: "Resin & UV",
    wholesalePrice: 34.99, retailPrice: 52.99, minOrder: 2,
    rating: 4.7, reviewCount: 198, inStock: true, isNew: false, isFeatured: false,
    tags: ["resin", "water-washable", "1L", "eco"],
    sku: "RA-WW1L",
    image: "https://picsum.photos/seed/washresin/600/450",
    images: ["https://picsum.photos/seed/washresin/700/520"],
    desc: "Revolutionary water-washable formula — no isopropyl alcohol needed! Wash prints under the tap for 60 seconds. Reduced environmental impact, reduced cost. Perfect for classrooms and studio environments.",
    specs: {
      "Volume": "1 L",
      "Wavelength": "405 nm",
      "Wash Method": "Water (60–90 s)",
      "Shore Hardness": "78D",
      "Tensile Strength": "35 MPa"
    },
    variants: ["White", "Black", "Clear", "Grey"],
    reviews: [
      { name: "Olivia C.", date: "Apr 2025", rating: 5, text: "Game changer for my classroom. No solvents, no special ventilation. Students can clean their prints safely." }
    ]
  },
  {
    id: 11, name: "Flexible TPU Resin — 500ml", brandId: 3, brand: "ResinArt Studio",
    category: "resin", categoryName: "Resin & UV",
    wholesalePrice: 38.99, retailPrice: 58.99, minOrder: 2,
    rating: 4.6, reviewCount: 67, inStock: true, isNew: true, isFeatured: false,
    tags: ["resin", "flexible", "TPU", "500ml"],
    sku: "RA-FLEX500",
    image: "https://picsum.photos/seed/flexresin/600/450",
    images: ["https://picsum.photos/seed/flexresin/700/520"],
    desc: "Shore 40A flexible resin that produces rubbery, bendable parts without tearing. Perfect for gaskets, grips, wearables, phone cases, and articulated figures.",
    specs: {
      "Volume": "500 ml",
      "Wavelength": "405 nm",
      "Shore Hardness": "40A",
      "Elongation at Break": "80%",
      "Tear Strength": "25 kN/m"
    },
    variants: ["Clear", "Black", "Blue"],
    reviews: []
  },

  // --- MINIATURES ---
  {
    id: 12, name: "Dragon Siege Set — 6 Figures", brandId: 5, brand: "MiniatureMasters",
    category: "miniatures", categoryName: "Miniatures & Figurines",
    wholesalePrice: 44.99, retailPrice: 64.99, minOrder: 2,
    rating: 4.9, reviewCount: 384, inStock: true, isNew: false, isFeatured: true,
    tags: ["fantasy", "dragon", "resin-printed", "TTRPG"],
    sku: "MM-DS6",
    image: "https://images.unsplash.com/photo-1559532899-2c08a6e3c8ac?w=600&h=450&fit=crop&auto=format",
    images: ["https://images.unsplash.com/photo-1559532899-2c08a6e3c8ac?w=700&h=520&fit=crop&auto=format"],
    desc: "Includes a 120mm Dragon, 2 Knights, 2 Archers, and a Necromancer — all printed in 8K resin at 35μm resolution. Pre-washed and cured. Perfect for TTRPG campaigns, display, or painting competitions.",
    specs: {
      "Scale": "28mm heroic / 120mm dragon",
      "Material": "8K Photopolymer Resin",
      "Print Resolution": "35 μm XY",
      "Finish": "Pre-washed, pre-cured",
      "Pieces": "6 figures",
      "Box Dimensions": "220 × 160 × 80 mm"
    },
    variants: ["Unpainted Grey", "Base Primed White"],
    reviews: [
      { name: "Ben H.", date: "May 2025", rating: 5, text: "My players gasped when I put the dragon on the table. Detail is unreal. Chainmail scales visible with the naked eye." },
      { name: "Claire T.", date: "Apr 2025", rating: 5, text: "Painted my set and entered a painting competition. Won first place! The surface detail holds paint beautifully." }
    ]
  },
  {
    id: 13, name: "Dungeon Terrain Bundle — 28 Pieces", brandId: 5, brand: "MiniatureMasters",
    category: "miniatures", categoryName: "Miniatures & Figurines",
    wholesalePrice: 74.99, retailPrice: 109.99, minOrder: 1,
    rating: 4.8, reviewCount: 156, inStock: true, isNew: false, isFeatured: false,
    tags: ["terrain", "dungeon", "modular", "TTRPG"],
    sku: "MM-DTB28",
    image: "https://picsum.photos/seed/terrain/600/450",
    images: ["https://picsum.photos/seed/terrain/700/520"],
    desc: "28-piece modular dungeon terrain set including 2×2 floor tiles, walls, doors, pillars, stairs, and a torture chamber. Interlocking design, printed in grey PLA for easy priming.",
    specs: {
      "Pieces": "28",
      "Material": "Grey PLA+",
      "Scale": "28mm / 1\" grid",
      "Floor Tiles": "8 × 2\" square tiles",
      "Walls": "10 straight, 4 corner, 2 with doors",
      "Accessories": "4 pillars, stairs, furniture"
    },
    variants: ["Grey PLA", "Stone Grey Resin"],
    reviews: [
      { name: "Fiona W.", date: "Mar 2025", rating: 5, text: "Bought 3 sets. The modular system is genius. My game table looks like a real dungeon now." }
    ]
  },
  {
    id: 14, name: "Sci-Fi Soldier Squad — 10 Pack", brandId: 5, brand: "MiniatureMasters",
    category: "miniatures", categoryName: "Miniatures & Figurines",
    wholesalePrice: 39.99, retailPrice: 59.99, minOrder: 2,
    rating: 4.7, reviewCount: 92, inStock: true, isNew: true, isFeatured: true,
    tags: ["sci-fi", "soldiers", "resin", "wargame"],
    sku: "MM-SSQ10",
    image: "https://picsum.photos/seed/scifisoldiers/600/450",
    images: ["https://picsum.photos/seed/scifisoldiers/700/520"],
    desc: "10 unique 28mm sci-fi infantry figures in full battle armour. Includes 6 rifle infantry, 2 heavy weapons, 1 sniper, and 1 officer. Pre-washed and cured at 35μm.",
    specs: {
      "Scale": "28mm heroic",
      "Material": "8K Photopolymer Resin",
      "Print Resolution": "35 μm XY",
      "Finish": "Pre-washed, pre-cured",
      "Pieces": "10 figures"
    },
    variants: ["Unpainted Grey", "Base Primed Black"],
    reviews: []
  },

  // --- PARTS ---
  {
    id: 15, name: "Volcano Hotend Kit — 0.4/0.6/0.8mm", brandId: 4, brand: "TinkerForge Parts",
    category: "parts", categoryName: "Parts & Components",
    wholesalePrice: 18.99, retailPrice: 27.99, minOrder: 5,
    rating: 4.7, reviewCount: 201, inStock: true, isNew: false, isFeatured: false,
    tags: ["hotend", "nozzle", "volcano", "upgrade"],
    sku: "TF-VHEK",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=450&fit=crop&auto=format",
    images: ["https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&h=520&fit=crop&auto=format"],
    desc: "Complete Volcano hotend kit with stainless steel heat block, PTFE-lined heat break, 60W heater cartridge, NTC 100K thermistor, and three hardened steel nozzles (0.4, 0.6, 0.8mm). Fits Ender 3, CR-10 and compatible printers.",
    specs: {
      "Max Temp": "300 °C",
      "Heater": "60W 24V cartridge",
      "Thermistor": "NTC 100K",
      "Nozzles Included": "0.4 mm, 0.6 mm, 0.8 mm",
      "Thread": "M6",
      "Compatibility": "Ender 3, CR-10, compatible boards"
    },
    variants: ["Standard Kit", "Kit + Brass Nozzles", "Kit + Ruby Nozzle"],
    reviews: [
      { name: "Aaron T.", date: "Apr 2025", rating: 5, text: "Upgraded my Ender 3 and print quality jumped noticeably. Fit perfectly, thermistor reads accurately." }
    ]
  },
  {
    id: 16, name: "BMG Dual-Drive Extruder Upgrade", brandId: 4, brand: "TinkerForge Parts",
    category: "parts", categoryName: "Parts & Components",
    wholesalePrice: 24.99, retailPrice: 39.99, minOrder: 3,
    rating: 4.8, reviewCount: 178, inStock: true, isNew: false, isFeatured: true,
    tags: ["extruder", "BMG", "dual-drive", "upgrade"],
    sku: "TF-BMG",
    image: "https://picsum.photos/seed/extruder/600/450",
    images: ["https://picsum.photos/seed/extruder/700/520"],
    desc: "Dual-drive BMG-style extruder with 3:1 gear ratio for superior grip and precision. Eliminates skipping, improves retraction, and handles flexible filaments with ease. Right-hand and left-hand versions available.",
    specs: {
      "Gear Ratio": "3:1",
      "Drive": "Dual idler design",
      "Filament Diameter": "1.75 mm",
      "Mount": "NEMA 17 compatible",
      "Material": "Fibre-reinforced PA"
    },
    variants: ["Right-Hand", "Left-Hand"],
    reviews: [
      { name: "Sam P.", date: "Mar 2025", rating: 5, text: "Night and day difference for flexible filament. Zero stringing, perfect retraction. Should be standard on every printer." }
    ]
  },
  {
    id: 17, name: "Hardened Nozzle Mega Pack — 10pc", brandId: 4, brand: "TinkerForge Parts",
    category: "parts", categoryName: "Parts & Components",
    wholesalePrice: 14.99, retailPrice: 22.99, minOrder: 5,
    rating: 4.6, reviewCount: 134, inStock: true, isNew: false, isFeatured: false,
    tags: ["nozzle", "hardened steel", "abrasive", "multi-pack"],
    sku: "TF-HN10",
    image: "https://picsum.photos/seed/nozzlepack/600/450",
    images: ["https://picsum.photos/seed/nozzlepack/700/520"],
    desc: "10-pack of hardened steel nozzles in mixed sizes (2× 0.2, 3× 0.4, 3× 0.6, 2× 0.8mm). Essential for abrasive filaments — carbon fibre, glow-in-dark, metal fill, and wood fill. MK8 thread.",
    specs: {
      "Material": "Hardened Steel",
      "Thread": "MK8",
      "Sizes": "0.2 mm ×2, 0.4 mm ×3, 0.6 mm ×3, 0.8 mm ×2",
      "Max Temp": "300 °C",
      "Pack Qty": "10 nozzles"
    },
    variants: ["Mixed Pack", "All 0.4mm", "All 0.6mm"],
    reviews: []
  },

  // --- TOOLS ---
  {
    id: 18, name: "Pro Post-Processing Kit — 12 Tool Set", brandId: 7, brand: "BuildRight Tools",
    category: "tools", categoryName: "Tools & Accessories",
    wholesalePrice: 32.99, retailPrice: 48.99, minOrder: 2,
    rating: 4.8, reviewCount: 210, inStock: true, isNew: false, isFeatured: true,
    tags: ["tools", "post-processing", "kit", "deburring"],
    sku: "BR-PPK12",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=450&fit=crop&auto=format",
    images: ["https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=700&h=520&fit=crop&auto=format"],
    desc: "Everything you need for flawless post-processing in one roll-up case. Includes precision flush cutters, deburring tool, scraper set (3), tweezers, needle files (6), and a mini sanding block. Fits in your toolbox.",
    specs: {
      "Pieces": "12 tools in roll-up case",
      "Includes": "Flush cutters, scraper, deburring tool, tweezers, files, sanding block",
      "Case": "Roll-up canvas with snap closure",
      "Case Dimensions": "300 × 180 mm rolled"
    },
    variants: ["Standard Kit", "Premium (Stainless)"],
    reviews: [
      { name: "Karen J.", date: "Apr 2025", rating: 5, text: "Bought 20 of these for our workshop class. Every single student loves the kit. Excellent quality." }
    ]
  },
  {
    id: 19, name: "UV Cure Station 48W — Turntable", brandId: 7, brand: "BuildRight Tools",
    category: "tools", categoryName: "Tools & Accessories",
    wholesalePrice: 39.99, retailPrice: 59.99, minOrder: 2,
    rating: 4.7, reviewCount: 165, inStock: true, isNew: false, isFeatured: false,
    tags: ["UV", "curing", "resin", "station"],
    sku: "BR-UVC48",
    image: "https://picsum.photos/seed/uvstation/600/450",
    images: ["https://picsum.photos/seed/uvstation/700/520"],
    desc: "48W UV curing station with rotating turntable for even all-around curing. Built-in timer (0–10 min), built-in fan for temperature management, and 360° reflective interior. Fits prints up to 200mm diameter.",
    specs: {
      "Power": "48 W",
      "Wavelength": "405 nm",
      "Timer": "0 – 10 min",
      "Turntable": "Yes — motorised",
      "Max Part Size": "Ø200 × 180 mm",
      "Interior": "360° reflective",
      "Input": "100–240V AC"
    },
    variants: ["White", "Black"],
    reviews: [
      { name: "Joel M.", date: "Mar 2025", rating: 5, text: "Cures prints in 3 minutes. The turntable is essential — no missed spots. Great value." }
    ]
  },
  {
    id: 20, name: "Resin Wash & Cure Station — 2-in-1", brandId: 7, brand: "BuildRight Tools",
    category: "tools", categoryName: "Tools & Accessories",
    wholesalePrice: 64.99, retailPrice: 94.99, minOrder: 1,
    rating: 4.9, reviewCount: 88, inStock: true, isNew: true, isFeatured: true,
    tags: ["UV", "wash", "cure", "2-in-1", "resin"],
    sku: "BR-WC2IN1",
    image: "https://picsum.photos/seed/washcure/600/450",
    images: ["https://picsum.photos/seed/washcure/700/520"],
    desc: "Professional 2-in-1 wash and cure station. Wash mode: motorised basket agitation in IPA or water. Cure mode: 36W 405nm UV with rotating platform. Lid seals fumes during washing. Fits prints up to 160mm diameter.",
    specs: {
      "Wash Power": "2W motor, 3 speeds",
      "Cure Power": "36 W 405nm",
      "Timer": "0 – 10 min",
      "Wash Bucket": "800 ml",
      "Max Part Size": "Ø160 × 150 mm",
      "Lid": "Sealed during wash mode",
      "Input": "100–240V AC"
    },
    variants: ["Silver", "Black"],
    reviews: [
      { name: "Marie L.", date: "May 2025", rating: 5, text: "Replaced both my separate wash and cure stations. Faster, tidier, and the prints come out better. Worth the upgrade." }
    ]
  }
];

// ---------- TESTIMONIALS ----------
const TESTIMONIALS = [
  {
    name: "Jake Thompson",
    role: "Owner, Tabletop Workshop",
    initials: "JT",
    rating: 5,
    text: "Copper Island has transformed how I source supplies. One platform, reliable brands, and wholesale pricing. My reorder time went from hours to minutes."
  },
  {
    name: "Sarah Mbeki",
    role: "Creative Director, MakeSpace Studio",
    initials: "SM",
    rating: 5,
    text: "The miniature selection is unreal. Our customers keep coming back specifically for the MiniatureMasters range. CIC genuinely understands the maker market."
  },
  {
    name: "Devon Okafor",
    role: "Founder, PrintWorks Canada",
    initials: "DO",
    rating: 5,
    text: "Net-30 terms, wholesale pricing, and a customer support team that actually responds. I've recommended Copper Island to every maker I know."
  }
];

// ---------- HELPERS ----------
function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}
function getBrandById(id) {
  return BRANDS.find(b => b.id === parseInt(id));
}
function getBrandBySlug(slug) {
  return BRANDS.find(b => b.slug === slug);
}
function getProductsByCategory(catId) {
  return PRODUCTS.filter(p => p.category === catId);
}
function getProductsByBrand(brandId) {
  return PRODUCTS.filter(p => p.brandId === parseInt(brandId));
}
function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.isFeatured);
}
function getNewProducts() {
  return PRODUCTS.filter(p => p.isNew);
}
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}
function formatPrice(n) {
  return '$' + Number(n).toFixed(2);
}
