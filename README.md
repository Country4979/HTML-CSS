# HTML-CSS
Módulo de HTML 5 y CSS 3

La página web está desarrollada en HTML5 y maquetado con CSS3 para dispositivos móviles y luego se ha adaptado a uso de escritorio.
Todos los documentos HTML tienen su estructuración normal con la etiqueta <html> que incluye las siguientes etiquetas:
	<head>: Con todas las etiquetas <meta> y <links> a los distintos archivos CSS, así como el título de la página.
	<body>: Con el contenido del documento que se mostrará en panatalla.

#DOCUMENTOS HTML


#Etiqueta <head>


#Etiqueta <body>

A excepción de las páginas de error 404 y 500, los docuemntos tienen están estructurados con una cabecera (<header>), un navbar (<nav>), un cuerpo principal (<main>) y un pie de página (<footer>).

HABLAR DE SECTION Y PICTURE

<header>

<nav>

<main>

<footer>


#HOMEPAGE

#CONTACT

El formulario se ha aseurado su funcionamiento mediante el uso de la opción "inspeccionar página" del navegaor. Dentro de esta ventana, en la pestaña network, se puede apreciar que la información se ha enviado.


#DOCUMENTOS CSS
Los documentos CSS se encargan de dar la apariencia deseada a la WEB haciéndolas responsive.
Su diseño se ha iniciado desde la vista de un dispositivo MOBILE para luego adaptarla a pantallas más grandes. Esto se ha conseguido utilizando diferentes documentos para diferentes tamaños de pantalla, principalmente (comentado anteriormente).
Además, se han creado diferentes documentos para maquetar partes concretas y comunes a todos los documentos: footer, head, nav y main. De esta forma, cualquier cambio en uno de ellos se realizará en todos los docuemtnos que carguen el correspondiente css.

Común a todos los docuementos CSS es el uso de "* {box-sizing: border-box;}" para indicar el uso de esta propiedad en el modelo de caja.

-reset.css
Este archivo se enlaza el primero de los links (por ser el html en cascada, es el primero que se carga y aplica) para resetear todas las propiedades del navegador y que todos muestren las páginas de la forma más parecida posible.
