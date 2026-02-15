/**
 * A Place Beyond Time — Main script
 * Scroll reveal, smooth scroll, form handling, footer year
 */

(function () {
  'use strict';

  // ----- Footer year -----
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Scroll reveal -----
  var revealEls = document.querySelectorAll('.reveal');
  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  revealEls.forEach(function (el) {
    observer.observe(el);
  });

  // ----- Contact form -----
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');
      var valid = true;

      [name, email, message].forEach(function (field) {
        if (!field) return;
        if (field.hasAttribute('required') && !field.value.trim()) {
          valid = false;
          field.setAttribute('aria-invalid', 'true');
        } else {
          field.removeAttribute('aria-invalid');
        }
      });

      if (!valid) {
        return;
      }

      // Replace with your form endpoint (e.g. Formspree, Netlify Forms, or your backend)
      // Example: fetch(form.action, { method: 'POST', body: new FormData(form) });
      // For static GitHub Pages, use a service like Formspree:
      // <form action="https://formspree.io/f/YOUR_ID" method="POST">
      alert('Thanks for your message! I\'ll get back to you soon.');
      form.reset();
    });
  }

  // ----- Optional: smooth scroll for anchor links (polyfill for older browsers) -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
