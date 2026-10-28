# 02 · Contenidos (fuente de verdad)

Todo dato de esta página viene de los trabajos prácticos entregados por el Equipo 03 (TPU2 a TPU5). Lo que no está confirmado figura como `[PENDIENTE]`. No completar con datos inventados.

---

## A. Datos generales

- **Sitio:** El aula que incluye
- **Bajada:** IA generativa como soporte de inclusión en el nivel inicial
- **Tesina:** "La inteligencia artificial generativa como soporte de inclusión en el nivel inicial"
- **Universidad:** Universidad Tecnológica Nacional, Facultad Regional Buenos Aires
- **Carrera:** Licenciatura en Tecnología Educativa
- **Materia:** Gestión de recursos digitales con IA generativa (GRDIAg)
- **Equipo:** 03 · Argüello, Clara · Costas, Silvia · Pedaci, Lourdes
- **Profesores:** Titular: Mg. Lic. Mónica Leda Torres · Adjunto: Mg. Lic. Juan Ruiz Díaz · Profesores ayudantes: Federico Centurión, Marcela Trotta, Miriam Cañamas, Carolina Armella, Raúl Cracco, Verónica Ruggero y Alfredo Esquivel
  - En la carátula: titular y adjunto en líneas propias; ayudantes en una línea aparte, en letra menor si no entra. Respetar las tildes (Cañamas, Centurión, Díaz).
- **Cursada:** agosto 2026 a noviembre 2026

---

## B. Página "El proyecto"

**Área de aplicación (qué aborda):** el uso de la IA generativa para producir materiales accesibles y diversificados en una sala de 5 años, en el marco de las adaptaciones curriculares y del Diseño Universal para el Aprendizaje (DUA). Hilo conductor: el proyecto de plástica "Los monstruos de Berni y Bortusk Leer".

**Justificación (para qué):** ofrecer un mismo contenido en varios formatos (texto, pictogramas, animación, audio y video) para que cada niña y cada niño tenga una puerta de entrada, y acompañar a las docentes en la adopción de estas herramientas con criterio pedagógico. Ideas fuerza tomadas de los TP:
- "Un material accesible mejora las condiciones de participación de todos" (paráfrasis de Alba Pastor et al., 2014).
- El valor de un recurso digital no proviene de la tecnología en sí misma, sino de quién concibe la propuesta y con qué propósito la utiliza (Fainholc, 2021, p. 16).
- La herramienta "no puede sustituir a la creatividad humana y el pensamiento crítico" (Sabzalieva y Valentini, 2023, p. 14).

**Público objetivo:** directo, docentes de nivel inicial en su rol de mediadoras; en su aplicación áulica, niñas y niños de una sala de 5 años, con especial atención a la inclusión (caso Estudiante A); ampliado, familias interesadas en el uso de IA para diversificar materiales.

**El caso (ficticio y anonimizado):** Estudiante A, 5 años, TEA. Desafíos en la comunicación verbal y en las transiciones entre actividades; fortaleza en el procesamiento visual. Mostrar siempre la aclaración: "Caso ficticio construido con fines pedagógicos. No corresponde a ningún niño real."

**Marcos:**
- **DUA** (Alba Pastor et al., 2014): múltiples formas de representación, de acción y expresión, y de implicación.
- **TPACK** (Mishra y Koehler, 2006): integración del conocimiento disciplinar, pedagógico y tecnológico. Figura: diagrama de Venn de tres círculos (elaboración propia sobre la base de Mishra y Koehler, 2006), dibujado en SVG inline, no imagen copiada.
- **ADKAR** (Hiatt, 2006), aplicado a la adopción docente: Conciencia (falta de tiempo y formación para adaptaciones sostenidas), Deseo (voluntad de inclusión y agenda institucional), Conocimiento (formular prompts, evaluar calidad, resguardar privacidad), Capacidad (generar y ajustar el material), Refuerzo (evaluación de calidad, iteración, formación y acompañamiento institucional).
- **Historias sociales** (Gray, 2010): texto breve, en primera persona y presente, que anticipa una situación cotidiana.

---

## C. Recursos

### C1. Historia social con pictogramas (Unidad 2)

- **Título:** Hoy creamos nuestro monstruo
- **Qué:** historia social que acompaña la actividad de plástica del proyecto de sala.
- **Para qué:** anticipar la transición del juego libre a la actividad, describir la consigna con lenguaje predecible y ofrecer una estrategia de regulación.
- **A quién:** directo, Estudiante A; ampliado, toda la sala.
- **Texto final validado por el equipo:**

