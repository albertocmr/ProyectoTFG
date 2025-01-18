import geopandas as gpd
import gpxpy
import gpxpy.gpx
import pandas as pd
import os

for file in os.listdir("uploads"):
    if file.endswith(".gpx"):
        gpx_file = os.path.join("uploads", file)

# gpx_file = "C:/Users/HP/Desktop/TrabajoFinDeGrado/Proyecto_TFG/TFG_backend/uploads/route.gpx"
gpx = gpxpy.parse(open(gpx_file, 'r'))

# Extract the points from the GPX route file
points = []
for track in gpx.tracks:
    for segment in track.segments:
        for point in segment.points:
            points.append((point.latitude, point.longitude))

df_points = pd.DataFrame(points, columns=['latitude', 'longitude'])
gdf_points = gpd.GeoDataFrame(df_points, geometry=gpd.points_from_xy(df_points.longitude, df_points.latitude))
gdf_points.crs = 'EPSG:4326'  # Ensure that the CRS is correctly defined

# geojson_dir = "C:/Users/HP/Desktop/TrabajoFinDeGrado/Proyecto_TFG/TFG_frontend/src/assets/coordinates"
# routes_dir = "C:/Users/HP/Desktop/TrabajoFinDeGrado/Proyecto_TFG/TFG_frontend/src/assets/routes"

geojson_dir = "../TFG_frontend/src/assets/coordinates/"
routes_dir = "../TFG_frontend/src/assets/routes/"


for file in os.listdir(routes_dir):
    os.remove(os.path.join(routes_dir, file))

if not os.path.exists(geojson_dir):
    raise FileNotFoundError(f"Error: The folder was not found at the path: {geojson_dir}")

geojson_files = [f for f in os.listdir(geojson_dir) if f.endswith('.json')]

for geojson_file in geojson_files:
    # Load the GeoJSON file
    file_path = os.path.join(geojson_dir, geojson_file)
    gdf_park = gpd.read_file(file_path)
    park_polygon = gdf_park.geometry.union_all()  # Merge all the polygons in case of multiple

    gdf_park.crs = 'EPSG:4326'

    gdf_points['within_perimeter'] = gdf_points.geometry.apply(lambda x: park_polygon.contains(x))

    park_name = os.path.splitext(geojson_file)[0]

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
        
        print(f"Archivo GPX creado con segmentos: {output_path}")
    else:
        print(f"Ningun punto de la ruta esta dentro del parque: {park_name}.")

# Provisional: Remove the uploaded GPX file
for file in os.listdir("uploads"):
    if file.endswith(".gpx"):
        os.remove(os.path.join("uploads", file))
