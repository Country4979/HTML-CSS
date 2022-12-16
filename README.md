# HTML-CSS
Módulo de HTML 5 y CSS 3

Se ha bocetado la web usando el software "Balsamiq mockups", mostrando los distintos maquetados (sin imñagenes) de los diferentes tamaños de pantalla (mobile, tablet y desktop).
Posteriormente cada página se ha desarrollado exclusivamente en HTML5 y maquetado con CSS3 para dispositivos móviles y luego se ha adaptado a uso de tablet y escritorio.


# DOCUMENTOS HTML

Todos los documentos HTML tienen su estructuración normal con la etiqueta <html> que incluye las siguientes etiquetas:
	<head>: Con todas las etiquetas <meta> y <links> a los distintos archivos CSS, así como el título de la página.
	<body>: Con el contenido del documento que se mostrará en panatalla.

# Etiqueta <head>
	En esta parte se incluyen las etiquetas <meta> que especifican eñ sistema UTF-8 de caracteres, la escala inicial de la pantalla, los links a todos los archivos CSS para el maquetado deseado y la etiqueta <title> para el título que aparecerá en la pestaña de cada página.

# Etiqueta <body>

A excepción de las páginas de error 404 y 500, los docuemntos tienen están estructurados con una cabecera (<header>), un navbar (<nav>), un cuerpo principal (<main>) y un pie de página (<footer>).

Además, con la etiqueta <section> separamaos las distintas partes del cuerpo principal y con las etiquetas <picture> y <source> controlamos las imñagenes según el tamaño de pantalla para aligerar la carga de datos.

# `<header>`

	En <header> tenemos la estructura de la cabecera del documento. A excepción de las páginas anteriormente indicadas, header está compuesto de un DIV clase container que controla la disposicion de los otros DIVs que contiene. Estos otros DIVs son los que a su vez contienen la imagen por el lado izquierdo, y el texto por el derecho.
	El tamaño de la imagen del header va en función del tamaño de la pantalla mediante el uso de <picture> y <souce> y sus propiedades. Además, dicha imagen tiene un link a la página de error "500.html" a propósito.

# `<nav>`

	El menú de navegación está compuesto por una etiqueta <ul> que contiene las etiquetas <li> que dan forma al mismo. Cada etiqueta <li> tiene un link (<a>) a partes de la página o a otras páginas.
	Los links que llevan a páginas diferentes de la Web se redirecionan a nuevas ventañas o pestañas (atributo target="_blank"), según lo tenga definido el usuario en su navegador, y con las propiedades  rel class="navbar-item"="noopener noreferrer", que evita pasar la información de referencia al sitio web de destino eliminando la información de referencia del encabezado HTTP..

	Además, este menú queda oculto en el modo mobile y se accede a él mediante un menú tipo "hamburguesa" desarrollado exclusivamente mediante CSS.

# `<main>`

	Aquí encontramos el cuerpo principal de cada página con las secciones, imágenes y todo lo necesario según su función. Cada una de ellas tiene un estilo común, con sus propiedades particulares.

# `<footer>`

	Al igual que header, aquí estructuramos el pìe de página, construído como un menú de navegación anterior, solo que en este caso siempre está visible y los textos de los links son sustituídos por imágenes representativas de la página destino.


# HOMEPAGE