> **Hoy creamos nuestro monstruo**
> En el jardín me gusta jugar con mis juguetes.
> Cuando escucho la canción de guardar, sé que es momento de cambiar de actividad.
> Guardo los juguetes en sus cajas.
> Camino tranquilo a la mesa de plástica.
> Si hay mucho ruido, me pongo mis auriculares.
> Hoy creo mi propio monstruo divertido.
> Miro las imágenes de los monstruos de Berni y Bortusk Leer.
> Uso papeles de colores y marcadores para hacer mi obra.
> Mi monstruo queda genial y me siento muy feliz.

- **Pictogramas:** archivo `assets/img/historia-social-pictogramas.png` (1536 × 1024 px, grilla 3 × 3). Recortar en 9 imágenes `assets/img/historia-social/01.webp` a `09.webp` (más fallback PNG). Textos de las viñetas (usar como `alt` y como pie):
  1. Juego con mis juguetes.
  2. Escucho la canción de guardar.
  3. Guardo los juguetes en sus cajas.
  4. Camino tranquilo a la mesa de plástica.
  5. Si hay mucho ruido, me pongo mis auriculares.
  6. Hoy creo mi propio monstruo divertido.
  7. Miro las imágenes de los monstruos de Berni y Bortusk Leer.
  8. Uso papeles de colores y marcadores para hacer mi obra.
  9. Mi monstruo queda genial y me siento muy feliz.
- **Cómo se produjo:** Gemini (Google), versión gratuita en navegador. Estructura de prompt de Cruzado (2024, citado en UTN, 2026): instrucción, contexto, datos de entrada e indicador de salida. Técnicas: especificidad, personalización, uso de ejemplos y encadenamiento de prompts. Tres prompts: uno genérico (para contrastar), uno estructurado y uno encadenado que pidió la lista de pictogramas, una por oración. Ajustes: una idea por oración, primera persona y presente, anticipación con la canción, estrategia de auriculares, eliminación de todo dato identificable.
- **Prompt de ejemplo para mostrar:** el Prompt 2 completo del TPU2 (Instrucción / Contexto / Datos de entrada / Indicador de salida).
- **Herramientas de IA:** Gemini 3.6 Flash con razonamiento extendido (modo "Flash Extendido" en la app de Gemini, versión gratuita), para el texto (Prompt 2) y la lista de pictogramas (Prompt 3); ambas capturas del TPU2 muestran la interfaz de Gemini. Imagen de la grilla de pictogramas (Figura 6 del TPU2): también Gemini (confirmado por el equipo; el TP no lo nombra, conviene decirlo en el sitio).
- **Evaluación de calidad (tabla del TPU2):** coherencia y cohesión alta; gramática y ortografía alta; relevancia alta; comprensión y claridad alta; adecuación al destinatario media-alta; originalidad media.
- **Cita APA del recurso:** Argüello, C., Costas, S., y Pedaci, L. (2026). *Hoy creamos nuestro monstruo* [Historia social con pictogramas generada con IA]. El aula que incluye. `<URL de la página>`

### C2. Animación "Los monstruos de Berni" (Unidad 3)

- **Título:** Los monstruos de Berni: una animación para la inclusión en la primera infancia
- **Duración:** 1:18
- **URL:** https://youtu.be/EffCv8EIAwI (ID `EffCv8EIAwI`)
- **Qué / para qué / a quién:** animación narrativa breve que recrea una escena de inclusión en la sala; recurso anticipatorio y modelizador que muestra cómo se acompaña a un compañero que necesita un momento de regulación; directo, Estudiante A; ampliado, toda la sala.
- **Herramientas de IA:** ChatGPT (diseño del personaje Berni, imagen de referencia), Canva Contenido Mágico (escena de apertura), Veo 3.1 Fast de Google vía plan Google AI Pro (resto de las escenas, modo imagen a video), Suno (música de fondo). Edición y ensamblado: Camtasia (no es IA generativa). Los clips de Veo incluyen la marca de agua imperceptible SynthID.
- **Técnicas:** imagen de referencia para sostener la identidad del personaje, prompts negativos, enfoque modular (generar por separado y ensamblar).
- **Ajuste clave para contar en "Cómo se produjo":** en las primeras versiones de la Escena 2 el modelo incorporaba una figura humana infantil; se corrigió describiendo al personaje nuevo con rasgos claros de monstruo, diferenciándolo por color, explicitando que no había seres humanos y partiendo de la imagen de referencia.
- **Prompt de ejemplo:** el prompt de Berni (Paso 0) del TPU3.
- **Imagen de Berni para el sitio:** `assets/img/berni/berni-referencia.png` (1672 × 941, fondo beige). Usarla en hero, Open Graph y asistente.
  - Nota QA: la captura de la Figura 3 del TPU3 muestra un prompt distinto al transcripto en el Paso 0 (la captura pide "colores lavanda y menta pastel... estilo ilustración 2D"; el Paso 0 describe el pelaje azul con destellos, que es lo que se ve en la imagen). En el sitio usar el texto del Paso 0 y, si se muestra la captura, aclarar que hubo iteraciones.
