import geopandas as gpd
import gpxpy
import pandas as pd
import os

# Path to the GPX file for the route
gpx_file = "D:/Escritorio/TrabajoFinDeGrado/Proyecto_TFG/TFG_frontend/src/assets/routes/route.gpx"  # Change this path to the correct path of your GPX file
gpx = gpxpy.parse(open(gpx_file, 'r'))  # Parse the GPX file

# Extract the points from the GPX route file
points = []
for track in gpx.tracks:
    for segment in track.segments:
        for point in segment.points:
            points.append((point.latitude, point.longitude))

# Convert the points to a GeoDataFrame
df_points = pd.DataFrame(points, columns=['latitude', 'longitude'])  # Use pandas to create a dataframe
gdf_points = gpd.GeoDataFrame(df_points, geometry=gpd.points_from_xy(df_points.longitude, df_points.latitude))  # Convert to GeoDataFrame
gdf_points.crs = 'EPSG:4326'  # Ensure that the CRS is correctly defined

# Path to the directory containing the GeoJSON files
geojson_dir = "D:/Escritorio/TrabajoFinDeGrado/Proyecto_TFG/TFG_frontend/src/assets/coordinates/"

# Check if the folder exists
if not os.path.exists(geojson_dir):
    raise FileNotFoundError(f"Error: The folder was not found at the path: {geojson_dir}")

# Get the list of all .json files in the folder
geojson_files = [f for f in os.listdir(geojson_dir) if f.endswith('.json')]

# Iterate over all the GeoJSON files
for geojson_file in geojson_files:
    # Load
    file_path = os.path.join(geojson_dir, geojson_file)
    gdf_park = gpd.read_file(file_path)  # Load the JSON file
    park_polygon = gdf_park.geometry.union_all()

    # Ensure the CRS is the same
    gdf_park.crs = 'EPSG:4326'

    # Check if any point is inside the polygon
    gdf_points['within_perimeter'] = gdf_points.geometry.apply(lambda x: park_polygon.contains(x))
    
    # Verify
    any_point_within = gdf_points['within_perimeter'].any()

    # Extract the name of the park (the file name without the extension)
    park_name = os.path.splitext(geojson_file)[0]

    if any_point_within:
        print(f"Al menos un punto de la ruta está dentro del parque: {park_name}.")
    else:
        print(f"Ningún punto de la ruta está dentro del parque: {park_name}.")
