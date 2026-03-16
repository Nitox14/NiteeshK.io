/**
 * animations.js
 * Scroll-triggered reveal animations and skill bar fills.
 * Uses IntersectionObserver — no dependencies.
 */
(function () {

  // ── Scroll Reveal ──────────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');

  if (!revealEls.length) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // only animate once
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // ── Skill Bar Fill ─────────────────────────────────────────────
  const skillFills = document.querySelectorAll('.skill__fill');

  if (!skillFills.length) return;

  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target   = entry.target;
          const widthPct = target.dataset.width || '0';
          // Slight delay so bar fill fires after card reveal
          setTimeout(() => {
            target.style.width = widthPct + '%';
          }, 200);
          barObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillFills.forEach((fill) => barObserver.observe(fill));

})();
