/**
 * main.js
 * Navigation behavior: scroll shadow, active section highlighting,
 * mobile burger menu toggle.
 */
(function () {

  const nav      = document.getElementById('nav');
  const burger   = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  const links    = navLinks ? navLinks.querySelectorAll('a[href^="#"]') : [];

  // ── Nav scroll shadow ──────────────────────────────────────────
  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    updateActiveLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Active link highlighting ───────────────────────────────────
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    let current = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) {
        current = sec.id;
      }
    });

    links.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  }

  // ── Mobile burger menu ─────────────────────────────────────────
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    links.forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
      }
    });
  }

  // ── Smooth scroll for anchor links ────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Run once on load
  onScroll();

})();
