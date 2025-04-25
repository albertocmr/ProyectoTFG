
import * as toGeoJSON from '@mapbox/togeojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



export const addGPXToMap = (event, map, setSelectedGPXFile, gpxLayers, setGpxLayers) => {
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

export const uploadGPXFile = async (selectedGPXFile) => {
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
        const res = await fetch('http://localhost:8080/api/gpx/list');
        const fileList = await res.json();

        for (const file of fileList) {
            const url = `http://localhost:8080/shared-data/routes/${file}`;
            const response = await fetch(url);
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
        alert("Ocurrió un error al cargar los archivos GPX.");
    }
};