- **Alternativa accesible: audiodescripción** (la animación no tiene diálogos):
  1. Una sala de jardín vacía, en colores pastel, con estantes, una alfombra suave y luz de la mañana. La cámara la recorre despacio.
  2. Berni, un monstruo azul y peludo con destellos blancos, saluda con la mano en el centro de la sala.
  3. Berni camina despacio hacia un monstruo verde menta que está sentado en el suelo, encogido y triste, y se agacha a su altura.
  4. El monstruo verde menta se tapa las orejas porque hay mucho ruido. Berni se queda a su lado. El murmullo baja hasta el silencio.
  5. Berni lo acompaña a un rincón de calma con cojines, luz tenue y plantas. Los dos respiran tranquilos.
  6. Ya calmado, el monstruo verde menta se pone de pie. Berni le da la mano y caminan hacia un grupo de monstruos que juega en ronda. Los demás les hacen lugar.
  7. El grupo juega en ronda y sonríe. El monstruo verde menta forma parte del grupo.
  8. Berni lo lleva al centro del círculo. Todos se toman de las manos y se balancean riendo suavemente. La cámara se aleja.
  9. Créditos sobre un fondo azul medianoche con destellos suaves.
- **Cita APA:** Pedaci, L. [El servidor de Lourdes]. (27 de agosto de 2026). *Los monstruos de Berni: una animación para la inclusión en la primera infancia* [Video]. YouTube. https://youtu.be/EffCv8EIAwI
  - Verificado en YouTube el 27/10/2026: publicado el 27/08/2026 (el TPU3 dice "30 de agosto", es un error del TP). Título en YouTube: "... primera infancia - Equipo 03". Visibilidad: **No listado**. Etiqueta "Made with AI" activada. Licencia Creative Commons Atribución. Comentarios desactivados.
  - Descripción de YouTube (reutilizable en el sitio): "Cortometraje animado creado como recurso educativo para favorecer la inclusión en el nivel inicial. A través de Berni, un monstruo amable, y de un nuevo compañero que necesita un momento de calma, la historia modela el acompañamiento entre pares y el respeto por los distintos ritmos de cada quien."
- **Autoras:** Argüello, Clara · Costas, Silvia · Pedaci, Lourdes (el canal "El servidor de Lourdes" es solo el canal de publicación).

### C3. Podcast "El aula que incluye" (Unidad 4)

- **Título:** El aula que incluye: crear contenido educativo con IA generativa
- **Duración:** 2:58
- **Fuente original:** https://drive.google.com/file/d/1LhOBEpT0pVuegL7HiBLqOZKyaX_B_HoB/view
  - Archivo en Drive: "Equipo 03 - Episodio_El aula que incluye - crear contenido educativo con IA generativa.wav" (la extensión dice .wav pero es MP3; en el repo ya está renombrado).
