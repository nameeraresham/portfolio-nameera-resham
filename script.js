/**
 * Nameera Resham Portfolio - Pure ES6 Vanilla JavaScript
 * Handles Dynamic Typing, Navigation, Restored Projects Gallery (AI & Data, Textile Designing, Weaving, Embroidery),
 * Project Detail Lightbox Modal with Zoom/Pan & Tools badges, and Contact Form.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initMobileMenu();
  initProjectsGallery();
  initContactForm();
  initScrollTop();
  initActiveNavHighlight();
  initCopyrightYear();
  if (typeof initThesisEngine === 'function') {
    initThesisEngine();
  }
  refreshIcons();
});

function refreshIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  } else {
    window.addEventListener('load', () => {
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    }, { once: true });
  }
}

// Global Image Error Handler to ensure uploaded images always resolve across path and extension formats
function handleImageError(img) {
  if (!img) return;
  const attempts = parseInt(img.dataset.attempt || '0', 10);
  if (attempts >= 5) {
    img.style.display = 'none';
    const parentWrap = img.closest('.project-thumb-wrap, .thesis-img-wrap, .editorial-img-wrap, .watercolour-img-wrap, .moodboard-img-wrap, .lightbox-image-wrap');
    if (parentWrap) {
      parentWrap.classList.add('is-loaded');
      if (!parentWrap.querySelector('.img-missing-fallback')) {
        const fallback = document.createElement('div');
        fallback.className = 'img-missing-fallback';
        fallback.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;min-height:160px;background:#f8fafc;color:#64748b;padding:20px;text-align:center;border-radius:8px;font-size:13px;';
        const currentSrc = img.getAttribute('src') || img.src || '';
        const filename = currentSrc.split('/').pop().split('?')[0];
        fallback.innerHTML = `<i class="fa-solid fa-image" style="font-size:24px;margin-bottom:8px;color:#94a3b8;"></i><span style="font-weight:600;color:#475569;">${filename}</span><span style="font-size:11px;color:#94a3b8;margin-top:4px;">Original photo pending re-upload</span>`;
        parentWrap.appendChild(fallback);
      }
    }
    return;
  }
  img.dataset.attempt = (attempts + 1).toString();
  const currentSrc = img.getAttribute('src') || img.src || '';

  const filename = currentSrc.split('/').pop().split('?')[0];
  const basePath = currentSrc.substring(0, currentSrc.lastIndexOf('/') + 1) || 'assets/images/';

  if (attempts === 0) {
    if (currentSrc.includes('-thumb.webp')) {
      img.src = currentSrc.replace('-thumb.webp', '.jpeg');
      return;
    } else if (currentSrc.endsWith('.webp') || currentSrc.includes('.webp?')) {
      img.src = currentSrc.replace('.webp', '.jpeg');
      return;
    } else if (currentSrc.endsWith('.jpg') || currentSrc.includes('.jpg?')) {
      img.src = currentSrc.replace('.jpg', '.jpeg');
      return;
    } else if (currentSrc.endsWith('.jpeg') || currentSrc.includes('.jpeg?')) {
      img.src = currentSrc.replace('.jpeg', '.jpg');
      return;
    } else if (currentSrc.endsWith('.png') || currentSrc.includes('.png?')) {
      img.src = currentSrc.replace('.png', '.jpeg');
      return;
    }
  } else if (attempts === 1) {
    if (filename.toLowerCase().startsWith('watercolor')) {
      const numPart = filename.replace(/[^0-9]/g, '');
      img.src = basePath + 'Watercolor' + numPart + '.jpeg';
      return;
    } else if (filename.toLowerCase().startsWith('watercolour')) {
      const numPart = filename.replace(/[^0-9]/g, '');
      img.src = basePath + 'watercolor' + numPart + '.jpeg';
      return;
    } else if (currentSrc.includes('assets/images/weaving/')) {
      img.src = currentSrc.replace('assets/images/weaving/', 'assets/images/');
      return;
    } else if (currentSrc.includes('assets/images/embroidery/')) {
      img.src = currentSrc.replace('assets/images/embroidery/', 'assets/images/');
      return;
    } else if (currentSrc.includes('assets/images/')) {
      if (filename.includes('Weaving')) {
        img.src = 'assets/images/weaving/' + filename;
        return;
      } else if (filename.includes('Embroidery') || filename.includes('Beadswork')) {
        img.src = 'assets/images/embroidery/' + filename;
        return;
      }
    }
  } else if (attempts === 2) {
    if (filename.toLowerCase().startsWith('watercolor') || filename.toLowerCase().startsWith('watercolour')) {
      const numPart = filename.replace(/[^0-9]/g, '');
      img.src = basePath + 'watercolor' + numPart + '.png';
      return;
    }
    const updatedSrc = img.src || '';
    if (updatedSrc.includes('.jpg')) {
      img.src = updatedSrc.replace('.jpg', '.jpeg');
      return;
    } else if (updatedSrc.includes('.jpeg')) {
      img.src = updatedSrc.replace('.jpeg', '.jpg');
      return;
    }
  } else if (attempts === 3) {
    if (filename.toLowerCase().startsWith('watercolor') || filename.toLowerCase().startsWith('watercolour')) {
      const numPart = filename.replace(/[^0-9]/g, '');
      img.src = basePath + 'Watercolor' + numPart + '.jpg';
      return;
    }
  } else if (attempts === 4) {
    if (filename.toLowerCase().startsWith('watercolor') || filename.toLowerCase().startsWith('watercolour')) {
      const numPart = filename.replace(/[^0-9]/g, '');
      img.src = basePath + 'Watercolor' + numPart + '.png';
      return;
    }
  }
}
window.handleImageError = handleImageError;

/* ==========================================
   1. Dynamic Typing Effect
   ========================================== */
