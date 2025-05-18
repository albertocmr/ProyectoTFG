import geopandas as gpd
import gpxpy
import gpxpy.gpx
import pandas as pd
import os
import json
import sys

try:
    gpx_files = [f for f in os.listdir("uploads") if f.endswith(".gpx")]
    if not gpx_files:
        raise FileNotFoundError("No se ha encontrado ningún archivo GPX en la carpeta uploads")

    gpx_file = os.path.join("uploads", gpx_files[0])

    try:
        with open(gpx_file, 'r') as f:
            gpx = gpxpy.parse(f)
    except Exception as e:
        raise Exception(f"Error al parsear el archivo GPX: {e}")

    points = [(point.latitude, point.longitude) 
              for track in gpx.tracks 
              for segment in track.segments 
              for point in segment.points]

    df_points = pd.DataFrame(points, columns=['latitude', 'longitude'])
    gdf_points = gpd.GeoDataFrame(df_points, geometry=gpd.points_from_xy(df_points.longitude, df_points.latitude))
    gdf_points.crs = 'EPSG:4326'

    geojson_dir = "/app/park_data/coordinates"
    routes_dir = "/app/shared-data/routes"

    for file in os.listdir(routes_dir):
        os.remove(os.path.join(routes_dir, file))

    if not os.path.exists(geojson_dir):
        raise FileNotFoundError(f"No se encontró la carpeta GeoJSON: {geojson_dir}")

    geojson_files = [f for f in os.listdir(geojson_dir) if f.endswith('.json')]

    parks = []

    for geojson_file in geojson_files:
        try:
            file_path = os.path.join(geojson_dir, geojson_file)
            gdf_park = gpd.read_file(file_path)
            park_polygon = gdf_park.geometry.union_all()
            gdf_park.crs = 'EPSG:4326'

            gdf_points['within_perimeter'] = gdf_points.within(park_polygon)

            park_name = os.path.splitext(geojson_file)[0]

            if gdf_points['within_perimeter'].any():
                parks.append(park_name)

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

        except Exception as e:
            print(f"Error al procesar el archivo {geojson_file}: {e}")

    os.remove(gpx_file)

    print(json.dumps({"parks": parks}))

except Exception as e:
    error_message = str(e)
    print(json.dumps({"error": error_message}))
    sys.exit(1)
