// ===========================
//  SCOTTY GANGE - script.js
// ===========================

// Show photo if it loads, hide placeholder
const heroImg = document.querySelector('.hero-photo img');
const placeholder = document.querySelector('.photo-placeholder');

if (heroImg) {
  heroImg.addEventListener('load', () => {
    heroImg.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
  });
  heroImg.addEventListener('error', () => {
    heroImg.style.display = 'none';
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.credential, .social-link, .about-right p, .newsletter-quote, .newsletter-sub'
).forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 0.04}s`;
  observer.observe(el);
});

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.menu-close');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

toggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});