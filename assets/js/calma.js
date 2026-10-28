/* Modo calma: se carga en el <head> (sin defer) para aplicar la preferencia
   antes de pintar y evitar un destello de la paleta saturada. */
(function () {
  var KEY = 'aula-calma';
  var root = document.documentElement;
  root.classList.add('js');

  function leer() {
    try { return localStorage.getItem(KEY) === 'on'; } catch (e) { return false; }
  }
  function guardar(on) {
    try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (e) { /* sin almacenamiento: la preferencia dura solo esta visita */ }
  }
  function aplicar(on) {
    if (on) root.setAttribute('data-calma', 'on');
    else root.removeAttribute('data-calma');
    var botones = document.querySelectorAll('[data-calma-toggle]');
    for (var i = 0; i < botones.length; i++) botones[i].setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  aplicar(leer());

  document.addEventListener('DOMContentLoaded', function () {
    aplicar(root.getAttribute('data-calma') === 'on');
    document.addEventListener('click', function (ev) {
      var btn = ev.target.closest('[data-calma-toggle]');
      if (!btn) return;
      var on = root.getAttribute('data-calma') !== 'on';
      aplicar(on);
      guardar(on);
      var aviso = document.getElementById('calma-aviso');
      if (aviso) aviso.textContent = on ? 'Modo calma activado: menos color y sin movimiento.' : 'Modo calma desactivado.';
    });
  });
})();
