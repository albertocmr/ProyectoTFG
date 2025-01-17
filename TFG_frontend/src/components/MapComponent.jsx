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
  const [scriptOutput, setScriptOutput] = useState("");
  const [gpxLayers, setGpxLayers] = useState([]);
  const [selectedGPXFile, setSelectedGPXFile] = useState(null);

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

    // Add scale control
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
    formData.append("route", selectedGPXFile); // Coincidir con el nombre esperado por el backend
  
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
  


  const fetchAndAddGPXFiles = () => {
    // Ruta relativa donde se encuentran los archivos GPX
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

  // Function to execute Python script
  const executeScriptPython = async () => {
    if (!selectedGPXFile) return;
    setLoadingScript(true); // Estado de carga
    setScriptOutput(""); // Reset salida del script


    try {
      // Solicitud GET al backend para ejecutar el script
      const response = await fetch('http://localhost:8080/ejecutar-script');

      // Verificamos la respuesta
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      // Si la respuesta es exitosa, obtenemos el contenido
      const data = await response.text(); // Salida script Python
      setScriptOutput(data); // Guardamos salida script
    } catch (error) {
      console.error('Error al ejecutar el script:', error);
      setScriptOutput(`Hubo un error al ejecutar el script: ${error.message}`);
    } finally {
      setLoadingScript(false); // Ocultar el estado de carga
    }
  };

  // Function to remove GPX layers
  const removeGPXLayers = () => {
    // Remove GPX layers from the map
    gpxLayers.forEach((layer) => {
      map.removeLayer(layer);
    });

    // Clear the stored GPX layers
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
          className="btn btn-primary mr-2"
          value={loadingScript ? "Ejecutando..." : "Ejecutar Script Python"}
          onClick={executeScriptPython}
          disabled={loadingScript}
        />
        <input
          type="button"
          className="btn btn-danger"
          value="Eliminar capas GPX"
          onClick={removeGPXLayers}
        />
        <input
          type="button"
          className="btn btn-success ml-2"
          value="Generar intersecciones"
          onClick={fetchAndAddGPXFiles}
        />
        <input
          type="button"
          className="btn btn-info"
          value="Subir archivo GPX"
          onClick={uploadGPXFile}
        />

      </div>

      {scriptOutput && (
        <div className="mt-3">
          <h6>Resultado del Script:</h6>
          <pre>{scriptOutput}</pre>
        </div>
      )}
    </div>
  );
}

export default Map;