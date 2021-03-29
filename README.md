# Build images and run cluster

```
docker-compose up --build -d
docker-compose exec django python manage.py migrate --noinput
```
From now on, django is listening on localhost, port 8000.


# REST api endpoints

## Create a record :
```
curl -H 'Content-Type: application/json' -X POST \
     -d '{"name": "Everest", "altitude": 8848.86, "location": "POINT(86.925278 27.988056)"}' \
	 http://localhost:8000/api/peaks/
```

Note that `location` can be given in any GEOS-supported format (WKT, WKB, GeoJSON).

## Update a record :

```
curl -H 'Content-Type: application/json' -X PUT \
     -d '{"name": "bar", "altitude": 5, "location": "POINT(2 3)"}'
	 http://localhost:8000/api/peaks/foo/
```

## Lookup peaks in bbox :

```
curl -X GET http://localhost:8000/api/peaks/?in_bbox=-1,40,1,45
```

## Delete a record

```
curl -X DELETE http://localhost:8000/api/peaks/Everest/
```

# API web access and documentation

An interactive web interface for requesting API is available at `http://localhost:8000/api/`.

# View map

An Openlayer view can be accessed  at `http://localhost:8000`.

