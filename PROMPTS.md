# Prompts para Claude Code, por fase

Copiá cada bloque en Claude Code, en orden. Esperá a que termine, revisá y recién ahí pasá al siguiente. Cada fase cierra con su checklist.

---

## Fase 0 · Arranque y lectura
```
Leé CLAUDE.md, PROMPTS.md, todo docs/ y data/. No escribas código todavía.
Devolveme: (1) un resumen de 10 líneas de lo que vas a construir, (2) la lista de dudas o contradicciones que encuentres entre los documentos, (3) la lista de [PENDIENTE] que bloquean alguna fase.
```

## Fase 1 · Estructura y sistema de diseño
```
Creá la estructura de carpetas de CLAUDE.md sección 4 con páginas vacías pero válidas (head completo, header, breadcrumb, main, footer) y rutas relativas.
Te paso en este chat las imágenes de referencia del diseño visual. Analizalas y describime primero qué ves (paleta con HEX aproximados, tipografías probables, estilo de componentes, espaciado) y esperá mi OK antes de codificar.
Después traducilo a tokens en assets/css/tokens.css (colores, tipografía, espaciado, radios, sombras) con una variante para data-calma="on". Verificá contraste AA de cada par texto/fondo y mostrame la tabla de contrastes.
Implementá header con menú y submenú accesibles, menú mobile, breadcrumb, footer y botón Modo calma (docs/01 sección 6.6).
Checklist: navegación completa por teclado, 360 px sin scroll horizontal, grep de raya larga vacío.
```

## Fase 2 · Páginas institucionales
```
Completá index.html, proyecto.html, en-la-sala.html, etica.html, creditos.html y mapa-del-sitio.html con los contenidos de docs/02 (secciones A, B, D, E, F, G) y las plantillas de docs/01 sección 5.
Redactá en prosa, español rioplatense académico, APA 7, sin raya larga. No inventes datos: si falta algo, marcá [PENDIENTE: ...].
La figura TPACK va en SVG inline. El mapa del sitio es un árbol HTML con listas anidadas más los 4 flujos de docs/01 sección 4.
Generá sitemap.xml, robots.txt y 404.html.
Checklist: toda cita tiene su referencia en creditos.html y viceversa (mostrame la tabla de correspondencia).
```

## Fase 3 · Recorte de pictogramas y assets
```
Recortá assets/img/historia-social-pictogramas.png (1536 x 1024, grilla 3 x 3 con bordes redondeados) en 9 imágenes individuales sin el borde exterior de la grilla. Detectá los límites de cada viñeta analizando la imagen, no con medidas fijas. Exportá a assets/img/historia-social/01.webp ... 09.webp y PNG de respaldo. Mostrame una hoja de contacto con las 9 para revisar.
Optimizá el resto de las imágenes (WebP, tamaños responsive) y generá favicon e imagen Open Graph a partir de la imagen de Berni.
```

## Fase 4 · Páginas de recursos
```
Construí recursos/index.html (hub con filtro por formato) y las 4 páginas de recurso con la plantilla de docs/01 sección 5.4 y los datos de docs/02 sección C y data/recursos.json.
Componentes: youtube-facade (youtube-nocookie, subtítulos activados por defecto), audio-player nativo con transcripción, pictogram-sequence (vista secuencia y vista grilla, botón imprimir con hoja de estilos de impresión), credit-card en cada recurso con el contenido escrito en el HTML.
Incluí navegación anterior/siguiente en el orden U2, U3, U4, U5, Asistente.
Checklist: cada página tiene créditos, alternativa accesible y "Cómo usarlo en la sala"; los videos y el audio se reproducen.
```

## Fase 5 · Asistente
```
Implementá el asistente guiado según docs/03_chatbot.md: assets/js/chatbot.js en vanilla JS, sin dependencias, leyendo data/chatbot-kb.json (árbol de nodos). No hay campo de texto: solo botones de opciones. El motor agrega "Volver" e "Inicio", maneja mensaje_por_perfil y enlace_por_perfil, y resuelve los href relativos a la raíz del sitio (las páginas dentro de recursos/ necesitan el prefijo ../). Accesible: role="log", aria-live="polite", foco en la primera opción nueva, opciones anteriores deshabilitadas, compatible con Modo calma.
Usalo en asistente.html a ancho completo y como panel desde el botón flotante del resto de las páginas.
Generá tests/chatbot-arbol.js que valide destinos, nodos huérfanos, enlaces existentes y ausencia de raya larga, y el <noscript> con preguntas y respuestas en texto.
```

## Fase 6 · QA integral
```
Corré todo docs/05_QA.md. Validá HTML, buscá enlaces rotos, corré Lighthouse mobile en cada página, revisá accesibilidad con axe (npx @axe-core/cli) y los grep de raya larga y de [PENDIENTE].
Entregame un informe en tests/informe-qa.md con: requisito, resultado, evidencia, acción. Corregí lo que sea corregible y marcá lo que dependa de mí.
```

## Fase 7 · Publicación
```
Inicializá git, hacé commits por fase y prepará la publicación en GitHub Pages desde la rama main (raíz). Decime los pasos exactos que tengo que hacer en GitHub (crear repo público, activar Pages).
Una vez publicado, corré de nuevo la verificación de enlaces contra la URL pública y sacá capturas del homepage en 1440 px y en 390 px con Playwright (tests/capturas/).
```

## Fase 8 · Documentos del TIF
```
Siguiendo docs/04_documentos_TIF.md, generá con python-docx TIF_I_Equipo03.docx y TIF_II_Equipo03.docx en entregas/.
TIF I: máximo 5 páginas totales; convertí a PDF con LibreOffice para contar páginas y ajustá hasta que entre. Encabezado con nombre del trabajo y equipo, pie con "Página X de Y".
TIF II: incluí la URL pública, QR, las capturas de la Fase 7, la descripción de cada recurso, la tabla de créditos idéntica a creditos.html y la reflexión final.
Redacción en prosa, APA 7, sin raya larga. Dejá [PENDIENTE] visible donde falten datos de carátula.
```

## Fase 9 · Revisión final
```
Hacé una pasada final como revisor de la cátedra: recorré el sitio publicado con los 4 flujos de docs/01 sección 4 y la rúbrica (creatividad y uso adecuado de la IA, calidad y funcionalidad, claridad y coherencia, cumplimiento de normativas). Listame los 5 puntos más débiles y proponé la corrección de cada uno.
```
