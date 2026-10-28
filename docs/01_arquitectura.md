# 01 · Arquitectura de información y navegación

## 1. Públicos y tareas principales

| Público | Rol | Qué viene a hacer | Página de entrada típica |
|---|---|---|---|
| Docentes de nivel inicial | Primario (mediadoras) | Entender el enfoque, ver y descargar recursos, saber cómo usarlos en la sala | Inicio → Recursos → En la sala |
| Familias | Secundario | Ver la historia social y la animación con sus hijos, entender qué es la IA usada y cómo se cuidan los datos | Inicio → Recurso puntual → Asistente |
| Niñas y niños de 5 años | Destinatarios finales, **siempre con mediación adulta** | Ver la historia social, la animación | Recurso puntual (proyectado o en tablet) |
| Cátedra (evaluación) | Revisor | Verificar recursos, créditos, ética, navegación, sitemap | Inicio → Proyecto → Recursos → Créditos → Mapa |

Consecuencia de diseño: el sitio habla a adultos; las páginas de recurso tienen una zona "para mirar con los chicos" visualmente limpia y de baja estimulación.

## 2. Mapa del sitio (jerarquía)

```
Inicio (index.html)
├── El proyecto (proyecto.html)
│     · Área de aplicación · Justificación · Público · Marcos: DUA, TPACK, ADKAR · El caso (Estudiante A, ficticio)
├── Recursos (recursos/index.html)
│     ├── Historia social con pictogramas (U2)
│     ├── Animación "Los monstruos de Berni" (U3)
│     ├── Podcast "El aula que incluye" (U4)
│     └── Video "Adaptar para incluir" (U5)
├── Preguntale a Berni · Asistente (asistente.html) (U6)
├── En la sala · Guía para docentes (en-la-sala.html)
├── Uso responsable de la IA (etica.html)
├── Créditos y referencias (creditos.html)
└── Mapa del sitio (mapa-del-sitio.html)
```

Profundidad máxima: 2 niveles. Toda página es alcanzable en 2 clics desde Inicio.

## 3. Navegación

**Header (todas las páginas):** logo/nombre "El aula que incluye" (enlace a Inicio) + menú principal:
`Inicio · El proyecto · Recursos ▾ · Preguntale a Berni · En la sala · Ética · Créditos`

- "Recursos" con submenú desplegable (4 recursos + "Ver todos"). Accesible por teclado (`button` con `aria-expanded`, cierre con Esc).
- Mobile (< 768 px): botón hamburguesa con `aria-controls`, menú a pantalla completa, foco atrapado mientras está abierto.
- Estado activo con `aria-current="page"`.
- Utilidad a la derecha: botón **Modo calma** (ver componentes).

**Breadcrumb** en todas las páginas internas: `Inicio › Recursos › Animación`.

**Navegación secuencial** al pie de cada recurso: `← Recurso anterior · Siguiente recurso →` en orden U2 → U3 → U4 → U5 → Asistente.

**Footer (todas las páginas):**
- Sello de transparencia: "Recursos generados con IA generativa y validados por el Equipo 03."
- Enlaces: Mapa del sitio · Créditos y referencias · Uso responsable de la IA.
- Autoría: Equipo 03 · Argüello, Clara · Costas, Silvia · Pedaci, Lourdes · Licenciatura en Tecnología Educativa, UTN FRBA · 2026.
- Botón flotante del asistente (excepto en `asistente.html`).

## 4. Flujos de navegación (para el TIF I y para el mapa del sitio)

1. **Docente que llega por primera vez:** Inicio → El proyecto → Recursos → Historia social → En la sala → Preguntale a Berni.
2. **Docente que busca un recurso puntual:** Inicio → Recursos → [recurso] → bloque "Cómo usarlo en la sala" → Siguiente recurso.
3. **Familia:** Inicio → Animación (mirar juntos) → Historia social → Asistente ("¿qué es una historia social?").
4. **Evaluación de la cátedra:** Inicio → Recursos (5 recursos con créditos) → Créditos y referencias → Uso responsable → Mapa del sitio.

## 5. Plantillas de página

### 5.1 Inicio
1. Hero: nombre del sitio, bajada, una frase de propósito y dos CTA ("Ver los recursos", "Conocer el proyecto"). Imagen de Berni (personaje propio).
2. "Un mismo contenido, muchas puertas de entrada": 4 tarjetas de recursos (texto, animación, audio, video) + tarjeta del asistente. Cada tarjeta: ícono de formato, título, una línea de para qué, duración o formato, etiqueta "Unidad X".
3. Para quién es: tres columnas (docentes, familias, la sala).
4. Bloque de transparencia: "Cómo usamos la IA" con enlace a Ética.
5. Footer.

### 5.2 El proyecto
Secciones ancladas con índice lateral (desktop) o desplegable (mobile): Área de aplicación · Justificación · Público objetivo · El caso · Marcos (DUA, TPACK con figura, ADKAR como tabla de 5 etapas) · Equipo.

### 5.3 Hub de recursos
Grilla de 5 tarjetas (incluye el asistente). Filtro simple por formato (Todos, Texto e imagen, Video, Audio, Interactivo) con botones `aria-pressed`. Sin filtro el orden es por unidad.

