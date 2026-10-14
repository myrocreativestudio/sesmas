/**
 * SK SUNGAI MAS (JHEOA) - MAIN INTERACTIVE LOGIC
 * Navigation, Dark/Light Mode, Search Modal, Animated Counters, 3D Tilt & Audio
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initSearchModal();
  initCounters();
  initTiltEffect();
  initTabs();
  initSoundEffects();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   THEME TOGGLE (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
      playUiSound('toggle');
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle-btn svg');
  if (!icon) return;

  if (theme === 'light') {
    // Moon Icon for switching to dark
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  } else {
    // Sun Icon for switching to light
    icon.innerHTML = `<circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  }
}

/* --------------------------------------------------------------------------
   NAVIGATION & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      playUiSound('click');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   SEARCH MODAL WITH SMART FILTERING
   -------------------------------------------------------------------------- */
const siteSearchData = [
  { title: "Muka Utama / Portal Rasmi", url: "index.html", cat: "Halaman Utama" },
  { title: "Perutusan Guru Besar (Dato' Roslan bin Hamid)", url: "index.html#perutusan", cat: "Muka Utama" },
  { title: "Takwim Persekolahan & Acara", url: "index.html#takwim", cat: "Takwim" },
  { title: "Pautan Rasmi DELIMa KPM", url: "https://d2.delima.edu.my", cat: "Portal KPM" },
  { title: "Pautan APDM (Aplikasi Pangkalan Data Murid)", url: "https://apdm.moe.gov.my", cat: "Portal KPM" },
  { title: "Pengurusan & Pentadbiran Sekolah", url: "pentadbiran.html", cat: "Pentadbiran" },
  { title: "Carta Organisasi Barisan Pengurusan", url: "pentadbiran.html#carta", cat: "Pentadbiran" },
  { title: "Visi, Misi & Piagam Pelanggan", url: "pentadbiran.html#visi-misi", cat: "Pentadbiran" },
  { title: "Direktori Guru & Staf Sokongan", url: "pentadbiran.html#direktori", cat: "Pentadbiran" },
  { title: "Kurikulum & Bidang Akademik", url: "kurikulum.html", cat: "Kurikulum" },
  { title: "Pentaksiran Berasaskan Sekolah (PBD)", url: "kurikulum.html#pbd", cat: "Kurikulum" },
  { title: "Jadual Waktu Persekolahan", url: "kurikulum.html#jadual", cat: "Kurikulum" },
  { title: "Pusat Sumber Digital & Nilam", url: "kurikulum.html#pss", cat: "Kurikulum" },
  { title: "Kokurikulum & Sukan", url: "kokurikulum.html", cat: "Kokurikulum" },
  { title: "Pasukan Pengakap Kanak-Kanak", url: "kokurikulum.html#pengakap", cat: "Badan Beruniform" },
  { title: "Bulan Sabit Merah Malaysia (BSMM)", url: "kokurikulum.html#bsmm", cat: "Badan Beruniform" },
  { title: "Kelab Sains, Teknologi & STEM", url: "kokurikulum.html#stem", cat: "Kelab & Persatuan" },
  { title: "Kelab Seni Warisan & Kebudayaan", url: "kokurikulum.html#kebudayaan", cat: "Kelab & Persatuan" },
  { title: "Sukan Olahraga & Badminton", url: "kokurikulum.html#sukan", cat: "Sukan & Permainan" },
  { title: "Hal Ehwal Murid (HEM)", url: "hem.html", cat: "HEM" },
  { title: "Badan Pengawas & Disiplin Murid", url: "hem.html#pengawas", cat: "HEM" },
  { title: "Unit Bimbingan & Kaunseling (UBK)", url: "hem.html#kaunseling", cat: "HEM" },
  { title: "Bantuan BAP, KWAPM & SPBT", url: "hem.html#kebajikan", cat: "HEM" },
  { title: "Program 3K (Kebersihan, Kesihatan, Keselamatan)", url: "hem.html#3k", cat: "HEM" },
  { title: "Galeri Gambar & Sorotan Aktiviti", url: "galeri.html", cat: "Galeri" }
];

