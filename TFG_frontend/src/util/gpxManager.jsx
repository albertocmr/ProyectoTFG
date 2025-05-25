
import * as toGeoJSON from '@mapbox/togeojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';


export const addGPXToMap = (event, map, setSelectedGPXFile, gpxLayers, setGpxLayers, selectedMethod) => {

    if(!selectedMethod || selectedMethod === ""){
        alert(`Antes de subir la ruta, debes seleccionar el transporte en el que se va a realizar.`)
        return;
    }

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
                    color: '#00ffff',
                    weight: 2,
                    opacity: 1,
                },
                onEachFeature: (feature, layer) => {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup(feature.properties.name);
                    }
                },
            }).addTo(map);

            setGpxLayers((prevLayers) => [...prevLayers, gpxLayer]);

        } catch (error) {
            console.error("Error adding the GPX file to the map:", error);
        }
        alert(`Archivo GPX ${file.name} cargado sobre el mapa correctamente.`);
    };
    reader.readAsText(file);
};

export const removeGPXLayers = (map, gpxLayers, setGpxLayers) => {
    gpxLayers.forEach((layer) => {
        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
        }
    });
    setGpxLayers([]);
}

export const uploadGPXFile = async (selectedGPXFile, setLoadingScript) => {
    if (!selectedGPXFile) {
        return false;
    }

    const formData = new FormData();
    formData.append("route", selectedGPXFile);

    try {
        const response = await axios.post(`https://parktracker.onrender.com/api/gpx/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setLoadingScript(true);

        //console.log(response.data);
        return true;

        //alert(`Archivo GPX ${selectedGPXFile.name} subido correctamente.`);
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        if (error.response && error.response.status === 401) {
            alert("Necesitas loguearte para poder subir archivos GPX.");
            return;
        } else {
            alert(`Error al subir el archivo: ${error.message}`);
        }
        setLoadingScript(false);
        return false;
    }
};

export const fetchAndAddGPXFiles = async (map, selectedGPXFile, setGpxLayers) => {
    if (!selectedGPXFile) {
        alert("Por favor ejecuta el script para generar las intersecciones.");
        return;
    }

    if (!map) {
        alert("El mapa no está inicializado.");
        return;
    }

    try {
        const res = await axios.get(`https://parktracker.onrender.com/api/gpx/list`);

        if (res.status === 401) {
            alert("Necesitas loguearte para poder generar archivos GPX.");
            return;
        }

        const fileList = res.data;
        //console.log("Archivos GPX recibidos:", fileList);

        if (!fileList || fileList.length === 0) {
            alert("No se encontraron archivos GPX con intersecciones en el servidor.");
            return;
        }

        for (const file of fileList) {
            const url = `https://parktracker.onrender.com/shared-data/routes/${file}`;
            const response = await fetch(url);

            if (!response.ok) {
                console.error(`Error al cargar el archivo ${file}:`, file);
                continue;
            }
            const gpxText = await response.text();

            const parser = new DOMParser();
            const xml = parser.parseFromString(gpxText, 'application/xml');
            const geojson = toGeoJSON.gpx(xml);
            const gpxLayer = L.geoJSON(geojson, {
                style: {
                    color: '#ff2200',
                    weight: 5,
                    opacity: 1,
                },
            });

            gpxLayer.addTo(map);
            setGpxLayers((prev) => [...prev, gpxLayer]);

            //console.log(`Cargado: ${file}`);
        }

        alert("GPX cargados correctamente.");
    } catch (err) {
        if (err.response && err.response.status === 401) {
            alert("Necesitas loguearte para poder generar archivos GPX.");
            return;
        }

        alert("Ocurrió un error al cargar los archivos GPX.");
    }
};