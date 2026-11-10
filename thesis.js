/**
 * Dedicated Final Year Thesis Case Study Engine
 * Thesis: Currency & Banknote Inspired Textile Collection (January 2025)
 * Designer: Nameera Resham
 * Institution: Pakistan Navy Institute of Art & Textile Designing (PNAD)
 */

const thesisData = {
  header: {
    title: 'Currency & Banknote Inspired Textile Collection',
    badge: 'Final Year Textile Design Thesis — January 2025',
    institution: 'Pakistan Navy Institute of Art & Textile Designing (PNAD)',
    intro: 'A comprehensive final-year design exploration investigating world currencies and banknotes as visual catalysts for contemporary textile design. Translating intricate security guilloche rosettes, intaglio micro-engravings, sacred geometric watermarks, and historic typography into bespoke surface pattern designs, woven structures, printed fabrics, interior applications, and spatial outlet presentations.'
  },
  moodboard: {
    id: 'section-moodboard',
    navTitle: 'Moodboard',
    title: 'MOODBOARD',
    subtitle: 'Visual Direction & Exhibition Atmosphere',
    desc: 'The conceptual foundation integrating historic security intaglio plates, micro-guilloche geometric math, monetary typography, and luxury textile substrates into a cohesive exhibition narrative.',
    src: 'assets/images/MOODBOARD.png',
    tag: 'Thesis Moodboard',
    caption: 'Master Thesis Moodboard: Visual Direction, Currency Security Anatomy, and Exhibition Space Atmosphere'
  },
  sections: [
    {
      id: 'section-01',
      num: '01',
      navTitle: 'Concept',
      title: 'Concept & Inspiration',
      subtitle: 'Banknotes as Masterpieces of Graphic Art & Security Engraving',
      desc: 'The concept originates from the rigorous visual beauty and technical mastery of international banknotes. Beyond monetary representation, banknotes are pinnacle achievements of micro-security engraving, guilloche curve mathematics, architectural portraiture, calligraphic watermarks, and cultural heraldry. This project extracts these micro-details and transforms them into modern repeating surface patterns, textured fabrics, and interior textiles.',
      images: [
        { src: 'assets/images/1design.jpeg', caption: 'Concept Source: US $2 Bill Classical Line Engraving & Architectural Symmetry', tag: 'Engraving Reference' },
        { src: 'assets/images/25design.jpeg', caption: 'Concept Translation: 100,000 Rial Architectural Medallion Transformed into Surface Pattern', tag: 'Pattern Translation' }
      ]
    },
    {
      id: 'section-02',
      num: '02',
      navTitle: 'Research',
      title: 'Research & Visual Exploration',
      subtitle: 'Deconstructing Global Banknote Security Anatomy',
      desc: 'Rigorous visual research across diverse monetary traditions—deconstructing foundational elements: guilloche rosette geometries, fine-line intaglio plates, micro-script typography, architectural arches, and heraldic cultural watermarks.',
      elements: [
        { icon: 'fa-vector-square', name: 'Guilloche Curves', note: 'Mathematical wave interference linework creating dense security rosettes.' },
        { icon: 'fa-font', name: 'Micro-Script & Watermarks', note: 'Fine calligraphic typography and layered watermark depth.' },
        { icon: 'fa-archway', name: 'Architectural Arches', note: 'Romanesque, Gothic, and Mughal arches extracted from historical facades.' },
        { icon: 'fa-shield-halved', name: 'Heraldic Seals', note: 'Cultural state emblems, floral medallions, and heraldic crests.' }
      ],
      images: [
        { src: 'assets/images/4design.jpeg', caption: 'Research Study: Concentric Guilloche Wave Interference & Radial Geometry', tag: 'Guilloche Analysis' },
        { src: 'assets/images/8design.jpeg', caption: 'Historical Calligraphy: Republic-Era Chinese Banknote Typography & Border Seals', tag: 'Typographic Research' },
        { src: 'assets/images/14design.jpeg', caption: 'Maritime Engraving: Italian Lira Naval Vessel & Wave Line Work', tag: 'Line Art Analysis' }
      ]
    },
    {
      id: 'section-03',
      num: '03',
      navTitle: 'Motif',
      title: 'Motif Development',
      subtitle: 'Systematic Step-by-Step Motif Extraction & Digital Refinement',
      desc: 'Visual progression translating isolated banknote emblems into balanced, scalable vector motif units with crisp positive/negative space.',
      progressionSteps: [
        { step: 'Step 1', name: 'Security Reference', icon: 'fa-magnifying-glass', desc: 'Isolating high-resolution banknote intaglio engraving element.' },
        { step: 'Step 2', name: 'Hand Sketch', icon: 'fa-pencil', desc: 'Manual drafting to establish proportion and dynamic curves.' },
        { step: 'Step 3', name: 'Developed Motif', icon: 'fa-bezier-curve', desc: 'Vector line weight balance and curve smoothing in Adobe Illustrator.' },
        { step: 'Step 4', name: 'Final Motif Unit', icon: 'fa-circle-check', desc: 'Master production-ready motif with defined color separations.' }
      ],
      images: [
        { src: 'assets/images/9design.jpeg', caption: 'Motif Development: Afghani 500 Medallion & Teardrop Floral Motif', tag: 'Master Motif 01' },
        { src: 'assets/images/13design.jpeg', caption: 'Motif Development: Cultural Lion Capital & Concentric Rosette Unit', tag: 'Master Motif 02' },
        { src: 'assets/images/22design.jpeg', caption: 'Motif Development: Spanish Salamanca Seal & Radial Filigree Medallion', tag: 'Master Motif 03' }
      ]
    },
    {
      id: 'section-04',
      num: '04',
      navTitle: 'Design',
      title: 'Design Development',
      subtitle: 'Exploration of Seamless Repeat Systems & Spatial Layouts',
      desc: 'Developing comprehensive repeating surface compositions exploring straight grid, half-drop, ogee lattice, and conversational tossed arrangements.',
      images: [
        { src: 'assets/images/3design.jpeg', caption: 'Half-Drop Calligraphic Layout: Sovereign Dinar Abstract Script', tag: 'Half-Drop Repeat' },
        { src: 'assets/images/5design.jpeg', caption: 'Straight Grid Layout: Gothic 20 Euro Checkerboard & Vaulting Lattice', tag: 'Straight Grid' },
        { src: 'assets/images/6design.jpeg', caption: 'Conversational Toss Layout: Renaissance Arch Pop Art Motif', tag: 'Tossed Layout' },
        { src: 'assets/images/10design-1.jpeg', caption: 'Ogee Lattice Layout: 5000 PKR Architectural Trellis & Rosetta', tag: 'Ogee Lattice' },
        { src: 'assets/images/21design.jpeg', caption: 'Engineered Scarf Layout: Golden Trellis & Central Medallion Framing', tag: 'Engineered Placement' },
        { src: 'assets/images/23design.jpeg', caption: 'Vertical Stripe Lattice: Vietnamese Indochine Lotus & Filigree', tag: 'Vertical Stripe' }
      ]
    },
    {
      id: 'section-05',
      num: '05',
      navTitle: 'Print',
      title: 'Print Development',
      subtitle: 'Technical Screen & Digital Separation Workflow',
      desc: 'Full print development cycle mapping motif geometry to production-ready rotary/flatbed screens and high-definition direct-to-fabric digital printing.',
      printSteps: [
        { step: '01', name: 'Motif Extraction', icon: 'fa-vector-square' },
        { step: '02', name: 'Composition Grid', icon: 'fa-border-all' },
        { step: '03', name: 'Seamless Repeat (64cm)', icon: 'fa-arrows-rotate' },
        { step: '04', name: 'Colourway Separation', icon: 'fa-palette' },
        { step: '05', name: 'Final Production Print', icon: 'fa-shirt' }
      ],
      images: [
        { src: 'assets/images/2design.jpeg', caption: 'Print Development: 5 Euro Cartographic Wavy Print on Lightweight Lawn', tag: 'Digital Print Prep' },
        { src: 'assets/images/7design.jpeg', caption: 'Print Development: $100 Micro-Script Dynamic Typographic Repeat', tag: 'Screen Separation' },
        { src: 'assets/images/15design.jpeg', caption: 'Print Development: Kuwaiti Dinar Cultural Emblem on Silk Twill', tag: 'Direct Digital Print' },
        { src: 'assets/images/24design.jpeg', caption: 'Print Development: Turkish Z Dinar DNA Helix Stripe Print', tag: 'Continuous Rotary Print' }
      ]
    },
    {
      id: 'section-06',
      num: '06',
      navTitle: 'Colour',
      title: 'Colour Development',
      subtitle: 'Systematic Progression from Source Inks to Master Colourway',
      desc: 'Translating the intricate ink formulations of global banknote security printing into a unified textile palette. The design methodology moves methodically from the broad exploratory palette of intaglio engraving dyes, through fabric absorption and separation trials, to the final six-colour curated production colourway.',
      originalPalette: [
        { label: 'Palette 01', hex: '#14532D' },
        { label: 'Palette 02', hex: '#2E7D32' },
        { label: 'Palette 03', hex: '#4D6A4E' },
        { label: 'Palette 04', hex: '#8FA89B' },
        { label: 'Palette 05', hex: '#A3B18A' },
        { label: 'Palette 06', hex: '#C1D7C6' },
        { label: 'Palette 07', hex: '#DDE7DC' },
        { label: 'Palette 08', hex: '#1E1B4B' },
        { label: 'Palette 09', hex: '#1E3A8A' },
        { label: 'Palette 10', hex: '#2563EB' },
        { label: 'Palette 11', hex: '#0284C7' },
        { label: 'Palette 12', hex: '#93C5FD' },
        { label: 'Palette 13', hex: '#78350F' },
        { label: 'Palette 14', hex: '#B45309' },
        { label: 'Palette 15', hex: '#D97706' },
        { label: 'Palette 16', hex: '#F59E0B' },
        { label: 'Palette 17', hex: '#FACC15' },
        { label: 'Palette 18', hex: '#343D14' },
        { label: 'Palette 19', hex: '#881337' },
        { label: 'Palette 20', hex: '#C2410C' },
        { label: 'Palette 21', hex: '#BE185D' },
        { label: 'Palette 22', hex: '#A16207' },
        { label: 'Palette 23', hex: '#EDE8DF' },
        { label: 'Palette 24', hex: '#F8FAFC' }
      ],
      explorationNotes: [
        { icon: 'fa-flask-vial', title: 'Substrate Absorption & Strike-Offs', desc: 'Calibrating pigment penetration and strike-through on lightweight 80s cotton lawn vs. lustrous silk twill.' },
        { icon: 'fa-sliders', title: 'Tonal Value & Contrast Balancing', desc: 'Balancing deep intaglio engraving linework against delicate watermark grounds for optimal high-contrast legibility.' },
        { icon: 'fa-layer-group', title: 'Multi-Screen Separation Trials', desc: 'Testing multi-screen print separations to maintain sharp guilloche curves without ink bleed or registration shifts.' }
      ],
      finalPalette: [
        { name: 'Banknote Sage', hex: '#8FA89B', label: 'Primary Base' },
        { name: 'Oxidized Mint', hex: '#C1D7C6', label: 'Background Wash' },
        { name: 'Imperial Cobalt', hex: '#1E3A8A', label: 'Security Accent' },
        { name: 'Intaglio Ochre', hex: '#D97706', label: 'Warm Highlight' },
        { name: 'Terracotta Rust', hex: '#C2410C', label: 'Engraving Tone' },
        { name: 'Parchment Cream', hex: '#F8FAFC', label: 'Natural Ground' }
      ],
      images: [
        { src: 'assets/images/29design.jpeg', caption: 'Colourway A: 1 Taka Bengal Kalka in Rich Terracotta & Sage Inks', tag: 'Colourway A' },
        { src: 'assets/images/30design.jpeg', caption: 'Colourway B: 1 Renminbi Dynastic Lattice in Deep Espresso & Mint', tag: 'Colourway B' }
      ]
    },
    {
      id: 'section-07',
      num: '07',
      navTitle: 'Textile Samples',
      title: 'Textile Samples',
      subtitle: 'Fabric Strike-Offs & Material Hand-Feel Evaluations',
      desc: 'Evaluating physical fabric drape, yarn absorption, and fine line definition across cotton lawn, pure silk twill, cotton satin, and linen substrates.',
      samplesList: [
        { fabric: 'Premium 80s Cotton Lawn', use: 'Crisp, lightweight apparel printing with ultra-fine line definition.' },
        { fabric: '100% Silk Twill (14 Momme)', use: 'Lustrous sheen and fluid drape for luxury statement scarves.' },
        { fabric: 'Structured Cotton Sateen', use: 'Substantial weight and subtle luster for interior cushions and drapery.' }
      ],
      images: [
        { src: 'assets/images/19design.jpeg', caption: 'Fabric Sample: Mexican Aztec Currency Print on 80s Mercerized Cotton Lawn', tag: 'Cotton Strike-off' },
        { src: 'assets/images/26design.jpeg', caption: 'Fabric Sample: Khorasan Chevron Tribal Pattern on Linen-Cotton Blend', tag: 'Linen Sample' }
      ]
    },
    {
      id: 'section-08',
      num: '08',
      navTitle: 'Display',
      title: 'Display & Outlet Presentation',
      subtitle: 'Spatial Visual Merchandising & Exhibition Presentation',
      desc: 'Curated visual documentation of the final thesis exhibition and spatial visual merchandising installation. Featuring the complete 17-piece display sequence celebrating currency-inspired surface patterns and coordinates across luxury textile substrates.',
      displayGallery: [
        { id: 'display-01', num: '01', label: 'DISPLAY 01', src: 'assets/images/Display1.jpeg', tag: 'Display 01', caption: 'Display 01: Exhibition Booth Reception Wall & Pattern Coordinates', spanClass: 'span-hero' },
        { id: 'display-02', num: '02', label: 'DISPLAY 02', src: 'assets/images/Display2.jpeg', tag: 'Display 02', caption: 'Display 02: Embellished Denim Jacket & Trouser Installation', spanClass: 'span-medium' },
        { id: 'display-03', num: '03', label: 'DISPLAY 03', src: 'assets/images/Display3.jpeg', tag: 'Display 03', caption: 'Display 03: Denim Ensemble Silhouette & Surface Embellishment', spanClass: 'span-medium' },
        { id: 'display-04', num: '04', label: 'DISPLAY 04', src: 'assets/images/Display4.jpeg', tag: 'Display 04', caption: 'Display 04: Hand-Beaded & Studded Denim Garment Detail', spanClass: 'span-medium' },
        { id: 'display-05', num: '05', label: 'DISPLAY 05', src: 'assets/images/Display5.jpeg', tag: 'Display 05', caption: 'Display 05: Exhibition Wall & Pattern Coordination Lighting Canopy', spanClass: 'span-medium' },
        { id: 'display-06', num: '06', label: 'DISPLAY 06', src: 'assets/images/Display6.jpeg', tag: 'Display 06', caption: 'Display 06: Spatial Exhibition Stand & Textile Swatch Grid', spanClass: 'span-medium' },
        { id: 'display-07', num: '07', label: 'DISPLAY 07', src: 'assets/images/Display7.jpeg', tag: 'Display 07', caption: 'Display 07: Outlet Presentation & Silk Lawn Drapery Display', spanClass: 'span-tall' },
        { id: 'display-08', num: '08', label: 'DISPLAY 08', src: 'assets/images/Display8.jpeg', tag: 'Display 08', caption: 'Display 08: Illuminated Thesis Booth & Ceiling Botanical Garland', spanClass: 'span-hero' },
        { id: 'display-09', num: '09', label: 'DISPLAY 09', src: 'assets/images/Display9.jpeg', tag: 'Display 09', caption: 'Display 09: Reception Station Counter with Nameera Resham Signature Logo', spanClass: 'span-tall' },
        { id: 'display-10', num: '10', label: 'DISPLAY 10', src: 'assets/images/Display10.jpeg', tag: 'Display 10', caption: 'Display 10: Wide Interior Perspective of Final Exhibition Space', spanClass: 'span-hero' },
        { id: 'display-11', num: '11', label: 'DISPLAY 11', src: 'assets/images/Display11.jpeg', tag: 'Display 11', caption: 'Display 11: Mannequin Styling & Banknote Repeat Fabric Backdrop', spanClass: 'span-tall' },
        { id: 'display-12', num: '12', label: 'DISPLAY 12', src: 'assets/images/Display12.jpeg', tag: 'Display 12', caption: 'Display 12: Architectural Panoramic Overview of Thesis Outlet Booth', spanClass: 'span-hero' },
        { id: 'display-13', num: '13', label: 'DISPLAY 13', src: 'assets/images/Display13.jpeg', tag: 'Display 13', caption: 'Display 13: Curated Design Boards & Textile Specification Charts', spanClass: 'span-standard' },
        { id: 'display-14', num: '14', label: 'DISPLAY 14', src: 'assets/images/Display14.jpeg', tag: 'Display 14', caption: 'Display 14: Booth Environment with Stained Glass Mural Accent', spanClass: 'span-standard' },
        { id: 'display-15', num: '15', label: 'DISPLAY 15', src: 'assets/images/Display15.jpeg', tag: 'Display 15', caption: 'Display 15: Spatial Outlet Corner & Textile Drapery Presentation', spanClass: 'span-standard' },
        { id: 'display-16', num: '16', label: 'DISPLAY 16', src: 'assets/images/Display16.jpeg', tag: 'Display 16', caption: 'Display 16: Surface Texture & Display Framing Close-up', spanClass: 'span-standard' },
        { id: 'display-17', num: '17', label: 'DISPLAY 17', src: 'assets/images/Display17.jpeg', tag: 'Display 17', caption: 'Display 17: Visual Merchandising Setup & Exhibition Exit Perspective', spanClass: 'span-wide' }
      ],
      images: []
    },
    {
      id: 'section-09',
      num: '09',
      navTitle: 'Watercolour',
      title: 'Watercolour Paintings',
      subtitle: 'Handmade Watercolour Explorations',
      desc: 'A curated collection of original watercolour paintings hand-painted by Nameera Resham as part of her personal visual and colour exploration.',
      watercolourGallery: [
        { id: 'wc-01', num: '01', title: 'Watercolour 01', src: 'assets/images/watercolor1.jpeg' },
        { id: 'wc-02', num: '02', title: 'Watercolour 02', src: 'assets/images/watercolor2.jpeg' },
        { id: 'wc-03', num: '03', title: 'Watercolour 03', src: 'assets/images/watercolor3.jpeg' },
        { id: 'wc-04', num: '04', title: 'Watercolour 04', src: 'assets/images/watercolor4.jpeg' },
        { id: 'wc-05', num: '05', title: 'Watercolour 05', src: 'assets/images/watercolor5.jpeg' },
        { id: 'wc-06', num: '06', title: 'Watercolour 06', src: 'assets/images/watercolor6.jpeg' },
        { id: 'wc-07', num: '07', title: 'Watercolour 07', src: 'assets/images/watercolor7.jpeg' },
        { id: 'wc-08', num: '08', title: 'Watercolour 08', src: 'assets/images/watercolor8.jpeg' },
        { id: 'wc-09', num: '09', title: 'Watercolour 09', src: 'assets/images/watercolor9.jpeg' },
        { id: 'wc-10', num: '10', title: 'Watercolour 10', src: 'assets/images/watercolor10.jpeg' },
        { id: 'wc-11', num: '11', title: 'Watercolour 11', src: 'assets/images/watercolor11.jpeg' }
      ],
      images: []
    }
  ]
};

