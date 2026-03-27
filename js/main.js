/* ============================================
   THAKALI KITCHEN — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initMenuTabs();
  initScrollReveal();
  initSmoothScroll();
  initCookieConsent();
});

/* --- Sticky Navbar --- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* --- Menu Tab Groups & Category Filtering --- */
function initMenuTabs() {
  const groupBtns = document.querySelectorAll('.menu-tab-group-btn');
  const categoryTabs = document.querySelectorAll('.menu-tab');
  const categories = document.querySelectorAll('.menu-category');

  if (!groupBtns.length && !categoryTabs.length) return;

  // Group-level tabs (Thakali Kitchen vs Cross Sushi)
  groupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;

      // Update active group button
      groupBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show only tabs for this group
      categoryTabs.forEach(tab => {
        if (tab.dataset.group === group) {
          tab.style.display = '';
        } else {
          tab.style.display = 'none';
        }
      });

      // Click the first visible tab in the group
      const firstTab = document.querySelector(`.menu-tab[data-group="${group}"]`);
      if (firstTab) firstTab.click();
    });
  });

  // Category-level tabs
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      // Update active tab (within same group only)
      const group = tab.dataset.group;
      categoryTabs.forEach(t => {
        if (t.dataset.group === group) t.classList.remove('active');
      });
      tab.classList.add('active');

      // Show matching category
      categories.forEach(cat => {
        if (cat.dataset.category === category) {
          cat.classList.add('active');
        } else {
          cat.classList.remove('active');
        }
      });
    });
  });

  // Initialize: activate first group and first tab
  if (groupBtns.length) {
    groupBtns[0].click();
  } else if (categoryTabs.length) {
    categoryTabs[0].click();
  }
}

/* --- Scroll Reveal Animation --- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* --- Smooth Scroll for Anchor Links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* --- Cookie Consent --- */
function initCookieConsent() {
  const banner = document.querySelector('.cookie-consent');
  if (!banner) return;

  const consent = localStorage.getItem('cookie-consent');
  if (consent) return; // Already responded

  // Show banner after a short delay
  setTimeout(() => {
    banner.classList.add('visible');
  }, 1500);

  banner.querySelector('.cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.classList.remove('visible');
  });

  banner.querySelector('.cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'declined');
    banner.classList.remove('visible');
  });
}
