/* ============================================================
   main.js — Abhis Personal Hub
   Lightweight vanilla JS; no dependencies.
   ============================================================ */

'use strict';

// ── Year ─────────────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Link table — update these with your real URLs ─────────────
const LINKS = {
  'btn-portfolio': 'https://abhis-portfolio-lake.vercel.app/',
  'btn-desk':      'https://abhis-desk-site.vercel.app/',
  'btn-github':    'https://github.com/abhinavjha928-source',
  'btn-discord':   'https://discord.com/users/723681043336658966',
  'btn-contact':   'mailto:abhinavjha928@gmail.com',
};

Object.entries(LINKS).forEach(([id, url]) => {
  const el = document.getElementById(id);
  if (el) {
    el.href = url;
    // Keep mailto links in same tab, external links in new tab
    if (!url.startsWith('mailto:')) {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  }
});

// ── Stagger button entrance ────────────────────────────────────
// Each button fades in slightly after the card, with a small cascade delay.
const btns = document.querySelectorAll('.link-btn');
btns.forEach((btn, i) => {
  btn.style.opacity = '0';
  btn.style.transform = 'translateY(10px)';
  btn.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  // Trigger after card fade-in (≈750ms)
  setTimeout(() => {
    btn.style.opacity = '';
    btn.style.transform = '';
    // Remove inline styles after animation so CSS hover works normally
    setTimeout(() => {
      btn.style.opacity = '';
      btn.style.transform = '';
      btn.style.transition = '';
    }, 450);
  }, 750 + i * 80);
});
