import React, { useEffect, useState, useMemo, useRef, use } from 'react';

import { initializeMap } from '../util/map';
import { loadRestrictions } from '../util/loadRestrictions';
import { removeGPXLayers, addGPXToMap, uploadGPXFile, fetchAndAddGPXFiles } from '../util/gpxManager';
import { executeScriptPython } from '../util/scriptManager';
import Loading from '../assets/Loading';


function Map() {
  const [map, setMap] = useState(null);
  const [loadingScript, setLoadingScript] = useState(false);
  const [gpxLayers, setGpxLayers] = useState([]);
  const [selectedGPXFile, setSelectedGPXFile] = useState(null);
  const [parksList, setParksList] = useState([]);
  const [restrictions, setRestrictions] = useState({});

  const [selectedMethod, setSelectedMethod] = useState("");
  const [message, setMessage] = useState("");

  const loadingModalRef = useRef(null);
  const modalInstanceRef = useRef(null);



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
    <div className="container p-5">
      <div className='bg-white shadow-xl p-6 rounded-2xl border'>
        <div className='ml-5 mb-3'>
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
        </div>

        <div className="map-container">
          <div id="map" />
        </div>

        <div className="buttons-container space-x-2 space-y-1 mt-3">
          <button
            type="button"
            className="btn btn-success ml-2"
            onClick={() => {
              uploadGPXFile(selectedGPXFile);
            }}
          >
            Cargar archivo GPX en backend
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              executeScriptPython(selectedGPXFile, setLoadingScript, setParksList);
            }}
            disabled={loadingScript}
          >
            {loadingScript ? "Ejecutando..." : "Ejecutar Script Python"}
          </button>

          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              fetchAndAddGPXFiles(map, selectedGPXFile, setGpxLayers);
            }}
          >
            Generar intersecciones
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              removeGPXLayers(map, gpxLayers, setGpxLayers);
            }}
          >
            Eliminar capas GPX
          </button>
        </div>

        <div
          className="modal fade"
          id="loadingModal"
          tabIndex="-1"
          aria-labelledby="loadingModalLabel"
          ref={loadingModalRef}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-3 shadow-lg">
              <div className="modal-body">
                <div className="d-flex justify-content-center align-items-center">
                  <Loading />
                  <p className="text-center mt-3">Ejecutando script Python...</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          className="modal fade"
          id="parksModal"
          tabIndex="-1"
          aria-labelledby="parksModalLabel"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content rounded-3 shadow-lg">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title" id="parksModalLabel">Parques Naturales y sus restricciones.</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body custom-modal-body">
                {Array.isArray(parksList) && parksList.length > 0 ? (
                  <div>
                    <h5 className="mb-3 text-muted">Parques Naturales por los que pasa la ruta:</h5>
                    <ul className="list-group list-group-flush mb-4">
                      {parksList.map((park, index) => (
                        <li key={index} className="list-group-item list-group-item-action">
                          <i className="bi bi-tree text-success"></i> {park.replace(/_/g, ' ')}
                        </li>
                      ))}
                    </ul>
                    <h5 className="mb-3 text-muted">Restricciones:</h5>
                    <ul className="list-group">
                      {parksList.map((park, index) => {
                        const ParkRestrictions = restrictions[park];
                        return (
                          <li key={index} className="list-group-item">
                            {ParkRestrictions ? <ParkRestrictions /> : 'No hay restricciones disponibles para este parque.'}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <p className="text-center text-muted">La ruta proporcionada no pasa por ningún Parque Natural Andaluz.</p>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary text-dark" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Map;