function initTypingEffect() {
  const targetEl = document.getElementById('typing-text');
  if (!targetEl) return;

  const roles = [
    'Textile Designer',
    'AI & Data Science Enthusiast',
    'Print & Surface Pattern Designer',
    'Machine Learning Developer'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 40;
  const pauseEnd = 2000;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      targetEl.textContent = currentRole.substring(0, charIdx);
    } else {
      charIdx++;
      targetEl.textContent = currentRole.substring(0, charIdx);
    }

    let delta = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      delta = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delta = 400;
    }

    setTimeout(type, delta);
  }

  type();
}

/* ==========================================
   2. Mobile Navigation Drawer
   ========================================== */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!btn || !menu) return;

  function toggleMenu(isOpen) {
    const shouldOpen = typeof isOpen === 'boolean' ? isOpen : !menu.classList.contains('mobile-open');
    menu.classList.toggle('mobile-open', shouldOpen);
    btn.classList.toggle('is-active', shouldOpen);
    btn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    if (shouldOpen) {
      document.body.classList.add('nav-open-lock');
    } else {
      document.body.classList.remove('nav-open-lock');
    }
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close when tapping outside the menu on mobile
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('mobile-open') && !menu.contains(e.target) && !btn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('mobile-open')) {
      toggleMenu(false);
      btn.focus();
    }
  });
}

/* ==========================================
   3. Projects Gallery Engine & Filter Logic
   ========================================== */
let currentFilter = 'all';
let currentPage = 1;
let itemsPerPage = 6;

function initProjectsGallery() {
  const gridContainer = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const viewBtns = document.querySelectorAll('.view-btn');

  if (!gridContainer) return;

  // Update dynamic count badges on filter buttons
  updateFilterCounts();

  // Render Initial Gallery
  renderGallery();

  // Filter Buttons Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      currentPage = 1;
      renderGallery();
    });
  });

  // View Mode Switchers (4, 3, 2, 1 Columns)
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cols = btn.dataset.cols || '3';
      gridContainer.className = `projects-grid view-${cols}-col`;
    });
  });

  initLightboxModal();
}

function updateFilterCounts() {
  if (typeof projectsData === 'undefined' || !Array.isArray(projectsData)) return;

  const countAll = document.getElementById('count-all');
  const countAI = document.getElementById('count-ai');
  const countTextile = document.getElementById('count-textile');
  const countWeaving = document.getElementById('count-weaving');
  const countEmbroidery = document.getElementById('count-embroidery');

  if (countAll) countAll.textContent = projectsData.length;
  if (countAI) countAI.textContent = projectsData.filter(p => p.category === 'ai-data').length;
  if (countTextile) countTextile.textContent = projectsData.filter(p => p.category === 'textile').length;
  if (countWeaving) countWeaving.textContent = projectsData.filter(p => p.category === 'weaving').length;
  if (countEmbroidery) countEmbroidery.textContent = projectsData.filter(p => p.category === 'embroidery').length;
}

function renderGallery() {
  const gridContainer = document.getElementById('projects-grid');
  const paginationContainer = document.getElementById('pagination-container');
  if (!gridContainer) return;

  if (typeof projectsData === 'undefined' || !Array.isArray(projectsData)) return;

  // Filter items
  const filtered = projectsData.filter(item => {
    if (currentFilter === 'all') return true;
    return item.category === currentFilter;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const itemsToShow = filtered.slice(startIndex, startIndex + itemsPerPage);

  // Render HTML
  gridContainer.innerHTML = itemsToShow.map(item => createProjectCardHTML(item)).join('');

  // Render Pagination Controls
  if (paginationContainer) {
    renderPagination(paginationContainer, totalItems, totalPages);
  }

  // Attach Lightbox click triggers
  document.querySelectorAll('.btn-details, .project-thumb-wrap, .btn-read-more').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const card = el.closest('.project-card');
      if (card && card.dataset.id) {
        openLightbox(card.dataset.id);
      }
    });
  });

  refreshIcons();
}

