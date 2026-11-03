// Idioma de la página: ?lang=es|en  >  elección guardada  >  idioma del navegador  >  inglés
(function () {
  var html = document.documentElement;
  var supported = ['en', 'es'];
  var fromQuery = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try { saved = localStorage.getItem('buras.web.lang'); } catch (e) {}
  var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  var lang = [fromQuery, saved, nav].find(function (l) { return supported.indexOf(l) !== -1; }) || 'en';

  function apply(l) {
    html.setAttribute('data-lang', l);
    html.setAttribute('lang', l);
    var t = document.querySelector('meta[name="title-' + l + '"]');
    if (t) document.title = t.content;
  }
  apply(lang);

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-set]');
    if (!btn) return;
    var l = btn.getAttribute('data-set');
    apply(l);
    try { localStorage.setItem('buras.web.lang', l); } catch (e) {}
  });
})();
