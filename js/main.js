document.addEventListener('DOMContentLoaded', (event) => {


    // Inicializa el mapa centrado en Andalucía
    var map = L.map('map').setView([37.5, -4.5], 6.5);

    // Capa base de OpenStreetMap
    var osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Control de escala
    L.control.scale().addTo(map);



    // Funcion para añadir un geoJSON al mapa
    function addGeoJSONToMap(name){
        L.geoJSON(name, {
            style: {
                color: '#000',
                weight: 2,
                opacity: 1
            },
            onEachFeature: function (feature, layer) {
                // Añadir un popup al polígono
                if (feature.properties && feature.properties.name) {
                    layer.bindPopup(feature.properties.name);
                }
            }
        }).addTo(map);
    }



    addGeoJSONToMap(bahia_cadiz)
    addGeoJSONToMap(cabo_de_gata_nijar)
    addGeoJSONToMap(del_estrecho)   /* */
    addGeoJSONToMap(despeniaperros)
    addGeoJSONToMap(los_alcornocales) /* */
    addGeoJSONToMap(sierra_baza)
    addGeoJSONToMap(sierra_nevada)
    addGeoJSONToMap(sierra_huetor)
    addGeoJSONToMap(sierra_tejeda)
    addGeoJSONToMap(sierra_castril)
    addGeoJSONToMap(montes_malaga)
    addGeoJSONToMap(sierra_nieves) 
    addGeoJSONToMap(sierra_grazalema)
    addGeoJSONToMap(natural_doniana)
    addGeoJSONToMap(sierra_norte_sevilla)
    addGeoJSONToMap(sierra_andujar)
    addGeoJSONToMap(sierra_cazorla)
    addGeoJSONToMap(sierra_magina)
    addGeoJSONToMap(sierra_maria_los_velez)
    addGeoJSONToMap(sierras_subbeticas)
    addGeoJSONToMap(sierra_hornachuelos)
    addGeoJSONToMap(sierra_aracena)
    addGeoJSONToMap(sierra_cardenia_montoro)



        








/*

    function loadGeoJSON(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var geojsonLayer = L.geoJSON(data, {
                    style: {
                        color: 'blue',
                        weight: 4,
                        opacity: 0.7
                    }
                }).addTo(map);

                // Ajusta el zoom del mapa para mostrar la ruta completa
                map.fitBounds(geojsonLayer.getBounds());
            })
            .catch(error => console.error('Error al cargar el GeoJSON:', error));
    }

    // Cargar el archivo GeoJSON desde la carpeta 'coordenadas'
    loadGeoJSON('coordenadas/sierra_baza.geojson');


/*
    // Crea el polígono
    var polygon = L.polygon(polygonCoordinates, {
        color: 'red', // Color del borde del polígono
        fillColor: 'blue', // Color de relleno del polígono
        fillOpacity: 0.5 // Opacidad del relleno del polígono
    }).addTo(map);

    // Ajusta el zoom del mapa para que encuadre el polígono
    map.fitBounds(polygon.getBounds());
*/

});
