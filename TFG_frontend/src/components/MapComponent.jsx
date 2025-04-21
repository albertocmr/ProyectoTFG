import React, { useEffect, useState, useMemo } from 'react';
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
  const [parksList, setParksList] = useState([]);
  const [restrictions, setRestrictions] = useState({});

  // REVISAR USEMEMO
  const cleanedParkList = useMemo(() => {
    return parksList.map((park) => park.replace(/"/g, '').trim());
  }, [parksList])


  useEffect(() => {
    if (cleanedParkList.length > 0) {
      loadRestrictions(cleanedParkList);
    }
  }, [cleanedParkList]);

  // Función para cargar dinámicamente las restricciones
  const loadRestrictions = async (parks) => {
    const restrictionsMap = {};
  
    for (const park of parks) {
      if (!park.trim()) continue;
  
      try {
        const module = await import(`../assets/restrictions/${park}_restrictions.jsx`);
        restrictionsMap[park] = module.default;
      } catch (error) {
        console.error(`No se encontraron restricciones para el parque: ${park}`);
        restrictionsMap[park] = () => <div>No hay restricciones disponibles para este parque.</div>;
      }
    }
  
    setRestrictions(restrictionsMap);
  };
  
  useEffect(() => {
    if (map) return;
  
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
  }, [map]);
  

  // Function to convert GPX to GeoJSON and add to map
  const addGPXToMap = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedGPXFile(file);
    const reader = new FileReader();
    reader.onload = function (e) {
      const parser = new DOMParser();
      const xml = parser.parseFromString(e.target.result, 'application/xml');
      const geojson = toGeoJSON.gpx(xml);
      gpxLayers.forEach((layer) => map.removeLayer(layer));

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
        alert("Selecciona un archivo GPX antes de ejecutar el script.");
        return;
    }

    setLoadingScript(true);
    //console.log("Enviando petición para ejecutar script Python...");

    try {
        const response = await fetch('http://localhost:8080/api/ejecutar-script');
        //console.log("Respuesta recibida del backend:", response);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        //console.log("Datos recibidos del backend:", data);

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("La API no devolvió una lista válida de parques.");
        }

        setParksList(data);
        alert('Script ejecutado correctamente.');

    } catch (error) {
        //console.error('Error al ejecutar el script:', error);
        alert(`Error al ejecutar el script: ${error.message}`);
    } finally {
        setLoadingScript(false);
    }
};


  const fetchAndAddGPXFiles = () => {
    if (!selectedGPXFile) {
      alert("Por favor ejecuta el script para generar las intersecciones.");
      return;
    }

    if (!map) {
      alert("El mapa no está inicializado.");
      return;
    }
    const gpxFiles = import.meta.glob('../../shared-data/routes/*.gpx', { as: 'url' });

    for (const path in gpxFiles) {
      gpxFiles[path]().then((fileUrl) => {
        fetch(fileUrl)
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
            alert(`Archivo GPX ${path} cargado correctamente.`);
          })
          .catch((error) => console.error(`Error al cargar el archivo GPX ${path}:`, error));
      })
    };
  }

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
        <button
          type="button"
          className="btn btn-success"
          onClick={uploadGPXFile}
        >
          Cargar archivo GPX en backend
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            executeScriptPython();
          }}
          disabled={loadingScript}
        >
          {loadingScript ? "Ejecutando..." : "Ejecutar Script Python"}
        </button>

        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            fetchAndAddGPXFiles();
          }}
        >
          Generar intersecciones
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            removeGPXLayers();
          }}
        >
          Eliminar capas GPX
        </button>
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