function renderPagination(container, totalItems, totalPages) {
  if (totalItems === 0) {
    container.innerHTML = '<div class="no-projects" style="padding: 40px; text-align: center; color: var(--text-muted); font-size: 15px;">No projects found for this category.</div>';
    return;
  }

  let pagesHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    pagesHTML += `
      <button class="page-num-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
        ${i}
      </button>
    `;
  }

  const startNum = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endNum = Math.min(currentPage * itemsPerPage, totalItems);

  let catName = 'Projects';
  if (currentFilter === 'ai-data') catName = 'AI & Data Projects';
  if (currentFilter === 'textile') catName = 'Textile Designing Projects';
  if (currentFilter === 'weaving') catName = 'Weaving Projects';
  if (currentFilter === 'embroidery') catName = 'Embroidery Projects';

  container.innerHTML = `
    <div class="pagination-controls">
      <button class="page-nav-btn prev-btn" id="page-prev-btn" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fa-solid fa-chevron-left"></i> Prev
      </button>
      <div class="page-numbers-list">
        ${pagesHTML}
      </div>
      <button class="page-nav-btn next-btn" id="page-next-btn" ${currentPage === totalPages ? 'disabled' : ''}>
        Next <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    <div class="pagination-info">
      Showing ${startNum} - ${endNum} of ${totalItems} ${catName}
    </div>
  `;

  const prevBtn = document.getElementById('page-prev-btn');
  const nextBtn = document.getElementById('page-next-btn');

  if (prevBtn && currentPage > 1) {
    prevBtn.addEventListener('click', () => {
      currentPage--;
      renderGallery();
      scrollToProjects();
    });
  }

  if (nextBtn && currentPage < totalPages) {
    nextBtn.addEventListener('click', () => {
      currentPage++;
      renderGallery();
      scrollToProjects();
    });
  }

  container.querySelectorAll('.page-num-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.dataset.page, 10);
      if (page && page !== currentPage) {
        currentPage = page;
        renderGallery();
        scrollToProjects();
      }
    });
  });
}