function initThesisEngine() {
  const container = document.getElementById('thesis-case-study-container');
  if (!container) return;

  renderThesisShowcase(container);
}

function renderThesisShowcase(wrapper) {
  const { header, moodboard, sections } = thesisData;

  // Build unified navigation items: Moodboard first, then 01 to 08
  const navItems = [
    { id: moodboard.id, num: '', title: 'Moodboard', isMoodboard: true },
    ...sections.map(sec => ({ id: sec.id, num: sec.num, title: sec.navTitle, isMoodboard: false }))
  ];

  const navTabsHTML = navItems.map((item, idx) => `
    <a href="#${item.id}" class="thesis-nav-pill ${idx === 0 ? 'active' : ''}" data-target="${item.id}">
      ${item.num ? `<span class="pill-num">${item.num}</span>` : ''}
      <span class="pill-title">${item.title}</span>
    </a>
  `).join('');

  // 1. Moodboard section rendered FIRST
  const moodboardHTML = createThesisMoodboardHTML(moodboard);

  // 2. Numbered sections 01 to 08 rendered sequentially
  const sectionsHTML = sections.map(sec => createThesisSectionHTML(sec)).join('');

  wrapper.innerHTML = `
    <div class="thesis-case-study-container">
      <div class="thesis-study-header text-center">
        <div class="thesis-study-badge">
          <i class="fa-solid fa-graduation-cap"></i> ${header.badge}
        </div>
        <h3 class="thesis-study-title">${header.title}</h3>
        <p class="thesis-study-institution"><i class="fa-solid fa-landmark"></i> ${header.institution}</p>
        <p class="thesis-study-intro">${header.intro}</p>
      </div>

      <div class="thesis-sticky-nav-bar" id="thesis-sticky-nav">
        <div class="thesis-nav-pills-scroll">
          ${navTabsHTML}
        </div>
      </div>

      <div class="thesis-sections-list">
        ${moodboardHTML}
        ${sectionsHTML}
      </div>

      <div class="thesis-study-footer text-center" style="margin-top: 40px;">
        <button type="button" class="btn btn-secondary btn-close-thesis" id="btn-back-to-thesis-top">
          <i class="fa-solid fa-arrow-up btn-inline-icon"></i> Back to Top of Thesis
        </button>
      </div>
    </div>
  `;

  // Attach navigation click behavior with smooth scrolling and active state
  wrapper.querySelectorAll('.thesis-nav-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      wrapper.querySelectorAll('.thesis-nav-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const targetId = pill.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Attach bottom scroll back to top of thesis
  const topBtn = document.getElementById('btn-back-to-thesis-top');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      document.getElementById('thesis').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Attach interactive lightbox for Moodboard
  wrapper.querySelectorAll('.moodboard-display-card').forEach((card) => {
    card.addEventListener('click', () => {
      if (thesisData.moodboard) {
        openThesisLightboxGallery([thesisData.moodboard], 0);
      }
    });
  });

  // Attach interactive gallery lightbox for Section 08 Display Cards
  const sec08 = thesisData.sections.find(s => s.id === 'section-08');
  const rawDisplayItems = (sec08 && sec08.displayGallery) ? sec08.displayGallery : [];
  const displayItems = rawDisplayItems.filter(item => {
    const filename = (item.src || '').split('/').pop().toLowerCase();
    return filename.startsWith('display');
  });

  wrapper.querySelectorAll('.editorial-display-card').forEach((card) => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index, 10) || 0;
      openThesisLightboxGallery(displayItems, idx);
    });
  });

  // Attach interactive gallery lightbox for Section 09 Watercolour Cards
  const sec09 = thesisData.sections.find(s => s.id === 'section-09');
  const rawWcItems = (sec09 && sec09.watercolourGallery) ? sec09.watercolourGallery : [];
  const wcItems = rawWcItems.filter(item => {
    const filename = (item.src || '').split('/').pop().toLowerCase();
    return filename.startsWith('watercolor') || filename.startsWith('watercolour');
  });

  wrapper.querySelectorAll('.watercolour-card').forEach((card) => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index, 10) || 0;
      openThesisLightboxGallery(wcItems, idx);
    });
  });

  // Attach image zoom lightbox on all other standard thesis section images
  wrapper.querySelectorAll('.thesis-section-block').forEach((secBlock) => {
    const secId = secBlock.id;
    if (secId === 'section-moodboard' || secId === 'section-08' || secId === 'section-09') return;

    const currentSec = thesisData.sections.find(s => s.id === secId);
    const secImages = (currentSec && currentSec.images && currentSec.images.length > 0) ? currentSec.images : [];

    secBlock.querySelectorAll('.thesis-image-card').forEach((card, imgIdx) => {
      card.addEventListener('click', () => {
        if (secImages.length > 0) {
          openThesisLightboxGallery(secImages, imgIdx);
        } else {
          const imgSrc = card.dataset.src;
          const imgCaption = card.dataset.caption;
          const imgTag = card.dataset.tag;
          openThesisLightboxGallery([{ src: imgSrc, caption: imgCaption, tag: imgTag }], 0);
        }
      });
    });
  });
}

