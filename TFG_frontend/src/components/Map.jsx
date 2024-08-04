// src/components/Map.jsx

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet
import '../styles/Map.css'; // Importa estilos específicos del mapa

import geojsonData from '../assets/coordenadas/geojsonImports.js';


function Map() {
  useEffect(() => {
    // Inicializa el mapa cuando el componente se monta
    const map = L.map('map').setView([37.5, -4.5], 6.5);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Control de escala
    L.control.scale().addTo(map);

    // Función para añadir un GeoJSON al mapa
    const addGeoJSONToMap = (geojson) => {
      L.geoJSON(geojson, {
        style: {
          color: '#000000',
          weight: 2,
          opacity: 1
        },
        onEachFeature: function (feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }
      }).addTo(map);
    };

    Object.values(geojsonData).forEach(data => {
      addGeoJSONToMap(data);
    });

    // Limpieza del mapa cuando el componente se desmonte
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className='map-container'>
      <div id="map"></div>
    </div>
  );
}

export default Map;
