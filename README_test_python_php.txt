# Test 1 - mountain peaks

The context of this test is to provide a simple web service for storing and retrieving moutain peaks.

Using the **python** web framework Django OR **PHP** web framework on your chosing and a database. (postgresql database is better (postGIS can be used for geo features)),
 implement the following features:

- models/db tables for storing a peak location and attribute: lat, lon, altitude, name
- REST api endpoints to :
    * create/read/update/delete a peak
    * retrieve a list of peaks in a given geographical bounding box
- add an api/docs url to allow viewing the documentation of the api and send requests on endpoints
- add an html/javascript page to view the peaks on a map (use opensource packages)
- deploy all this stack using docker and docker-compose
- [Optional] add ip filtering with a country whitelist settings. Connections from a country not in the list should return a http 403. An admin page protected
with user/password authentication should allow viewing rejected connections.


The source code should be delivered using bitbucket or github with detailed explanations on how to deploy and launch the project.

