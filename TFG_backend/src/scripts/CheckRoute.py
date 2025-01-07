import geopandas as gpd
import gpxpy
import gpxpy.gpx
import pandas as pd
import os
from datetime import datetime

# Path to the GPX file for the route
gpx_file = "D:/Escritorio/TrabajoFinDeGrado/Proyecto_TFG/TFG_frontend/src/assets/images/route.gpx"  # Change this path to the correct path of your GPX file
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
routes_dir = "D:/Escritorio/TrabajoFinDeGrado/Proyecto_TFG/TFG_frontend/src/assets/routes/"

# Check if the folder exists
if not os.path.exists(geojson_dir):
    raise FileNotFoundError(f"Error: The folder was not found at the path: {geojson_dir}")

# Get the list of all .json files in the folder
geojson_files = [f for f in os.listdir(geojson_dir) if f.endswith('.json')]

# Iterate over all the GeoJSON files
for geojson_file in geojson_files:
    # Load the GeoJSON file
    file_path = os.path.join(geojson_dir, geojson_file)
    gdf_park = gpd.read_file(file_path)  # Load the JSON file
    park_polygon = gdf_park.geometry.union_all()  # Merge all the polygons in case of multiple

    # Ensure the CRS is the same
    gdf_park.crs = 'EPSG:4326'

    # Check which points are inside the polygon
    gdf_points['within_perimeter'] = gdf_points.geometry.apply(lambda x: park_polygon.contains(x))
    
    # Get the points that are inside the perimeter
    points_within = gdf_points[gdf_points['within_perimeter']]

    # Extract the name of the park (the file name without the extension)
    park_name = os.path.splitext(geojson_file)[0]

    # Print the points that are inside the perimeter
    if not points_within.empty:
        print(f"La ruta pasa por los siguientes puntos dentro del parque: {park_name}:")
        
        # Create a new GPX file for the points within the park
        gpx_output = gpxpy.gpx.GPX()
        
        # Add metadata to the GPX
        gpx_output.name = f"Ruta dentro del parque {park_name}"
        gpx_output.creator = "osrm"
        gpx_output.time = datetime.utcnow()

        # Create a track and track segment
        track = gpxpy.gpx.GPXTrack(name=f"Ruta {park_name}")
        gpx_output.tracks.append(track)
        segment = gpxpy.gpx.GPXTrackSegment()
        track.segments.append(segment)

        for idx, row in points_within.iterrows():
            #print(f"Latitud: {row['latitude']}, Longitud: {row['longitude']}")
            # Add point to track segment
            track_point = gpxpy.gpx.GPXTrackPoint(latitude=row['latitude'], longitude=row['longitude'])
            segment.points.append(track_point)

        # Write the GPX file
        output_file = f"{park_name}_points_within.gpx"
        output_path = os.path.join(routes_dir, output_file)
        with open(output_path, 'w') as f:
            f.write(gpx_output.to_xml())
        
        #print(f"Archivo GPX creado: {output_path}")
    #else:
       #print(f"Ningún punto de la ruta está dentro del parque: {park_name}.")