- **En el sitio:** MP3 ya incluido en el paquete: `assets/audio/podcast-el-aula-que-incluye.mp3` (MP3 320 kbps, 44,1 kHz, estéreo, 2:58, 7,1 MB). Opcional: generar una versión de 128 kbps para mobile con ffmpeg. Mantener el enlace a Drive como fuente.
- **Qué / para qué / a quién:** podcast narrativo y divulgativo que explica cómo la IA generativa permite producir un mismo contenido en varios formatos (texto, pictogramas y audio); amplía las formas de acceso con una vía sonora; sala de nivel inicial, docentes y familias.
- **Herramientas de IA:** Claude (Anthropic), modelo Opus 4.8, guion en tres iteraciones (diseño del guion, ajuste de formato para ElevenLabs, versión a dos voces); ElevenLabs Studio con el modelo Eleven Multilingual v2, dos voces en español latino (voz A "Andrea", conductora; voz B "Billy", co-conductor, sobre la voz de biblioteca "Bill"); ElevenLabs también para la cortina de créditos (Figura 6 del TPU4); Suno, cortina musical lo-fi. Murf AI se evaluó como comparación y no se usó en la versión final. Postproducción: Camtasia.
- **Transcripción completa** (guion final provisto por el equipo; signos de puntuación limpiados para lectura, ya que el original tiene marcas de pausa para ElevenLabs como "!." o ".."):
  > **Andrea:** ¡Hola a todos! Querida audiencia, ¿cómo están? Mi nombre es Andrea.
  > **Billy:** ¡Y yo soy Billy! Sean bienvenidos a otro capítulo de este podcast, "El aula que incluye".
  > **Andrea:** En este nuevo episodio vamos a algo bien concreto: cómo crear contenido educativo con inteligencia artificial generativa en el nivel inicial.
  > **Billy:** Arranquemos con una pregunta. ¿Y si cada niño del jardín pudiera acceder al mismo cuento, pero contado de la forma que mejor entiende? Hace unos años, resolver eso para toda una sala parecía imposible.
  > **Andrea:** Hoy empieza a tener respuestas, y muchas pasan por la inteligencia artificial generativa. Eso sí, no para reemplazar a quien enseña, sino para ampliar lo que puede ofrecer.
  > **Billy:** Pensemos en un ejemplo real. Un proyecto de sala que trabaja con los monstruos de Berni y de Bortusk Leer. A partir de esas imágenes, una docente puede pedirle a una IA que redacte un cuento breve, con frases cortas y lenguaje sencillo. En segundos tiene un texto base.
  > **Andrea:** Que después ajusta con su criterio, claro. Y el texto es apenas el comienzo. Con otra herramienta puede transformar ese cuento en pictogramas, para quienes se apoyan en imágenes para comprender. Con una tercera, puede convertirlo en audio, con una voz clara y expresiva, para quienes aprenden mejor escuchando.
  > **Billy:** ¡Exacto! Entonces, el mismo contenido, ahora disponible en varios formatos. Esto, en el fondo, es diseño universal para el aprendizaje.
  > **Andrea:** ¡Así es, Billy! La IA no inventa la inclusión, pero baja muchísimo la barrera para lograrla. Lo que antes pedía horas de preparación, hoy entra en una tarde de planificación.
  > **Billy:** Ahora, una aclaración que no es menor. La herramienta genera, pero la decisión sigue siendo humana. Elegir qué monstruo, qué palabras, qué voz, qué le sirve a este grupo y no a cualquiera, eso es trabajo pedagógico.
  > **Andrea:** La tecnología ofrece opciones, y la docente pone el sentido. Por eso, más que preguntarnos si la IA va a cambiar el aula, conviene preguntarnos cómo queremos acompañar ese cambio.
  > **Billy:** Con mirada crítica, cuidando los datos de las infancias y sin perder de vista para qué enseñamos.
  > **Andrea:** Porque la mejor tecnología en educación es la que se vuelve invisible, y deja a la vista lo único que importa, que todos, todos, puedan aprender.
  > **Billy:** ¡Nos escuchamos en el próximo episodio!
  > **Andrea:** ¡Hasta la próxima!
  - Asignación de voces: alternada, empezando por Andrea, confirmada con un análisis de tono de voz del audio (agudos en los turnos de Andrea, graves en los de Billy). Verificar al escuchar los dos últimos turnos (2:50 a 2:58).
  - Antes de la transcripción, una línea: "Andrea y Billy son voces sintéticas generadas con ElevenLabs."
- **Prompt de ejemplo:** Iteración 01 del TPU4.
- **Cita APA:** Pedaci, L. (11 de septiembre de 2026). *Equipo 03 · Episodio El aula que incluye: crear contenido educativo con IA generativa* [Podcast]. Google Drive. https://drive.google.com/file/d/1LhOBEpT0pVuegL7HiBLqOZKyaX_B_HoB/view
  - Nota: el título original del archivo usa guion bajo y guiones; en el sitio se muestra el título limpio.

### C4. Video "Adaptar para incluir" (Unidad 5)

