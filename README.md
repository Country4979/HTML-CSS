# HTML-CSS
Módulo de HTML5 y CSS3

Se ha bocetado la web usando el software "Balsamiq mockups", mostrando los distintos maquetados (sin imñagenes) de los diferentes tamaños de pantalla (mobile, tablet y desktop).
Posteriormente cada página se ha desarrollado exclusivamente en HTML5 y maquetado con CSS3 para dispositivos móviles y luego se ha adaptado a uso de tablet y escritorio.


# DOCUMENTOS HTML

Todos los documentos HTML tienen su estructuración normal con la etiqueta 'html' que incluye las siguientes etiquetas:
	<head>: Con todas las etiquetas <meta> y <links> a los distintos archivos CSS, así como el título de la página.
	<body>: Con el contenido del documento que se mostrará en panatalla.

# Etiqueta 'head'
	<head> En esta parte se incluyen las etiquetas <meta> que especifican eñ sistema UTF-8 de caracteres, la escala inicial de la pantalla, los links a todos los archivos CSS para el maquetado deseado y la etiqueta <title> para el título que aparecerá en la pestaña de cada página.

# Etiqueta 'body'

A excepción de las páginas de error 404 y 500, los docuemntos tienen están estructurados con una cabecera ('header'), un navbar ('nav'), un cuerpo principal ('main') y un pie de página ('footer').

Además, con la etiqueta 'section' separamaos las distintas partes del cuerpo principal y con las etiquetas 'picture' y 'source' controlamos las imágenes según el tamaño de pantalla para aligerar la carga de datos.

# 'header'

	En <header> tenemos la estructura de la cabecera del documento. A excepción de las páginas anteriormente indicadas, header está compuesto de un DIV clase container que controla la disposicion de los otros DIVs que contiene. Estos otros DIVs son los que a su vez contienen la imagen por el lado izquierdo, y el texto por el derecho.
	El tamaño de la imagen del header va en función del tamaño de la pantalla mediante el uso de <picture> y <souce> y sus propiedades. Además, dicha imagen tiene un link a la página de error "500.html" a propósito.

# 'nav'

	El menú de navegación está compuesto por una etiqueta <ul> que contiene las etiquetas <li> que dan forma al mismo. Cada etiqueta <li> tiene un link (<a>) a partes de la página o a otras páginas.
	Los links que llevan a páginas diferentes de la Web se redirecionan a nuevas ventañas o pestañas (atributo target="_blank"), según lo tenga definido el usuario en su navegador, y con las propiedades  rel class="navbar-item"="noopener noreferrer", que evita pasar la información de referencia al sitio web de destino eliminando la información de referencia del encabezado HTTP.
	
	Además, este menú queda oculto en el modo mobile y se accede a él mediante un menú tipo "hamburguesa" desarrollado exclusivamente mediante CSS. Por este motivo, esta etiqueta se encuentra dentro del div con calse "respmenu". Esto es necesario porque para realizar la funcionalidad de este tipo de menú hamburguesa, reside en tres aspectos clave:

		1.- Usar un input de tipo checkbox para saber cuando el menú está visible o no.
		2.- Usar el selector de hermanos generales para lograr que el estado del checkbox se refleje en el menú.
		3.- El checbox tiene que apaarecer antes en el HTML.

	La segunda condición tiene una importante implicación, y es que resulta imprescindible que el checkbox y el menú sean hermanos en la jerarquia del HTML.

# 'main'

	Aquí encontramos el cuerpo principal de cada página con las secciones, imágenes y todo lo necesario según su función. Cada una de ellas tiene un estilo común, con sus propiedades particulares.

# 'footer'

	Al igual que header, aquí estructuramos el pìe de página, construído como un menú de navegación anterior, solo que en este caso siempre está visible y los textos de los links son sustituídos por imágenes representativas de la página destino.


# HOMEPAGE

