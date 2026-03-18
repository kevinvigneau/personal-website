// ── Nav: scrolled border + active link highlighting ──────────────────────────
const nav      = document.getElementById('nav');
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  // Add border shadow when scrolled
  nav.classList.toggle('scrolled', window.scrollY > 20);

  // Highlight nav link for the section currently in view
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });


// ── Mobile nav toggle ─────────────────────────────────────────────────────────
const navToggle    = document.getElementById('nav-toggle');
const navLinksList = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
});

// Close mobile nav when any link is tapped
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksList.classList.remove('open');
  });
});