- **Título:** Adaptar para incluir: inteligencia artificial en la educación inicial
- **Duración:** 2:04
- **URL:** https://youtu.be/qJ5nEvhGr4I (ID `qJ5nEvhGr4I`)
- **Qué / para qué / a quién:** documental breve que muestra cómo la IA generativa permite producir contenido educativo accesible en varios formatos; dirigido a docentes de nivel inicial y, ampliado, a familias.
- **Herramientas de IA:** Claude (Anthropic), modelo Opus 4.8, guion de la voz en off (confirmado por la captura de la Figura 1 del TPU5, chat "Guion documental IA en educación inicial"); Flow de Google (modelos Omni 1.1 Flash y Veo 3.1 Lite), escenas, incluida la función de extender escena; ElevenLabs, voz en off y música (Music v2). Seedance 1.0 (vía CapCut) se probó y se descartó. Edición: Camtasia. Subtítulos automáticos de YouTube.
- **Resguardos:** planos sin rostros de niñas y niños, prompts negativos, rotulado del origen sintético.
- **Transcripción (voz en off, del TPU5):**
  1. En una sala de cinco años, la inteligencia artificial puede ayudarnos a crear materiales accesibles para todas las infancias.
  2. Adaptar el currículo no significa simplificarlo: es ofrecer varias formas de representar, de expresar y de participar.
  3. El Diseño Universal para el Aprendizaje propone ofrecer un mismo contenido de varias formas, para que todas las niñas y todos los niños tengan una puerta de entrada.
  4. Con la inteligencia artificial generativa, esos recursos se crean en minutos: imágenes, pictogramas, historias sociales y narraciones pensadas para el grupo.
  5. Una historia social, por ejemplo, anticipa una situación cotidiana con imágenes sencillas para volverla previsible, y hoy puede generarse y adaptarse a cada niño en minutos.
  6. Ahora bien, integrar la inteligencia artificial en el nivel inicial no es automático. Hoy pesan las brechas de conectividad e infraestructura, la escasa formación pedagógica de los equipos y las dudas sobre la privacidad de los datos de las infancias.
  7. Frente a estas dificultades, muchos equipos docentes se preguntan por dónde empezar y buscan alternativas concretas para el aula.
  8. Y ahí las aplicaciones de apoyo suman accesibilidad concreta: subtítulos automáticos, lectura por voz y tableros de comunicación con pictogramas.
  9. Detrás de cada recurso hay una docente que decide: qué herramienta usar, con qué intención y para quién.
  10. Es ella quien elige, adapta y prepara el material pensando en su grupo, y lo pone a disposición de cada niño y de cada niña.
  11. Y cuando ese material llega a la sala, se vuelve juego, exploración y encuentro: la tecnología, ahí, se hace inclusión.
  12. Integrar la inteligencia artificial con criterio pedagógico hace del nivel inicial un espacio más accesible para todas las infancias.
  - Las líneas 1, 6, 8 y 9 ya están corregidas según la transcripción automática de YouTube (la locución final difiere del guion del TPU5). Las líneas 10 a 12 no se pudieron contrastar completas: revisarlas escuchando el video desde 1:29. Siempre manda el audio.
- **Cita APA:** Pedaci, L. [El servidor de Lourdes]. (24 de septiembre de 2026). *Adaptar para incluir: inteligencia artificial en la educación inicial* [Video]. YouTube. https://youtu.be/qJ5nEvhGr4I
  - Verificado en YouTube el 27/10/2026: fecha correcta (24/09/2026). Visibilidad: **No listado**. Etiqueta "Made with AI" activada. Licencia Creative Commons Atribución. Comentarios desactivados. Transcripción automática disponible.
  - Descripción de YouTube: "Video documental breve creado como recurso educativo sobre adaptaciones curriculares accesibles en el nivel inicial. Analiza cómo la Inteligencia Artificial generativa y las aplicaciones de apoyo pueden ayudar a crear contenido accesible para una sala de 5 años, siempre bajo el criterio pedagógico del docente y en el marco del Diseño Universal para el Aprendizaje."

### C5. Asistente "Preguntale a Berni" (Unidad 6)
Ver `03_chatbot.md`. Cita APA: Argüello, C., Costas, S., y Pedaci, L. (2026). *Preguntale a Berni* [Chatbot]. El aula que incluye. `<URL>`

---

## D. Página "En la sala" (guía para docentes)

