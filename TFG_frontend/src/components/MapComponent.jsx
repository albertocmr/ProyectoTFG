import React, { useEffect, useState, useMemo } from 'react';
import '../styles/Map.css';

import { initializeMap } from '../util/map';
import { loadRestrictions } from '../util/loadRestrictions';
import { removeGPXLayers, addGPXToMap, uploadGPXFile, fetchAndAddGPXFiles } from '../util/gpxManager';
import { executeScriptPython } from '../util/scriptManager';


function Map() {
  const [map, setMap] = useState(null);
  const [loadingScript, setLoadingScript] = useState(false);
  const [gpxLayers, setGpxLayers] = useState([]);
  const [selectedGPXFile, setSelectedGPXFile] = useState(null);
  const [parksList, setParksList] = useState([]);
  const [restrictions, setRestrictions] = useState({});

  const cleanedParkList = useMemo(() => {
    return parksList.map((park) => park.replace(/"/g, '').trim());
  }, [parksList])


  useEffect(() => {
    if (cleanedParkList.length > 0) {
      loadRestrictions(cleanedParkList, setRestrictions);
    }
  }, [cleanedParkList]);

  useEffect(() => {
    if (map) return;
    initializeMap(setMap);
  }, [map]);

  return (
    <div className="container mt-3">
      <h5>Subir un archivo de ruta (.GPX)</h5>
      <div className="mb-3 d-flex align-items-end">
        <input
          type="file"
          className="form-control"
          id="fileInput"
          accept=".gpx"
          onChange={(event) => addGPXToMap(event, map, setSelectedGPXFile, gpxLayers, setGpxLayers)}
        />
      </div>

      <div className="map-container">
        <div id="map" />
      </div>

      <div className="buttons-container">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => uploadGPXFile(selectedGPXFile)}
        >
          Cargar archivo GPX en backend
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => { executeScriptPython(selectedGPXFile, setLoadingScript, setParksList);
          }}
          disabled={loadingScript}
        >
          {loadingScript ? "Ejecutando..." : "Ejecutar Script Python"}
        </button>

        <button
          type="button"
          className="btn btn-info"
          onClick={() => { fetchAndAddGPXFiles(map, selectedGPXFile, setGpxLayers);
          }}
        >
          Generar intersecciones
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => { removeGPXLayers(map, gpxLayers, setGpxLayers);
          }}
        >
          Eliminar capas GPX
        </button>
      </div>

      <div
        className="modal fade"
        id="parksModal"
        tabIndex="-1"
        aria-labelledby="parksModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="parksModalLabel">Parques Naturales y sus restricciones.</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {Array.isArray(parksList) && parksList.length > 0 ? (
                <div>
                  <ul>
                    {parksList.map((park, index) => (
                      <li key={index}>Parque Natural - {park.replace(/_/g, ' ')}</li>
                    ))}
                  </ul>
                  <ul>
                    {parksList.map((park, index) => {
                      const ParkRestrictions = restrictions[park];
                      return (
                        <li key={index}>
                          {ParkRestrictions && <ParkRestrictions />}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <p>La ruta proporcionada no pasa por ningún Parque Natural Andaluz.</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;