/* ============================================================
   Animal Care Hospitals — Main Script
   Tab navigation, image overlay, scroll-to-top, reveal
   ============================================================ */

// ── Scroll-to-Top ────────────────────────────────────────────
const myBtn = document.getElementById('myBtn');
if (myBtn) {
  window.addEventListener('scroll', () => {
    myBtn.style.display = (window.scrollY > 250) ? 'block' : 'none';
  });
}
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Image Overlay ────────────────────────────────────────────
function enlargeImage(img) {
  const overlay   = document.getElementById('imageOverlay');
  const overlayImg = document.getElementById('overlayImg');
  if (!overlay || !overlayImg) return;
  overlayImg.src = img.src;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeImage() {
  const overlay = document.getElementById('imageOverlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeImage();
});

// ── Reveal on Scroll ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
