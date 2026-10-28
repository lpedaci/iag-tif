# 03 · Asistente "Preguntale a Berni" (recurso de la Unidad 6)

## 1. Decisión del equipo
Berni es un **asistente guiado**: una guía que orienta el uso del sitio. **No tiene campo de texto libre.** La persona elige entre opciones (botones) y Berni responde según lo elegido, siguiendo un árbol de conversación diseñado por el equipo. Toda respuesta está validada y apunta a una página del sitio.

Por qué así (para justificar en el PDF del TIF II y en la página del asistente):
- **Privacidad por diseño:** si no se puede escribir, nadie puede cargar nombres ni diagnósticos de chicos. Es coherente con lo que el sitio predica.
- **Confiabilidad:** no inventa respuestas ni se cae por límites de un servicio externo el día de la corrección.
- **Accesibilidad:** elegir es más fácil que redactar una pregunta (lectura, motricidad, lengua de origen), en línea con el DUA (implicación y acción y expresión).
- **Base teórica:** el material de la Unidad 6 plantea el diseño de chatbots en pasos: definir objetivos, elegir plataforma, diseñar el flujo conversacional, entrenar, integrar, personalizar y hacer pruebas piloto. Este asistente pone el peso en el flujo conversacional y en las pruebas.
- **IA generativa en la producción:** los textos de las respuestas se redactaron con apoyo de IA generativa (Claude) y el equipo los validó contra los contenidos del sitio. Se declara en los créditos.

## 2. Objetivo y alcance
Orientar a docentes, familias y evaluadores: por dónde empezar, qué recurso usar y para qué, cómo usarlo en la sala, qué significan los conceptos clave (historia social, DUA, TPACK, ADKAR) y cómo se usó la IA. Berni no da diagnósticos ni orientación clínica, no reemplaza a la docente ni a profesionales y no pide datos.

## 3. Flujo conversacional
Archivo: `data/chatbot-kb.json` (árbol de nodos).

```
inicio: "¿Quién sos?"
├── Soy docente ─────────┐
├── Soy de una familia ──┼──► menu (con recomendación según perfil)
├── Vengo a evaluar ─────┤
└── Solo estoy mirando ──┘
menu: "¿Qué querés hacer?"
├── Por dónde empiezo          → recomendación según perfil
├── Ver los recursos           → elegir recurso → ficha breve de cada uno + enlace
├── Usar los recursos en sala  → antes / durante / después
├── Entender un concepto       → historia social · DUA · TPACK · ADKAR
├── Cómo usamos la IA          → herramientas · ética · privacidad
└── Quiénes somos / créditos
```

Reglas:
- Cada nodo tiene: `mensaje` (1 a 3 oraciones), `enlace` opcional ("Ir a ...") y `opciones` (2 a 6 botones).
- El motor agrega siempre, al final, "↩ Volver" (al nodo anterior) y "Inicio" (al menú), salvo en el nodo inicial.
- El perfil elegido se guarda en memoria de la sesión (variable, no `localStorage`) y solo cambia el texto del nodo "Por dónde empiezo" (`mensaje_por_perfil`).
- Profundidad máxima: 3 elecciones desde el menú hasta una respuesta.
- Cualquier nodo con `enlace` muestra un botón-enlace a la página; si el usuario ya está en esa página, se muestra igual (no rompe nada).
- Los `href` del JSON son relativos a la raíz del sitio; el motor les agrega `../` cuando la página actual está dentro de `recursos/`.

## 4. Interfaz
- **Página `asistente.html`** con el asistente a ancho completo y un texto breve: qué es, qué no es, por qué no tiene campo de texto.
- **Botón flotante** "Preguntale a Berni" en el resto de las páginas, que abre un panel lateral (desktop) o a pantalla completa (mobile).
- Mensajes de Berni con su avatar (`assets/img/berni/berni-referencia.png` recortada en círculo, `alt=""` porque es decorativa y el nombre ya está en texto).
- Las elecciones del usuario quedan en el historial como burbuja propia ("Elegiste: Soy docente").
- Opciones como `<button>` dentro de una lista; al responder, las opciones anteriores se deshabilitan y el foco pasa al primer botón nuevo.
- Historial con `role="log"` y `aria-live="polite"`. Botón "Reiniciar conversación".
- Respeta el Modo calma: sin animación de "escribiendo" ni transiciones.
- Sin JS: se muestra un `<noscript>` con la lista de preguntas y respuestas en texto (generada en el HTML a partir del mismo JSON durante el desarrollo).

## 5. Pruebas
- Script `tests/chatbot-arbol.js` (Node): verifica que todo `destino` exista, que no haya nodos huérfanos ni ciclos sin salida, que todo `enlace` apunte a un archivo existente y que ningún texto tenga raya larga.
- Prueba piloto con 3 personas (docente, familia, alguien ajeno): una tarea a cada una ("encontrá cómo usar la historia social en la sala") y registro de clics y tiempo. Resultado al PDF del TIF II.

## 6. Créditos del asistente
Autoras: Equipo 03. Diseño del flujo conversacional: Equipo 03. Redacción de respuestas: con apoyo de Claude (Anthropic), validada por el equipo. Programación del widget: con apoyo de Claude Code. Cita APA en `02_contenidos.md` C5.
