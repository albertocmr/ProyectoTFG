import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import geojsonDataA from '../assets/coordinates/reserva_A/geojsonImportsA.js';

export const initializeMap = async (setMap) => {
    const initializedMap = L.map('map').setView([37.5, -4.5], 6.5);

    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initializedMap);

    const geojsonData = await loadGeojsonDataFromBackend();

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
}

export async function loadGeojsonDataFromBackend() {
    const response = await fetch(`https://parktracker.onrender.com/api/perimeters`);

    if (!response.ok) {
        console.warn("Error al obtener perímetros:", response.status, response.statusText);
        return {};
    }

    const data = await response.json();

    const geojsonData = {};

    for (const { perimeterfile } of data) {
        try {
            const module = await import(`../assets/coordinates/${perimeterfile}.json`);
            geojsonData[perimeterfile] = module.default;
        } catch (err) {
            console.warn(`No se pudo cargar el archivo para: ${perimeterfile}`, err);
        }
    }

    return geojsonData;
}