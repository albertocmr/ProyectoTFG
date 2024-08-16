// src/components/Map.jsx

import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet
import '../styles/Map.css'; // Importa estilos específicos del mapa
import * as toGeoJSON from '@mapbox/togeojson';

import geojsonData from '../assets/coordinates/geojsonImports.js';


function Map() {

  const [map, setMap] = useState(null);
  const [perimeters, setPerimeters] = useState(false);
  const [layerGroup, setLayerGroup] = useState(null);
  

  useEffect(() => {
    // Inicializa el mapa cuando el componente se monta
    const initializedMap = L.map('map').setView([37.5, -4.5], 6.5);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initializedMap);

    const lg = L.layerGroup().addTo(initializedMap);
    setLayerGroup(lg);

    // Control de escala
    L.control.scale().addTo(initializedMap);
    setMap(initializedMap);
    
    

    // Limpieza del mapa cuando el componente se desmonte
    return () => {
      initializedMap.remove();
    };
  }, []);

  // Function to convert a GPX file to GeoJSON file and add it to the map
  const addGPXToMap = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const parser = new DOMParser();
        const xml = parser.parseFromString(e.target.result, 'application/xml');
        const geojson = toGeoJSON.gpx(xml);

        try {
          addGeoJSONToMap (geojson);
        } catch (error) {
          console.error("Error al agregar el archivo GPX al mapa: ", error);
        }
      };

      reader.readAsText(file);    
    }
  }

  // Function to add a GeoJSON to map
  const addGeoJSONToMap = (geojson) => {
    if (map && layerGroup) {
      try {
        const layer = L.geoJSON(geojson, {
          style: {
            color: '#000000',
            weight: 2,
            opacity: 1
          },
          onEachFeature: (feature, layer) => {
            if (feature.properties && feature.properties.name) {
              layer.bindPopup(feature.properties.name);
            }
          }
        }).addTo(map);
        layer.addTo(layerGroup);
      } catch (error) {
        console.error("Error al agregar GeoJSON al mapa:", error);
      }
    }
  };

  // Function to remove all layers of the map
  const removeGeoJSONToMap = () => {
    if(layerGroup){
      layerGroup.clearLayers();
    }
  };

  return (
    <div className='container mt-3'>
      <h5>Subir un archivo de ruta (.GPX)</h5>
      <div className="mb-3 d-flex align-items-end">
        <input type="file" className="form-control" id="fileInput" accept=".gpx" onChange={addGPXToMap} />
      </div>

      <div className='map-container'>
        <div id="map"/>
      </div>

      <div className='mt-3'>
        <input
          type="button"
          className="btn btn-success"
          value="Añadir perímetros"
          disabled={perimeters}
          onClick={() => 
            Object.values(geojsonData).forEach(data =>{
              addGeoJSONToMap(data);
              setPerimeters(true);
            })
          }
        />

        <input
          type="button"
          className="btn btn-danger"
          value="Eliminar perímetros"
          disabled={!perimeters}
          onClick={ () => { 
            removeGeoJSONToMap(); 
            setPerimeters(false);
          }}
        />
      </div>
    </div>
  );
}

export default Map;