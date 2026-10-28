/* Preguntale a Berni: asistente guiado por opciones (sin campo de texto).
   Lee el árbol de data/chatbot-kb.json. Sin dependencias.
   Ver docs/03_chatbot.md para las reglas del flujo. */
(function () {
  'use strict';

  var ROOT = document.documentElement.getAttribute('data-root') || '';
  var KB_URL = ROOT + 'data/chatbot-kb.json';
  var AVATAR = ROOT + 'assets/img/berni/berni-avatar.webp';
  var kbPromise = null;

  function cargarKB() {
    if (!kbPromise) {
      kbPromise = fetch(KB_URL, { cache: 'no-cache' }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
      kbPromise.catch(function () { kbPromise = null; });
    }
    return kbPromise;
  }

  function sinMovimiento() {
    return document.documentElement.getAttribute('data-calma') === 'on' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }

  function icono(id) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'icon');
    svg.setAttribute('aria-hidden', 'true');
    var use = document.createElementNS(ns, 'use');
    use.setAttribute('href', '#' + id);
    svg.appendChild(use);
    return svg;
  }

  function Chat(raiz) {
    this.raiz = raiz;
    this.log = raiz.querySelector('.chat__log');
    this.perfil = null;     // solo en memoria de la sesión, nunca en localStorage
    this.pila = [];
    this.kb = null;
    this.ocupado = false;
    var self = this;
    var reset = raiz.querySelector('[data-chat-reset]');
    if (reset) reset.addEventListener('click', function () { self.reiniciar(true); });
  }

  Chat.prototype.iniciar = function (conFoco) {
    var self = this;
    if (this.kb) return Promise.resolve();
    return cargarKB().then(function (kb) {
      self.kb = kb;
      self.log.innerHTML = '';
      self.ir(kb.inicio, null, conFoco);
    }).catch(function () {
      self.log.innerHTML = '';
      var caja = el('div', 'chat__error');
      caja.appendChild(el('p', null, 'No pude cargar mis respuestas. Puede ser un problema de conexión.'));
      var p = el('p');
      var a = el('a', null, 'Ver el mapa del sitio');
      a.href = ROOT + 'mapa-del-sitio.html';
      p.appendChild(a);
      caja.appendChild(p);
      var btn = el('button', 'btn btn--sm', 'Reintentar');
      btn.type = 'button';
      btn.addEventListener('click', function () {
        self.log.innerHTML = '<div class="skeleton" aria-hidden="true"><span></span><span></span><span></span></div>';
        self.iniciar(true);
      });
      caja.appendChild(btn);
      self.log.appendChild(caja);
    });
  };

  Chat.prototype.reiniciar = function (conFoco) {
    if (!this.kb) return this.iniciar(conFoco);
    this.perfil = null;
    this.pila = [];
    this.log.innerHTML = '';
    this.ir(this.kb.inicio, null, conFoco);
  };

  Chat.prototype.bloquearOpciones = function (elegido) {
    var botones = this.log.querySelectorAll('.chat__opt:not(:disabled)');
    for (var i = 0; i < botones.length; i++) {
      botones[i].disabled = true;
      if (botones[i] === elegido) botones[i].classList.add('is-chosen');
    }
  };

  Chat.prototype.burbujaUsuario = function (texto) {
    var m = el('div', 'msg msg--user');
    var b = el('div', 'msg__bubble');
    var p = el('p');
    p.appendChild(el('span', 'msg__name', 'Elegiste'));
    p.appendChild(document.createTextNode(texto));
    b.appendChild(p);
    m.appendChild(b);
    this.log.appendChild(m);
  };

  Chat.prototype.ir = function (id, eleccion, conFoco) {
    var self = this;
    var nodo = this.kb.nodos[id];
    if (!nodo) return;
    if (eleccion) {
      this.bloquearOpciones(eleccion.boton);
      this.burbujaUsuario(eleccion.texto);
    }
    if (!eleccion || !eleccion.volver) this.pila.push(id);

    var pintar = function () {
      self.pintarNodo(id, nodo, conFoco);
      self.ocupado = false;
    };
    if (sinMovimiento() || !eleccion) { pintar(); return; }
    this.ocupado = true;
    var escribiendo = el('div', 'msg msg--typing');
    escribiendo.setAttribute('aria-hidden', 'true');
    var av = el('img', 'msg__avatar');
    av.src = AVATAR; av.alt = '';
    var bub = el('div', 'msg__bubble');
    bub.innerHTML = '<span></span><span></span><span></span>';
    escribiendo.appendChild(av);
    escribiendo.appendChild(bub);
    this.log.appendChild(escribiendo);
    this.bajar();
    setTimeout(function () { escribiendo.remove(); pintar(); }, 520);
  };

  Chat.prototype.pintarNodo = function (id, nodo, conFoco) {
    var self = this;
    var perfil = this.perfil || 'visita';
    var mensaje = nodo.mensaje || (nodo.mensaje_por_perfil && nodo.mensaje_por_perfil[perfil]) || '';
    var enlace = nodo.enlace || (nodo.enlace_por_perfil && nodo.enlace_por_perfil[perfil]) || null;

    var m = el('div', 'msg');
    var av = el('img', 'msg__avatar');
    av.src = AVATAR; av.alt = ''; av.width = 32; av.height = 32;
    var b = el('div', 'msg__bubble');
    b.appendChild(el('span', 'msg__name', 'Berni'));
    b.appendChild(el('p', null, mensaje));
    if (enlace) {
      var a = el('a', 'msg__link', enlace.texto);
      a.href = ROOT + enlace.href;
      a.appendChild(icono('i-arrow'));
      b.appendChild(a);
    }
    m.appendChild(av);
    m.appendChild(b);
    this.log.appendChild(m);

    var lista = el('ul', 'chat__options');
    lista.setAttribute('aria-label', 'Opciones');
    (nodo.opciones || []).forEach(function (op) {
      lista.appendChild(self.boton(op.texto, false, function (btn) {
        if (op.perfil) self.perfil = op.perfil;
        self.ir(op.destino, { texto: op.texto, boton: btn }, true);
      }));
    });
    if (id !== this.kb.inicio) {
      lista.appendChild(this.boton('Volver', true, function (btn) {
        self.pila.pop();
        var previo = self.pila[self.pila.length - 1] || self.kb.inicio;
        self.ir(previo, { texto: 'Volver', boton: btn, volver: true }, true);
      }));
      if (id !== 'menu') {
        lista.appendChild(this.boton('Inicio', true, function (btn) {
          self.ir('menu', { texto: 'Inicio', boton: btn }, true);
        }));
      }
    }
    this.log.appendChild(lista);
    this.bajar();
    if (conFoco) {
      var primero = lista.querySelector('button');
      if (primero) primero.focus({ preventScroll: true });
    }
  };

  Chat.prototype.boton = function (texto, nav, accion) {
    var self = this;
    var li = el('li');
    var btn = el('button', 'chat__opt' + (nav ? ' chat__opt--nav' : ''), texto);
    btn.type = 'button';
    btn.addEventListener('click', function () {
      if (self.ocupado || btn.disabled) return;
      accion(btn);
    });
    li.appendChild(btn);
    return li;
  };

  Chat.prototype.bajar = function () {
    var log = this.log;
    requestAnimationFrame(function () { log.scrollTop = log.scrollHeight; });
  };

  /* ---------- Instancias en página (asistente.html) ---------- */
  var enPagina = document.querySelectorAll('[data-chat]:not([data-chat-lazy])');
  for (var i = 0; i < enPagina.length; i++) new Chat(enPagina[i]).iniciar(false);

  /* ---------- Panel flotante (resto de las páginas) ---------- */
  var lanzador = document.querySelector('[data-chat-open]');
  var panel = document.getElementById('chat-panel');
  if (!lanzador || !panel) return;
  var instancia = null;
  var FOC = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function abrir(ev) {
    ev.preventDefault();
    panel.hidden = false;
    lanzador.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (!instancia) {
      instancia = new Chat(panel.querySelector('[data-chat]'));
      instancia.iniciar(true);
    }
    var ultimo = panel.querySelector('.chat__opt:not(:disabled)') || panel.querySelector('[data-chat-close]');
    ultimo.focus();
  }
  function cerrar() {
    panel.hidden = true;
    lanzador.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    lanzador.focus();
  }

  lanzador.addEventListener('click', abrir);
  panel.querySelector('[data-chat-close]').addEventListener('click', cerrar);
  panel.addEventListener('click', function (ev) { if (ev.target === panel) cerrar(); });
  panel.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') { cerrar(); return; }
    if (ev.key !== 'Tab') return;
    var f = Array.prototype.filter.call(panel.querySelectorAll(FOC), function (n) { return n.offsetParent !== null; });
    if (!f.length) return;
    if (ev.shiftKey && document.activeElement === f[0]) { ev.preventDefault(); f[f.length - 1].focus(); }
    else if (!ev.shiftKey && document.activeElement === f[f.length - 1]) { ev.preventDefault(); f[0].focus(); }
  });
})();
