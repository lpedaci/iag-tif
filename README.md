# El aula que incluye

**IA generativa como soporte de inclusión en el nivel inicial.**

Espacio digital del Equipo 03 para el Trabajo Integrador Final (TIF) de la materia *Gestión de recursos digitales con IA generativa* (GRDIAg), Licenciatura en Tecnología Educativa, Universidad Tecnológica Nacional, Facultad Regional Buenos Aires. Cursada de agosto a noviembre de 2026.

**Sitio publicado:** https://lpedaci.github.io/iag-tif/

Un mismo contenido, el proyecto de plástica de sala de 5 años “Los monstruos de Berni y Bortusk Leer”, contado en cinco formatos para que cada niña y cada niño tenga una puerta de entrada: texto con pictogramas, animación, audio, video y un asistente guiado.

---

## Recursos

| # | Recurso | Unidad | Página | Formato en el sitio |
|---|---|---|---|---|
| 1 | Historia social “Hoy creamos nuestro monstruo” | U2 | [`recursos/historia-social.html`](recursos/historia-social.html) | Texto, secuencia de 9 pictogramas, impresión A4 apaisada |
| 2 | Animación “Los monstruos de Berni” (1:18) | U3 | [`recursos/animacion.html`](recursos/animacion.html) | YouTube embebido + audiodescripción |
| 3 | Podcast “El aula que incluye” (2:58) | U4 | [`recursos/podcast.html`](recursos/podcast.html) | MP3 propio + transcripción |
| 4 | Video “Adaptar para incluir” (2:04) | U5 | [`recursos/video.html`](recursos/video.html) | YouTube embebido + subtítulos + transcripción |
| 5 | Asistente “Preguntale a Berni” | U6 | [`asistente.html`](asistente.html) + botón flotante | Chatbot guiado por opciones |
| 6 | Mapa del sitio | TIF II | [`mapa-del-sitio.html`](mapa-del-sitio.html) + [`sitemap.xml`](sitemap.xml) | Árbol HTML navegable |

Cada página de recurso tiene la misma estructura: para qué y para quién, el recurso en una zona de baja estimulación, alternativa accesible, cómo se produjo, cómo usarlo en la sala, créditos y navegación anterior/siguiente.

## Estructura

```
/
├── index.html                  Inicio
├── proyecto.html               Área, justificación, público, caso, marcos (DUA, TPACK, ADKAR)
├── recursos/
│   ├── index.html              Hub con filtro por formato
│   ├── historia-social.html    U2
│   ├── animacion.html          U3
│   ├── podcast.html            U4
│   └── video.html              U5
├── asistente.html              U6
├── en-la-sala.html             Guía para docentes
├── etica.html                  Uso responsable de la IA + reflexión final
├── creditos.html               Créditos por recurso, referencias APA 7, declaración de uso de IA
├── mapa-del-sitio.html         Mapa del sitio y recorridos sugeridos
├── 404.html                    Página de error (rutas absolutas a /iag-tif/)
├── sitemap.xml · robots.txt · favicon.ico · .nojekyll
├── assets/
│   ├── css/   tokens.css (paleta y escalas) · base.css · components.css
│   ├── js/    calma.js · main.js · youtube-facade.js · chatbot.js
│   ├── img/   berni/ · historia-social/ (01 a 09, WebP + PNG) · og/ · favicons
│   └── audio/ podcast-el-aula-que-incluye.mp3
├── data/
│   ├── recursos.json           Metadatos y créditos de cada recurso
│   └── chatbot-kb.json         Árbol de conversación del asistente
├── tests/chatbot-arbol.js      Validación del árbol del asistente
└── docs/                       Especificaciones del proyecto (no se enlazan desde el menú)
```

**Stack:** HTML5, CSS y JavaScript sin frameworks ni paso de compilación. Única dependencia externa: Google Fonts (Fraunces y Lexend). El header y el footer están escritos en cada HTML, así la navegación funciona aunque falle JavaScript.

## Verlo en local

Las rutas son relativas, así que alcanza con un servidor estático desde la raíz del repo:

```bash
python -m http.server 8000
```

Después abrí `http://localhost:8000/`. Hace falta un servidor (no abrir los HTML con doble clic) porque el asistente lee `data/chatbot-kb.json` con `fetch`.

La página `404.html` usa rutas absolutas a `/iag-tif/` porque GitHub Pages la sirve desde cualquier profundidad de URL. Si el repositorio cambia de nombre, hay que actualizar `data-root` y los enlaces de ese archivo.

## Publicar en GitHub Pages

1. El repositorio tiene que ser **público**.
2. En GitHub: **Settings › Pages › Build and deployment**. En *Source* elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guardá.
3. A los pocos minutos el sitio queda en `https://lpedaci.github.io/iag-tif/`.
4. Verificá en una ventana de incógnito y desde el celular con datos móviles.

El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll: se publica tal cual está.

## Pruebas y control de calidad

```bash
node tests/chatbot-arbol.js
```

Valida que todos los destinos del árbol existan, que no haya nodos huérfanos ni sin salida, que los enlaces y anclas apunten a archivos reales, que la profundidad no supere tres elecciones y que no haya raya larga.

Antes de cada commit, este comando tiene que devolver vacío (regla del proyecto: sin raya larga ni raya media):

```bash
LC_ALL=C.UTF-8 grep -rnP '\x{2014}|\x{2013}' --include=*.html --include=*.md --include=*.json --include=*.js .
```

