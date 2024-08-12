import React from 'react';
import '../styles/Map.css'; // Importa estilos específicos del mapa

const CreateTrack = () => {
  const createUrl = 'https://map.project-osrm.org/?z=8&center=37.175637%2C-4.493408&hl=es&alt=0&srv=0';
  /* https://maps.openrouteservice.org/#/place/@-4.355735778808595,36.981574967942514,6 */
  /* https://graphhopper.com/maps/?profile=car&layer=Omniscale  --- NO SE PUEDE IMPORTAR A LA WEB*/
  

  return (
  <div className='container d-flex flex-wrap justify-content-center'>
      <p class="bg-gray-100 border-l-4 border-gray-500 p-4 rounded text-gray-600 text-lg my-4">
        En esta sección podrás crear tu propia ruta y exportarla a formato GPX para así, poder cargarla en el apartado de 'Carga una ruta'. <strong>Utilizamos un mapa de la página web OSRM</strong>. Lo primero que debes de hacer
        es indicar en la parte superior izquierda del mapa, en el desplegable azul, cuál será tu medio de transporte durante la ruta (coche, bicicleta o peatón). Una vez seleccionado, el motor que controla al mapa
        podrá calcular la ruta de manera efectiva. Para ello, debes marcar tanto el punto de inicio como el punto final de la ruta. Una vez hecho esto, debes exportar tu ruta a un archivo .GPX, cuentas con un botón
        para ello en el menú que se encuentra en la parte inferior izquierda del mapa. Una vez hecho esto, se exportará tu 'track' a un archivo .GPX que podrás cargar en <strong>'Carga una ruta'</strong>.
      </p>
        <iframe 
        src={createUrl}
        style={{ width: '80%', height: '50vh', maxWidth: '900px', border: "2px solid black"}}
        title="Mapa con OSRM"
        allowFullScreen
        />
        
      

  </div>
  );
};

export default CreateTrack;