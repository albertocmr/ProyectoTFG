import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';
import * as toGeoJSON from '@mapbox/togeojson';
import geojsonData from '../assets/coordinates/geojsonImports.js';
import geojsonDataA from '../assets/coordinates/reserva_A/geojsonImportsA.js';

function Map() {
  const [map, setMap] = useState(null);
  const [loadingScript, setLoadingScript] = useState(false);
  const [gpxLayers, setGpxLayers] = useState([]);
  const [selectedGPXFile, setSelectedGPXFile] = useState(null);
  const [parksList, setParksList] = useState([]); // Estado para la lista de parques
  const [restrictions, setRestrictions] = useState({}); // Estado para las restricciones

  useEffect(() => {
    if (parksList && parksList.length > 0) {
      const cleanedParkList = parksList.map((park) => park.replace(/"/g, ''));
      loadRestrictions(cleanedParkList);
    }
  }, [parksList]);

  // Función para cargar dinámicamente las restricciones
  const loadRestrictions = async (parks) => {
    const restrictionsMap = {};

    // Usar require.context para cargar los archivos de restricciones
    const restrictionsContext = require.context(
      '../assets/restrictions',
      false,
      /_restrictions\.jsx$/ // archivos que terminen en _restrictions.jsx
    );

    for (const park of parks) {
      // Verifica si el parque no es null, undefined, vacío o inválido
      if (park && park.trim() !== "") {
        try {
          const parkFileName = `${park}_restrictions`;
          console.log(`Cargando restricciones para el parque: ${parkFileName}`);
          
          const restrictionComponent = restrictionsContext(`./${parkFileName}.jsx`).default;
    
          restrictionsMap[park] = restrictionComponent;
        } catch (error) {
          console.error(`No se encontraron restricciones para el parque: ${park}`);
          restrictionsMap[park] = () => <div>No hay restricciones disponibles para este parque.</div>;
        }
      } else {
        console.warn(`Parque inválido o vacío detectado: ${park}`);
      }
    }
    
    

    setRestrictions(restrictionsMap);
  };

  // Inicializar el mapa
  useEffect(() => {
    const initializedMap = L.map('map').setView([37.5, -4.5], 6.5);

    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initializedMap);

    const perimetersLayerGroup = L.layerGroup(
      Object.values(geojsonData).map((data) =>
        L.geoJSON(data, {
          style: {
            color: '#000000',
            weight: 2
          },
        }),
      ),
    );

    const perimetersALayerGroup = L.layerGroup(
      Object.values(geojsonDataA).map((data) =>
        L.geoJSON(data, {
          style: {
            color: '#ff0000',
            weight: 2
          },
        }),
      ),
    );

    L.control.layers(null, {
      "Perímetros Parques Naturales": perimetersLayerGroup,
      "Zonas de Reserva A": perimetersALayerGroup,
    }).addTo(initializedMap);

    L.control.scale().addTo(initializedMap);

    setMap(initializedMap);

    return () => {
      initializedMap.remove();
    };
  }, []);

  // Function to convert GPX to GeoJSON and add to map
  const addGPXToMap = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedGPXFile(file);
      const reader = new FileReader();
      reader.onload = function (e) {
        const parser = new DOMParser();
        const xml = parser.parseFromString(e.target.result, 'application/xml');
        const geojson = toGeoJSON.gpx(xml);

        try {
          const gpxLayer = L.geoJSON(geojson, {
            style: {
              color: '#0000ff',
              weight: 2,
              opacity: 1,
            },
            onEachFeature: (feature, layer) => {
              if (feature.properties && feature.properties.name) {
                layer.bindPopup(feature.properties.name);
              }
            },
          }).addTo(map);

          // Store the GPX layer and add to the control
          setGpxLayers((prevLayers) => [...prevLayers, gpxLayer]);

        } catch (error) {
          console.error("Error adding the GPX file to the map:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  // Function to upload GPX file to the backend
  const uploadGPXFile = async () => {
    if (!selectedGPXFile) {
      alert("Por favor selecciona un archivo GPX antes de subirlo.");
      return;
    }

    const formData = new FormData();
    formData.append("route", selectedGPXFile);

    try {
      const response = await fetch('http://localhost:8080/api/gpx/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error al subir el archivo: ${response.status}`);
      }

      const data = await response.text();
      alert(`${data}`);
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      alert(`Error al subir el archivo: ${error.message}`);
    }
  };

  // Function to execute Python script
  const executeScriptPython = async () => {
    if (!selectedGPXFile) {
      alert("Por favor selecciona un archivo GPX antes de ejecutar el script.");
      return;
    }
    setLoadingScript(true);
  
    try {
      const response = await fetch('http://localhost:8080/api/ejecutar-script');
  
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
  
      const data = await response.json(); // Obtener la respuesta como JSON
      console.log('Respuesta del backend:', data);
  
      setParksList(data);
      alert('Script ejecutado correctamente.');
    } catch (error) {
      console.error('Error al ejecutar el script:', error);
      setParksList([])
      alert(`Hubo un error al ejecutar el script: ${error.message}`);
    } finally {
      setLoadingScript(false);
    }
  };
  

  const fetchAndAddGPXFiles = () => {
    if (!selectedGPXFile) {
      alert("Por favor ejecuta el script para generar las intersecciones.");
      return;
    }

    const routesPath = require.context('../assets/routes', false, /\.gpx$/);

    routesPath.keys().forEach((file) => {
      const fileContent = routesPath(file);
      fetch(fileContent)
        .then((res) => res.text())
        .then((gpxContent) => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(gpxContent, 'application/xml');
          const geojson = toGeoJSON.gpx(xml);

          const gpxLayer = L.geoJSON(geojson, {
            style: {
              color: '#ff2200',
              weight: 5,
              opacity: 1,
            },
          });

          gpxLayer.addTo(map);
          setGpxLayers((prevLayers) => [...prevLayers, gpxLayer]);
          alert(`Archivo GPX ${file} cargado correctamente.`);
        })
        .catch((error) => console.error(`Error al cargar el archivo GPX ${file}:`, error));
    });
  };

  const removeGPXLayers = () => {
    gpxLayers.forEach((layer) => {
      map.removeLayer(layer);
    });

    setGpxLayers([]);
  };

  return (
  <div className="container mt-3">
    <h5>Subir un archivo de ruta (.GPX)</h5>
    <div className="mb-3 d-flex align-items-end">
      <input
        type="file"
        className="form-control"
        id="fileInput"
        accept=".gpx"
        onChange={addGPXToMap}
      />
    </div>

    <div className="map-container">
      <div id="map" />
    </div>

    <div className="buttons-container">
      <input
        type="button"
        className="btn btn-success"
        value="Cargar archivo GPX en backend"
        onClick={uploadGPXFile}
      />
      <input
        type="button"
        className="btn btn-primary"
        value={loadingScript ? "Ejecutando..." : "Ejecutar Script Python"}
        onClick={executeScriptPython}
        disabled={loadingScript}
      />
      <input
        type="button"
        className="btn btn-info"
        value="Generar intersecciones"
        onClick={fetchAndAddGPXFiles}
      />
      <input
        type="button"
        className="btn btn-danger"
        value="Eliminar capas GPX"
        onClick={removeGPXLayers}
      />
    </div>

    {Array.isArray(parksList) && parksList.length > 0 && (
      <div className="mt-3">
        <h6>Parques encontrados:</h6>
        <ul>
          {parksList.map((park, index) => {
            const ParkRestrictions = restrictions[park];
            return (
              <li key={index}>
                {/* {<strong>{park.replace(/_/g, ' ')}</strong>} */}
                {ParkRestrictions && <ParkRestrictions />}
              </li>
            );
          })}
        </ul>
      </div>
    )}

  </div>
);
}

export default Map;