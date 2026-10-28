/* YouTube facade: miniatura + botón; el iframe de youtube-nocookie se inserta
   recién al hacer clic (sin cookies ni descargas de terceros antes de tiempo). */
(function () {
  function activar(contenedor) {
    var id = contenedor.getAttribute('data-yt-id');
    var titulo = contenedor.getAttribute('data-yt-title') || 'Video';
    if (!id) return;
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
      '?autoplay=1&rel=0&cc_load_policy=1&cc_lang_pref=es&hl=es';
    iframe.title = titulo;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    contenedor.innerHTML = '';
    contenedor.appendChild(iframe);
    iframe.focus();
  }

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.yt__play');
    if (!btn) return;
    activar(btn.closest('.yt'));
  });
})();
