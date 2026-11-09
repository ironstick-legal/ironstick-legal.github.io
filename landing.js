// Einblend-Animationen und Zähler der Landing-Seite. Ohne dieses Skript ist alles sofort sichtbar.
(function () {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function count(el, ms) {
    // Zusatz hinter der Zahl („200+") bleibt stehen.
    var m = el.textContent.trim().match(/^(\d+)(.*)$/), t0 = null;
    if (!m) return;
    var end = parseInt(m[1], 10), tail = m[2];
    (function step(t) {
      t0 = t0 || t;
      var p = Math.min((t - t0) / ms, 1);
      el.textContent = Math.round(end * p) + tail;
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  // Der Einflug beginnt nie außerhalb des Fensters, sonst ist der Titel links oder rechts abgeschnitten.
  function keepInView(el) {
    var p = '--animation-custom_in-translate_x', x = parseFloat(getComputedStyle(el).getPropertyValue(p));
    if (!x) return;
    var r = el.getBoundingClientRect(), w = document.documentElement.clientWidth;
    if (el.parentElement.closest('[data-animation-name]')) x = 0;
    else if (x < 0) x = -Math.min(-x, Math.max(0, r.left - 8));
    else x = Math.min(x, Math.max(0, w - r.right - 8));
    el.style.setProperty(p, x + 'px');
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
      keepInView(el);
      el.classList.add('lp-' + name);
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('[data-animation-name]').forEach(function (el) {
    if (el.getAttribute('data-animation-name') !== 'counter') el.classList.add('lp-wait');
    io.observe(el);
  });
})();
