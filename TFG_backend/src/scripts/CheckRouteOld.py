import geopandas as gpd
import gpxpy
import pandas as pd
import os

# Ruta al archivo GPX de la ruta
gpx_file        = "D:/Escritorio/TrabajoFinDeGrado/Proyecto_TFG/TFG_frontend/src/assets/routes/route.gpx" 
gpx             = gpxpy.parse(open(gpx_file, 'r'))

# Extraer los puntos de la ruta del archivo GPX
points = []
for track in gpx.tracks:
    for segment in track.segments:
        for point in segment.points:
            points.append((point.latitude, point.longitude))

# Convertir los puntos a un GeoDataFrame
df_points       = pd.DataFrame(points, columns=['latitude', 'longitude'])
gdf_points      = gpd.GeoDataFrame(df_points, geometry=gpd.points_from_xy(df_points.longitude, df_points.latitude))
# print(gdf_points)

# Ruta al archivo GeoJSON del parque
geojson_file = "D:/Escritorio/TrabajoFinDeGrado/Proyecto_TFG/TFG_frontend/src/assets/coordinates/montes_malaga.json"

# Verificar si el archivo existe
if not os.path.exists(geojson_file):
    raise FileNotFoundError(f"El archivo GeoJSON no se encuentra en la ruta: {geojson_file}")

# Cargar el archivo GeoJSON
gdf_park        = gpd.read_file(geojson_file)
park_polygon    = gdf_park.geometry.union_all()

# Asegúrate de que el sistema de referencia sea el mismo
gdf_points.crs  = 'EPSG:4326'
gdf_park.crs    = 'EPSG:4326'

# Comprobar si algún punto está dentro del polígono
gdf_points['within_perimeter'] = gdf_points.geometry.apply(lambda x: park_polygon.contains(x))
print(gdf_points['within_perimeter'])

# Verificar si algún punto está dentro del polígono
any_point_within = gdf_points['within_perimeter'].any()

if any_point_within:
    print("Al menos un punto de la ruta está dentro del parque.")
else:
    print("Ningún punto de la ruta está dentro del parque.")