function getOptimizedImageSources(rawSrc) {
  if (!rawSrc) return { fallbackSrc: '', webpThumb: '', webpFull: '' };
  const thumb = rawSrc.replace(/\.(jpe?g|png)$/i, '-thumb.webp');
  const full = rawSrc.replace(/\.(jpe?g|png)$/i, '.webp');
  return {
    fallbackSrc: rawSrc,
    webpThumb: thumb,
    webpFull: full
  };
}

function renderOptimizedPictureHTML(src, alt, imgClass, isThumb = true) {
  const sources = getOptimizedImageSources(src);
  return `
    <picture class="thesis-img-picture">
      ${isThumb ? `<source srcset="${sources.webpThumb}" type="image/webp">` : ''}
      <source srcset="${sources.webpFull}" type="image/webp">
      <img src="${src}" alt="${alt || ''}" class="${imgClass}" loading="lazy" decoding="async" width="400" height="300" onload="this.classList.add('img-loaded');if(this.closest('.editorial-img-wrap, .thesis-img-wrap, .watercolour-img-wrap, .moodboard-img-wrap'))this.closest('.editorial-img-wrap, .thesis-img-wrap, .watercolour-img-wrap, .moodboard-img-wrap').classList.add('is-loaded');" onerror="handleImageError(this)">
    </picture>
  `;
}