Secuencia sugerida para la semana del proyecto de plástica:
- **Antes (anticipar):** ver la animación en grupo; leer la historia social con los pictogramas (proyectada o impresa), varias veces y en los mismos momentos del día.
- **Durante (hacer):** tener la tira de pictogramas a la vista en la mesa de plástica; auriculares disponibles como estrategia de regulación; rincón de calma armado.
- **Después (volver a mirar):** conversar sobre los distintos ritmos a partir de la animación; mostrar las obras.
- **Para el equipo docente y las familias:** escuchar el podcast y ver el documental; usar el asistente para dudas frecuentes.
- **Tabla DUA:** historia social y pictogramas (representación), animación (representación e implicación), podcast (representación auditiva), video con subtítulos (representación múltiple), asistente (implicación y acceso a la información).
- **Aviso:** los recursos son modelos; se personalizan en forma presencial, por fuera de las herramientas de IA, sin cargar datos reales de los chicos.

---

## E. Página "Uso responsable de la IA"

Cinco dimensiones, tomadas de los TP del equipo:
- **Transparencia:** se declara el uso de IA en cada recurso; Veo incorpora SynthID; las voces sintéticas se presentan como tales, en línea con su uso adecuado "siempre y cuando se presenten como tales" (Fernández, como se citó en Yaguana Romero et al., 2022, p. 17).
- **Responsabilidad:** las herramientas sugieren, el criterio pedagógico valida. La ingeniería de prompts es la técnica para "guiar y controlar el comportamiento de los sistemas de inteligencia artificial mediante instrucciones específicas" (Torrealba Dugarte, 2024, p. 262), y requiere una eduética que oriente ese control.
- **Sesgos:** se revisó que textos e imágenes no incorporaran estereotipos sobre el autismo ni supuestos sobre gustos o capacidades; los personajes son monstruos y no representaciones de niños reales.
- **Equidad:** se priorizaron planes gratuitos o accesibles y recursos reutilizables; la guía de UNESCO IESALC advierte problemas de "acceso y equidad" (Sabzalieva y Valentini, 2023, p. 12).
- **Privacidad:** casos ficticios y anonimizados, sin nombres, diagnósticos ni instituciones; planos sin rostros en el video; siguiendo la recomendación de no ingresar información confidencial en las apps de Gemini (Google, 2026a). El asistente no pide ni guarda datos personales.
- **Limitaciones reconocidas:** la síntesis de video "dista aún de ser perfecta" (paráfrasis de Franganillo, 2023, p. 9), por eso cada clip se revisó y ajustó.

**Reflexión final (requisito TIF II, redactar en prosa, 2 párrafos):** (1) cómo se usó la IA de forma responsable: control humano en cada iteración, transparencia, privacidad por diseño; (2) impacto potencial en la audiencia: más puertas de entrada al mismo contenido para la sala, menos tiempo de producción para las docentes, y el desplazamiento del eje hacia la mediación docente; con la advertencia de que el impacto depende de condiciones institucionales (formación, acompañamiento, conectividad), leído desde ADKAR y TPACK.

---

## F. Referencias (APA 7, orden alfabético)

Alba Pastor, C., Sánchez Serrano, J. M., y Zubillaga del Río, A. (2014). *Diseño Universal para el Aprendizaje (DUA): Pautas para su introducción en el currículo*. Proyecto DUALETIC, Ministerio de Economía y Competitividad. https://www.educadua.es/doc/dua/dua_pautas_intro_cv.pdf

Anthropic. (2026). *Claude* (Opus 4.8) [Modelo de lenguaje grande]. https://claude.ai/

Canva. (2026). *Contenido Mágico* [Herramienta de IA generativa]. https://www.canva.com

ElevenLabs. (2026). *ElevenLabs* (Eleven Multilingual v2 y Music v2) [Herramienta de generación de voz y música con IA]. https://elevenlabs.io/

Fainholc, B. (2021). Una educación continua híbrida adaptativa para los tiempos de postpandemia y más allá. *Revista de Educación Continua de Latinoamérica y Europa (RECLA)*, (8).

Franganillo, J. (2023). La inteligencia artificial generativa y su impacto en la creación de contenidos mediáticos. *Methaodos. Revista de Ciencias Sociales, 11*(2), 1-17. https://doi.org/10.17502/mrcs.v11i2.710

