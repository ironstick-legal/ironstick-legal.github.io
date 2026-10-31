// Parallax der großen Kopfbilder: data-parallax="von bis" nennt die vertikale Bildposition in Prozent.
// Nur auf breiten Bildschirmen; ohne dieses Skript steht das Bild still.
(function () {
  var els = [].slice.call(document.querySelectorAll('[data-parallax]'));
  if (!els.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var wide = matchMedia('(min-width: 992px)'), queued = false;
  function apply() {
    queued = false;
    els.forEach(function (el) {
      if (!wide.matches) { el.style.backgroundPosition = ''; return; }
      var r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      var v = el.getAttribute('data-parallax').split(' '), from = +v[0], to = +v[1],
        top = r.top + scrollY,
        p = Math.max(0, Math.min(1, (scrollY - Math.max(0, top - 80)) / r.height));
      el.style.backgroundPosition = '50% ' + (from + (to - from) * p).toFixed(2) + '%';
    });
  }
  function request() {
    if (!queued) { queued = true; requestAnimationFrame(apply); }
  }
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request);
  apply();
})();
