(function () {
  var btn = document.getElementById('menuBtn');
  if (!btn) return;
  var nav = document.getElementById(btn.getAttribute('aria-controls') || 'site-nav');
  if (!nav) return;
  var wrap = btn.closest('.nav') || btn.parentElement;
  var bp = parseInt(btn.getAttribute('data-breakpoint') || '900', 10);
  function isDesktop() {
    return window.matchMedia('(min-width:' + (bp + 1) + 'px)').matches;
  }
  function setOpen(open) {
    if (isDesktop()) open = false;
    wrap.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });
  window.addEventListener('resize', function () {
    if (isDesktop()) setOpen(false);
  });
})();