function scrollToProjects() {
  const projSec = document.getElementById('projects');
  if (projSec) {
    projSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function getAiProjectThumbnailHTML(item) {
  // Clean, professional data-themed visual banners for each topic
  let iconClass = 'fa-chart-simple';
  let badgeLabel = 'NumPy Array Computing';
  let themeClass = 'ai-visual-numpy';

  if (item.id === 'ai-1') {
    iconClass = 'fa-cubes-stacked';
    badgeLabel = 'NumPy Computing';
    themeClass = 'ai-visual-numpy';
  } else if (item.id === 'ai-2') {
    iconClass = 'fa-table-cells';
    badgeLabel = 'Pandas Data Analysis';
    themeClass = 'ai-visual-pandas';
  } else if (item.id === 'ai-3') {
    iconClass = 'fa-filter';
    badgeLabel = 'Data Cleaning';
    themeClass = 'ai-visual-cleaning';
  } else if (item.id === 'ai-4') {
    iconClass = 'fa-bag-shopping';
    badgeLabel = 'Shopping Dataset';
    themeClass = 'ai-visual-mall';
  } else if (item.id === 'ai-5') {
    iconClass = 'fa-chart-line';
    badgeLabel = 'Transform & Viz';
    themeClass = 'ai-visual-viz';
  } else if (item.id === 'ai-6') {
    iconClass = 'fa-code-branch';
    badgeLabel = 'Data Analysis';
    themeClass = 'ai-visual-practice';
  }

  return `
    <div class="ai-project-visual ${themeClass}">
      <div class="ai-visual-glow"></div>
      <div class="ai-visual-icon-box">
        <i class="fa-solid ${iconClass}"></i>
      </div>
      <div class="ai-visual-meta">
        <span class="ai-visual-label"><i class="fa-brands fa-python"></i> Python &bull; Google Colab</span>
        <span class="ai-visual-topic">${badgeLabel}</span>
      </div>
    </div>
  `;
}

// Helper to retrieve clean, medium-specific vector line icons for each process step
function getProcessStepIcon(stepName, category, projectId) {
  const s = (stepName || '').toLowerCase();

  // 1. Concept / Inspiration
  if (s.includes('inspiration') || s.includes('concept') || s.includes('idea')) {
    return 'fa-regular fa-lightbulb';
  }
  // 2. Design Planning
  if (s.includes('planning')) {
    return 'fa-solid fa-compass-drafting';
  }
  // 3. Design Transfer / Drafting / Rosette / Architectural details
  if (s.includes('transfer') || s.includes('drafting') || s.includes('vectorization') || s.includes('rosetta') || s.includes('seal') || s.includes('arch') || s.includes('guilloche') || s.includes('scrollwork') || s.includes('filigree')) {
    return 'fa-solid fa-pen-fancy';
  }
  // 4. Motif Development
  if (s.includes('motif')) {
    return 'fa-solid fa-shapes';
  }
  // 5. Yarn / Thread / Spool Selection
  if (s.includes('yarn') || s.includes('thread') || s.includes('spool')) {
    return 'fa-solid fa-lines-leaning';
  }
  // 6. Bead Selection
  if (s.includes('bead')) {
    return 'fa-solid fa-gem';
  }
  // 7. Pattern Composition / Grid / Layout / Symmetry / Radial
  if (s.includes('composition') || s.includes('layout') || s.includes('grid') || s.includes('symmetry') || s.includes('radial') || s.includes('flow') || s.includes('trellis') || s.includes('balance') || s.includes('stripe')) {
    return 'fa-solid fa-border-all';
  }
  // 8. Loom Setup / Prep / Machine
  if (s.includes('loom') || s.includes('setup') || s.includes('prep') || s.includes('hoop')) {
    return 'fa-solid fa-sliders';
  }
  // 9. Hand Weaving
  if (s.includes('weaving') || s.includes('weave')) {
    return 'fa-solid fa-shuffle';
  }
  // 10. Hand Stitching / Needlework
  if (s.includes('stitching') || s.includes('stitch') || s.includes('embroidery') || s.includes('embellishment')) {
    return 'fa-solid fa-wand-magic-sparkles';
  }
  // 11. Colourway Development / Palette
  if (s.includes('colour') || s.includes('color')) {
    return 'fa-solid fa-palette';
  }
  // 12. Jacket Application
  if (s.includes('jacket') || s.includes('application')) {
    return 'fa-solid fa-vest';
  }
  // 13. Final Garment
  if (s.includes('garment')) {
    return 'fa-solid fa-award';
  }
  // 14. Finished Surface / Sample / Final Print
  if (s.includes('final') || s.includes('finished') || s.includes('surface') || s.includes('sample') || s.includes('print') || s.includes('piece')) {
    return 'fa-solid fa-layer-group';
  }

  return 'fa-solid fa-circle-check';
}

function createProjectCardHTML(item) {
  // If AI & Data project
  if (item.category === 'ai-data') {
    const visualHTML = getAiProjectThumbnailHTML(item);

    return `
      <div class="project-card card-ai" data-id="${item.id}">
        <div class="project-thumb-wrap">
          ${visualHTML}
          <span class="project-cat-badge badge-ai">
            <i class="fa-solid fa-brain"></i> AI & Data
          </span>
        </div>

        <div class="project-card-body">
          <h3 class="project-title">${item.title}</h3>
          <p class="project-desc">${item.description}</p>
          <button class="btn-read-more" data-id="${item.id}" type="button">Project Details <i class="fa-solid fa-arrow-right btn-inline-icon"></i></button>

          <div class="project-card-footer">
            <div class="exp-tags">
              ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="project-card-actions">
              ${item.colabUrl ? `
                <a href="${item.colabUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-colab" title="Open in Google Colab">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> View on Google Colab &rarr;
                </a>
              ` : `
                <button class="btn-card-action btn-details" data-id="${item.id}">
                  <i class="fa-solid fa-expand"></i> Details
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Textile / Weaving / Embroidery Projects
  let catBadgeIcon = 'fa-palette';
  let catBadgeName = 'Textile Design';
  let catBadgeClass = 'badge-textile';

  if (item.category === 'weaving') {
    catBadgeIcon = 'fa-bars-staggered';
    catBadgeName = 'Weaving';
    catBadgeClass = 'badge-weaving';
  } else if (item.category === 'embroidery') {
    catBadgeIcon = 'fa-wand-magic-sparkles';
    catBadgeName = 'Embroidery';
    catBadgeClass = 'badge-embroidery';
  }

  const steps = item.process || ['Inspiration', 'Motif Development', 'Pattern Composition', 'Colourway Development', 'Final Surface Design'];

  const stepsHTML = steps.map((step, idx) => `
    <div class="process-step-item ${idx === steps.length - 1 ? 'is-final' : ''}">
      <div class="process-step-icon-wrap">
        <span class="process-step-icon">
          <i class="${getProcessStepIcon(step, item.category, item.id)}"></i>
        </span>
      </div>
      <span class="process-step-label">${escapeHtml(step)}</span>
    </div>
  `).join('');

  let workflowTitleText = '<i class="fa-solid fa-palette"></i> PRINT PROCESS';

  if (item.category === 'weaving') {
    workflowTitleText = '<i class="fa-solid fa-bars-staggered"></i> WEAVING PROCESS';
  } else if (item.category === 'embroidery') {
    if (item.id === 'emb-3' || (item.title && item.title.toLowerCase().includes('bead'))) {
      workflowTitleText = '<i class="fa-solid fa-gem"></i> BEADWORK PROCESS';
    } else {
      workflowTitleText = '<i class="fa-solid fa-wand-magic-sparkles"></i> EMBROIDERY PROCESS';
    }
  }

  const webpThumb = item.image ? item.image.replace(/\.(jpe?g|png)$/i, '-thumb.webp') : '';

  return `
    <div class="project-card card-textile" data-id="${item.id}">
      <div class="project-thumb-wrap">
        <picture>
          <source srcset="${webpThumb}" type="image/webp">
          <img src="${item.image}" alt="${item.title}" class="project-thumb" loading="lazy" decoding="async" width="400" height="267" onerror="handleImageError(this)">
        </picture>
        <span class="project-cat-badge ${catBadgeClass}">
          <i class="fa-solid ${catBadgeIcon}"></i> ${catBadgeName}
        </span>
      </div>

      <div class="project-card-body">
        <h3 class="project-title">${item.title}</h3>
        <p class="project-desc">${item.description}</p>
        <button class="btn-read-more" data-id="${item.id}" type="button">Read More <i class="fa-solid fa-arrow-right btn-inline-icon"></i></button>

        <div class="workflow-box">
          <div class="workflow-header">
            <span class="workflow-title">${workflowTitleText}</span>
          </div>
          <div class="process-steps-track">
            ${stepsHTML}
          </div>
        </div>

        <div class="project-card-footer">
          <div class="exp-tags">
            ${item.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-card-actions">
            <button class="btn-card-action btn-details" data-id="${item.id}">
              <i class="fa-solid fa-expand"></i> View Design
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* Helper to render Professional Tools & Software Badges */
function getToolBadgeHTML(toolName) {
  const tool = toolName.trim().replace(/^#/, '');
  let iconHTML = '';
  let badgeClass = 'tool-badge';

  const tLower = tool.toLowerCase();

  if (tLower.includes('illustrator')) {
    iconHTML = `<span class="tool-icon-box ai-icon">Ai</span>`;
    badgeClass += ' badge-ai-tool';
  } else if (tLower.includes('photoshop')) {
    iconHTML = `<span class="tool-icon-box ps-icon">Ps</span>`;
    badgeClass += ' badge-ps-tool';
  } else if (tLower.includes('wilcom')) {
    iconHTML = `<i class="fa-solid fa-scissors tool-fa-icon wilcom-icon"></i>`;
    badgeClass += ' badge-wilcom-tool';
  } else if (tLower.includes('screen print')) {
    iconHTML = `<i class="fa-solid fa-layer-group tool-fa-icon screen-icon"></i>`;
    badgeClass += ' badge-screen-tool';
  } else if (tLower.includes('block print')) {
    iconHTML = `<i class="fa-solid fa-stamp tool-fa-icon block-icon"></i>`;
    badgeClass += ' badge-block-tool';
  } else if (tLower.includes('digital print') || tLower.includes('print')) {
    iconHTML = `<i class="fa-solid fa-print tool-fa-icon digital-icon"></i>`;
    badgeClass += ' badge-digital-tool';
  } else if (tLower.includes('hand sketch') || tLower.includes('sketch')) {
    iconHTML = `<i class="fa-solid fa-pencil tool-fa-icon sketch-icon"></i>`;
    badgeClass += ' badge-sketch-tool';
  } else if (tLower.includes('embroidery') || tLower.includes('stitch')) {
    iconHTML = `<i class="fa-solid fa-wand-magic-sparkles tool-fa-icon embroidery-icon"></i>`;
    badgeClass += ' badge-embroidery-tool';
  } else if (tLower.includes('khadi') || tLower.includes('handcraft') || tLower.includes('handmade')) {
    iconHTML = `<i class="fa-solid fa-hand-holding-heart tool-fa-icon weaving-tool-icon"></i>`;
    badgeClass += ' badge-weaving-tool';
  } else if (tLower.includes('weaving') || tLower.includes('handloom') || tLower.includes('twill') || tLower.includes('texture') || tLower.includes('structure')) {
    iconHTML = `<i class="fa-solid fa-bars-staggered tool-fa-icon weaving-tool-icon"></i>`;
    badgeClass += ' badge-weaving-tool';
  } else if (tLower.includes('python')) {
    iconHTML = `<i class="fa-brands fa-python tool-fa-icon python-icon"></i>`;
    badgeClass += ' badge-python-tool';
  } else if (tLower.includes('pytorch') || tLower.includes('torch')) {
    iconHTML = `<i class="fa-solid fa-fire tool-fa-icon pytorch-icon"></i>`;
    badgeClass += ' badge-pytorch-tool';
  } else {
    iconHTML = `<i class="fa-solid fa-palette tool-fa-icon generic-tool-icon"></i>`;
    badgeClass += ' badge-generic-tool';
  }

  return `
    <span class="${badgeClass}">
      ${iconHTML}
      <span class="tool-name-text">${tool}</span>
    </span>
  `;
}

/* ==========================================
   4. Lightbox Modal & Zoom Engine
   ========================================== */
let activeLightboxId = null;
let activeGalleryIndex = 0;

let zoomScale = 1;
let zoomTranslateX = 0;
let zoomTranslateY = 0;
let isZoomDragging = false;
let startDragX = 0;
let startDragY = 0;
let initialTranslateX = 0;
let initialTranslateY = 0;
let zoomEventsBound = false;

function resetImageZoom(animate = true) {
  zoomScale = 1;
  zoomTranslateX = 0;
  zoomTranslateY = 0;
  isZoomDragging = false;
  applyZoomTransform(animate);
}

function applyZoomTransform(animate = true) {
  const imgEl = document.getElementById('lightbox-img');
  const wrapEl = document.getElementById('lightbox-image-wrap');
  if (!imgEl || !wrapEl) return;

  if (animate) {
    imgEl.style.transition = 'transform 0.25s cubic-bezier(0.2, 0, 0.2, 1)';
  } else {
    imgEl.style.transition = 'none';
  }

  clampZoomBounds();

  imgEl.style.transform = `translate3d(${zoomTranslateX}px, ${zoomTranslateY}px, 0) scale(${zoomScale})`;

  if (zoomScale > 1.05) {
    wrapEl.classList.add('is-zoomed');
  } else {
    wrapEl.classList.remove('is-zoomed');
    wrapEl.classList.remove('is-dragging');
  }
}

function clampZoomBounds() {
  const wrapEl = document.getElementById('lightbox-image-wrap');
  if (!wrapEl || zoomScale <= 1) {
    zoomTranslateX = 0;
    zoomTranslateY = 0;
    return;
  }

  const maxTranslateX = (wrapEl.clientWidth * (zoomScale - 1)) / 2;
  const maxTranslateY = (wrapEl.clientHeight * (zoomScale - 1)) / 2;

  zoomTranslateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, zoomTranslateX));
  zoomTranslateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, zoomTranslateY));
}

function initLightboxModal() {
  const modal = document.getElementById('project-lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const backdrop = document.getElementById('lightbox-backdrop');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  const zoomInBtn = document.getElementById('zoom-in-btn');
  const zoomOutBtn = document.getElementById('zoom-out-btn');
  const zoomResetBtn = document.getElementById('zoom-reset-btn');
  const imageWrap = document.getElementById('lightbox-image-wrap');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    resetImageZoom(false);
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      zoomScale = Math.min(zoomScale + 0.5, 4.0);
      applyZoomTransform(true);
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      zoomScale = Math.max(zoomScale - 0.5, 1.0);
      if (zoomScale === 1) {
        zoomTranslateX = 0;
        zoomTranslateY = 0;
      }
      applyZoomTransform(true);
    });
  }

  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetImageZoom(true);
    });
  }

  if (imageWrap && !zoomEventsBound) {
    zoomEventsBound = true;

    imageWrap.addEventListener('wheel', (e) => {
      if (!modal.classList.contains('active')) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.3 : 0.3;
      const oldScale = zoomScale;
      zoomScale = Math.max(1, Math.min(4.0, zoomScale + delta));
      if (zoomScale === 1) {
        zoomTranslateX = 0;
        zoomTranslateY = 0;
      }
      applyZoomTransform(false);
    }, { passive: false });

    imageWrap.addEventListener('mousedown', (e) => {
      if (zoomScale <= 1.05) return;
      isZoomDragging = true;
      imageWrap.classList.add('is-dragging');
      startDragX = e.clientX;
      startDragY = e.clientY;
      initialTranslateX = zoomTranslateX;
      initialTranslateY = zoomTranslateY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isZoomDragging) return;
      e.preventDefault();
      const dx = e.clientX - startDragX;
      const dy = e.clientY - startDragY;
      zoomTranslateX = initialTranslateX + dx;
      zoomTranslateY = initialTranslateY + dy;
      applyZoomTransform(false);
    });

    window.addEventListener('mouseup', () => {
      if (isZoomDragging) {
        isZoomDragging = false;
        imageWrap.classList.remove('is-dragging');
        applyZoomTransform(true);
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      resetImageZoom(false);
      navigateLightbox(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      resetImageZoom(false);
      navigateLightbox(1);
    });
  }
}

function openLightbox(id, targetGalleryIndex = 0) {
  if (typeof projectsData === 'undefined' || !Array.isArray(projectsData)) return;

  const item = projectsData.find(p => p.id === id);
  if (!item) return;

  resetImageZoom(false);
  activeLightboxId = id;

  const modal = document.getElementById('project-lightbox');
  const imgWrap = document.getElementById('lightbox-image-wrap');
  const titleEl = document.getElementById('lightbox-title');
  const catEl = document.getElementById('lightbox-category');
  const descEl = document.getElementById('lightbox-desc');
  const metaEl = document.getElementById('lightbox-meta');
  const tagsEl = document.getElementById('lightbox-tags');

  // Check if AI project or Textile project
  if (item.category === 'ai-data') {
    // Show clean, professional Colab project overview visual in modal
    const visualHTML = getAiProjectThumbnailHTML(item);
    imgWrap.innerHTML = `
      <div class="ai-lightbox-preview">
        ${visualHTML}
        <div class="ai-modal-info-card">
          <div class="ai-modal-info-badge">
            <i class="fa-brands fa-python"></i> Interactive Python Notebook
          </div>
          <p class="ai-modal-info-text">
            This project is hosted directly on Google Colab. You can open and inspect the full dataset workflows, code cells, and outputs in an interactive cloud environment.
          </p>
        </div>
      </div>
    `;
    catEl.innerHTML = '<i class="fa-solid fa-brain modal-cat-icon"></i> AI & Data Analysis';
  } else {
    // Determine active image (support single image or multi-image gallery)
    const gallery = (Array.isArray(item.gallery) && item.gallery.length > 0) ? item.gallery : [item.image];
    activeGalleryIndex = Math.max(0, Math.min(targetGalleryIndex, gallery.length - 1));
    const activeImageSrc = gallery[activeGalleryIndex];

    const activeWebp = activeImageSrc ? activeImageSrc.replace(/\.(jpe?g|png)$/i, '.webp') : '';

    imgWrap.innerHTML = `
      <picture>
        <source srcset="${activeWebp}" type="image/webp">
        <img id="lightbox-img" src="${activeImageSrc}" alt="${item.title}" class="lightbox-img" onerror="handleImageError(this)">
      </picture>
      <div class="zoom-badge-hint">
        <i data-lucide="zoom-in"></i> Scroll or Pinch to Zoom
      </div>
      ${hasMultipleImages ? `
        <div class="gallery-counter-pill">
          <i class="fa-solid fa-images"></i> Image ${activeGalleryIndex + 1} of ${gallery.length}
        </div>
        <button type="button" class="gallery-nav-btn gallery-nav-prev" id="gallery-img-prev" title="Previous Image" aria-label="Previous image">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button type="button" class="gallery-nav-btn gallery-nav-next" id="gallery-img-next" title="Next Image" aria-label="Next image">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      ` : ''}
      <div class="zoom-controls-overlay">
        <button type="button" class="zoom-btn" id="zoom-in-btn" title="Zoom In" aria-label="Zoom in"><i data-lucide="plus"></i></button>
        <button type="button" class="zoom-btn" id="zoom-out-btn" title="Zoom Out" aria-label="Zoom out"><i data-lucide="minus"></i></button>
        <button type="button" class="zoom-btn" id="zoom-reset-btn" title="Reset Zoom" aria-label="Reset zoom"><i data-lucide="rotate-ccw"></i></button>
      </div>
    `;
    // Re-bind zoom controls for the newly inserted elements
    const zIn = document.getElementById('zoom-in-btn');
    const zOut = document.getElementById('zoom-out-btn');
    const zReset = document.getElementById('zoom-reset-btn');
    if (zIn) zIn.addEventListener('click', () => { zoomScale = Math.min(zoomScale + 0.5, 4.0); applyZoomTransform(true); });
    if (zOut) zOut.addEventListener('click', () => { zoomScale = Math.max(zoomScale - 0.5, 1.0); applyZoomTransform(true); });
    if (zReset) zReset.addEventListener('click', () => { resetImageZoom(true); });

    // Multi-image gallery overlay buttons
    const gPrev = document.getElementById('gallery-img-prev');
    const gNext = document.getElementById('gallery-img-next');
    if (gPrev) {
      gPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
      });
    }
    if (gNext) {
      gNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
      });
    }

    let catBadgeHtml = '<i class="fa-solid fa-palette modal-cat-icon"></i> Textile Design';
    if (item.category === 'weaving') {
      catBadgeHtml = '<i class="fa-solid fa-bars-staggered modal-cat-icon"></i> Handmade Weaving • Khadi Machine';
    } else if (item.category === 'embroidery') {
      catBadgeHtml = '<i class="fa-solid fa-wand-magic-sparkles modal-cat-icon"></i> Handmade Embroidery & Beadwork';
    }
    catEl.innerHTML = catBadgeHtml;
  }

  titleEl.textContent = item.title;
  descEl.textContent = item.description;

  // Render Meta Key-Values
  if (item.meta) {
    metaEl.innerHTML = Object.entries(item.meta).map(([k, v]) => `
      <div class="lightbox-meta-item">
        <span class="meta-key">${k}:</span>
        <span class="meta-val">${v}</span>
      </div>
    `).join('');
  } else {
    metaEl.innerHTML = '';
  }

  // Render Tools & Software Badges (Adobe Illustrator & Adobe Photoshop for textile print/embroidery, craft tags for weaving, code tags for AI)
  const defaultTools = ['Adobe Illustrator', 'Adobe Photoshop'];
  const projectTools = [];

  if (item.category === 'ai-data') {
    if (Array.isArray(item.tags)) {
      item.tags.forEach(t => projectTools.push(t));
    }
  } else if (item.category === 'weaving' || item.category === 'embroidery') {
    // Handmade weaving and embroidery - render pure textile craft tags
    if (Array.isArray(item.tags)) {
      item.tags.forEach(t => projectTools.push(t));
    }
  } else {
    defaultTools.forEach(tool => projectTools.push(tool));
    if (Array.isArray(item.tags)) {
      item.tags.forEach(tag => {
        const tagClean = tag.trim().replace(/^#/, '');
        const tLower = tagClean.toLowerCase();
        if (tLower === 'textile cad' || tLower === 'cad') return;
        const alreadyIncluded = projectTools.some(existing => {
          const eLower = existing.toLowerCase();
          if ((tLower.includes('illustrator') || tLower === 'ai') && eLower.includes('illustrator')) return true;
          if ((tLower.includes('photoshop') || tLower === 'ps') && eLower.includes('photoshop')) return true;
          return eLower === tLower;
        });
        if (!alreadyIncluded) {
          projectTools.push(tagClean);
        }
      });
    }
  }

  tagsEl.innerHTML = projectTools.map(tag => getToolBadgeHTML(tag)).join('');

  // Handle external Colab action button in modal
  const extActionEl = document.getElementById('lightbox-ext-action');
  const colabBtnEl = document.getElementById('lightbox-colab-btn');
  if (extActionEl && colabBtnEl) {
    if (item.colabUrl) {
      colabBtnEl.href = item.colabUrl;
      extActionEl.style.display = 'block';
    } else {
      extActionEl.style.display = 'none';
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  refreshIcons();
}

function navigateLightbox(direction) {
  if (typeof projectsData === 'undefined' || !Array.isArray(projectsData)) return;

  const currentItem = projectsData.find(p => p.id === activeLightboxId);
  if (!currentItem) return;

  const gallery = (Array.isArray(currentItem.gallery) && currentItem.gallery.length > 0)
    ? currentItem.gallery
    : null;

  // If current item has multiple gallery images, navigate through internal images first
  if (gallery && gallery.length > 1) {
    const nextGalleryIdx = activeGalleryIndex + direction;
    if (nextGalleryIdx >= 0 && nextGalleryIdx < gallery.length) {
      resetImageZoom(false);
      openLightbox(activeLightboxId, nextGalleryIdx);
      return;
    }
  }

  // Otherwise, navigate between project cards in the filtered list
  resetImageZoom(false);
  const filtered = projectsData.filter(item => {
    if (currentFilter === 'all') return true;
    return item.category === currentFilter;
  });

  const currIdx = filtered.findIndex(p => p.id === activeLightboxId);
  if (currIdx === -1) return;

  let nextIdx = currIdx + direction;
  if (nextIdx < 0) nextIdx = filtered.length - 1;
  if (nextIdx >= filtered.length) nextIdx = 0;

  const nextItem = filtered[nextIdx];
  const nextItemGallery = (Array.isArray(nextItem.gallery) && nextItem.gallery.length > 0)
    ? nextItem.gallery
    : null;
  const initialImgIdx = (direction < 0 && nextItemGallery && nextItemGallery.length > 1)
    ? nextItemGallery.length - 1
    : 0;

  openLightbox(nextItem.id, initialImgIdx);
}

/* ==========================================
   5. Interactive Contact Form & Toast
   ========================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  if (!form) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  let isSubmitting = false;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !subject || !message) {
      showToast('Please fill out all required fields marked with *.', 'error');
      if (!name && nameInput) nameInput.focus();
      else if (!email && emailInput) emailInput.focus();
      else if (!subject && subjectInput) subjectInput.focus();
      else if (!message && messageInput) messageInput.focus();
      return;
    }

    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address (e.g. name@example.com).', 'error');
      if (emailInput) emailInput.focus();
      return;
    }

    // Set loading state and prevent duplicate submissions
    isSubmitting = true;
    const originalBtnHTML = submitBtn ? submitBtn.innerHTML : 'Send Message';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin btn-icon"></i> Sending Message...';
    }

    // Simulate sending with timeout
    setTimeout(() => {
      // In static frontend environment without backend, open pre-filled mailto client to ensure 100% real delivery
      showToast(`Thank you, ${name}! Your message is prepared. Opening email draft...`, 'success');
      
      const mailtoUrl = `mailto:nameerar2001@gmail.com?subject=${encodeURIComponent('[Portfolio Contact] ' + subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        // Fallback
      }

      form.reset();
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    }, 700);
  });
}

