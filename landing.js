// Einblend-Animationen und Zähler der Landing-Seite. Ohne dieses Skript ist alles sofort sichtbar.
(function () {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function count(el, ms) {
    var end = parseInt(el.textContent, 10), t0 = null;
    if (isNaN(end)) return;
    (function step(t) {
      t0 = t0 || t;
      var p = Math.min((t - t0) / ms, 1);
      el.textContent = Math.round(end * p);
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      var el = e.target, name = el.getAttribute('data-animation-name'),
        ms = parseInt(el.getAttribute('data-animation-duration'), 10) || 1000;
      el.classList.remove('lp-wait');
      if (name === 'counter') return count(el, ms);
      el.style.animationDuration = ms + 'ms';
      el.classList.add('lp-' + name);
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('[data-animation-name]').forEach(function (el) {
    if (el.getAttribute('data-animation-name') !== 'counter') el.classList.add('lp-wait');
    io.observe(el);
  });
})();
