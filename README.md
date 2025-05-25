# **parkTracker** - *Trabajo Fin de Grado.*

## Descripción de la aplicación

Esta aplicación, (***ParkTracker***), es el proyecto de Trabajo Fin de Grado que he desarrollado en *Universidad de Granada (UGR)*. Su función principal es permitir al cliente comprobar si una ruta que desea realizar (formato .gpx) cruza algún parque natural en Andalucía (o varios) y, en caso afirmativo, informar sobre las restricciones ambientales de los parques naturales que atraviesa.

## Características
- **Home**: Breve descripción de la página web e información adicional sobre el proyecto.
- **Creación de Rutas**: Permite a los usuarios trazar rutas sobre un mapa y exportarlas a un formato GPX. (Posible modificación)
- **Visualización de Mapas**: Muestra mapas interactivos utilizando OpenStreetMap y Leaflet.
- **Comprobación de una ruta**: Tras comparar la ruta con los perímetros de los parques naturales, informa al usuario si la ruta cruza algún área protegida (parque natural, reserva protegida o parque nacional).
- **Gestión de los parques naturales**: Sistema de gestión de la base de datos que contiene información sobre los parques naturales. Permite añadir, modificar y eliminar parques naturales a la base de datos. Esta función proporciona una integración directa con la base de datos, es necesario tener un rol administrador.
- **Verificación de Restricciones**: Comprueba si la ruta pasa por algún parque natural de Andalucía y, en caso afirmativo, dar a conocer al cliente las restricciones medioambientales del parque natural. ***Esta es la finalidad de la aplicación web***.

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
- **@astrojs/react** - Integración de React en el framework Astro, que permite utilizar componentes de React en un proyecto Astro. Especialmente relevante cuando se combina contenido estático con componentes dinámicos, mejorando la experiencia del usuario sin perjudicar el rendimiento.
- **@astrojs/vercel** - Adaptador para desplegar Astro en Vercel. Facilita el proceso de empaquetado y despliegue, configurando las rutas y los recursos necesarios. Es útil para entornos de producción que requieren escalabilidad, optimización y despliegues automáticos desde el repositorio de Github.
- **@auth0/auth0-react** - Librería oficial de Auth0 para integrar autenticación en aplicaciones construidas con React. Ha sido utilizada en el proyecto junto a Astro para gestionar la autenticación de usuarios desde el frontend de manera segura y eficiente.

### Base de datos
- **MySQL** - Sistema de gestión de bases de datos relacional y reconocido como la base de datos de código abierto más popular del mundo.
- **MySQL WorkBench** - Herramienta visual que facilita el diseño, modelado y administraciçon de bases de datos MySQL.
- **PostMan** - Plataforma integral para el desarrollo y prueba de APIs.

### Despliege
- **Docker** - Plataforma que permite desarrollar, empaquetar y ejecutar aplicaciones dentro de contenedores. Se ha utilizado para aislar los distintos servicios del proyecto en entornos portables. Facilita la puesta en marcha del sistema en cualquier máquina mediante los archivos de configuración Dockerfile y docker-compose.yml. Se ha utilizado para la fase de pre-producción. 
- **Vercel** - Plataforma de despliegue orientada al frontend, ideal para el framework Astro. En este proyecto, se ha utilizado para desplegar la interfaz de usuario mediante actualizaciones instantáneas mediante la integración continua desde Github.
- **Render** - Plataforma de alojamiento en la nube para servicios web. Ha sido utilizada para desplegar el backend del proyecto (API REST en Java), permitiendo la ejecución continua. También facilita la gestión de variables de entorno.
- **Railway** - Plataforma de infraestructura como servicio (IaaS) utlizada para la gestión de base de datos y despliegue de microservicios. En el contexto del proyecto, se ha empleado como proveedor para la base de datos MySQL.
- **Auth0** - Plataforma de autenticación como servicio (Auth0-aaS) que permite gestionar de forma segura el acceso de los usuarios a la aplicación. Ha sido utilizada para implementar un sistema de autenticación y autorización basada en tokens JWT.
