import React from 'react';

const HomeComponent = () => {
    return (
        <div className="container bg-white p-4 space-y-12 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="bg-white shadow-xl p-4 rounded-2xl border transition-shadow hover:shadow-2xl duration-300 ease-in-out">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">
                        ¡Bienvenido a parkTracker <span className="text-gray-500 text-2xl">website</span>!
                    </h1>
                    <p className="text-gray-700">
                        <strong className=''>Explorar la naturaleza es un privilegio, protegerla es una responsabilidad.</strong><br></br>
                        Aquí encontrarás información sobre los parques naturales de Andalucía y la normativa que debes tener en cuenta para disfrutar de ellos de manera responsable.
                    </p>                    
                </div>
                <div className="flex justify-center">
                    <img
                        alt="Paisaje del Parque Natural Sierra de Huétor en otoño, hecha por Pilar Flores"
                        className="rounded-2xl shadow-lg max-w-full w-96"
                        src="/src/assets/images/SierraHuetor_Otonio_Pilarflores.jpg"
                    />
                </div>
            </div>

            <div className="bg-white shadow-md p-3 rounded-2xl border transition-shadow hover:shadow-2xl duration-300 ease-in-out">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Cómo funciona?</h2>
                <p className="text-gray-700 mb-4">
                    Comprueba si la ruta que planeas realizar atraviesa alguno de los parques naturales de Andalucía y accede a la normativa vigente en cada zona protegida.
                    Esta información te ayudará a planificar tu recorrido de forma responsable, evitando sanciones y contribuyendo a la conservación del entorno natural.
                    Como usuario no registrado, podrás visualizar las rutas en el mapa. Sin embargo, para analizarlas y detectar intersecciones con parques naturales, necesitas iniciar sesión.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pasos para comprobar tu ruta:</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li><strong>Selecciona el medio de transporte:</strong> Elige si harás la ruta en vehículo a motor, bicicleta o caminando.</li>
                    <li><strong>Selecciona tu archivo GPX:</strong> Asegúrate de que contiene la ruta deseada. Se visualizará en el mapa.</li>
                    <li><strong>Inicia sesión:</strong> Inicia sesión para poder acceder a las siguientes funcionalidades avanzadas.</li>
                    <li><strong>Carga el archivo:</strong> El sistema lo almacenará para analizar posibles intersecciones.</li>
                    <li><strong>Ejecuta el análisis:</strong> Compara tu ruta con los parques naturales y determina las restricciones.</li>
                    <li><strong>Consulta las restricciones:</strong> Visualiza qué limitaciones se aplican a la ruta.</li>
                    <li><strong>Genera y visualiza intersecciones:</strong> Verás sobre el mapa los tramos de tu ruta que coinciden con los perímetros de los parques naturales.</li>
                </ol>
            </div>




            <div className="bg-white shadow-md p-3 rounded-2xl border transition-shadow hover:shadow-2xl duration-300 ease-in-out">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Por qué usar parkTracker?</h2>
                <p className="text-gray-700">
                ParkTracker te permite planificar rutas de manera responsable, centralizando la información sobre la normativa relacionada con el <strong>Uso público, Turismo activo, Ecoturismo 
                y Educación ambiental</strong>. Esta normativa se recoge en los planes <i>Plan de Ordenación de los Recursos Naturales (PORN)</i> y <i>Plan Rector de Uso y Gestión (PRUG)</i>, los cuales aplican 
                a cada parque natural de la comunidad autónoma de Andalucía.


                </p>
            </div>

            <div className="bg-white shadow-md p-3 rounded-2xl border transition-shadow hover:shadow-2xl duration-300 ease-in-out">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sobre el proyecto</h2>
                <p className="text-gray-700">
                    Esta aplicación fue desarrollada por Alberto Cámara como parte del Trabajo Fin de Grado de la Universidad de Granada. Puedes contactar conmigo en la siguiente dirección de correo: <a href="parktracker.contact@gmail.com" className="text-blue-600 underline">parktracker.contact@gmail.com</a>
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md p-3 rounded-2xl border transition-shadow hover:shadow-2xl duration-300 ease-in-out">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Qué tecnologías se han utilizado?</h2>
                    <p className="text-gray-700">
                    La aplicación está construida con <strong>React y Astro</strong>, con una interfaz personalizada usando <strong>Bootstrap y Tailwind CSS</strong>. Utiliza <strong>OpenStreetMap</strong> para mostrar rutas y los perímetros de los parques naturales,
                    con una visualización dinámica sobre el mapa gracias a la biblioteca <strong>Leaflet</strong>. Para la generación de archivos GPX se emplea la herramienta de código abierto <strong>OSRM</strong>.
                    </p>
                </div>
                <div className="bg-white shadow-md p-3 rounded-2xl border transition-shadow hover:shadow-2xl duration-300 ease-in-out">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Cómo se ha desarrollado?</h2>
                    <p className="text-gray-700">
                        Se ha desarrollado mediante los conocimientos aprendidos durante el Grado de Ingeniería Informática y mediante el estudio constante de nuevas tecnologías aprendidas durante
                        la realización de este portal web. Se ha hecho un seguimiento continuo mediante <strong>GitHub</strong>, cuyo repositorio se puede consultar clicando el icono de Github que se encuentra en la esquina inferior derecha.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
