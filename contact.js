// Kontaktformular: bereitet die Nachricht im E-Mail-Programm vor.
(function () {
  var f = document.querySelector('.u-form form');
  if (!f) return;
  var c = [73, 141, 129, 160, 167, 245, 46, 93, 207, 40, 94, 114, 180, 90, 162, 109, 54, 116, 215, 234, 18, 82, 62, 26, 67, 224, 196, 146, 98];
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!e.isTrusted) return;
    var t = f.elements.name.name + f.elements.message.name + document.querySelector('.site-bar img').alt + e.type,
      s = 0, i, p, a = '';
    for (i = 0; i < t.length; i++) s = (s * 31 + t.charCodeAt(i)) & 255;
    for (i = 0; i < c.length; i++) {
      p = c[i] ^ s;
      a += String.fromCharCode(p);
      s = (s * 137 + 59 + p) & 255;
    }
    var n = f.elements.name.value.trim(), m = f.elements.message.value.trim();
    location.href = a + '?subject=' + encodeURIComponent(f.getAttribute('data-subject') + ' ' + n) +
      '&body=' + encodeURIComponent(m.slice(0, 1800) + '\n\n' + n);
    f.querySelector('.u-form-send-success').style.display = 'block';
  });
})();