Página principal de la Web, cuyo nombre de archivo es "index.html" y cuyo <main> está dividido en tres secciones:
	
	1.- Breve extracto sobre mí y mis intereses actuales. Tiene una id="xtract" para referenciar la posición del mismo mediante links (empleo de #xtract en la etiqueta <a>).
	2.- Breve descripción de la formación realizada en el campo que nos atañe.
	3.- Skills. Tiene una id="skills" para referenciar la posición del mismo mediante links (empleo de #skills en la etiqueta <a>).

En el menú de navegación de esta página, el link que debería llevar a la primera sección, conduce a la página de error error "404.html" de forma intencionada. Así, el navbar queda de la siguiente forma:
	
	Extracto - Conduce a la página 404.html
	Contacto - Conduce a la página contact.html.
	Proyectos - Conduce a la página de protectos works.html.
	Skills - Conduce a la sección de la página de las skills.
	Redes - Conduce al footer para que el usuario pueda seleccionar las redes que le interesen.

Otra diferencia que la diferencia a las demás páginas, en lo que a estructura se refiere, es la presencia de un slide, o carrusel. Diferenciada de las demás secciones mediante la etiqueta <section> y situado entre el nav-bar y el <main>.
Consta de de un dic contenedor que alberga otros dos div, uno superior con imágenes representativas de los proyectos existentes en "works.html", y otro inferior con los enlaces a las imñagenes, en forma de puntos. Las imágenes tienen enlace a los respectivos proyectos dentro de la página "works.html".

# CONTACT

Esta página, cuyo archivo de de origen es contact.html, contiene la estructura básica de la web. Carece de un slide y el navbar queda de la siguiente forma:

	Extracto - Conduce a la sección Extracto de index.html.
	Contacto - Conduce a la página de error 404.html de forma intencionada.
	Proyectos - Conduce a la página de protectos works.html.
	Skills - Conduce a la sección de la página de las skills de index.html.
	Redes - Conduce al footer para que el usuario pueda seleccionar las redes que le interesen.

El formulario, iniciado mediante la etiqueta <form>, se estructura en tres secciones:

	1.- Datos del usuario. 
		Mediante diferentes <inputs>, el usuario puede introducir la información solicitada según el "pattern" establecido para cda input requerido. Con los patterns validamos que los datos introducidos son correctos según el campo, a nivel de front-end, además de garantizar un mínimo de caracteres lógicos (atributo min-lenght) para cada campo. Además, estos inputs son obligatorios, requisito que se ejecuta con el comando atributo "required" en cada input deseado.
	2.- ¿Dónde me conociste?
		En esta sección se ha recurrido a los radio-buttons con el mismo atributo "value" para que sólo pueda seleccionarse una de las opciones (sólo has podido conocerme en un sitio a la vez). También es requerido y se le añade el atributo required sólo al primer radio (no es necesario en el resto de radios). PAra que las opciones sesan raidos, se emplea la propiedad type="radio" de la etiqueta <input>.
	3.- Información adicional.
		En esta parte el usuario aporta información que no es necesaria para el envío del formulario, por lo que sus campos no requieren del atributo "requiered". Consta de un input para la introducción de la dirección del GuitHub del usuario, validado con su correspondiente "pattern" y constatado con regexp. El campo text-area deja un espacio definido con filas (rows) y columnas (column) determinadas pero que el usuario puede modificar en el navegador a voluntad. También están definidos un mínimo de caracteres.
	
El formulario puede enviarse mediante el <button> Enviar (type="submit") o borrar los datos introducidos mediante el botón Borrar (type="reset").

Para asegurar que el formulario se envía de forma segura usando el atributo method="post" de la etiqueta <form>. Esto puede comprobarse con la opción "inspeccionar página" del navegaor. Dentro de esta ventana, en la pestaña network, se puede apreciar que la información se ha enviado. La dirección de envío es a la página registro-completado.html, pero no se mostrará su contenido debido al method="post". Si se cambia a method="get", podrá verse la página de registro completado.

# PROYECTOS

Esta página, cuyo archivo de de origen es works.html, contiene la estructura básica de la web. Carece de un slide y el navbar queda de la siguiente forma:

	Extracto - Conduce a la sección Extracto de index.html.
	Contacto - Conduce a la página contact.html.
	Proyectos - Conduce a la página de error 404.html de forma intencinada.
	Skills - Conduce a la sección de la página de las skills de index.html.
	Redes - Conduce al footer para que el usuario pueda seleccionar las redes que le interesen.

El card id="card3" no está establecido con las anteriores etiquetas <picture><source> porque la calidad de la imagen a más tamaño no es buena.
TERMINAR ESTA PÁGINA

# REGISTRO COMPLETADO

Página de libre diseño cuyo archivo de origen es "registro-completado.html". Se accede a éla tras completar el registro en el formulario. Está estructurada en cuatro partes:

	1.- Fondo monocolor establecido mediante CSS.
	2.- Imagen. Mediante las etiquetas <picture> y <source> para adecuar las imágenes al tamaño d ela pantalla, con la particularidad de que son imágenes diferentes para los tres tamaños definidos.
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
Además, se han creado diferentes documentos para maquetar partes concretas y comunes a todos los documentos: footer, head, nav y main. De esta forma, cualquier cambio en uno de ellos se realizará en todos los docuemtnos que carguen el correspondiente css.

Común a todos los docuementos CSS es el uso de "* {box-sizing: border-box;}" para indicar el uso de esta propiedad en el modelo de caja.

-reset.css
Este archivo se enlaza el primero de los links (por ser el html en cascada, es el primero que se carga y aplica) para resetear todas las propiedades del navegador y que todos muestren las páginas de la forma más parecida posible.

# CSS

Cada parte de las páginas está dividida en difrentes archivos CSS para facilitar la lectura del código y para que las pates en común de las distintas páginas sólo se tengan que cambiar una vez en un archivo. Así, como se comentó anteriormente, en cada página se cargan los difrentes archivos CSS que la maquetan.

Los selectores son principalmente de clase (.nombre_clase), aunque también los hay de pseudoelementos (:nombre_pseudoelemento) y para id's (#nombre_id). también controlamos dónde actúa el CSS mediante herencia exclusiva a hijos (elemento> hijo) o a cualquier elemento de clase o tipo determinado por debajo del nodo especificado (elemento padre elemento/clase descendiente afectado).

# COMMON

En este archivo creamos variables que afectarán a todos los documentos, como el tipo de letra (font-family), colores de fondo, de texto y títulos, así como el tipo de letra, en este caso "Century Gothic".

# HEADER

Mediante media-querys se establecen distintas imágenes de fondo del DIV contenedor (background-img) para distintos tamaños de pantalla. Lo mismo ocurre para el tamaño de la imagen de la izquierda y el tamaño de fuente de los textos. En el caso del tamaño de pantalla tipos Desktop, la imagen de la izquierda está desplazada hacia abajo intencionadamente.
Los colores 

# BARRA DE NAVEGACION

La barra de navegación se maqueta ene l archivo "nav.css" y se ha definido para tres tamaños diferentes de pantalla. En el primer caso, "Mobile", el navbar se ha ocultado y se desplegará mediante menú tipo "Hamburguesa". Para la pantalla "Tablet", el menú aparece bajo la cabecera y con el texto centrado. Para las pantallas tamaño "Desktop", la barra de navegación se sigue situando bajo la cabecera, pero el texto está ligeramente desplazado hacia la derecha para dejar más espacio a la imagen de la cabecera.
Al igual que el caso anterior, mediante media query le indicamos al navegador cómo debe dibujar la página según el tamaño de pantalla.
Los items del navegador mantienen los colores definidos para los títulos en "common.css" porque usan la propiedad color:var(--main-titles_color). Además, estos items tienen una transición de 0.3 segundos que aumenta el espaciado de las letras (propiedad letter-spacing) y cambia el color de las mismas a naranja (color: rgb(255,165,0), definido mediande codificación rgb para que se presente lo más parecido posible en los distintos navegadores.

CARRUSEL

El carrusel está maquetado en el archivo "carousel.css". Consta de dos partes, los puntos y las imágenes. La primera, mediante los atributos display: flex y justify-content: center centramos los puntos horizontalmente.
Para las imágenes, la maquetación la hacemos diferente: un display:flex y un flex-direction: column y flex-wrap:wrap. Con estos tres atributos le decimos que alinee los objetos en forma de columna. Con overflow: hidden le indicamos al navegador que no muestre el trozo de imagen que sobresalga de su contenedor.
La transición entre una imagen y otra la hace de forma suave.