let toastTimer = null;
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  if (toastTimer) {
    clearTimeout(toastTimer);
    toastTimer = null;
  }

  const iconMarkup = type === 'error'
    ? '<i class="fa-solid fa-circle-exclamation toast-icon"></i> '
    : '<i class="fa-solid fa-circle-check toast-icon"></i> ';

  msgEl.innerHTML = iconMarkup + escapeHtml(msg);
  toast.className = `toast-notification show ${type}`;

  toastTimer = setTimeout(() => {
    toast.className = 'toast-notification';
    toastTimer = null;
  }, 4500);
}

/* ==========================================
   6. Scroll To Top Button (Optimized with IntersectionObserver)
   ========================================== */
function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  const hero = document.getElementById('home');
  if (hero && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { threshold: 0.1 });
    heroObserver.observe(hero);
  } else {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          btn.classList.toggle('visible', window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================
   7. Active Navbar Link Highlighting (Optimized with IntersectionObserver)
   ========================================== */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const linkMap = new Map();
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      linkMap.set(href.slice(1), link);
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(l => l.classList.remove('active'));
          const matched = linkMap.get(id);
          if (matched) matched.classList.add('active');
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    });

    sections.forEach(sec => observer.observe(sec));
  }
}

/* ==========================================
   8. Dynamic Footer Copyright Year
   ========================================== */
function initCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = currentYear;
  }
  const footerParagraph = document.querySelector('#main-footer .footer-bottom p');
  if (footerParagraph && !yearEl) {
    footerParagraph.innerHTML = `&copy; ${currentYear} Nameera Resham. All rights reserved.`;
  }
}

