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
      loadRestrictions(cleanedParkList, setRestrictions, selectedMethod);
    }
  }, [cleanedParkList]);

  useEffect(() => {
    if (map) return;
    initializeMap(setMap);
  }, [map]);

  useEffect(() => {
    if (!loadingModalRef.current ||modalInstanceRef.current) return;

    modalInstanceRef.current = new window.bootstrap.Modal(loadingModalRef.current);
  }, []);

      

  useEffect(() => {
    const modal = modalInstanceRef.current;
    if (!modal) return;

    loadingScript ? modal.show() : modal.hide();

  }, [loadingScript]);


  // Controlador de eventos para el botón de cargar archivo GPX
  const handleSelectMethod = (event) => {
    const selectedValue = event.target.value;
    setSelectedMethod(selectedValue);
  }

  useEffect(() => {
    if (selectedMethod) {
      switch (selectedMethod) {
        case "1":
          setMessage("Has seleccionado realizar la ruta en un vehículo a motor.");
          break;
        case "2":
          setMessage("Has seleccionado realizar la ruta en bicicleta.");
          break;
        case "3":
          setMessage("Has seleccionado realizar la ruta a pie.");
          break;
        default:
          setMessage("");
      }
    }
  }, [selectedMethod]);



  

  return (
    <div className="container bg-white p-4 rounded-xl">
      <div className='bg-white shadow-xl p-4 rounded-2xl border'>
        <h1 className="fs-3 text-center mb-3"><strong>Comprueba tu ruta</strong></h1>
        <div className="border border-dark rounded shadow row py-3">
          <div className="col-md-6">
            

            <div className="ml-5 mb-3">
              <h1 className='mb-2'>Selecciona el medio en el que realizarás la ruta</h1>
              <div className="input-group">
                <select 
                  className="form-select" 
                  id="inputGroupSelect01" 
                  aria-label="Elige tu método para realizar la ruta"
                  value={selectedMethod}
                  onChange={handleSelectMethod}
                >
                  <option value="" disabled>Elige tu método para realizar la ruta</option>
                  <option value="1">Vehículo a motor</option>
                  <option value="2">Bicicleta</option>
                  <option value="3">Senderismo</option>
                </select>
              </div>
            {message && <p>{message}</p>}
            </div>
          </div>

          <div className="col-md-6">
            <div className='ml-5 mb-3'>
              <h1 className='mb-2'>Subir un archivo de ruta (.GPX)</h1>
              <div className="mb-3 d-flex align-items-end">
                <input
                  type="file"
                  className="form-control"
                  id="fileInput"
                  accept=".gpx"
                  onChange={(event) => addGPXToMap(event, map, setSelectedGPXFile, gpxLayers, setGpxLayers, selectedMethod)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <div id="map" />
        </div>

        <div className="buttons-container space-x-2 space-y-1 mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              uploadGPXFile(selectedGPXFile);
              executeScriptPython(selectedGPXFile, setLoadingScript, setParksList);
            }}
            disabled={loadingScript}
          >
            {loadingScript ? "Ejecutando..." : "Comprueba tu ruta"}
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
            Eliminar capas del mapa
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
                  <div className="alert alert-info mx-2">
                    <p>
                      <strong>Nota:</strong> Las restricciones aquí mostradas están basadas en la normativa correspondiente al apartado <strong>Uso público, Turismo activo, Ecoturismo y Educación ambiental</strong> recogida en los <a href="https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/espacios-protegidos/gestion-espacios-protegidos/porn-prug-planes-de-gestion/documentos-aprobados" target="_blank" rel="noopener noreferrer"><u>planes Plan de Ordenación de los Recursos Naturales (PORN) y Plan Rector de Uso y Gestión (PRUG)</u></a>.
                    </p>
                    <p>
                        Para realizar actividades que requieren autorización, como filmaciones, acampadas organizadas o eventos deportivos, se debe solicitar permiso a la Delegación Territorial de la Consejería competente en medio ambiente. Consulta el procedimiento y requisitos actualizados en la <a href="https://www.juntadeandalucia.es/servicios/sede/tramites/procedimientos/detalle/727.html" target="_blank" rel="noopener noreferrer"><u>web oficial de la Junta de Andalucía</u></a>.
                    </p>
                  </div>
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