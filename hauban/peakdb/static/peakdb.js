var map = new ol.Map({
    layers: [
	new ol.layer.Tile({
	    source: new ol.source.OSM(),
	}) ],
    target: 'map',
    view: new ol.View({
	center: [0, 0],
	zoom: 2,
    }),
});

var httpRequest;

flag = new ol.style.Style({
    image: new ol.style.Circle({
	radius: 5,
	fill: new ol.style.Fill({color: '#666666'}),
	stroke: new ol.style.Stroke({color: '#bada55', width: 1}),
    }),
});

function draw_points() {
    var peaks = JSON.parse(httpRequest.responseText);
    features = new Array(peaks.length);
    for (let i = 0; i < peaks.length; i++) {
	features[i] = new ol.Feature({
	    geometry: new ol.geom.Point(
		ol.proj.fromLonLat([peaks[i].location.coordinates[0],
				    peaks[i].location.coordinates[1]])),
	    altitude: peaks[i].altitude,
	    name: peaks[i].name
	});
	console.log(peaks[i].location.coordinates[0], ' ', peaks[i].location.coordinates[1], ' ', peaks[i].altitude, ' ', peaks[i].name)
    }
    var vectorSource = new ol.source.Vector({
	features: features, wrapX: false,
    });
    var peaksLayer = new ol.layer.Vector({
	source: vectorSource,
	style: function (feature) {
	    return flag;
	},
    });
    map.addLayer(peaksLayer);
}

function load_points() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
	    draw_points();
	}
    };
    httpRequest.open('GET', 'http://localhost:8000/api/peaks');
    httpRequest.send();
}

window.onload = function () {
    load_points();
};
