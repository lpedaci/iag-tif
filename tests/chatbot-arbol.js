#!/usr/bin/env node
/* Valida el árbol del asistente "Preguntale a Berni".
   Uso: node tests/chatbot-arbol.js
   Verifica: destinos existentes, nodos huérfanos, nodos sin salida,
   enlaces a archivos del sitio, anclas existentes y ausencia de raya larga. */
'use strict';
const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const kb = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data/chatbot-kb.json'), 'utf8'));
const nodos = kb.nodos;
const errores = [];
const avisos = [];

if (!nodos[kb.inicio]) errores.push(`El nodo de inicio "${kb.inicio}" no existe.`);

// 1. Destinos existentes y alcanzabilidad
const alcanzados = new Set([kb.inicio, 'menu']); // el motor siempre ofrece "Inicio" (menu)
for (const [id, n] of Object.entries(nodos)) {
  const ops = n.opciones || [];
  if (ops.length === 0) errores.push(`Nodo "${id}" sin opciones: la conversación quedaría sin salida.`);
  if (ops.length > 6) avisos.push(`Nodo "${id}" tiene ${ops.length} opciones (el máximo sugerido es 6).`);
  for (const op of ops) {
    if (!nodos[op.destino]) errores.push(`Nodo "${id}": la opción "${op.texto}" apunta a "${op.destino}", que no existe.`);
    alcanzados.add(op.destino);
  }
  if (!n.mensaje && !n.mensaje_por_perfil) errores.push(`Nodo "${id}" sin mensaje.`);
}

// 2. Huérfanos
for (const id of Object.keys(nodos)) {
  if (!alcanzados.has(id)) errores.push(`Nodo huérfano: "${id}" no es destino de ninguna opción.`);
}

// 3. Alcanzables desde el inicio (recorrido en anchura)
const visto = new Set([kb.inicio]);
const cola = [kb.inicio];
while (cola.length) {
  const id = cola.shift();
  for (const op of (nodos[id] && nodos[id].opciones) || []) {
    if (!visto.has(op.destino) && nodos[op.destino]) { visto.add(op.destino); cola.push(op.destino); }
  }
}
for (const id of Object.keys(nodos)) if (!visto.has(id)) errores.push(`Nodo "${id}" no se alcanza desde el inicio.`);

// 4. Perfiles completos en mensaje_por_perfil y enlace_por_perfil
const perfiles = (nodos[kb.inicio].opciones || []).map(o => o.perfil).filter(Boolean);
for (const [id, n] of Object.entries(nodos)) {
  for (const campo of ['mensaje_por_perfil', 'enlace_por_perfil']) {
    if (!n[campo]) continue;
    for (const p of perfiles) if (!n[campo][p]) errores.push(`Nodo "${id}": falta ${campo}.${p}.`);
  }
}

// 5. Enlaces a archivos existentes y anclas existentes
const enlaces = [];
for (const [id, n] of Object.entries(nodos)) {
  if (n.enlace) enlaces.push([id, n.enlace.href]);
  if (n.enlace_por_perfil) for (const e of Object.values(n.enlace_por_perfil)) enlaces.push([id, e.href]);
}
for (const [id, href] of enlaces) {
  const [archivo, ancla] = href.split('#');
  const ruta = path.join(RAIZ, archivo);
  if (!fs.existsSync(ruta)) { errores.push(`Nodo "${id}": el enlace "${href}" apunta a un archivo inexistente.`); continue; }
  if (ancla) {
    const html = fs.readFileSync(ruta, 'utf8');
    if (!new RegExp(`id="${ancla}"`).test(html)) errores.push(`Nodo "${id}": el ancla "#${ancla}" no existe en ${archivo}.`);
  }
}

// 6. Sin raya larga (U+2014) ni raya media (U+2013)
const texto = JSON.stringify(kb);
const RAYAS = new RegExp('[' + String.fromCharCode(0x2014) + String.fromCharCode(0x2013) + ']');
if (RAYAS.test(texto)) errores.push('Hay raya larga o raya media en chatbot-kb.json.');

// 7. Profundidad: desde el menú, máximo 3 elecciones hasta cada respuesta
const prof = { menu: 0 };
const c2 = ['menu'];
while (c2.length) {
  const id = c2.shift();
  for (const op of nodos[id].opciones || []) {
    if (prof[op.destino] === undefined) { prof[op.destino] = prof[id] + 1; c2.push(op.destino); }
  }
}
for (const [id, d] of Object.entries(prof)) if (d > 3) avisos.push(`Nodo "${id}" está a ${d} elecciones del menú (máximo 3).`);

const total = Object.keys(nodos).length;
console.log(`Árbol "${kb.meta.nombre}": ${total} nodos, ${enlaces.length} enlaces revisados.`);
avisos.forEach(a => console.log('  aviso: ' + a));
if (errores.length) {
  errores.forEach(e => console.error('  ERROR: ' + e));
  console.error(`\n${errores.length} error(es).`);
  process.exit(1);
}
console.log('OK: sin destinos rotos, sin huérfanos, enlaces y anclas válidos, sin raya larga.');
