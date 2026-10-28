/* Comportamientos generales del sitio. Todo funciona como mejora progresiva:
   sin JS, la navegación y los contenidos siguen disponibles. */
(function () {
  'use strict';

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  /* ---------- Header con borde al hacer scroll ---------- */
  var header = $('.site-header');
  if (header) {
    var centinela = document.createElement('div');
    centinela.setAttribute('aria-hidden', 'true');
    centinela.style.cssText = 'position:absolute;top:0;height:8px;width:1px;';
    document.body.prepend(centinela);
    new IntersectionObserver(function (e) {
      header.classList.toggle('is-scrolled', !e[0].isIntersecting);
    }).observe(centinela);
  }

  /* ---------- Submenú de Recursos (desktop) ---------- */
  $$('[data-submenu-toggle]').forEach(function (btn) {
    var menu = document.getElementById(btn.getAttribute('aria-controls'));
    var item = btn.parentElement;
    function abrir(on) {
      btn.setAttribute('aria-expanded', on ? 'true' : 'false');
      menu.hidden = !on;
    }
    btn.addEventListener('click', function () { abrir(btn.getAttribute('aria-expanded') !== 'true'); });
    item.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { abrir(false); btn.focus(); }
    });
    item.addEventListener('focusout', function (ev) {
      if (!item.contains(ev.relatedTarget)) abrir(false);
    });
    document.addEventListener('click', function (ev) {
      if (!item.contains(ev.target)) abrir(false);
    });
  });

  /* ---------- Menú mobile con foco atrapado ---------- */
  var toggle = $('[data-menu-open]');
  var panel = $('#menu-mobile');
  if (toggle && panel) {
    var cerrar = $('[data-menu-close]', panel);
    var abrirMenu = function () {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      cerrar.focus();
    };
    var cerrarMenu = function (devolverFoco) {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (devolverFoco !== false) toggle.focus();
    };
    toggle.addEventListener('click', abrirMenu);
    cerrar.addEventListener('click', cerrarMenu);
    panel.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') { cerrarMenu(); return; }
      if (ev.key !== 'Tab') return;
      var f = $$(FOCUSABLE, panel).filter(function (el) { return el.offsetParent !== null; });
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    });
    panel.addEventListener('click', function (ev) {
      var a = ev.target.closest('a[href*="#"]');
      if (a) cerrarMenu(false);
    });
    window.addEventListener('resize', function () {
      var compacto = document.documentElement.classList.contains('nav-compact');
      if (window.matchMedia('(min-width: 1280px)').matches && !compacto && !panel.hidden) cerrarMenu(false);
    });
  }

  /* ---------- Hamburguesa automática si el menú no entra ----------
     El corte de 1280 px es la base (también sin JS). Por encima, se mide:
     si la marca, el menú y las herramientas se tocan, se pasa a hamburguesa. */
  var interior = $('.site-header__inner');
  var lista = $('.nav__list');
  if (interior && lista) {
    var raiz = document.documentElement;
    var marca = $('.brand', interior);
    var herramientas = $('.header-tools', interior);
    var MARGEN = 40;
    var medir = function () {
      raiz.classList.remove('nav-compact');
      if (!window.matchMedia('(min-width: 1280px)').matches) return;
      var l = lista.getBoundingClientRect();
      var finInterior = interior.getBoundingClientRect().right - parseFloat(getComputedStyle(interior).paddingRight);
      var noEntra = marca.getBoundingClientRect().right + MARGEN > l.left ||
        l.right > herramientas.getBoundingClientRect().left ||
        herramientas.getBoundingClientRect().right > finInterior + 1 ||
        interior.scrollWidth > interior.clientWidth + 1 ||
        lista.scrollWidth > lista.clientWidth + 1;
      raiz.classList.toggle('nav-compact', noEntra);
    };
    medir();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
    if ('ResizeObserver' in window) {
      var ro = new ResizeObserver(medir);
      ro.observe(interior);
      ro.observe(marca);
    }
    else window.addEventListener('resize', medir);
  }

  /* ---------- Aparición escalonada al hacer scroll ---------- */
  var revelables = $$('.reveal');
  if ('IntersectionObserver' in window && revelables.length) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revelables.forEach(function (el) { io.observe(el); });
  } else {
    revelables.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Filtro del hub de recursos ---------- */
  var filtro = $('[data-filter-group]');
  if (filtro) {
    var grilla = $('[data-filter-grid]');
    var tarjetas = $$('[data-formato]', grilla);
    var estado = $('#filtro-estado');
    var vacio = $('#filtro-vacio');
    filtro.hidden = false;
    filtro.addEventListener('click', function (ev) {
      var btn = ev.target.closest('[data-filter]');
      if (!btn) return;
      var valor = btn.getAttribute('data-filter');
      $$('[data-filter]', filtro).forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      var visibles = 0;
      tarjetas.forEach(function (t) {
        var ok = valor === 'todos' || t.getAttribute('data-formato') === valor;
        t.hidden = !ok;
        if (ok) visibles++;
      });
      grilla.classList.toggle('is-filtered', valor !== 'todos');
      vacio.hidden = visibles !== 0;
      estado.textContent = visibles === 1 ? 'Se muestra 1 recurso.' : 'Se muestran ' + visibles + ' recursos.';
    });
    var limpiar = $('[data-filter-reset]');
    if (limpiar) limpiar.addEventListener('click', function () { $('[data-filter="todos"]', filtro).click(); });
  }

  /* ---------- Secuencia de pictogramas ---------- */
  var pictos = $('[data-pictos]');
  if (pictos) {
    var barra = $('.pictos__toolbar', pictos);
    var figuras = $$('.pictos__grid .picto', pictos);
    var escenario = $('.seq__stage', pictos);
    var contador = $('.seq__count', pictos);
    var puntos = $('.seq__dots', pictos);
    var btnAnt = $('[data-seq-prev]', pictos);
    var btnSig = $('[data-seq-next]', pictos);
    var actual = 0;
    barra.hidden = false;

    figuras.forEach(function () { puntos.appendChild(document.createElement('li')); });

    function mostrar(i) {
      actual = Math.max(0, Math.min(figuras.length - 1, i));
      var copia = figuras[actual].cloneNode(true);
      var img = copia.querySelector('img');
      img.removeAttribute('loading');
      escenario.innerHTML = '';
      escenario.appendChild(copia);
      contador.textContent = 'Viñeta ' + (actual + 1) + ' de ' + figuras.length;
      btnAnt.disabled = actual === 0;
      btnSig.disabled = actual === figuras.length - 1;
      $$('li', puntos).forEach(function (p, n) { p.classList.toggle('is-on', n === actual); });
    }

    function vista(nombre) {
      pictos.setAttribute('data-view', nombre);
      $$('[data-view-btn]', pictos).forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-view-btn') === nombre ? 'true' : 'false');
      });
      if (nombre === 'secuencia') mostrar(actual);
    }

    pictos.addEventListener('click', function (ev) {
      var v = ev.target.closest('[data-view-btn]');
      if (v) vista(v.getAttribute('data-view-btn'));
      if (ev.target.closest('[data-seq-prev]')) mostrar(actual - 1);
      if (ev.target.closest('[data-seq-next]')) mostrar(actual + 1);
      if (ev.target.closest('[data-print]')) {
        document.documentElement.classList.add('imprimir-pictos');
        window.print();
      }
    });
    $('.pictos__seq', pictos).addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowRight') { ev.preventDefault(); mostrar(actual + 1); }
      if (ev.key === 'ArrowLeft') { ev.preventDefault(); mostrar(actual - 1); }
    });
    window.addEventListener('afterprint', function () {
      document.documentElement.classList.remove('imprimir-pictos');
    });
    vista('secuencia');
  }

  /* ---------- Índice lateral con sección actual ---------- */
  var toc = $('[data-toc]');
  if (toc && 'IntersectionObserver' in window) {
    var enlaces = $$('a[href^="#"]', toc);
    var secciones = enlaces.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        enlaces.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + en.target.id;
          a.classList.toggle('is-current', on);
          if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    secciones.forEach(function (s) { obs.observe(s); });
    var det = $('details', toc);
    if (det && window.matchMedia('(min-width: 1040px)').matches) det.open = true;
    toc.addEventListener('click', function (ev) {
      if (ev.target.closest('a') && det && !window.matchMedia('(min-width: 1040px)').matches) det.open = false;
    });
  }
})();
