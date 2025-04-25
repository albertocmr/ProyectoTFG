import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import geojsonData from '../assets/coordinates/geojsonImports.js';
import geojsonDataA from '../assets/coordinates/reserva_A/geojsonImportsA.js';

export const initializeMap = (setMap) => {
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
}