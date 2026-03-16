/**
 * typewriter.js
 * Cycles through role titles with a typing/deleting effect.
 * No dependencies — pure vanilla JS.
 */
(function () {
  const roles = [
    'SOC Analyst',
    'Threat Hunter',
    'Incident Responder',
    'Blue Teamer',
    'Purple Teamer',
  ];

  const el       = document.getElementById('typewriter');
  if (!el) return;

  let roleIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;

  const TYPING_SPEED  = 90;   // ms per character typed
  const DELETE_SPEED  = 50;   // ms per character deleted
  const PAUSE_AFTER   = 2000; // ms to hold the completed word
  const PAUSE_BEFORE  = 400;  // ms before starting to type next word

  function tick() {
    const current = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting  = false;
        roleIndex   = (roleIndex + 1) % roles.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    } else {
      charIndex++;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, TYPING_SPEED);
    }
  }

  // Small delay so the hero animation completes first
  setTimeout(tick, 800);
})();
