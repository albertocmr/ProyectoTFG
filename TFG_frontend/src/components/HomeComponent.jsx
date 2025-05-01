import React from 'react';

const HomeComponent = () => {
    return (
        <div className="p-5 max-w-screen-xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="bg-white shadow-xl p-6 rounded-2xl border">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        ¡Bienvenido a parkTracker <span className="text-gray-500 text-2xl">webSite</span>!
                    </h1>
                    <p className="text-gray-700">
                        Explorar la naturaleza es un privilegio, protegerla es una responsabilidad. 
                        Aquí encontrarás información sobre los parques naturales de Andalucía y las normativas que debes seguir para disfrutar de ellos de manera responsable.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        alt="Parques naturales en Andalucía"
                        className="rounded-2xl shadow-lg max-w-full w-96"
                        src="/src/assets/images/SierraHuetor_Otonio_Pilarflores.jpg"
                    />
                </div>
            </div>

            <div className="bg-white shadow-md p-6 rounded-2xl border">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Cómo funciona?</h2>
                <p className="text-gray-700">
                    Esta página web te permite comprobar si una ruta atraviesa los parques naturales de Andalucía y te da a conocer las restricciones para que puedas realizar la ruta conociendo la normativa.
                    Por lo que podrás evitar sanciones y disfrutar de la naturaleza de una manera responsable al conocer las normativas ambientales.
                </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-2xl border">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Por qué usar parkTracker?</h2>
                <p className="text-gray-700">
                    ParkTracker te permite planificar rutas de manera responsable.
                </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-2xl border">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sobre el proyecto</h2>
                <p className="text-gray-700">
                    Esta aplicación forma parte de un Trabajo de Fin de Grado, cuyo objetivo es combinar tecnología y medioambiente para facilitar el cumplimiento de las normas que rigen los parques naturales.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md p-6 rounded-2xl border">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Qué tecnologías se han utilizado?</h2>
                    <p className="text-gray-700">
                        Esta app está desarrollada con React y Astro, usa Bootstrap/Tailwind para la interfaz. OpenStreetMap proporciona el mapa que manipularemos con los perímetros de los parques naturales y rutas. También usamos OSRM para la creación de rutas GPX y Leaflet para visualización interactiva en el mapa.
                    </p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-2xl border">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Cómo se ha desarrollado?</h2>
                    <p className="text-gray-700">
                        Se ha desarrollado mediante los conocimientos aprendidos durante el Grado de Ingeniería Informática y mediante el estudio constante de nuevas tecnologías aprendidas durantes
                        la realicación de este portal web. Se ha hecho un seguimiento continuo mediante un respositorio de GitHub.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