function initSearchModal() {
  const searchTriggerBtn = document.getElementById('search-trigger-btn');
  const searchModal = document.getElementById('search-modal');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input-field');
  const searchResults = document.getElementById('search-results-list');

  if (!searchModal) return;

  function openSearch() {
    searchModal.classList.add('active');
    setTimeout(() => searchInput?.focus(), 100);
    renderSearchResults(siteSearchData.slice(0, 5));
    playUiSound('popup');
  }

  function closeSearch() {
    searchModal.classList.remove('active');
    if (searchInput) searchInput.value = '';
  }

  searchTriggerBtn?.addEventListener('click', openSearch);
  searchCloseBtn?.addEventListener('click', closeSearch);

  // Close on backdrop click
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  // Keyboard shortcut Ctrl+K / Cmd+K / Esc
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    } else if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  // Dynamic filter
  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderSearchResults(siteSearchData.slice(0, 5));
      return;
    }

    const filtered = siteSearchData.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.cat.toLowerCase().includes(query)
    );
    renderSearchResults(filtered);
  });

  function renderSearchResults(items) {
    if (!searchResults) return;
    if (items.length === 0) {
      searchResults.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-dim);">
          Tiada hasil carian dijumpai. Cuba kata kunci lain seperti "Sukan", "Guru", atau "Biasiswa".
        </div>
      `;
      return;
    }

    searchResults.innerHTML = items.map(item => `
      <a href="${item.url}" class="search-item">
        <div class="search-item-info">
          <span class="search-item-title">${item.title}</span>
          <span class="search-item-category">${item.cat}</span>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-dim);">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </a>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   ANIMATED STATS COUNTER
   -------------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out expo
          const current = Math.floor(progress * target);
          counter.textContent = current.toLocaleString();

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

/* --------------------------------------------------------------------------
   3D TILT EFFECT FOR GLASS CARDS
   -------------------------------------------------------------------------- */
function initTiltEffect() {
  const cards = document.querySelectorAll('.tilt-card, .glass-panel-hover');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* --------------------------------------------------------------------------
   INTERACTIVE TABS
   -------------------------------------------------------------------------- */
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');

  tabContainers.forEach(container => {
    const pills = container.querySelectorAll('.tab-pill');
    const panes = container.querySelectorAll('.tab-pane');

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const target = pill.getAttribute('data-tab');

        pills.forEach(p => p.classList.remove('active'));
        panes.forEach(pane => pane.classList.remove('active'));

        pill.classList.add('active');
        const activePane = container.querySelector(`#tab-${target}`);
        if (activePane) activePane.classList.add('active');

        playUiSound('tab');
      });
    });
  });
}

/* --------------------------------------------------------------------------
   AUDIO FEEDBACK (Web Audio API Synthesized Chime)
   -------------------------------------------------------------------------- */
let audioCtx = null;
let soundEnabled = true;

function initSoundEffects() {
  const soundToggleBtn = document.getElementById('sound-toggle-btn');

  function initCtx() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
  }

  document.addEventListener('click', initCtx, { once: true });

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundToggleBtn.classList.toggle('muted', !soundEnabled);
      soundToggleBtn.title = soundEnabled ? 'Bunyi UI: Aktif' : 'Bunyi UI: Dinyahaktifkan';
      
      const icon = soundToggleBtn.querySelector('svg');
      if (icon) {
        if (soundEnabled) {
          icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>`;
          playUiSound('toggle');
        } else {
          icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>`;
        }
      }
    });
  }
}

function playUiSound(type = 'click') {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(740, now + 0.08);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'toggle') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'tab') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(650, now + 0.09);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === 'popup') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.12);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    }
  } catch (e) {
    // Silent fail if audio policy blocked
  }
}

/* --------------------------------------------------------------------------
   BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.visibility = 'visible';
    } else {
      btn.style.opacity = '0';
      btn.style.visibility = 'hidden';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playUiSound('click');
  });
}
