import React from 'react';

const AboutUsComponent = () => {
  return (
    <div className="container m-2 p-5 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 border">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre Nosotros</h1>
        <p className="text-gray-700">
          <strong>ParkTracker</strong> es una iniciativa desarrollada como parte de un Trabajo de Fin de Grado en el grado Ingeniería Informática, con el objetivo de promover un uso responsable de los espacios naturales.
        </p>
        <p className="text-gray-700 mt-4">
          Este proyecto surge de la pasión por la naturaleza y la tecnología. Con ParkTracker buscamos facilitar a los usuarios la planificación de rutas respetuosas con el medioambiente, basándonos en la normativa de los planes: <strong>Plan de Ordenación de los Recursos Naturales (PORN)</strong> y los <strong>Plan Rectores de Uso y Gestión (PRUG)</strong>.
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Quién está detrás?</h2>
        <p className="text-gray-700">
          Soy Alberto, estudiante de último curso de Ingeniería Informática en Universidad de Granada. Este portal web es el resultado de meses de desarrollo y aprendizaje, con el objetivo de unir la tecnología, la sostenibilidad y la utilidad pública.
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Créditos y tecnologías utilizadas</h2>
        <p className="text-gray-700">
          Este proyecto ha sido posible gracias al uso de tecnologías como <strong>React, Astro, Tailwind, Bootstrap, Leaflet, OpenStreetMap</strong> y <strong>OSRM</strong>. Agradezco especialmente la documentación pública de los planes de uso y gestión proporcionados por la Junta de Andalucía.
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contacto</h2>
        <p className="text-gray-700">
          ¿Tienes alguna duda o sugerencia? Escríbeme a <a href="mailto:parktracker.contact@gmail.com" className="text-blue-600 underline">parktracker.contact@gmail.com</a> o visita el <a href="https://github.com/albertocmr/ProyectoTFG" target="_blank" className="text-blue-600 underline">repositorio en GitHub</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUsComponent;
