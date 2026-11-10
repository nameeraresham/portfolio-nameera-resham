/**
 * Nameera Resham - Comprehensive Portfolio Projects Data
 * Categories:
 * - 'ai-data': 6 AI & Data Science Projects
 * - 'textile': 31 Textile Designing (Print & Surface) Projects
 * - 'weaving': Weaving & Structural Exploration Projects
 * - 'embroidery': Embroidery & Stitch Development Projects
 */

const projectsData = [
  // ==========================================
  // 1. AI & DATA PROJECTS (6 Projects)
  // ==========================================
  {
    id: 'ai-1',
    category: 'ai-data',
    title: 'NumPy: Numerical Computing & Array Operations',
    colabUrl: 'https://colab.research.google.com/drive/1lPDXUoo6O86IOC2HpHRLOeaSHoiK4s5l?usp=sharing',
    description: 'Python numerical computing practice using NumPy arrays, indexing, operations, and data manipulation.',
    tags: ['Python', 'NumPy'],
    meta: {
      'Project': 'NumPy Practice',
      'Environment': 'Google Colab (Python 3.x)',
      'Focus': 'Numerical Computing, Arrays & Operations',
      'Source': 'Colab Interactive Notebook'
    }
  },
  {
    id: 'ai-2',
    category: 'ai-data',
    title: 'Pandas: Structured Data Analysis & Manipulation',
    colabUrl: 'https://colab.research.google.com/drive/1J7QTdW8_rIlpvOsyUS0FOfdjI6oI-TXL?usp=sharing',
    description: 'Practical Pandas work focused on working with structured datasets and basic data analysis.',
    tags: ['Python', 'Pandas', 'Data Analysis'],
    meta: {
      'Project': 'Pandas Practice',
      'Environment': 'Google Colab (Python 3.x)',
      'Focus': 'DataFrames, Manipulation & Analysis',
      'Source': 'Colab Interactive Notebook'
    }
  },
  {
    id: 'ai-3',
    category: 'ai-data',
    title: 'Data Cleaning & Preprocessing',
    colabUrl: 'https://colab.research.google.com/drive/1Xsfao1i4ynHXUqvLJItccy7B1xm7U2d1?usp=sharing',
    description: 'Practical data cleaning work focused on preparing, organizing, and handling data issues before analysis.',
    tags: ['Python', 'Pandas', 'Data Cleaning'],
    meta: {
      'Project': 'Data Cleaning & Prep',
      'Environment': 'Google Colab (Python 3.x)',
      'Focus': 'Data Cleaning & Data Quality',
      'Source': 'Colab Interactive Notebook'
    }
  },
  {
    id: 'ai-4',
    category: 'ai-data',
    title: 'Mall Shopping Dataset Analysis',
    colabUrl: 'https://colab.research.google.com/drive/1W37mSjldRKDHmrZ6EFQjZ7u64Cqls_tn?usp=sharing',
    description: 'Exploration and analysis of a shopping dataset using Python and data analysis techniques.',
    tags: ['Python', 'Pandas', 'Data Analysis'],
    meta: {
      'Project': 'Mall Shopping Analysis',
      'Environment': 'Google Colab (Python 3.x)',
      'Focus': 'Exploratory Data Analysis',
      'Source': 'Colab Interactive Notebook'
    }
  },
  {
    id: 'ai-5',
    category: 'ai-data',
    title: 'Data Cleaning, Transformation & Visualization',
    colabUrl: 'https://colab.research.google.com/drive/1YMlyxB63t7PsUzEZ9lTWurD9T_CtZEeZ?usp=sharing',
    description: 'A practical data workflow covering data cleaning, transformation, analysis, and visualization.',
    tags: ['Python', 'Data Cleaning', 'Visualization'],
    meta: {
      'Project': 'Cleaning, Transformation & Viz',
      'Environment': 'Google Colab (Python 3.x)',
      'Focus': 'Data Pipeline & Charting',
      'Source': 'Colab Interactive Notebook'
    }
  },
  {
    id: 'ai-6',
    category: 'ai-data',
    title: 'Data Analysis Project',
    colabUrl: 'https://colab.research.google.com/drive/1gPd1uw1_qCP4Tsq7aoVEJyvQASvdmS8G?usp=sharing',
    description: 'Practical Python notebook covering dataset exploration, analytical routines, and data exercises.',
    tags: ['Python', 'Data Analysis', 'Colab'],
    meta: {
      'Project': 'Data Analysis & Practice',
      'Environment': 'Google Colab (Python 3.x)',
      'Focus': 'Python Data Science Notebook',
      'Source': 'Colab Interactive Notebook'
    }
  },

  // ===================================================
  // 2. TEXTILE DESIGNING (PRINT & SURFACE) (31 Projects)
  // ===================================================
  {
    id: 'textile-1',
    category: 'textile',
    title: 'Heritage Currency: The $2 Bill Engraving Pattern',
    image: 'assets/images/1design.jpeg',
    description: 'This surface design translates the iconic engraving imagery of the United States 2 Dollar bill into a seamless repeating motif. Drawing inspiration from classical currency illustration and American history, the layout utilizes a soft mint background accented by layered sage green, deep charcoal, and muted brown tones. The structured repeat creates a subtle camouflage effect from a distance while revealing intricate engraved detail upon closer inspection.',
    process: ['Inspiration', 'Motif Extraction', 'Composition', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Vector Pattern'],
    meta: {
      'Spec Code': 'TEX-2024-01',
      'Repeat Type': 'Straight Grid Repeat (Seamless)',
      'Substrate': 'Cotton Lawn / Silk Twill / Streetwear',
      'Technique': 'Micro-Engraving Surface Print'
    }
  },
  {
    id: 'textile-2',
    category: 'textile',
    title: 'Euro Motif: The 5 Euro Cartographic Wavy Print',
    image: 'assets/images/2design.jpeg',
    description: 'Inspired by European cartography, currency security line patterns, and numeric iconography from the 5 Euro banknote, this playful novelty pattern presents a fresh graphic composition. Set against a clean off-white background with subtle wavy zig-zag linework, the design features floating map silhouettes in vibrant green and canary yellow interspersed with striped currency symbols.',
    process: ['Inspiration', 'Motif Extraction', 'Composition', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Conversational Print'],
    meta: {
      'Spec Code': 'TEX-2024-02',
      'Repeat Type': 'Offset Grid Repeat',
      'Substrate': 'Resort Shirts, Casual Tops, Silk Scarves',
      'Technique': 'Cartographic Novelty Print'
    }
  },
  {
    id: 'textile-3',
    category: 'textile',
    title: 'Sovereign Calligraphy: 10 Dinar Geometric Motif Print',
    image: 'assets/images/3design.jpeg',
    description: 'Inspired by the rich heritage, intricate security guilloche patterns, and classical Arabic calligraphy found on the 10 Dinar banknote, this surface design synthesizes sacred geometry with fluid typographic elements. Set against a muted sage-green backdrop, the composition utilizes delicate olive and charcoal linework alongside subtle geometric watermarks.',
    process: ['Inspiration', 'Calligraphy Study', 'Grid Layout', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Hand Sketching'],
    meta: {
      'Spec Code': 'TEX-2024-03',
      'Repeat Type': 'Half-Drop Repeat',
      'Substrate': 'Silk Scarves, Resort Kaftans, Luxury Crepe',
      'Technique': 'Geometric Calligraphic Print'
    }
  },
  {
    id: 'textile-4',
    category: 'textile',
    title: 'Radial Architectural: The 10 Euro Guilloche Motif',
    image: 'assets/images/4design.jpeg',
    description: 'Inspired by Romanesque architectural themes and security guilloche rosettes found on European currency, this design translates complex radial geometry into a bold surface pattern. Set against a deep cobalt blue field, the motif combines crisp orange concentric rings with intricate vector grid linework.',
    process: ['Inspiration', 'Guilloche Drafting', 'Concentric Radial', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Vector Pattern', 'Digital Printing'],
    meta: {
      'Spec Code': 'TEX-2024-04',
      'Repeat Type': 'Half-Drop Radial Repeat',
      'Substrate': 'Activewear, Swimwear, Upholstery Textiles',
      'Technique': 'Concentric Radial Medallion Print'
    }
  },
  {
    id: 'textile-5',
    category: 'textile',
    title: 'Gothic Geometry: The 20 Euro Checkerboard Pattern',
    image: 'assets/images/5design.jpeg',
    description: 'Drawing inspiration from the Gothic architectural elements and structural security motifs found on the 20 Euro banknote, this print reimagines historical vaulting into a bold, contemporary layout. The design features a high-contrast checkerboard structure alternating between sharp burgundy diamond grids and soft mustard-gold radial motifs on a warm cream ground.',
    process: ['Inspiration', 'Vaulting Geometry', 'Grid Layout', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Surface Design'],
    meta: {
      'Spec Code': 'TEX-2024-05',
      'Repeat Type': 'Straight Grid Repeat',
      'Substrate': 'Tailored Menswear, Blazer Fabrics, Home Linens',
      'Technique': 'Architectural Lattice Print'
    }
  },
  {
    id: 'textile-6',
    category: 'textile',
    title: 'Renaissance Arch: The 50 Euro Architectural Pop Print',
    image: 'assets/images/6design.jpeg',
    description: 'Inspired by Renaissance architectural motifs and vibrant warm tones of the 50 Euro banknote, this playful surface pattern reimagines European cultural symbols through a modern pop-art lens. The composition layers structured architectural arches with dynamic starbursts, floating Euro currency symbols, and expressive typographic accents.',
    process: ['Inspiration', 'Arch Drafting', 'Pop Composition', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Vector Pattern'],
    meta: {
      'Spec Code': 'TEX-2024-06',
      'Repeat Type': 'Straight Grid Repeat',
      'Substrate': 'Casual Apparel, Youthwear, Tote Bags',
      'Technique': 'Pop Graphic Illustrative Print'
    }
  },
  {
    id: 'textile-7',
    category: 'textile',
    title: 'Dynamic Denomination: The $100 Micro-Script Pattern',
    image: 'assets/images/7design.jpeg',
    description: 'Drawing inspiration from the 3D security ribbon and micro-printing techniques found on the United States 100 Dollar note, this surface pattern explores graphic repetition and layered typography. Set against an off-white background filled with subtle micro-script, the composition features bold indigo-blue numerical motifs arranged at sharp diagonal angles.',
    process: ['Inspiration', 'Micro-Script Drafting', 'Diagonal Flow', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Digital Printing'],
    meta: {
      'Spec Code': 'TEX-2024-07',
      'Repeat Type': 'Diagonal Conversational Print',
      'Substrate': 'Streetwear Apparel, Accessories, Linings',
      'Technique': 'Typographic Conversational Print'
    }
  },
  {
    id: 'textile-8',
    category: 'textile',
    title: 'Sino-Italian Heritage: The Republic Currency Lattice Print',
    image: 'assets/images/8design.jpeg',
    description: 'Inspired by vintage Republic-era Chinese banknotes from the Sino-Italian Bank, this surface design merges authentic historical calligraphic typography with decorative currency security motifs. Vertical columns of script alternate with rich purple scalloped rosette emblems and soft lavender circular seals on a warm pastel ground.',
    process: ['Inspiration', 'Calligraphy Vectorization', 'Vertical Lattice', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Hand Sketching', 'Block Printing'],
    meta: {
      'Spec Code': 'TEX-2024-08',
      'Repeat Type': 'Vertical Stripe Grid Repeat',
      'Substrate': 'Silk Scarves, Resort Wear, Decorative Pillows',
      'Technique': 'Cultural Typographic Lattice Print'
    }
  },
  {
    id: 'textile-9',
    category: 'textile',
    title: 'Numismatic Medallion: Afghani 500 Floral Motif Print',
    image: 'assets/images/9design.jpeg',
    description: 'Synthesizing central numismatic seal geometry from historic Central Asian currency with traditional floral teardrops. Features intricate scalloped multi-lobed borders in deep lapis lazuli and saffron ochre tones with delicate outline watermarks.',
    process: ['Inspiration', 'Seal Drafting', 'Floral Symmetry', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Block Printing', 'Hand Sketching'],
    meta: {
      'Spec Code': 'TEX-2024-09',
      'Repeat Type': 'Half-Drop Medallion Repeat',
      'Substrate': 'Lawn Kurtis, Cotton Sarees, Scarves',
      'Technique': 'Numismatic Medallion Print'
    }
  },
  {
    id: 'textile-10',
    category: 'textile',
    title: 'Currency Rosetta: The 5000 PKR Architectural Trellis',
    image: 'assets/images/10design-1.jpeg',
    description: 'Inspired by the intricate security rosettes and monumental architectural geometry of the 5000 Pakistani Rupee note, this luxury surface design features an interlocking ogee trellis of fine gold and deep forest-green filigree. Designed with high symmetry for luxury silk scarves and engineered pret garments.',
    process: ['Inspiration', 'Rosetta Drafting', 'Ogee Trellis', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Surface Design'],
    meta: {
      'Spec Code': 'TEX-2024-10',
      'Repeat Type': 'Ogee Trellis Repeat',
      'Substrate': 'Silk Dupioni, Cotton Lawn, Jacquard Panels',
      'Technique': 'Filigree Architectural Print'
    }
  },
  {
    id: 'textile-11',
    category: 'textile',
    title: 'Classical Filigree: The $1 Engraved Scrollwork Stripe',
    image: 'assets/images/11design.jpeg',
    description: 'A study in high-precision linear scrollwork derived from the borders and acanthus leaf filigree of the US $1 banknote. Features continuous vertical stripes of delicate acanthus leaves and guilloche lace textures in contrasting emerald and ivory inks.',
    process: ['Inspiration', 'Scrollwork Drafting', 'Stripe Symmetry', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Hand Sketching'],
    meta: {
      'Spec Code': 'TEX-2024-11',
      'Repeat Type': 'Vertical Stripe Repeat',
      'Substrate': 'Cotton Shirting, Silk Kaftans, Interior Borders',
      'Technique': 'Linear Intaglio Stripe Print'
    }
  },
  {
    id: 'textile-12',
    category: 'textile',
    title: 'Crypto Whimsy: The Hamster Coin Tap Pattern',
    image: 'assets/images/12design.jpeg',
    description: 'A playful contemporary interpretation translating modern digital currency culture and meme-coin phenomena into a vibrant conversational toss print. Features stylized golden coin tokens and energetic geometric accents over a clean neutral field.',
    process: ['Inspiration', 'Character Drafting', 'Tossed Layout', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Vector Pattern'],
    meta: {
      'Spec Code': 'TEX-2024-12',
      'Repeat Type': 'Random Toss Repeat',
      'Substrate': 'Youthwear, Casual Shirting, Accessories',
      'Technique': 'Conversational Novelty Print'
    }
  },
  {
    id: 'textile-13',
    category: 'textile',
    title: 'Heritage Emblem: Indian Cultural Rosette & Lion Capital',
    image: 'assets/images/13design.jpeg',
    description: 'Drawing inspiration from South Asian currency watermarks and the Lion Capital emblem, this surface design explores monumental rosette geometry and radial balance. Rich ochre, burnt sienna, and warm ivory tones combine in a rhythmic all-over medallion layout.',
    process: ['Inspiration', 'Emblem Vectorization', 'Radial Balance', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Block Printing', 'Hand Sketching'],
    meta: {
      'Spec Code': 'TEX-2024-13',
      'Repeat Type': 'Half-Drop Repeat',
      'Substrate': 'Lawn Kurtis, Cotton Sarees, Home Furnishings',
      'Technique': 'Cultural Emblem Medallion Print'
    }
  },
  {
    id: 'textile-14',
    category: 'textile',
    title: 'Maritime Heritage: The Italian Lira Caravel Print',
    image: 'assets/images/14design.jpeg',
    description: 'Inspired by the historic Italian 500 Lira banknote depicting Columbus caravels and nautical navigation line work. Features floating vintage vessel engravings amidst rolling oceanic guilloche contour waves in deep navy, seafoam, and sand.',
    process: ['Inspiration', 'Engraving Extraction', 'Wave Flow', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Screen Printing'],
    meta: {
      'Spec Code': 'TEX-2024-14',
      'Repeat Type': 'Directional Wave Repeat',
      'Substrate': 'Resort Swimwear, Silk Scarves, Menswear',
      'Technique': 'Maritime Engraving Print'
    }
  },
  {
    id: 'textile-15',
    category: 'textile',
    title: 'Gulf Heritage: Kuwaiti Dinar Emblem & Calligraphy Print',
    image: 'assets/images/15design.jpeg',
    description: 'A luxurious geometric composition inspired by the Kuwaiti Dinar, synthesizing traditional dhow sailing emblems, falcon motifs, and intricate Arabic calligraphy into a rhythmic vertical stripe pattern executed in regal turquoise and desert gold.',
    process: ['Inspiration', 'Calligraphy Vectorization', 'Stripe Balance', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Hand Sketching'],
    meta: {
      'Spec Code': 'TEX-2024-15',
      'Repeat Type': 'Vertical Stripe Repeat',
      'Substrate': 'Silk Crepe, Chiffon Kaftans, Luxury Abayas',
      'Technique': 'Gulf Heritage Surface Print'
    }
  },
  {
    id: 'textile-16',
    category: 'textile',
    title: 'Imperial Guilloche: Historic 100 Francs Border Print',
    image: 'assets/images/16design.jpg',
    description: 'Recreating the high-density micro-guilloche borders of classical French banknotes. Features interlocking geometric ribbon waves and ornamental corner-pieces in rich burgundy and ivory.',
    process: ['Inspiration', 'Guilloche Geometry', 'Border Symmetry', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Digital Printing'],
    meta: {
      'Spec Code': 'TEX-2024-16',
      'Repeat Type': 'Border & Lattice Repeat',
      'Substrate': 'Silk Twill, Cotton Cambric, Lining Fabrics',
      'Technique': 'Micro-Guilloche Border Print'
    }
  },
  {
    id: 'textile-17',
    category: 'textile',
    title: 'Khyber Heritage: The 10 PKR Vertical Geometric Stripe',
    image: 'assets/images/17design.jpeg',
    description: 'Inspired by the architectural gateway of Khyber Pass and northern geometric border art from the 10 Rupee Pakistani note. Bold angular chevron stripes alternate with fine micro-script security lines in earthy terracotta, charcoal, and warm parchment.',
    process: ['Inspiration', 'Chevron Geometry', 'Stripe Repeat', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Block Printing'],
    meta: {
      'Spec Code': 'TEX-2024-17',
      'Repeat Type': 'Vertical Stripe Repeat',
      'Substrate': 'Linen Separates, Cotton Cambric, Throws',
      'Technique': 'Geometric Border Stripe Print'
    }
  },
  {
    id: 'textile-18',
    category: 'textile',
    title: 'Mughal Lattice: The 1000 PKR Architectural Tile Motif',
    image: 'assets/images/18design.jpeg',
    description: 'Translating the intricate marble jali screens and floral tilework from Lahore Fort depicted on the 1000 Rupee banknote into a continuous surface lattice. Featuring subtle tonal shifts of sapphire blue, teal, and soft mint.',
    process: ['Inspiration', 'Jali Drafting', 'Lattice Repeat', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Screen Printing'],
    meta: {
      'Spec Code': 'TEX-2024-18',
      'Repeat Type': 'Straight Tile Repeat',
      'Substrate': 'Silk Lawn, Chiffon Dupattas, Upholstery',
      'Technique': 'Architectural Tile Lattice Print'
    }
  },
  {
    id: 'textile-19',
    category: 'textile',
    title: 'Aztec & Emblem: The Mexican Peso Cultural Print',
    image: 'assets/images/19design.jpeg',
    description: 'Inspired by the Mesoamerican sun stone geometry and eagle emblem on Mexican banknotes. A dynamic multi-layered composition of angular fretwork and radiant sun rosettes in warm copper, avocado green, and stone gray.',
    process: ['Inspiration', 'Sun Stone Drafting', 'Angular Balance', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Hand Sketching', 'Digital Printing'],
    meta: {
      'Spec Code': 'TEX-2024-19',
      'Repeat Type': 'Half-Drop Repeat',
      'Substrate': 'Cotton Canvas, Streetwear Outerwear, Bags',
      'Technique': 'Mesoamerican Emblem Print'
    }
  },
  {
    id: 'textile-20',
    category: 'textile',
    title: 'Swiss Modernist: 20 Francs Geometric Line Structure',
    image: 'assets/images/20design.jpeg',
    description: 'Capturing the precision typography and modernist grid structures of Swiss banknote design. Crisp vertical line bars and modular geometric blocks in cobalt blue, vermilion red, and stark white.',
    process: ['Inspiration', 'Grid Construction', 'Modular Flow', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Vector Pattern'],
    meta: {
      'Spec Code': 'TEX-2024-20',
      'Repeat Type': 'Modular Grid Repeat',
      'Substrate': 'Technical Apparel, Poplin Shirting, Curtains',
      'Technique': 'Modernist Grid Surface Print'
    }
  },
  {
    id: 'textile-21',
    category: 'textile',
    title: 'Faisal Majesty: The 5000 PKR Golden Trellis & Medallion',
    image: 'assets/images/21design.jpeg',
    description: 'An engineered luxury print inspired by the modern architectural lines of the Faisal Mosque and currency watermark filigree. Featuring a grand central medallion framed by geometric triangular vaulting in metallic gold, pearl white, and navy blue.',
    process: ['Inspiration', 'Medallion Drafting', 'Engineered Layout', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Surface Design'],
    meta: {
      'Spec Code': 'TEX-2024-21',
      'Repeat Type': 'Engineered Panel Repeat',
      'Substrate': 'Silk Twill Scarves, Luxury Prêt Tunics',
      'Technique': 'Engineered Medallion Placement Print'
    }
  },
  {
    id: 'textile-22',
    category: 'textile',
    title: 'Salamanca Seal: The Spanish Heritage Medallion Print',
    image: 'assets/images/22design.jpeg',
    description: 'Inspired by historic Spanish Peseta banknotes, featuring plateresque architectural rosettes and baroque crest engravings. Soft dusty rose, antique gold, and graphite linework form a timeless ogee lattice.',
    process: ['Inspiration', 'Plateresque Drafting', 'Ogee Flow', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Digital Printing'],
    meta: {
      'Spec Code': 'TEX-2024-22',
      'Repeat Type': 'Ogee Medallion Repeat',
      'Substrate': 'Velvet Cushions, Silk Blouses, Drapes',
      'Technique': 'Baroque Medallion Print'
    }
  },
  {
    id: 'textile-23',
    category: 'textile',
    title: 'Indochine Filigree: Vietnamese Lattice & Lotus Medallion',
    image: 'assets/images/23design.jpeg',
    description: 'A serene surface pattern inspired by the water lily motifs and delicate guilloche backgrounds of Vietnamese Dong currency. Features stylized lotus blooms linked by fluid curvilinear ribbons in celadon green, blush pink, and bronze.',
    process: ['Inspiration', 'Lotus Vectorization', 'Ribbon Flow', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Hand Sketching', 'Digital Printing'],
    meta: {
      'Spec Code': 'TEX-2024-23',
      'Repeat Type': 'Vertical Stripe Repeat',
      'Substrate': 'Silk Chiffon, Lightweight Lawn, Resort Kaftans',
      'Technique': 'Botanical Filigree Print'
    }
  },
  {
    id: 'textile-24',
    category: 'textile',
    title: 'Anatolian Helix: Turkish Z Dinar DNA Lattice Stripe',
    image: 'assets/images/24design.jpeg',
    description: 'Inspired by Turkish currency security strips and Seljuk geometric star tiles. Features interlocking double-helix ribbons and star polygons forming a continuous vertical visual rhythm in turquoise, coral, and midnight navy.',
    process: ['Inspiration', 'Seljuk Geometry', 'Helix Grid', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Vector Pattern'],
    meta: {
      'Spec Code': 'TEX-2024-24',
      'Repeat Type': 'Vertical Stripe Repeat',
      'Substrate': 'Cotton Poplin, Silk Twill, Wallpapers',
      'Technique': 'Geometric Helix Stripe Print'
    }
  },
  {
    id: 'textile-25',
    category: 'textile',
    title: 'Persian Splendor: 100,000 Rial Architectural Medallion',
    image: 'assets/images/25design.jpeg',
    description: 'Drawing inspiration from the monumental dome mosaics of Sheikh Lotfollah Mosque depicted on Iranian currency. A grand radial arabesque medallion radiating into delicate palmette vine tendrils in cobalt blue, saffron gold, and ivory.',
    process: ['Inspiration', 'Mosaic Vectorization', 'Radial Arabesque', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Digital Printing'],
    meta: {
      'Spec Code': 'TEX-2024-25',
      'Repeat Type': 'Straight Grid Radial Repeat',
      'Substrate': 'Luxury Silk Scarves, Interior Drapery, Shawls',
      'Technique': 'Grand Radial Medallion Print'
    }
  },
  {
    id: 'textile-26',
    category: 'textile',
    title: 'Khorasan Chevron: 50 Afghani Geometric Tribal Lattice',
    image: 'assets/images/26design.jpeg',
    description: 'A rugged yet refined geometric pattern inspired by nomadic carpet borders and banknote security guilloche from Afghanistan. Stepped diamond lozenges and directional arrows in warm henna, indigo, and unbleached cotton tones.',
    process: ['Inspiration', 'Tribal Geometry', 'Diamond Lattice', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Block Printing', 'Hand Sketching'],
    meta: {
      'Spec Code': 'TEX-2024-26',
      'Repeat Type': 'All-over Diamond Repeat',
      'Substrate': 'Cotton Linen Blends, Throws, Casual Shirts',
      'Technique': 'Tribal Geometric Surface Print'
    }
  },
  {
    id: 'textile-27',
    category: 'textile',
    title: 'Crypto Grid: Decentralized Digital Currency Motif',
    image: 'assets/images/27design.jpeg',
    description: 'A forward-looking modern pattern exploring blockchain node graphs, circuit traces, and digital coin symbols. Executed in high-contrast electric cyan, neon amber, and deep slate black.',
    process: ['Inspiration', 'Node Graph Drafting', 'Circuit Flow', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Vector Pattern'],
    meta: {
      'Spec Code': 'TEX-2024-27',
      'Repeat Type': 'Offset Grid Repeat',
      'Substrate': 'Technical Apparel, Streetwear, Bags',
      'Technique': 'Digital Tech Surface Print'
    }
  },
  {
    id: 'textile-28',
    category: 'textile',
    title: 'Crown Filigree: Vintage 1000 Riyal Arabesque Print',
    image: 'assets/images/28design.jpeg',
    description: 'A stately heritage print inspired by Arabian currency filigree and palatial gate engravings. Intricate arabesque scrollwork and scalloped medallion arches rendered in rich imperial gold and deep emerald green on an antique cream ground.',
    process: ['Inspiration', 'Arabesque Drafting', 'Scallop Balance', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Digital Printing'],
    meta: {
      'Spec Code': 'TEX-2024-28',
      'Repeat Type': 'Half-Drop Medallion Repeat',
      'Substrate': 'Luxury Velvet, Silk Brocade, Formal Wear',
      'Technique': 'Arabesque Filigree Placement Print'
    }
  },
  {
    id: 'textile-29',
    category: 'textile',
    title: 'Bengal Kalka: The 1 Taka Paisley Calligraphy Print',
    image: 'assets/images/29design.jpeg',
    description: 'Inspired by Bengali textile heritage and historic currency typography from Bangladesh. Merges traditional Kalka (paisley) teardrops with stylized Bengali script in an elegant toss repeat of dusty rose, terracotta, and soft sage.',
    process: ['Inspiration', 'Kalka Drafting', 'Calligraphic Toss', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Screen Printing', 'Hand Sketching'],
    meta: {
      'Spec Code': 'TEX-2024-29',
      'Repeat Type': 'Diagonal Toss Repeat',
      'Substrate': 'Ethnic Wear, Silk Scarves, Home Linens',
      'Technique': 'Cultural Calligraphic Paisley Print'
    }
  },
  {
    id: 'textile-30',
    category: 'textile',
    title: 'Dynastic Lattice: 1 Renminbi Calligraphic Geometric Print',
    image: 'assets/images/30design.jpeg',
    description: 'Drawing inspiration from traditional Chinese guilloche currency borders and banknote typography from the 1 Renminbi note. Features calligraphic characters and starburst rays in pale mint green over a dark espresso ground.',
    process: ['Inspiration', 'Character Vectorization', 'Lattice Repeat', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Screen Printing'],
    meta: {
      'Spec Code': 'TEX-2024-30',
      'Repeat Type': 'Grid Repeat',
      'Substrate': 'Silk Scarves, Pocket Squares, Interior Upholstery',
      'Technique': 'Cultural Typographic Lattice Print'
    }
  },
  {
    id: 'textile-31',
    category: 'textile',
    title: 'Classical Intaglio: Sovereign Currency Guilloche Scarf Print',
    image: 'assets/images/1design.jpeg',
    description: 'An engineered silk scarf composition integrating classical sovereign banknote corner-pieces, guilloche border filigree, and intaglio line weight variations into a balanced symmetrical layout executed in royal blue, gold leaf, and soft ivory.',
    process: ['Inspiration', 'Border Drafting', 'Engineered Symmetry', 'Colourway', 'Final Print'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Digital Printing', 'Surface Design'],
    meta: {
      'Spec Code': 'TEX-2024-31',
      'Repeat Type': 'Engineered Square Scarf (90x90cm)',
      'Substrate': '100% Pure Silk Twill / Hand-Rolled Hem',
      'Technique': 'Engineered Placement Scarf Print'
    }
  },
  // ==========================================
  // 3. WEAVING PROJECTS (18 Dedicated Samples)
  // ==========================================
  {
    id: 'weave-1',
    category: 'weaving',
    title: 'Weaving 01',
    image: 'assets/images/1Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-01',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-2',
    category: 'weaving',
    title: 'Weaving 02',
    image: 'assets/images/2Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-02',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-3',
    category: 'weaving',
    title: 'Weaving 03',
    image: 'assets/images/3Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-03',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-4',
    category: 'weaving',
    title: 'Weaving 04',
    image: 'assets/images/4Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-04',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-5',
    category: 'weaving',
    title: 'Weaving 05',
    image: 'assets/images/5Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-05',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-6',
    category: 'weaving',
    title: 'Weaving 06',
    image: 'assets/images/6Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-06',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-7',
    category: 'weaving',
    title: 'Weaving 07',
    image: 'assets/images/7Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-07',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-8',
    category: 'weaving',
    title: 'Weaving 08',
    image: 'assets/images/8Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-08',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-9',
    category: 'weaving',
    title: 'Weaving 09',
    image: 'assets/images/9Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-09',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-10',
    category: 'weaving',
    title: 'Weaving 10',
    image: 'assets/images/10Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-10',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-11',
    category: 'weaving',
    title: 'Weaving 11',
    image: 'assets/images/11Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-11',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-12',
    category: 'weaving',
    title: 'Weaving 12',
    image: 'assets/images/12Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-12',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-13',
    category: 'weaving',
    title: 'Weaving 13',
    image: 'assets/images/13Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-13',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-14',
    category: 'weaving',
    title: 'Weaving 14',
    image: 'assets/images/14Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-14',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-15',
    category: 'weaving',
    title: 'Weaving 15',
    image: 'assets/images/15Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-15',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-16',
    category: 'weaving',
    title: 'Weaving 16',
    image: 'assets/images/16Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-16',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-17',
    category: 'weaving',
    title: 'Weaving 17',
    image: 'assets/images/17Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-17',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },
  {
    id: 'weave-18',
    category: 'weaving',
    title: 'Weaving 18',
    image: 'assets/images/18Weaving.jpg',
    description: 'A handmade weaving sample exploring texture, structure, and surface development.',
    process: ['Concept', 'Yarn Selection', 'Loom Setup', 'Hand Weaving', 'Finished Sample'],
    tags: ['Handmade Weaving', 'Khadi Weaving Machine', 'Texture & Structure', 'Handcraft'],
    meta: {
      'Sample Code': 'WEAVE-18',
      'Category': 'Handmade Weaving',
      'Medium': 'Khadi Weaving Machine',
      'Exploration': 'Texture, Structure & Surface'
    }
  },

  // ==========================================
  // 4. EMBROIDERY PROJECTS (3 Handmade Samples)
  // ==========================================
  {
    id: 'emb-1',
    category: 'embroidery',
    title: 'Embroidery 01',
    image: 'assets/images/1Embroidery.jpg',
    description: 'Handmade embroidery exploring textile surface, stitch detail, texture, and decorative craftsmanship.',
    process: ['Concept', 'Design Transfer', 'Thread Selection', 'Hand Stitching', 'Finished Embroidery'],
    tags: ['Handmade Embroidery', 'Textile Craft', 'Stitch Work', 'Surface Detail'],
    meta: {
      'Sample Code': 'EMB-01',
      'Category': 'Handmade Embroidery',
      'Focus': 'Stitch Detail & Texture',
      'Medium': 'Textile Craft & Needlework'
    }
  },
  {
    id: 'emb-2',
    category: 'embroidery',
    title: 'Embroidery 02',
    image: 'assets/images/2Embroidery.jpg',
    description: 'Handmade embroidery exploring textile surface, stitch detail, texture, and decorative craftsmanship.',
    process: ['Concept', 'Design Transfer', 'Thread Selection', 'Hand Stitching', 'Finished Embroidery'],
    tags: ['Handmade Embroidery', 'Textile Craft', 'Stitch Work', 'Surface Detail'],
    meta: {
      'Sample Code': 'EMB-02',
      'Category': 'Handmade Embroidery',
      'Focus': 'Stitch Detail & Texture',
      'Medium': 'Textile Craft & Needlework'
    }
  },
  {
    id: 'emb-3',
    category: 'embroidery',
    title: 'Beadswork Jacket',
    image: 'assets/images/1Beadswork.jpg',
    gallery: [
      'assets/images/1Beadswork.jpg',
      'assets/images/2Beadswork.jpg'
    ],
    description: 'Handmade beadwork and embroidery developed on denim to create a detailed and premium textile surface.',
    process: ['Concept', 'Design Planning', 'Bead Selection', 'Hand Stitching', 'Jacket Application', 'Final Garment'],
    tags: ['Handmade Beadwork', 'Hand Embroidery', 'Denim Embellishment', 'Surface Detail'],
    meta: {
      'Project': 'Beadswork Jacket',
      'Category': 'Handmade Embroidery & Beadwork',
      'Base Material': 'Denim Fabric',
      'Medium': 'Handmade Beadwork & Stitching',
      'Surface': 'Decorative Surface Embellishment'
    }
  }
];
