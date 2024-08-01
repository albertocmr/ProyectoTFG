// src/components/Map.jsx

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet
import '../styles/Map.css'; // Importa estilos específicos del mapa

// Importamos los archivos "GeoJSON" directamente
import bahiaCadiz from '../assets/coordenadas/bahia_cadiz.js';
import caboDeGataNijar from '../assets/coordenadas/cabo_de_gata_nijar.js';
import delEstrecho from '../assets/coordenadas/del_estrecho.js';
import despeniaperros from '../assets/coordenadas/despeniaperros.js';
import losAlcornocales from '../assets/coordenadas/los_alcornocales.js';
import montesMalaga from '../assets/coordenadas/montes_malaga.js';
import naturalDoniana from '../assets/coordenadas/natural_doniana.js';
import sierraAndujar from '../assets/coordenadas/sierra_andujar.js';
import sierraAracena from '../assets/coordenadas/sierra_aracena.js';
import sierraBaza from '../assets/coordenadas/sierra_baza.js';
import cardeniaMontoro from '../assets/coordenadas/sierra_cardenia_montoro.js';
import sierraCastril from '../assets/coordenadas/sierra_castril.js';
import sierraCazorla from '../assets/coordenadas/sierra_cazorla.js';
import sierraGrazalema from '../assets/coordenadas/sierra_grazalema.js';
import sierraHornachuelos from '../assets/coordenadas/sierra_hornachuelos.js';
import sierraHuetor from '../assets/coordenadas/sierra_huetor.js';
import sierraMagina from '../assets/coordenadas/sierra_magina.js';
import mariaLosVelez from '../assets/coordenadas/sierra_maria_los_velez.js';
import sierraNevada from '../assets/coordenadas/sierra_nevada.js';
import sierraNieves from '../assets/coordenadas/sierra_nieves.js';
import sierraNorteSevilla from '../assets/coordenadas/sierra_norte_sevilla.js';
import sierraTejeda from '../assets/coordenadas/sierra_tejeda.js'
import sierrasSubbeticas from '../assets/coordenadas/sierras_subbeticas.js';


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

    // Lista de datos GeoJSON importados
    const geojsonData = [
      bahiaCadiz,
      caboDeGataNijar,
      delEstrecho,
      despeniaperros,
      losAlcornocales,
      montesMalaga,
      naturalDoniana, 
      sierraAndujar,
      sierraAracena,   
      sierraBaza,
      cardeniaMontoro,
      sierraCastril,
      sierraCazorla,
      sierraGrazalema ,
      sierraHornachuelos,
      sierraHuetor,
      sierraMagina,
      mariaLosVelez,
      sierraNevada,
      sierraNieves,
      sierraNorteSevilla,
      sierraTejeda,
      sierrasSubbeticas              
    ];

    // Función para añadir un GeoJSON al mapa
    const addGeoJSONToMap = (geojson) => {
      L.geoJSON(geojson, {
        style: {
          color: '#0000ff',
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

    // Añadir cada archivo GeoJSON al mapa
    geojsonData.forEach(data => {
      addGeoJSONToMap(data);
    });

    // Limpieza del mapa cuando el componente se desmonte
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map"></div>
  );
}

export default Map;