function createThesisMoodboardHTML(mb) {
  return `
    <div class="thesis-section-block thesis-moodboard-block" id="${mb.id}">
      <div class="thesis-sec-header">
        <div class="sec-headings">
          <h3 class="sec-title">${mb.title}</h3>
          <h4 class="sec-subtitle">${mb.subtitle}</h4>
        </div>
      </div>
      <p class="sec-description">${mb.desc}</p>

      <div class="thesis-moodboard-showcase">
        <div class="moodboard-display-card" data-src="${mb.src}">
          <div class="moodboard-img-wrap">
            ${renderOptimizedPictureHTML(mb.src, mb.title, 'moodboard-img', false)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function createThesisSectionHTML(sec) {
  let customContentHTML = '';

  // 02. Research Elements
  if (sec.elements) {
    customContentHTML += `
      <div class="thesis-elements-grid">
        ${sec.elements.map(el => `
          <div class="thesis-element-card">
            <div class="element-icon"><i class="fa-solid ${el.icon}"></i></div>
            <div class="element-content">
              <h4 class="element-title">${el.name}</h4>
              <p class="element-note">${el.note}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 03. Motif Progression
  if (sec.progressionSteps) {
    customContentHTML += `
      <div class="thesis-progression-timeline">
        ${sec.progressionSteps.map((st, i) => `
          <div class="progression-step-card">
            <div class="step-badge">${st.step}</div>
            <div class="step-icon-wrap"><i class="fa-solid ${st.icon}"></i></div>
            <h4 class="step-name">${st.name}</h4>
            <p class="step-desc">${st.desc}</p>
          </div>
          ${i < sec.progressionSteps.length - 1 ? '<div class="progression-arrow"><i class="fa-solid fa-arrow-right"></i></div>' : ''}
        `).join('')}
      </div>
    `;
  }

  // 05. Print Development Steps
  if (sec.printSteps) {
    customContentHTML += `
      <div class="thesis-print-steps-bar">
        ${sec.printSteps.map((ps, idx) => `
          <div class="print-step-node">
            <span class="ps-num">${ps.step}</span>
            <span class="ps-icon"><i class="fa-solid ${ps.icon}"></i></span>
            <span class="ps-name">${ps.name}</span>
          </div>
          ${idx < sec.printSteps.length - 1 ? '<div class="ps-connector"></div>' : ''}
        `).join('')}
      </div>
    `;
  }

  // 06. Colour Development Section (3 Sequential Stages: 01 Original -> 02 Exploration -> 03 Final Curated)
  if (sec.originalPalette && sec.finalPalette) {
    customContentHTML += `
      <div class="colour-development-stages-flow">
        <!-- 01 — Original / Exploratory Palette (24 colours) -->
        <div class="cd-stage-card">
          <div class="cd-stage-header">
            <span class="cd-stage-badge">01</span>
            <div class="cd-stage-title-group">
              <h4 class="cd-stage-title">Original / Exploratory Palette</h4>
              <span class="cd-stage-subtitle">24 Initial Pigments &amp; Security Inks</span>
            </div>
          </div>
          <p class="cd-stage-desc">
            Comprehensive 24-colour ink spectrum extracted from historical currency engravings, intaglio plate pigments, guilloche security lines, and watermark grounds.
          </p>
          <div class="original-palette-swatches-grid">
            ${sec.originalPalette.map(sw => `
              <div class="orig-swatch-item">
                <div class="orig-swatch-color" style="background-color: ${sw.hex};"></div>
                <div class="orig-swatch-meta">
                  <span class="orig-swatch-label">${sw.label}</span>
                  <span class="orig-swatch-hex">${sw.hex}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 02 — Colour Exploration & Selection -->
        <div class="cd-stage-card">
          <div class="cd-stage-header">
            <span class="cd-stage-badge">02</span>
            <div class="cd-stage-title-group">
              <h4 class="cd-stage-title">Colour Exploration &amp; Selection</h4>
              <span class="cd-stage-subtitle">Strike-Off Absorption &amp; Tonal Calibration</span>
            </div>
          </div>
          <p class="cd-stage-desc">
            Substrate absorption tests and tonal separation trials on pure silk twill, cotton satin, and 80s cotton lawn to calibrate dye penetration, bleeding resistance, and tonal balance.
          </p>
          <div class="cd-exploration-grid">
            ${(sec.explorationNotes || [
              { icon: 'fa-flask-vial', title: 'Substrate Absorption & Strike-Offs', desc: 'Calibrating pigment penetration and strike-through on lightweight 80s cotton lawn vs. lustrous silk twill.' },
              { icon: 'fa-sliders', title: 'Tonal Value & Contrast Balancing', desc: 'Balancing deep intaglio engraving linework against delicate watermark grounds for optimal high-contrast legibility.' },
              { icon: 'fa-layer-group', title: 'Multi-Screen Separation Trials', desc: 'Testing multi-screen print separations to maintain sharp guilloche curves without ink bleed or registration shifts.' }
            ]).map(exp => `
              <div class="cd-exploration-card">
                <div class="cd-exp-icon"><i class="fa-solid ${exp.icon}"></i></div>
                <h5 class="cd-exp-title">${exp.title}</h5>
                <p class="cd-exp-desc">${exp.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 03 — Final Curated Colourway (6 final colours) -->
        <div class="cd-stage-card cd-stage-final">
          <div class="cd-stage-header">
            <span class="cd-stage-badge cd-badge-curated">03</span>
            <div class="cd-stage-title-group">
              <h4 class="cd-stage-title">Final Curated Colourway</h4>
              <span class="cd-stage-subtitle">6 Master Production Inks</span>
            </div>
          </div>
          <p class="cd-stage-desc">
            The distilled 6-shade master production palette formulated for balanced tonal contrast and harmonious reproduction across silk scarves, drapery, and apparel.
          </p>
          <div class="thesis-palette-grid">
            ${sec.finalPalette.map(c => `
              <div class="palette-swatch-card">
                <div class="swatch-color" style="background-color: ${c.hex};"></div>
                <div class="swatch-meta">
                  <span class="swatch-name">${c.name}</span>
                  <span class="swatch-hex">${c.hex}</span>
                  <span class="swatch-role">${c.label}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // 07. Textile Samples
  if (sec.samplesList) {
    customContentHTML += `
      <div class="thesis-samples-list">
        ${sec.samplesList.map(s => `
          <div class="sample-spec-row">
            <span class="sample-icon"><i class="fa-solid fa-check"></i></span>
            <div class="sample-text">
              <strong class="sample-name">${s.fabric}:</strong> ${s.use}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 08. Curated Thesis Exhibition Gallery (17 Display Views)
  if (sec.displayGallery && sec.displayGallery.length > 0) {
    // Strictly filter so ONLY files starting with 'display' (case-insensitive) are rendered in the Display gallery
    const validDisplayItems = sec.displayGallery.filter(item => {
      const filename = (item.src || '').split('/').pop().toLowerCase();
      return filename.startsWith('display');
    });

    const displayCardsHTML = validDisplayItems.map((item, idx) => `
      <div class="editorial-display-card ${item.spanClass || 'span-standard'}" data-src="${item.src}" data-caption="${item.caption}" data-tag="${item.tag}" data-index="${idx}">
        <div class="editorial-img-wrap">
          ${renderOptimizedPictureHTML(item.src, item.caption || item.label || 'Exhibition Display View', 'editorial-grid-img', true)}
          <div class="editorial-top-overlay">
            <span class="display-item-label">${item.label}</span>
          </div>
          <div class="editorial-hover-overlay">
            <span class="editorial-zoom-btn">
              <i class="fa-solid fa-magnifying-glass-plus"></i> View High-Res
            </span>
          </div>
        </div>
      </div>
    `).join('');

    customContentHTML += `
      <div class="thesis-exhibition-gallery-wrapper">
        <div class="exhibition-gallery-subhead">
          <div class="exhibition-subhead-left">
            <span class="exhibition-subhead-pill">
              <i class="fa-solid fa-camera"></i> Curated Thesis Exhibition
            </span>
            <span class="exhibition-subhead-desc">17 Spatial Visual Merchandising &amp; Exhibition Views</span>
          </div>
          <div class="exhibition-subhead-hint">
            <i class="fa-solid fa-hand-pointer"></i> Click any display view for full-screen viewer &amp; navigation
          </div>
        </div>

        <div class="thesis-editorial-gallery">
          ${displayCardsHTML}
        </div>
      </div>
    `;
  }

  // 09. Curated Watercolour Paintings Gallery (11 Hand-Painted Watercolour Artworks)
  if (sec.watercolourGallery && sec.watercolourGallery.length > 0) {
    const validWcItems = sec.watercolourGallery.filter(item => {
      const filename = (item.src || '').split('/').pop().toLowerCase();
      return filename.startsWith('watercolor') || filename.startsWith('watercolour');
    });

    const wcCardsHTML = validWcItems.map((item, idx) => {
      // For Watercolour Images 1, 2, and 3, bypass WebP thumbnail and render original image directly
      const isBypassed = idx < 3 || item.id === 'wc-01' || item.id === 'wc-02' || item.id === 'wc-03' ||
        /(watercolor|watercolour)[123]\.(jpe?g|png)$/i.test(item.src || '');

      const imgHTML = isBypassed
        ? `<img src="${item.src}" alt="${item.title || ''}" class="watercolour-grid-img" loading="lazy" decoding="async" width="400" height="300" onload="this.classList.add('img-loaded');if(this.closest('.watercolour-img-wrap'))this.closest('.watercolour-img-wrap').classList.add('is-loaded');" onerror="handleImageError(this)">`
        : renderOptimizedPictureHTML(item.src, item.title, 'watercolour-grid-img', true);

      return `
      <div class="watercolour-card" data-src="${item.src}" data-index="${idx}" title="${item.title}">
        <div class="watercolour-img-wrap">
          ${imgHTML}
          <div class="watercolour-hover-overlay">
            <span class="watercolour-zoom-badge">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
            </span>
          </div>
        </div>
      </div>
    `;
    }).join('');

    customContentHTML += `
      <div class="thesis-watercolour-gallery-wrapper">
        <div class="thesis-watercolour-grid">
          ${wcCardsHTML}
        </div>
      </div>
    `;
  }

  // Gallery of Images for standard sections
  let imagesHTML = '';
  if (sec.images && sec.images.length > 0) {
    const galleryColsClass = sec.images.length >= 4 ? 'gallery-4-cols' : sec.images.length === 3 ? 'gallery-3-cols' : 'gallery-2-cols';
    imagesHTML = `
      <div class="thesis-gallery-grid ${galleryColsClass}">
        ${sec.images.map((img, i) => `
          <div class="thesis-image-card" data-src="${img.src}" data-caption="${img.caption}" data-tag="${img.tag}" data-index="${i}">
            <div class="thesis-img-wrap">
              ${renderOptimizedPictureHTML(img.src, img.caption, 'thesis-grid-img', true)}
              <div class="thesis-img-hover-overlay">
                <span class="zoom-icon-badge"><i class="fa-solid fa-magnifying-glass-plus"></i> View High-Res</span>
              </div>
            </div>
            <div class="thesis-img-meta">
              <span class="thesis-img-tag">${img.tag}</span>
              <p class="thesis-img-caption">${img.caption}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  return `
    <div class="thesis-section-block" id="${sec.id}">
      <div class="thesis-sec-header">
        <div class="sec-num-badge">${sec.num}</div>
        <div class="sec-headings">
          <h3 class="sec-title">${sec.title}</h3>
          <h4 class="sec-subtitle">${sec.subtitle}</h4>
        </div>
      </div>
      <p class="sec-description">${sec.desc}</p>
      ${customContentHTML}
      ${imagesHTML}
    </div>
  `;
}

/* ==========================================
   Clean Dedicated Full-Screen Thesis Image Viewer
   ========================================== */
let activeThesisGallery = [];
let activeThesisIndex = 0;
let isThesisViewerOpen = false;
let tfZoomScale = 1.0;
let tfTranslateX = 0;
let tfTranslateY = 0;
let tfIsDragging = false;
let tfStartX = 0;
let tfStartY = 0;
let tfInitialX = 0;
let tfInitialY = 0;
let tfEventsBound = false;

function ensureThesisViewerDOM() {
  let viewer = document.getElementById('thesis-fullscreen-viewer');
  if (viewer) return viewer;

  viewer = document.createElement('div');
  viewer.id = 'thesis-fullscreen-viewer';
  viewer.className = 'thesis-fullscreen-viewer';
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', 'Clean Thesis Image Viewer');

  viewer.innerHTML = `
    <div class="tf-backdrop" id="tf-backdrop"></div>
    
    <div class="tf-top-bar">
      <div class="tf-counter" id="tf-counter">01 / 16</div>
      <button type="button" class="tf-close-btn" id="tf-close-btn" title="Close (Esc)" aria-label="Close viewer">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <button type="button" class="tf-nav-btn tf-prev-btn" id="tf-prev-btn" title="Previous Image" aria-label="Previous image">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button type="button" class="tf-nav-btn tf-next-btn" id="tf-next-btn" title="Next Image" aria-label="Next image">
      <i class="fa-solid fa-chevron-right"></i>
    </button>

    <div class="tf-stage" id="tf-stage">
      <div class="tf-img-wrapper" id="tf-img-wrapper">
        <img id="tf-active-img" src="" alt="Thesis Display View" class="tf-img" draggable="false" />
      </div>
    </div>

    <div class="tf-zoom-toolbar">
      <button type="button" class="tf-zoom-btn" id="tf-zoom-out" title="Zoom Out (-)" aria-label="Zoom out">
        <i class="fa-solid fa-minus"></i>
      </button>
      <button type="button" class="tf-zoom-btn tf-reset-btn" id="tf-zoom-reset" title="Reset Zoom (0)" aria-label="Reset zoom">
        <i class="fa-solid fa-rotate-left"></i>
      </button>
      <button type="button" class="tf-zoom-btn" id="tf-zoom-in" title="Zoom In (+)" aria-label="Zoom in">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  `;

  document.body.appendChild(viewer);
  return viewer;
}

function openThesisLightboxGallery(galleryItems, initialIndex = 0) {
  if (!galleryItems || galleryItems.length === 0) return;

  const viewer = ensureThesisViewerDOM();
  activeThesisGallery = galleryItems;
  activeThesisIndex = Math.max(0, Math.min(initialIndex, galleryItems.length - 1));
  isThesisViewerOpen = true;

  resetThesisViewerZoom(false);
  updateThesisViewerContent();

  viewer.classList.add('active');
  document.body.style.overflow = 'hidden';

  bindThesisViewerEvents();
}

function preloadAdjacentLightboxImages() {
  if (!activeThesisGallery || activeThesisGallery.length <= 1) return;
  const nextIdx = (activeThesisIndex + 1) % activeThesisGallery.length;
  const prevIdx = (activeThesisIndex - 1 + activeThesisGallery.length) % activeThesisGallery.length;

  [nextIdx, prevIdx].forEach(idx => {
    const itm = activeThesisGallery[idx];
    if (itm && itm.src) {
      const { fallbackSrc, webpFull } = getOptimizedImageSources(itm.src);
      const preWebp = new Image();
      preWebp.src = webpFull;
    }
  });
}

function updateThesisViewerContent() {
  const currentItem = activeThesisGallery[activeThesisIndex];
  if (!currentItem) return;

  const imgEl = document.getElementById('tf-active-img');
  const counterEl = document.getElementById('tf-counter');
  const prevBtn = document.getElementById('tf-prev-btn');
  const nextBtn = document.getElementById('tf-next-btn');

  if (imgEl) {
    imgEl.src = currentItem.src;
    imgEl.classList.add('img-loaded');
    imgEl.alt = currentItem.caption || currentItem.label || currentItem.title || 'Thesis Image';
  }

  if (counterEl) {
    const cur = String(activeThesisIndex + 1).padStart(2, '0');
    const tot = String(activeThesisGallery.length).padStart(2, '0');
    counterEl.textContent = `${cur} / ${tot}`;
    counterEl.style.display = activeThesisGallery.length > 1 ? 'inline-flex' : 'none';
  }

  if (prevBtn) prevBtn.style.display = activeThesisGallery.length > 1 ? 'flex' : 'none';
  if (nextBtn) nextBtn.style.display = activeThesisGallery.length > 1 ? 'flex' : 'none';

  resetThesisViewerZoom(false);
  preloadAdjacentLightboxImages();
}

function applyThesisZoomTransform(withTransition = true) {
  const imgEl = document.getElementById('tf-active-img');
  const wrapEl = document.getElementById('tf-img-wrapper');
  if (!imgEl || !wrapEl) return;

  if (withTransition) {
    imgEl.style.transition = 'transform 0.22s cubic-bezier(0.2, 0, 0.2, 1)';
  } else {
    imgEl.style.transition = 'none';
  }

  clampThesisZoomBounds();
  imgEl.style.transform = `translate3d(${tfTranslateX}px, ${tfTranslateY}px, 0) scale(${tfZoomScale})`;

  if (tfZoomScale > 1.05) {
    wrapEl.classList.add('is-zoomed');
  } else {
    wrapEl.classList.remove('is-zoomed');
    wrapEl.classList.remove('is-dragging');
  }
}

function clampThesisZoomBounds() {
  const wrapEl = document.getElementById('tf-img-wrapper');
  if (!wrapEl || tfZoomScale <= 1) {
    tfTranslateX = 0;
    tfTranslateY = 0;
    return;
  }

  const maxTranslateX = (wrapEl.clientWidth * (tfZoomScale - 1)) / 2;
  const maxTranslateY = (wrapEl.clientHeight * (tfZoomScale - 1)) / 2;

  tfTranslateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, tfTranslateX));
  tfTranslateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, tfTranslateY));
}

function resetThesisViewerZoom(withTransition = true) {
  tfZoomScale = 1.0;
  tfTranslateX = 0;
  tfTranslateY = 0;
  tfIsDragging = false;
  applyThesisZoomTransform(withTransition);
}

function closeThesisViewer() {
  const viewer = document.getElementById('thesis-fullscreen-viewer');
  if (viewer) {
    viewer.classList.remove('active');
  }
  document.body.style.overflow = '';
  isThesisViewerOpen = false;
  resetThesisViewerZoom(false);
}

function navigateThesisViewer(delta) {
  if (!isThesisViewerOpen || activeThesisGallery.length <= 1) return;
  activeThesisIndex = (activeThesisIndex + delta + activeThesisGallery.length) % activeThesisGallery.length;
  updateThesisViewerContent();
}

function bindThesisViewerEvents() {
  if (tfEventsBound) return;
  tfEventsBound = true;

  const closeBtn = document.getElementById('tf-close-btn');
  const backdrop = document.getElementById('tf-backdrop');
  const prevBtn = document.getElementById('tf-prev-btn');
  const nextBtn = document.getElementById('tf-next-btn');
  const zoomIn = document.getElementById('tf-zoom-in');
  const zoomOut = document.getElementById('tf-zoom-out');
  const zoomReset = document.getElementById('tf-zoom-reset');
  const imgWrapper = document.getElementById('tf-img-wrapper');
  const stage = document.getElementById('tf-stage');

  if (closeBtn) closeBtn.addEventListener('click', closeThesisViewer);
  if (backdrop) backdrop.addEventListener('click', closeThesisViewer);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateThesisViewer(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateThesisViewer(1);
    });
  }

  if (zoomIn) {
    zoomIn.addEventListener('click', (e) => {
      e.stopPropagation();
      tfZoomScale = Math.min(tfZoomScale + 0.5, 4.0);
      applyThesisZoomTransform(true);
    });
  }

  if (zoomOut) {
    zoomOut.addEventListener('click', (e) => {
      e.stopPropagation();
      tfZoomScale = Math.max(tfZoomScale - 0.5, 1.0);
      if (tfZoomScale === 1.0) {
        tfTranslateX = 0;
        tfTranslateY = 0;
      }
      applyThesisZoomTransform(true);
    });
  }

  if (zoomReset) {
    zoomReset.addEventListener('click', (e) => {
      e.stopPropagation();
      resetThesisViewerZoom(true);
    });
  }

  // Mouse wheel zoom
  if (stage) {
    stage.addEventListener('wheel', (e) => {
      if (!isThesisViewerOpen) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.3 : 0.3;
      tfZoomScale = Math.max(1.0, Math.min(4.0, tfZoomScale + delta));
      if (tfZoomScale === 1.0) {
        tfTranslateX = 0;
        tfTranslateY = 0;
      }
      applyThesisZoomTransform(false);
    }, { passive: false });
  }

  // Drag / Pan when zoomed
  if (imgWrapper) {
    imgWrapper.addEventListener('mousedown', (e) => {
      if (tfZoomScale <= 1.05) return;
      tfIsDragging = true;
      imgWrapper.classList.add('is-dragging');
      tfStartX = e.clientX;
      tfStartY = e.clientY;
      tfInitialX = tfTranslateX;
      tfInitialY = tfTranslateY;
    });

    // Touch support for mobile pinch / drag
    imgWrapper.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && tfZoomScale > 1.05) {
        tfIsDragging = true;
        tfStartX = e.touches[0].clientX;
        tfStartY = e.touches[0].clientY;
        tfInitialX = tfTranslateX;
        tfInitialY = tfTranslateY;
      }
    }, { passive: true });

    imgWrapper.addEventListener('touchmove', (e) => {
      if (!tfIsDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - tfStartX;
      const dy = e.touches[0].clientY - tfStartY;
      tfTranslateX = tfInitialX + dx;
      tfTranslateY = tfInitialY + dy;
      applyThesisZoomTransform(false);
    }, { passive: true });

    imgWrapper.addEventListener('touchend', () => {
      if (tfIsDragging) {
        tfIsDragging = false;
        applyThesisZoomTransform(true);
      }
    });
  }

  window.addEventListener('mousemove', (e) => {
    if (!tfIsDragging) return;
    e.preventDefault();
    const dx = e.clientX - tfStartX;
    const dy = e.clientY - tfStartY;
    tfTranslateX = tfInitialX + dx;
    tfTranslateY = tfInitialY + dy;
    applyThesisZoomTransform(false);
  });

  window.addEventListener('mouseup', () => {
    if (tfIsDragging) {
      tfIsDragging = false;
      if (imgWrapper) imgWrapper.classList.remove('is-dragging');
      applyThesisZoomTransform(true);
    }
  });

  // Global Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (!isThesisViewerOpen) return;

    if (e.key === 'Escape') {
      closeThesisViewer();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      navigateThesisViewer(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      navigateThesisViewer(1);
    } else if (e.key === '+' || e.key === '=') {
      e.preventDefault();
      tfZoomScale = Math.min(tfZoomScale + 0.5, 4.0);
      applyThesisZoomTransform(true);
    } else if (e.key === '-' || e.key === '_') {
      e.preventDefault();
      tfZoomScale = Math.max(tfZoomScale - 0.5, 1.0);
      if (tfZoomScale === 1.0) {
        tfTranslateX = 0;
        tfTranslateY = 0;
      }
      applyThesisZoomTransform(true);
    } else if (e.key === '0' || e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      resetThesisViewerZoom(true);
    }
  });
}

function openThesisLightbox(src, caption, tag) {
  openThesisLightboxGallery([{ src, caption, tag }], 0);
}

// Auto-run if document is ready or on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initThesisEngine();
  });
} else {
  initThesisEngine();
}

window.initThesisEngine = initThesisEngine;