Página principal de la Web, cuyo nombre de archivo es "index.html" y cuya etiqueta main está dividida en tres secciones:
	
	1.- Breve extracto sobre mí y mis intereses actuales. Tiene una id="xtract" para referenciar la posición del mismo mediante links (empleo de #xtract en la etiqueta <a>).
	2.- Breve descripción de la formación realizada en el campo que nos atañe.
	3.- Skills. Tiene una id="skills" para referenciar la posición del mismo mediante links (empleo de #skills en la etiqueta <a>).

En el menú de navegación de esta página, el link que debería llevar a la primera sección, conduce a la página de error "404.html" de forma intencionada. Así, el navbar queda de la siguiente forma:
	
	Extracto - Conduce a la página "404.html".
	Contacto - Conduce a la página "contact.html".
	Proyectos - Conduce a la página de protectos "works.html".
	Skills - Conduce a la sección de esta página con las skills.
	Redes - Conduce al footer de esta página para que el usuario pueda seleccionar las redes que le interesen.

Otra diferencia respecto a las demás páginas, en lo que a estructura se refiere, es la presencia de un slide, o carrusel. Diferenciada de las demás secciones mediante la etiqueta section y situado entre el nav-bar y el main.
Consta de de un div contenedor que alberga otros dos div, uno superior con imágenes representativas de los proyectos existentes en "works.html", y otro inferior en forma de puntos con los enlaces a las imágenes del carrusel. Las imágenes tienen enlace a los respectivos proyectos dentro de la página "works.html" (al no tener dominio propio), a excepción de la primera, qu enlaza directamente con la web correspondiente.


# CONTACT

Esta página, cuyo archivo de de origen es "contact.html", contiene la estructura básica de la web. Carece de un slide y el navbar queda de la siguiente forma:

	Extracto - Conduce a la sección Extracto de "index.html".
	Contacto - Conduce a la página de error "404.html" de forma intencionada.
	Proyectos - Conduce a la página de protectos "works.html".
	Skills - Conduce a la sección de la página de las skills de "index.html".
	Redes - Conduce al footer de esta página para que el usuario pueda seleccionar las redes que le interesen.

El formulario, iniciado mediante la etiqueta form, se estructura en tres secciones:

	1.- Datos del usuario. 
		Mediante diferentes etiquetas 'input', el usuario puede introducir la información solicitada según el "pattern" establecido para cada input requerido. Con los patterns validamos que los datos introducidos son correctos según el campo, a nivel de front-end, además de garantizar un mínimo de caracteres lógicos (atributo min-lenght) para cada campo. Además, estos inputs son obligatorios, requisito que se ejecuta con el comando atributo "required" en cada input deseado.
	2.- ¿Dónde me conociste?
		En esta sección se ha recurrido a los inputs type="radio" con el mismo atributo "value" para que sólo pueda seleccionarse una de las opciones (sólo has podido conocerme en un sitio a la vez). También es requerido y se le añade el atributo "required" sólo al primer radio (no es necesario en el resto de radios).
	3.- Información adicional.
		En esta parte el usuario aporta información que no es necesaria para el envío del formulario, por lo que sus campos no requieren del atributo "requiered". Consta de un input para la introducción de la dirección del GitHub del usuario, validado con su correspondiente "pattern" y constatado con regexp. El campo text-area deja un espacio definido con filas (rows) y columnas (columns) determinadas pero que el usuario puede modificar en el navegador a voluntad. También están definidos un mínimo de caracteres.
	
El formulario puede enviarse mediante el 'button' Enviar (type="submit") o borrar los datos introducidos mediante el botón Borrar (type="reset").

Para asegurar que el formulario se envía de forma segura usando el atributo method="post" de la etiqueta 'form'. Esto puede comprobarse con la opción "inspeccionar página" del navegaor. Dentro de esta ventana, en la pestaña network, se puede apreciar que la información se ha enviado. La dirección de envío es a la página registro-completado.html, pero no se mostrará su contenido debido al method="post". Si se cambia a method="get", podrá verse la página de registro completado.


# PROYECTOS

Esta página, cuyo archivo de de origen es "works.html", contiene la estructura básica de la web. Carece de un slide y el navbar queda de la siguiente forma:

	Extracto - Conduce a la sección Extracto de "index.html".
	Contacto - Conduce a la página "contact.html".
	Proyectos - Conduce a la página de error "404.html" de forma intencinada.
	Skills - Conduce a la sección de la página de las skills de "index.html".
	Redes - Conduce al footer de esta página para que el usuario pueda seleccionar las redes que le interesen.

Se han estalecido enlaces que contiene los divs (cards) que contienen información sobre el proyecto. La card con id="eco-mode" no está establecido con las anteriores etiquetas 'picture' 'source' porque la calidad de la imagen a más tamaño no es buena.
Cada card consta de una pequeña imagen representativa del proyecto, un título y una breve descripción del mismo, todo maquetado con CSS3.


# REGISTRO COMPLETADO

Página de libre diseño cuyo archivo de origen es "registro-completado.html". Se accede a éla tras completar el registro en el formulario. Está estructurada en cuatro partes:

	1.- Fondo monocolor establecido mediante CSS.
	2.- Imagen. Mediante las etiquetas 'picture' y <source> para adecuar las imágenes al tamaño de la pantalla, con la particularidad de que son imágenes diferentes para los tres tamaños definidos.
	3.- Contiene un texto de información del registro.
	4.- Botón con un link a "index.html" y una imagen responsive como en el caso anterior, solo que sólo responde a dos tamaños establecidos y siempre es la misma imagen.


# ERROR 404

Página de libre diseño cuyo archivo de origen es "404.html". Diferentes links conducen a ella de forma intencionada. Está estructurada en 3 partes:

	1.- Fondo con imagen establecido mediante CSS. Este fondo cambia con el uso de media querys según el tamaño de pantalla.
	2.- Texto informativo.
	3.- Link de retorno a "index.html".


# ERROR 500

Página de libre diseño cuyo archivo de origen es "400.html" a la que se llega a ella de forma intencionada mediante link en la imagen de la cabecera de cada página (a excepción de "404.html" y "registro-completado.html") Está estructurada en 3 partes:

	1.- Imagen establecida <picture> y <source> según el tamaño de pantalla.
	2.- Texto informativo.
	3.- Link de retorno a "index.html".


# DOCUMENTOS CSS

Los documentos CSS se encargan de dar la apariencia deseada a la WEB haciéndolas responsive y accesibles.
Su diseño se ha iniciado desde la vista de un dispositivo MOBILE para luego adaptarla a pantallas más grandes. Esto se ha conseguido utilizando diferentes documentos para diferentes tamaños de pantalla, principalmente (comentado anteriormente).
Además, se han creado diferentes documentos .css para maquetar partes concretas y comunes a todos los documentos: footer, head, nav, carousel y main. De esta forma, cualquier cambio en uno de ellos se realizará en todos los documentos que carguen el correspondiente CSS.

Los selectores son principalmente de clase (.nombre_clase), aunque también los hay de pseudoelementos (:nombre_pseudoelemento) y para id's (#nombre_id). también controlamos dónde actúa el CSS mediante herencia exclusiva a hijos (elemento> hijo) o a cualquier elemento de clase o tipo determinado por debajo del nodo especificado (elemento padre elemento/clase descendiente afectado).

# reset.css

Este archivo se enlaza el primero de los links (por ser el html en cascada, es el primero que se carga y aplica) para resetear todas las propiedades del navegador y que todos muestren las páginas de la forma más parecida posible.

# all.min.css

Enlace externo a este archivo alojado en Font Awesome y se usa exclusivamente para extraer los iconos del menú hamburguesa.

# common.css

En este archivo creamos variables que afectarán a todos los documentos, como el tipo de letra (font-family: 'Century Gothic'), colores de fondo, de texto y títulos.

# header.css

Mediante media-querys se establecen distintas imágenes de fondo del DIV contenedor (background-img) para distintos tamaños de pantalla. Lo mismo ocurre para el tamaño de la imagen de la izquierda y el tamaño de fuente de los textos. En el caso del tamaño de pantalla tipos Desktop, la imagen de la izquierda está desplazada hacia abajo intencionadamente.
Los colores de las fuentes se obtienen mediante el uso de variables definidas en common.css

# nav.css

La barra de navegación se maqueta ene l archivo "nav.css" y se ha definido para tres tamaños diferentes de pantalla. En el primer caso, "Mobile", el navbar se ha ocultado y se desplegará mediante menú tipo "Hamburguesa". Para la pantalla "Tablet", el menú aparece bajo la cabecera y con el texto centrado. Para las pantallas tamaño "Desktop", la barra de navegación se sigue situando bajo la cabecera, pero el texto está ligeramente desplazado hacia la derecha para dejar más espacio a la imagen de la cabecera.
En el modo Mobile, gracias al selector de de hermanos generales (~) podemos hacer que cuando el input esta en estado :checked, se muestre el nav, y cuando no se encuentra en dicho estado, el menú se oculte. Algo similar hacemos con los iconos de Font Awesome para mostrar/esconder el icono adecuado según el estado del checkbox. Gracias a position: absolute;, que nos permite colocar los iconos justo encima del checkbox. Finalmente, con pointer-events: none; hacemos que los iconos sean "transparentes" a los eventos del ratón, de modo que pese a estar encima del checkbox, no van a recibir ningún click del ratón, y por lo tanto será el checkbox el que los reciba a pesar de estar debajo de los iconos.

Al igual que el caso anterior, mediante media query le indicamos al navegador cómo debe dibujar la página según el tamaño de pantalla.
Los items del navegador mantienen los colores definidos para los títulos en "common.css" porque usan la propiedad color:var(--main-titles_color). Además, estos items tienen una transición de 0.3 segundos que aumenta el espaciado de las letras (propiedad letter-spacing) y cambia el color de las mismas a naranja (color: rgb(255,165,0), definido mediande codificación rgb para que se presente lo más parecido posible en los distintos navegadores.

# footer.css

Con este archivo css contorlamos el comportamiento del footer. Con la propiedad margin-top controlamos el marge superior que lo mantiene separado del resto de la página. El tamaño de los iconos se controla añadiendo la propiedad width, con un valor del 100% para pantallas con ancho inferior a 640px, del 92% entre 640px y 1007px y del 100% para pantallas de ancho mayor a los 1008px, aplicadosobre la clase imagen y el a, dentro de la clase footer_navbar-item.

Mediante las proiedades display:flex, justify-content:center y text-align:center sobre 

# carousel.css

El carrusel está maquetado en el archivo "carousel.css". Consta de dos partes, los puntos y las imágenes. La primera, mediante los atributos display: flex y justify-content: center centramos los puntos horizontalmente.
Para las imágenes, la maquetación la hacemos diferente: un display:flex y un flex-direction: column y flex-wrap:wrap. Con estos tres atributos le decimos que alinee los objetos en forma de columna. Con overflow: hidden le indicamos al navegador que no muestre el trozo de imagen que sobresalga de su contenedor.
La transición entre una imagen y otra la hace de forma suave.

# error_404.css

EL cuerpo principal tiene una imagen de fonso definida en la propiedad background-image mediante url a la imagen en concreto. Mediante media queries cambiamos la imagen de fondo según el tamaño de la pantalla.
Los tamaños, estilos y colores del texto se definen mediante sus respetivas etiquetas y/o clases y también cambian de tamaño en función del tamaño de la pantalla mediante media queries.
Eliminamos el subrayado típico de los links con la propiedad text-decoration: none.

 # error_500.css

 Sin imagen de fondo, en pantallas pequeñas y medianas, la imagen se coloca sobre el texto y sólo varía el tamaño de letra mediante las media queries. En pantallas más grandes y mediante las media queries cambiamos  dysplay:flex para poder colocar la imagen a la izquierda del texto, así como también variamos el tamaño del texto.
 En este archivo se definen los colores, el estilo de fuente y eliminamos el subrayado típico de los links con la propiedad text-decoration: none.

# registro-style.css

AL igual que en el resto dearchivos CSS, controlamos el aspecto, tamaño y color de la fuente, los bordes de la imagen con border-radius con un valor del 25% y los márgenes de los diferentes elementos que se muestran.
El único elemento cambiante mediante media queries es el tamaño de la imagen del botón, que lo mantiene fijo a un ancho máximo de 250px en pantallas de ancho mayor a 600 pixeles.

# butons.css

Este archivo es exclusivo para definir el comportamieto de los botones del formulario la página "contact.html".
El aspecto se mantiene fijo definiendo sus propiedades, pero el tamaño es controlado mediante media quieries según el ancho de la pantalla.

# home_page_style.css, home_page_media_q.css & progress_bar.css

En "home_page_style.css" maquetamos la página "index.html", concretamente toda la parte correspondiente al main. Se definen los márgenes del texto y los espacion entre líneas y diferentes tipos de títulos, así como el color, estilo y subrayado.
Mención especial es la sección Skills, que tiene dos partes diferenciadas y controladas mediante las propiedades display:flex y justify-content:space-evenly sobre la clase all_skills.
Dentro de esta sección las barras de progreso se controlan mediante el documento externo "progress_bar.css". aquí se ha creado una animación (@keyframe nombre_animacion{}) para cada barra, definiendo dónde empiezan. dónde acaban y el comportamiento, que en este caso afecta sólo al width de la clase progress-var-value, pero a cada id de forma independiente. La animación se define en todas las id con las misma características (1 segundo de duración y suavizado con el valor ease-in-out) y que se mantenga fija en su valor final una vez terminada la animación con la proiedad/valor animation-fill-mode:forwards. Lo único que varía en cada id en lo que a la animación se refiere, es la animación que aplica, especificada en el primer valor de pa propiedad animation. Con media queries se cambia el tamaño de las barras de progreso según el tamño de pantalla.
En la otra parte de la sección Skills, correspondiente a las softs skills, se ha aplicado una transición al texto con la propiedad transition aplicada sobre font-size, el color y font-weight. En el primer valor aplica la duración de 1 segundo y de 0.3 segundos en los otros dos. Para los tres valores sobre los que aplica, el efecto es un suavizado con ease-in-out. Inicialmente, esta transición aumenta a 1.1em el tamaño de la fuente, cambia el color a naranaj (definido mediante codificación rgb) y el ancjo a 600, pero sólo cuando el ratón se coloca sobre el texto, con la propiedad :hover.
Con el archivo externo "home_page_media_q.css" contorlamos el maquetado con media_queies, afectando mayoritariamente al interlineado, márgenes y tamaños de letra, segñun cambie el ancho de pantalla.

# contact_style.css & contact_style_media-q.css

Como en el caso anterior, maquetamos el main de la página, en este caso, de "contact.html". Definimos mediante display:flex la sección del formulariode "¿Cómo me conociste?". Las secciones de "¿Cómo te llamas?" y "Cuéntame" están maquetadas con display: grid. En el primer caso se han efinido 2 columnas, una de 80px de ancho y otra automática, con un centrado en la alineación vertical (align-items:center). En "Cuéntame, se ha definido una única columna de 1fr de ancho y se ha colocado en qué celda va colocado cada elemento mediante grid-template-area y se a ha definido una separación de 5px entre celdas (gap).
Como en casi todos los casos, controlamos el tamaño, color, estilo, márgenes y demás propiedades del texto y espaciado sobre cada etiqueta y clase.
Con el uso del archivo externo "contact_style_media-q.css" variamos el aspecto de la página según el ancho de la pantalla. Así, con un ancho inferior a 640px, el comportamiento es el especificado anteriormente. Con un ancho entre los 640 y 1007px, la rejilla de "Cuéntame" cambia a 2 columnas de 300px y 1fr y unas eparación entre filas de 10px. En el caso de "¿Cómo te llamas?" las columnas pasan a ser de 110px y 2fr.
En ambas secciones se especifica concretamente en qué celda se coloca cada elemento según su id y las propiedades grid-column:valor/valor y grid-row:valor/valor.
Para pantallas de ancho mayor a 1008px, en ambos casos el tamño de las columnas también cambia el ancho de las columnas.
Además de controlar los diferentes grid, con los media queries, como en las páginas anteriores,  también controlamos todo lo referido a espaciados, márgenes y textos para que se ajusten a los diferentes tamaños de pantalla. 

# works_style.css & works_style_media_q.css

Como en los dos casos anteriores, maquetamos el main de la página, en este caso, de "works.html". Mediante la propieda display:grid sobre la clase container, colocamos cada "card" en una celda. Grid está definido inicialmente con 1 columna con 1fr de ancho, alineación centrada y separación entre celdas de 10px.
CAda card está maquetada con display:flex, con distribución en columnas (flex-direction: column) y centrada horizontalmente, con una alineación vertica del tipo space-betwen. Se le ha dado un dorde redondeado a las imágenes y tamaño y color direntes al título y texto respectivamente, así como un color de fondo a la tarjeta.
Mediante el archivo externo "works_style_media_q.css" controlamos los diferentes grid, con los media queries, como en las páginas anteriores. También controlamos todo lo referido a espaciados, márgenes y textos para que se ajusten a los diferentes tamaños de pantalla.