Y antes de publicar, este otro tampoco debería devolver nada:

```bash
grep -rn "PENDIENTE" --include=*.html --include=*.json .
```

Verificado en esta versión: 0 enlaces internos rotos, una sola `h1` por página, sin scroll horizontal a 360 px, menú mobile con foco atrapado, submenú con Esc, panel del asistente con Esc y devolución de foco, 404 servida en rutas profundas.

## Accesibilidad (WCAG 2.1 AA)

- `lang="es-AR"`, enlace “Saltar al contenido”, landmarks y jerarquía de títulos sin saltos.
- Todo operable con teclado y con foco visible. Objetivos táctiles de 44 × 44 px como mínimo.
- Videos con facade de `youtube-nocookie.com` y subtítulos activados; audio con transcripción; animación con audiodescripción en texto. Nada se reproduce solo.
- **Modo calma:** botón en el header (`aria-pressed`) que desatura la paleta, apaga animaciones y decoración y aumenta el interlineado. Respeta `prefers-reduced-motion` y recuerda la preferencia en el navegador.
- Asistente sin campo de texto: `role="log"`, `aria-live="polite"`, foco en la primera opción nueva y versión en texto dentro de `<noscript>`.

### Contrastes verificados

| Par | Texto | Fondo | Contraste |
|---|---|---|---|
| Texto principal | `#1C2033` | `#FBF7F1` | 15,09:1 |
| Texto secundario | `#454A5E` | `#FBF7F1` | 8,22:1 |
| Texto atenuado | `#5F6478` | `#FBF7F1` | 5,50:1 |
| Atenuado sobre tinte lavanda | `#5F6478` | `#E8E0FA` | 4,60:1 |
| Acento (enlaces y botón) | `#B4471F` | `#FBF7F1` | 5,10:1 |
| Texto blanco sobre botón | `#FFFFFF` | `#B4471F` | 5,44:1 |
| Texto sobre panel oscuro | `#F3EFE9` | `#1C2033` | 14,06:1 |
| Enlace del asistente | `#2F5FC4` | `#FBF7F1` | 5,54:1 |
| Calma: texto principal | `#23252E` | `#F4F2EE` | 13,65:1 |
| Calma: atenuado | `#565A66` | `#F4F2EE` | 6,16:1 |
| Calma: acento | `#7E4E3E` | `#F4F2EE` | 6,17:1 |
| Calma: texto blanco sobre botón | `#FFFFFF` | `#7E4E3E` | 6,89:1 |

## Sistema visual

- **Paleta:** neutros crema cálidos, un único acento de acción coral terracota y tintes pastel por recurso (manteca, cielo, lavanda, durazno, menta). Todo vive en `assets/css/tokens.css`.
- **Tipografía:** Fraunces solo para títulos grandes (serif cálida, editorial) y Lexend para el texto, la navegación y los botones. Lexend tiene letras amplias, aberturas abiertas y espaciado generoso, pensadas para mejorar la fluidez de lectura; es más cómoda para personas con miopía o astigmatismo que una sans condensada en tamaños chicos.
- **Navegación:** menú completo en pastilla desde 1280 px, siempre que entre con aire; si no entra (pantalla angosta, zoom o letra agrandada), `main.js` lo detecta y muestra el botón de menú, que abre la navegación a pantalla completa. Al publicar cambios de CSS o JS, cambiá el parámetro `?v=` de los enlaces a esos archivos en todas las páginas (hoy `?v=20261027j`), así nadie ve estilos viejos guardados en caché.
- **Componentes:** grilla bento asimétrica de recursos, formas orgánicas decorativas (estrella, flor, destellos) que se ocultan en Modo calma, paneles de esquinas amplias y una zona neutra “para mirar con los chicos” en cada recurso.

## Ética y privacidad

- Caso ficticio y anonimizado (Estudiante A). Ningún dato, nombre, foto ni institución de niñas o niños reales.
- Las obras de Antonio Berni y de Bortusk Leer no se reproducen. Berni, el monstruo azul, es un personaje propio del equipo.
- Todo recurso sintético está rotulado: “Generado con IA generativa y validado por el Equipo 03”.
- El asistente no tiene campo de texto, así no puede recibir datos personales.

## Autoría y créditos

**Equipo 03:** Argüello, Clara · Costas, Silvia · Pedaci, Lourdes.

**Cátedra:** Titular, Mg. Lic. Mónica Leda Torres. Adjunto, Mg. Lic. Juan Ruiz Díaz. Profesores ayudantes: Federico Centurión, Marcela Trotta, Miriam Cañamas, Carolina Armella, Raúl Cracco, Verónica Ruggero y Alfredo Esquivel.

Los créditos completos por recurso (herramientas de IA, rol de cada una y cita APA 7) están en [`creditos.html`](creditos.html).

**Declaración de uso de IA:** para la elaboración de este espacio digital se utilizó IA generativa (Claude de Anthropic) como apoyo en la programación del sitio, la organización y la revisión de la redacción. La conceptualización, las decisiones pedagógicas, la selección de recursos, el diseño de la experiencia y la validación de todos los contenidos son de autoría del Equipo 03.

**Cómo citar el sitio (APA 7):**
Argüello, C., Costas, S., y Pedaci, L. (2026). *El aula que incluye: IA generativa como soporte de inclusión en el nivel inicial* [Sitio web]. https://lpedaci.github.io/iag-tif/
