import React from 'react';
import '../styles/Map.css'; // Importa estilos específicos del mapa

const CreateTrack = () => {
  const createUrl = 'https://map.project-osrm.org/?z=8&center=37.175637%2C-4.493408&hl=es&alt=0&srv=0';
  /* https://maps.openrouteservice.org/#/place/@-4.355735778808595,36.981574967942514,6 */
  /* https://graphhopper.com/maps/?profile=car&layer=Omniscale  --- NO SE PUEDE IMPORTAR A LA WEB*/
  

  return (
<div className='container flex justify-content-center mt-20'>
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