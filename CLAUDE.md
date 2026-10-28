# CLAUDE.md · El aula que incluye (TIF GRDIAg, Equipo 03)

Este archivo es la memoria del proyecto para Claude Code. Leelo completo antes de cada sesión, junto con la carpeta `docs/`.

## 1. Qué estamos construyendo

Un espacio digital (sitio web multipágina, público y navegable) que integra los recursos producidos durante la cursada de la electiva **Gestión de recursos digitales con IA generativa** (Licenciatura en Tecnología Educativa, UTN FRBA). Es el entregable del **Trabajo Integrador Final (TIF)**:

- **TIF Parte I (Unidad 7):** plan de implementación en PDF, máximo 5 páginas. Entrega hasta el **12/11/2026**.
- **TIF Parte II (2° Parcial):** el sitio funcionando + PDF `TIF_II_Equipo03.pdf`. Entrega hasta el **13/11/2026** (recuperatorio 14/11).

Tema (tesina del Equipo 03): **"La inteligencia artificial generativa como soporte de inclusión en el nivel inicial"**. Caso pedagógico: sala de 5 años, proyecto de plástica "Los monstruos de Berni y Bortusk Leer", Estudiante A (caso ficticio y anonimizado, 5 años, TEA).

Nombre del sitio: **El aula que incluye**. Bajada: *IA generativa como soporte de inclusión en el nivel inicial*.

Equipo 03: Argüello, Clara · Costas, Silvia · Pedaci, Lourdes.

## 2. Reglas no negociables

1. **Sin raya larga (em dash, el carácter U+2014)** en ningún texto del sitio ni de los documentos. Tampoco la raya media (U+2013) como signo de puntuación. Reformulá con comas, paréntesis o dos puntos. Antes de cada commit corré: `LC_ALL=C.UTF-8 grep -rnP '\x{2014}|\x{2013}' --include=*.html --include=*.md --include=*.json --include=*.js .` y debe devolver vacío.
2. **Español rioplatense**, registro académico cálido y claro. `lang="es-AR"` en todas las páginas.
3. **APA 7ma edición** en todas las citas y referencias. Conjunción "y" entre autores, "et al." desde tres autores, número de página o sección en las citas directas. Nada de frases que "anuncien" o elogien a la fuente antes de citarla: se va directo al concepto y la cita va entre paréntesis.
4. **Créditos en cada recurso**: herramientas de IA utilizadas + autoras responsables + cita APA del recurso. La cátedra aclara: *sin créditos, el trabajo no se califica*.
5. **Privacidad de las infancias**: ningún nombre real, diagnóstico identificable, institución, foto ni dato de niñas o niños reales. El Estudiante A es un caso ficticio y se nombra así.
6. **No reproducir obras de terceros sin acreditar.** Las obras de Antonio Berni y de Bortusk Leer son de autores reales: no se suben imágenes de sus obras al sitio; se los menciona y, si hace falta, se enlaza a fuentes oficiales con su referencia APA. "Berni" (el monstruo azul) es un personaje propio del equipo.
7. **Transparencia de IA**: todo recurso sintético se rotula como "Generado con IA generativa y validado por el Equipo 03".
8. **No es one page**: múltiples páginas HTML con navegación coherente (requisito explícito de la cátedra).
9. **Mobile first y accesible (WCAG 2.1 AA)**: ver `docs/05_QA.md`.
10. Firma autoral en materiales: "Lourdes Pedaci" (nunca con apodo entre paréntesis).

## 3. Stack y hosting

- **HTML5 + CSS + JavaScript vanilla**, sin frameworks ni build step. Hosting gratuito en **GitHub Pages** (repositorio público).
- Repo sugerido: `el-aula-que-incluye` → URL `https://<usuario>.github.io/el-aula-que-incluye/`.
- Rutas **relativas** en todos los enlaces y assets (el sitio vive en un subdirectorio).
- Header y footer escritos en cada HTML (sin inyección por JS, para que la navegación funcione aunque falle JS). Si se cambian, se cambian en todas las páginas en la misma tarea.
- Dependencias externas permitidas: Google Fonts. Nada más sin consultarme.
- El asistente (U6) es guiado por opciones, sin campo de texto libre: ver `docs/03_chatbot.md`.
- YouTube siempre por `youtube-nocookie.com` y con patrón "facade" (miniatura + botón; el iframe se carga al hacer clic).
- El diseño visual (paleta, tipografías, estilo) **te lo paso yo en el momento**. Hasta entonces, trabajá con tokens CSS neutros en `:root` para poder cambiarlos en un solo lugar.

## 4. Estructura de archivos

```
/
├── index.html                  Inicio
├── proyecto.html               El proyecto (área, justificación, público, marcos)
├── recursos/
│   ├── index.html              Hub de recursos
│   ├── historia-social.html    U2 · Texto con IA + pictogramas
│   ├── animacion.html          U3 · Animación "Los monstruos de Berni"
│   ├── podcast.html            U4 · Podcast "El aula que incluye"
│   └── video.html              U5 · Video "Adaptar para incluir"
├── asistente.html              U6 · Chatbot "Preguntale a Berni"
├── en-la-sala.html             Guía de uso para docentes
├── etica.html                  Uso responsable de la IA + impacto
├── creditos.html               Créditos por recurso + referencias APA + declaración de uso de IA
├── mapa-del-sitio.html         Sitemap visual (requisito TIF II)
├── 404.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/  (tokens.css, base.css, components.css)
│   ├── js/   (main.js, calma.js, youtube-facade.js, chatbot.js)
│   ├── img/  (historia-social/, berni/, og/, iconos)
│   └── audio/ (podcast-el-aula-que-incluye.mp3)
├── data/
│   ├── recursos.json           Fuente única de metadatos y créditos de cada recurso
│   └── chatbot-kb.json         Base de conocimiento del asistente
└── docs/                       Especificaciones (no se publica en el menú)
```

## 5. Documentación de referencia (leer antes de codificar)

- `docs/01_arquitectura.md` · mapa del sitio, plantillas, navegación, flujos, componentes.
- `docs/02_contenidos.md` · textos, URLs, créditos, transcripciones, citas y referencias APA.
- `docs/03_chatbot.md` · especificación del asistente y de su base de conocimiento.
- `docs/04_documentos_TIF.md` · especificación de los PDF del TIF I y TIF II.
- `docs/05_QA.md` · criterios de aceptación, checklist de accesibilidad y matriz contra la rúbrica.
- `docs/06_pendientes.md` · materiales que faltan y decisiones abiertas. Si algo falta, **dejá un marcador visible `[PENDIENTE: ...]`** y no inventes datos.

## 6. Forma de trabajo

- Trabajá por fases (ver `PROMPTS.md`). Al terminar cada fase: resumí qué cambió, corré el checklist de la fase y esperá mi OK.
- No inventes URLs, fechas, nombres de profesores ni herramientas. Todo dato sale de `docs/02_contenidos.md` o de `data/recursos.json`.
- Commits chicos y descriptivos, en español.
