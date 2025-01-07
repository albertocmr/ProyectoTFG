# **parkTracker** - *Trabajo Fin de Grado.*

## Descripción de la aplicación

Esta aplicación, (***ParkTracker***), es el proyecto de Trabajo Fin de Grado que he desarrollado en *Universidad de Granada (UGR)*. Su función principal es permitir a los usuarios comprobar si una ruta que desea realizar (formato .gpx) cruza algún parque natural en Andalucía (o varios) y, en este caso, informar sobre las restricciones ambientales de los parques naturales que atraviesa.

## Características

- **Visualización de Mapas**: Muestra mapas interactivos utilizando OpenStreetMap y Leaflet.
- **Creación de Rutas**: Permite a los usuarios trazar rutas sobre un mapa y exportarlas a un formato GPX. (Posible modificación)
- **Comprobación de una ruta**: Tras comparar la ruta con los perímetros de los parques naturales, informa al usuario si la ruta cruza algún área protegida (parque natural, reserva protegida o parque nacional)..
- **Gestión de los parques naturales**: Sistema de gestión de la base de datos que contiene información sobre los parques naturales. Permite añadir, modificar y eliminar parques naturales a la base de datos.
- **Verificación de Restricciones**: Comprueba si la ruta pasa por algún/algunos parque/s natural/es en Andalucía y, en caso afirmativo, le da a conocer al usuario las restricciones medioambientales del parque natural. ***Esta es la finalidad de la aplicación web***.

## Tecnologías utilizadas durante el desarrollo de la aplicación Web.

### Back-End
- **Java 17** - Lenguaje de programación robusto y versátil, utilizado para desarrollar la lógica del servidor y manejar la lógica de la aplicación.
- **SpringBoot** - Framework de código abierto basado en el Spring Framework. Facilita la creación y configuración de aplicaciones web programadas en Java.
- **Maven** - Herramienta de gestión de proyectos y construcción que se utiliza para gestionar las dependencias y automatizar el proceso de construcción del proyecto. Simplifica la gestión de bibliotecas y la configuración del proyecto.

### Front-End
- **JavaScript** - Lenguaje de programación interpretado que impulsa la funcionalidad interactiva en el navegador. También ha sido utilizado para almacenar los datos GeoJSON.
- **React** - Biblioteca de JavaScript para construir interfaces de usuario interactivas y eficientes, utilizada para desarrollar la parte frontal de la aplicación web.
- **Node.js** - Entorno de ejecución de JavaScript en el servidor, utilizado para gestionar el desarrollo y la ejecución del código del lado del cliente.
- **npm** - Gestor de paquetes para Node.js, que se emplea para instalar y gestionar las dependencias del proyecto.
- **GeoJSON y GPX** - Formatos de archivo utilizados para almacenar y gestionar datos geoespaciales, como las rutas y los perímetros de los parques naturales.
- **Leaflet** - Biblioteca de JavaScript para la integración de mapas interactivos en aplicaciones web, facilitando la visualización y manipulación de datos geoespaciales.
- **OpenStreetMap** - Mapa editable y de código abierto, utilizado como base para la visualización de mapas y datos geoespaciales en la aplicación.
- **BootStrap 5** - Bootstrap 5 es una versión de diseño web front-end, que proporciona herramientas y componentes predefinidos para el desarrollo de sitios web y aplicaciones responsivas.
- **Axios** - Cliente HTTP basado en promesas para realizar solicitudes de datos desde el navegador o Node.js, utilizado para interactuar con las APIs del BackEnd.
- **@mapbox/togeojson** - Biblioteca de JavaScript que convierte archivos de formato GPX a GeoJSON. Útil para las importaciones de los archivos que contienen rutas.

### Base de datos
- **MySQL** - Sistema de gestión de bases de datos relacional y reconocido como la base de datos de código abierto más popular del mundo.
- **MySQL WorkBench** - Herramienta visual que facilita el diseño, modelado y administraciçon de bases de datos MySQL.
- **PostMan** - Plataforma integral para el desarrollo y prueba de APIs.

## TODO

- Conexión frontend-backend para enviar el archivo .GPX
- Realizar los perímetros de zona de cada parque natural, exceptuando Sierra de Huétor.
- Conexión de la base de datos y el front-end para el uso de restricciones y usuarios.
- Creación de usuarios.
- Escoger tecnología para registro y autenticación de usuarios (¿Auth.js?).
- Documentar restricciones de cada parque natural y añadirlas a la base de datos.
- Añadir/eliminar al mapa los perímetros únicamente necesarios. Actualmente contamos con añadir y eliminar todas a la vez.
