/**
 * SK SUNGAI MAS (JHEOA) - GALLERY & LIGHTBOX LOGIC
 * Dynamic Category Filtering & Fullscreen Lightbox Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryFilter();
  initLightbox();
});

let currentGalleryItems = [];
let currentImageIndex = 0;

function initGalleryFilter() {
  const filterPills = document.querySelectorAll('.gallery-filter-pill');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const category = pill.getAttribute('data-filter');

      // Update active pill
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      if (typeof playUiSound === 'function') playUiSound('tab');

      // Filter gallery cards
      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initLightbox() {
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (!lightboxModal) return;

  // Collect all gallery items
  const items = Array.from(document.querySelectorAll('.gallery-item'));

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Re-query visible items based on active filter
      currentGalleryItems = items.filter(el => el.style.display !== 'none');
      currentImageIndex = currentGalleryItems.indexOf(item);
      if (currentImageIndex === -1) currentImageIndex = 0;

      showLightboxImage(currentImageIndex);
      lightboxModal.classList.add('active');
      if (typeof playUiSound === 'function') playUiSound('popup');
    });
  });

  function showLightboxImage(index) {
    if (!currentGalleryItems[index]) return;
    const targetItem = currentGalleryItems[index];
    const imgEl = targetItem.querySelector('.gallery-img');
    const titleEl = targetItem.querySelector('.gallery-overlay-title');
    const descEl = targetItem.querySelector('.gallery-item-desc');

    if (lightboxImg && imgEl) {
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt || 'Aktiviti Sekolah';
    }

    if (lightboxTitle) {
      lightboxTitle.textContent = titleEl ? titleEl.textContent : 'Sorotan Aktiviti Sekolah';
    }

    if (lightboxDesc) {
      lightboxDesc.textContent = descEl ? descEl.textContent : 'Sekolah Kebangsaan Sungai Mas (JHEOA), Kuantan';
    }
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    if (typeof playUiSound === 'function') playUiSound('click');
  }

  function prevImage() {
    if (currentGalleryItems.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    showLightboxImage(currentImageIndex);
    if (typeof playUiSound === 'function') playUiSound('click');
  }

  function nextImage() {
    if (currentGalleryItems.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentGalleryItems.length;
    showLightboxImage(currentImageIndex);
    if (typeof playUiSound === 'function') playUiSound('click');
  }

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', prevImage);
  nextBtn?.addEventListener('click', nextImage);

  // Close on backdrop click
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') prevImage();
    else if (e.key === 'ArrowRight') nextImage();
  });
}
