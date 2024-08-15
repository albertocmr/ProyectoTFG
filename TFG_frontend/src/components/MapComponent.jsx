// src/components/Map.jsx

import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet
import '../styles/Map.css'; // Importa estilos específicos del mapa
import * as toGeoJSON from '@mapbox/togeojson';

import geojsonData from '../assets/coordenadas/geojsonImports.js';


function Map() {

  const [map, setMap] = useState(null);

  useEffect(() => {
    // Inicializa el mapa cuando el componente se monta
    const initializedMap = L.map('map').setView([37.5, -4.5], 6.5);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initializedMap);

    // Control de escala
    L.control.scale().addTo(initializedMap);
    setMap(initializedMap);
    
    

    // Limpieza del mapa cuando el componente se desmonte
    return () => {
      initializedMap.remove();
    };
  }, []);

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

// Función para añadir un GeoJSON al mapa
  const addGeoJSONToMap = (geojson) => {
    if (map) {
      try {
        L.geoJSON(geojson, {
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
      } catch (error) {
        console.error("Error al agregar GeoJSON al mapa:", error);
      }
    }
  };

  return (
    <div className='container mt-3'>
      <h1>Subir un archivo de ruta (.GPX)</h1>
      <div className="mb-3 d-flex align-items-end">
        <input type="file" className="form-control" id="fileInput" accept=".gpx" onChange={addGPXToMap} />
      </div>

      <div className='map-container'>
        <div id="map"/>
      </div>

      <div className='mt-3'>
        <input
          type="button"
          className="btn btn-primary"
          value="Añadir perímetros"
          onClick={() => Object.values(geojsonData).forEach(data => {addGeoJSONToMap(data);})}
        />

        <input
          type="button"
          className="btn btn-success"
          value="Eliminar perímetros"
          disabled
        />
      </div>
    </div>
  );
}

export default Map;