Gómez-Diago, G. (2024). Herramientas de inteligencia artificial para la creación, edición y traducción de vídeos. Una revisión. En S. Parratt Fernández, J. Mayoral Sánchez y M. Á. Chaparro Domínguez (Eds.), *Periodismo e inteligencia artificial. Aplicaciones y desafíos profesionales* (pp. 97-117). Comunicación Social Ediciones y Publicaciones. https://doi.org/10.52495/c4.emcs.25.p108

Google. (2026a). *Centro de privacidad de las apps de Gemini*. Ayuda de Gemini Apps. https://support.google.com/gemini/answer/13594961

Google. (2026b). *Gemini 3.6 Flash* (versión con razonamiento extendido) [Modelo de lenguaje grande]. https://gemini.google.com

Google. (2026c). *Veo 3.1 Fast* [Modelo de generación de video]. https://gemini.google.com

Google. (2026d). *Flow* (Omni 1.1 Flash y Veo 3.1 Lite) [Herramienta de generación de video con IA]. https://labs.google/flow

Gray, C. (2010). *The new social story book*. Future Horizons.

Hiatt, J. M. (2006). *ADKAR: A model for change in business, government and our community*. Prosci Learning Center Publications.

Mishra, P., y Koehler, M. J. (2006). Technological pedagogical content knowledge: A framework for teacher knowledge. *Teachers College Record, 108*(6), 1017-1054.

Navas Guzmán, L., y Meier, C. (2024). Experiencia en el aula basada en la (re)creación de imágenes mediante inteligencia artificial. *Revista Ecos de la Academia, 10*(19), e1076, 1-23. https://doi.org/10.53358/ecosacademia.v10i19.1076

OpenAI. (2026). *ChatGPT* [Herramienta de IA generativa]. https://chatgpt.com

Sabzalieva, E., y Valentini, A. (2023). *ChatGPT e inteligencia artificial en la educación superior: Guía de inicio rápido*. UNESCO IESALC.

Suno. (2026). *Suno* [Herramienta de generación de música con IA]. https://suno.com

Torrealba Dugarte, J. D. D. (2024). Eduética en el uso de la inteligencia artificial a través de la ingeniería de prompts. *Revista Digital de Investigación y Postgrado, 5*(10), 261-266. https://doi.org/10.59654/7j69c731

Universidad Tecnológica Nacional. (2026). *Material obligatorio Unidades 2 a 7* [Material de cátedra]. Gestión de recursos digitales con IA generativa, Licenciatura en Tecnología Educativa. `[Decidir: una entrada por unidad citada o una sola; con más de una del mismo año usar 2026a, 2026b...]`

Villegas Dianta, A., y Sepúlveda-Irribarra, C. (2024). Creación de cuentos digitales con apoyo de inteligencia artificial. *Revista Iberoamericana de Tecnología en Educación y Educación en Tecnología*, (37), 130-138. https://doi.org/10.24215/18509959.37.e13

Yaguana Romero, H., Arrobo-Agila, J. P., y Rene Jaramillo, A. (2022). La inteligencia artificial en la narrativa sonora. Estudio de caso. *Anàlisi: Quaderns de Comunicació i Cultura*, (66), 9-23. https://doi.org/10.5565/rev/analisi.3476

+ las 5 referencias de los recursos propios (C1 a C5) y la del sitio:
Argüello, C., Costas, S., y Pedaci, L. (2026). *El aula que incluye: IA generativa como soporte de inclusión en el nivel inicial* [Sitio web]. `<URL>`

Notas:
- Las letras a, b, c, d de Google deben coincidir con el orden en que se citan en el texto del sitio; Claude Code tiene que revisar la correspondencia cita ↔ referencia (toda cita tiene su referencia y viceversa).
- Villegas Dianta y Sepúlveda-Irribarra (2024) se citó en el TPU2 pero faltaba en su lista; ya está incluida acá.

---

## G. Declaración de uso de IA (para Créditos y para los PDF)

Para la elaboración de este espacio digital se utilizó IA generativa (Claude de Anthropic) como apoyo en la programación del sitio, la organización y la revisión de la redacción. La conceptualización, las decisiones pedagógicas, la selección de recursos, el diseño de la experiencia y la validación de todos los contenidos son de autoría del Equipo 03. Los recursos multimedia se produjeron con las herramientas detalladas en cada uno, con las adecuaciones pertinentes de prompting y revisión humana en cada iteración.
