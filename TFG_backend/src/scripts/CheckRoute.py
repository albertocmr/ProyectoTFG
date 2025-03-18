import geopandas as gpd
import gpxpy
import gpxpy.gpx
import pandas as pd
import os
import json

for file in os.listdir("uploads"):
    if file.endswith(".gpx"):
        gpx_file = os.path.join("uploads", file)
    else:
        raise FileNotFoundError("Error: No se ha encontrado ningun archivo GPX en la carpeta uploads") 

try:
    gpx = gpxpy.parse(open(gpx_file, 'r'))
except Exception as e:
    raise Exception(f"Error al parsear el archivo GPX: {e}")

# Extract the points from the GPX route file
points = []
for track in gpx.tracks:
    for segment in track.segments:
        for point in segment.points:
            points.append((point.latitude, point.longitude))

df_points = pd.DataFrame(points, columns=['latitude', 'longitude'])
gdf_points = gpd.GeoDataFrame(df_points, geometry=gpd.points_from_xy(df_points.longitude, df_points.latitude))
gdf_points.crs = 'EPSG:4326'  # Ensure that the CRS is correctly defined

geojson_dir = "/app/shared-data/coordinates"
routes_dir = "/app/shared-data/routes"


for file in os.listdir(routes_dir):
    os.remove(os.path.join(routes_dir, file))

if not os.path.exists(geojson_dir):
    raise FileNotFoundError(f"Error: The folder was not found at the path: {geojson_dir}")

geojson_files = [f for f in os.listdir(geojson_dir) if f.endswith('.json')]

parks = []

for geojson_file in geojson_files:
    try:

        # Load the GeoJSON file
        file_path = os.path.join(geojson_dir, geojson_file)
        gdf_park = gpd.read_file(file_path)
        park_polygon = gdf_park.geometry.union_all()

        gdf_park.crs = 'EPSG:4326'

        gdf_points['within_perimeter'] = gdf_points.geometry.apply(lambda x: park_polygon.contains(x))

        park_name = os.path.splitext(geojson_file)[0]

        # Verificar si algún punto de la ruta está dentro del parque
        if gdf_points['within_perimeter'].any():
            parks.append(park_name)  # Añadir el parque a la lista

        gpx_output = gpxpy.gpx.GPX()
        gpx_output.name = f"Ruta dentro del parque natural {park_name}"

        track = gpxpy.gpx.GPXTrack(name=f"Ruta {park_name}")
        gpx_output.tracks.append(track)

        segment = None
        inside_park = False

        for idx, row in gdf_points.iterrows():
            current_inside = row['within_perimeter']

            if current_inside:
                if not inside_park:
                    segment = gpxpy.gpx.GPXTrackSegment()
                    track.segments.append(segment)
                    inside_park = True

                track_point = gpxpy.gpx.GPXTrackPoint(latitude=row['latitude'], longitude=row['longitude'])
                segment.points.append(track_point)

            elif inside_park:
                inside_park = False

        if len(track.segments) > 0:
            output_file = f"{park_name}_points_within.gpx"
            output_path = os.path.join(routes_dir, output_file)
            with open(output_path, 'w') as f:
                f.write(gpx_output.to_xml())
            
            #print(f"Archivo GPX creado con segmentos: {output_path}")
            #print(f"Tenemos que mostrar las restricciones del parque: {park_name}.")
        # else:
        #     print(f"Ningun punto de la ruta esta dentro del parque: {park_name}.")
    except Exception as e:
        print(f"Error al procesar el archivo {geojson_file}: {e}")

# Provisional: Remove the uploaded GPX file
for file in os.listdir("uploads"):
    if file.endswith(".gpx"):
        os.remove(os.path.join("uploads", file))

print(json.dumps({"parks": parks}))
 