### 5.4 Plantilla de recurso (las 4 páginas usan la misma estructura)
1. Breadcrumb.
2. Encabezado: título, etiqueta de unidad, formato y duración, sello "Generado con IA generativa".
3. **Para qué y para quién** (2 o 3 líneas: qué, para qué, a quién).
4. **El recurso** (embed o contenido), en una zona de baja estimulación.
5. **Alternativa accesible** (desplegable `details`): transcripción, audiodescripción o texto plano, según el recurso.
6. **Cómo se produjo** (desplegable): herramientas, técnica de prompting, iteraciones clave, 1 o 2 prompts de ejemplo en bloque citado.
7. **Cómo usarlo en la sala** (antes, durante, después).
8. **Créditos** (componente `credit-card`, ver 6.3).
9. Navegación anterior/siguiente.

### 5.5 Asistente
Explicación breve de qué es y qué no es (guía por opciones, sin campo de texto, y por qué), el asistente a ancho completo, sección "Cómo funciona" con el diagrama del flujo conversacional, créditos del asistente.

### 5.6 En la sala
Guía práctica: secuencia sugerida de uso de los recursos a lo largo de una semana del proyecto, con los momentos anticipar, hacer y volver a mirar. Tabla recurso × principio DUA (representación, acción y expresión, implicación).

### 5.7 Uso responsable de la IA
Cinco dimensiones (transparencia, responsabilidad, sesgos, equidad, privacidad) + reflexión final (cómo se usó la IA de forma responsable e impacto potencial en la audiencia), que la cátedra pide explícitamente.

### 5.8 Créditos y referencias
Tabla por recurso (recurso, herramientas de IA, autoras, enlace) + referencias APA en orden alfabético con sangría francesa + declaración de uso de IA.

### 5.9 Mapa del sitio
Diagrama visual (árbol en HTML/CSS con listas anidadas, no imagen) + lista de enlaces + los 4 flujos de la sección 4. Además `sitemap.xml` para buscadores.

## 6. Componentes

### 6.1 `resource-card`
Ícono, etiqueta de unidad, título, una línea, formato/duración, enlace (toda la tarjeta clicable, un solo enlace por tarjeta).

### 6.2 `youtube-facade`
Miniatura (`https://i.ytimg.com/vi/<ID>/hqdefault.jpg`), botón de play con `aria-label="Reproducir video: <título>"`, al hacer clic inserta iframe de `youtube-nocookie.com/embed/<ID>?autoplay=1&rel=0&cc_load_policy=1&hl=es`. Relación 16:9. Enlace alternativo "Ver en YouTube".

### 6.3 `credit-card` (obligatorio en cada recurso)
```
Créditos
Autoras: Argüello, Clara · Costas, Silvia · Pedaci, Lourdes (Equipo 03)
Herramientas de IA: <lista con rol de cada una>
Edición (no IA): <si aplica>
Cómo citar este recurso (APA 7): <referencia>
Rótulo: Contenido generado con IA generativa y validado por el equipo.
```
Los datos salen de `data/recursos.json`. Si se renderiza con JS, el HTML debe traer igual el contenido escrito (no depender de JS para los créditos).

### 6.4 `pictogram-sequence` (historia social)
Secuencia de 9 viñetas (recortadas de la grilla 3×3). Cada viñeta: número, imagen con `alt` igual a la oración, oración debajo. Vistas: "Secuencia" (una por vez con botones Anterior/Siguiente, ideal para proyectar) y "Todas" (grilla). Botón "Imprimir" con hoja de estilos de impresión (una tira por hoja A4 apaisada).

### 6.5 `audio-player`
`<audio controls preload="metadata">` nativo con el MP3 alojado en el repo + enlace de descarga + transcripción en `details`.

### 6.6 Modo calma
Botón con `aria-pressed`. Al activarlo: agrega `data-calma="on"` en `<html>`, desactiva animaciones y transiciones, baja la saturación de la paleta (variables alternativas), aumenta el interlineado y oculta elementos decorativos. Respeta `prefers-reduced-motion` por defecto. Preferencia guardada en `localStorage` dentro de `try/catch`. Justificación pedagógica: baja estimulación sensorial, coherente con el criterio aplicado en la animación (paleta de baja saturación, ritmo lento).

### 6.7 `chat-launcher`
Botón flotante "Preguntale a Berni" que abre el panel del asistente o lleva a `asistente.html` (ver `03_chatbot.md`).

## 7. Ubicación de los recursos (tabla para el TIF I)

| # | Recurso | Unidad | Página | Formato en el sitio |
|---|---|---|---|---|
| 1 | Historia social "Hoy creamos nuestro monstruo" + pictogramas | U2 | recursos/historia-social.html | Texto + secuencia de imágenes + impresión |
| 2 | Animación "Los monstruos de Berni" (1:18) | U3 | recursos/animacion.html | YouTube embebido + audiodescripción |
| 3 | Podcast "El aula que incluye" (2:58) | U4 | recursos/podcast.html | Audio MP3 + transcripción |
| 4 | Video "Adaptar para incluir" (2:04) | U5 | recursos/video.html | YouTube embebido + subtítulos + transcripción |
| 5 | Asistente "Preguntale a Berni" | U6 | asistente.html + botón flotante | Chatbot embebido |
| 6 | Mapa del sitio | TIF II | mapa-del-sitio.html + sitemap.xml | Diagrama HTML |

## 8. SEO y metadatos mínimos
`<title>` por página ("Animación · El aula que incluye"), `meta description`, Open Graph con imagen de Berni, `canonical`, favicon. `robots.txt` permite todo y enlaza `sitemap.xml`.
