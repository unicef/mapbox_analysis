#!/usr/bin/python3

from pathlib import Path
import os
import requests
import backoff
import geojson
import csv
import fire

# TODO rewrite as commandline utility for these params -- which library to use click or argparse?

# Defaults
output_name = 'kz'
csv_input = 'data/unicef/KZ-UNICEF-0-Government-0.csv'
base_url = 'https://api.mapbox.com/isochrone/v1/mapbox/'
token = 'pk.eyJ1IjoiYnJhbmlnYW4iLCJhIjoiY2p1NGoyZjJwMHlpaTRlcXZtanRhOGtiaiJ9.1cdzD6oAd8o-tIHDxIigIA'
profile = 'driving'
minutes = 30
limit = None
generalize = 0


"""
 Try no generalizing to avoid self-intersections (doesn't work)
 https://github.com/mapbox/navigation-feedback/issues/999

"""


def isochrone(x, y, profile, minutes, generalize, token):
    if not x or not y:
        print("Missing coordinates, skipping")
        return
    url = f'{base_url}{profile}/{x},{y}?contours_minutes={minutes}&generalize={generalize}&polygons=true&access_token={token}'
    response = request_isochrone(url).json()
    if 'features' in response:
        return response['features'][0]
    else:
        print("Issue creating isochrone, skipping", response)
        return


@backoff.on_exception(backoff.expo,
                      requests.exceptions.RequestException)
def request_isochrone(url):
    print(f'Getting isochrone {url}')
    r = requests.get(url)
    r.raise_for_status()
    return r


def create_isochrones(input_path, name=None, profile=profile, token=token, minutes=minutes, generalize=generalize, limit=None, force=False):
    """
    This tool creates isochrones from a set of points, provided as geojson or csv
    If csv, geometry columns must be named "lat" and "lon"

    :param output_name: Output file prefix, if ommitted input file name will be used
    :param profile: Mapbox directions profile to use, must be one of 'walking' 'cycling' 'driving'
    :param token: Mapbox API token
    :param minutes: The time size of the isochrone to generate in minutes, defaults to 30
    :param generalize: A positive floating point value in meters used as the tolerance for Douglas-Peucker generalization by the isochrone API
    :param limit: If provided, the script will only generate this many isochrones despite the input file size, useful for testing
    :param force: Overwrite any existing file without warning, otherwise script will exit
    """
    output_name = name
    if not output_name:
        # if no output_name is defined use the input file as a base name
        output_name = Path(input_path).stem

    # Should also return true for .geojson files
    is_json = "json" in Path(input_path).suffix
    is_csv = ".csv" == Path(input_path).suffix
    if not is_json and not is_csv:
        print("Invalid input file format, json or csv required")
        return

    if is_json:
        print("JSON not supported yet, please use csv")
        return

    output_path = f'{output_name}_isochrone_{profile}_{minutes}.json'
    print("Output path: "+output_path)
    if (Path(output_path).exists()):
        if force:
            print("File already exists, overwriting!")
        else:
            print("File already exists, exiting. To overwrite, run with --force.")
            return

    with open(output_path, 'w') as output_file:
        features = []
        if is_csv:
            with open(input_path) as csv_file:
                # Should probably just use pandas here but this is maybe faster?
                reader = csv.reader(csv_file)
                skipped = 0
                header = []
                for i, row in enumerate(reader):
                    if i == 0:
                        # first row is headers, save that
                        header = row
                        # TODO Match this with wildcards to support "Latitude" or "x" and "y" (ogr2ogr)
                        lat_index = header.index('lat')
                        lon_index = header.index('lon')
                        if not (lat_index and lon_index):
                            print("Missing lat and lon columns")
                            break
                    elif limit == None or i < limit:
                        iso = isochrone(
                            row[lon_index], row[lat_index], profile, minutes, generalize, token)
                        if iso:
                            # create a dict out of two arrays
                            iso['properties'] = dict(zip(header, row))
                            features.append(iso)
                        else:
                            # TODO create a buffer instead?
                            skipped = skipped + 1

        print(f'{len(features)} isochrones completed. {skipped} rows skipped')
        feature_collection = geojson.FeatureCollection(features)
        output_file.write(geojson.dumps(feature_collection, sort_keys=True))
        # Return geojson FC for use as module? Or better to return path to file since we will want to do this only once?
        return feature_collection


def test_no_segment():
    # No valid segment here, TODO make real tests
    isochrone(62.04816, 47.532735)


if __name__ == "__main__":
    # test_no_segment()
    # create_isochrones(csv_input)
    # CLI
    fire.Fire(create_isochrones)
