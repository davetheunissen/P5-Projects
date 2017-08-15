var mapImage;
var quakeData;
//40.9006° S, 174.8860° E Centre of New Zealand
//36.8485° S, 174.7633° E Auckland
 
var clat = -40.9006;
var clon = 174.7633;
 
var lat = -36.8485;
var lon = 174.7633;
var zoom = 5;

function preload() {
    mapImage = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/174.7633,-40.9006,5/1024x1024?access_token=pk.eyJ1IjoicmVkZHJhZ29uNzIiLCJhIjoiY2o2Ym11MWp4MWd2eDJ3b2xrcXNrYzc4eiJ9.nJHyCotAQEHTEiVK-fmetQ");
    quakeData = loadJSON("https://api.geonet.org.nz/quake?MMI=3");
}
 
function setup() {
    createCanvas(1024,1024);
    frameRate(1);
}
 
// Web Mercator https://en.wikipedia.org/wiki/Web_Mercator
function webMercX(lon) {
    x = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = x + PI;
 
    return a * b;
}
 
function webMercY(lat) {
    y = radians(lat);
    var a = (256 / PI) * pow(2, zoom);
    var b = tan(PI / 4 + y / 2);
    var c = PI - log(b);
    return a * c;
}

function draw() {
    translate(width/2, height/2);
    imageMode(CENTER);
    image(mapImage, 0, 0);

    var cx = webMercX(clon);
    var cy = webMercY(clat);

    for(var i = 0; i < quakeData.features.length; i++){
 
        var ex = quakeData.features[i].geometry.coordinates[0];
        var ey = quakeData.features[i].geometry.coordinates[1];
        var mag = quakeData.features[i].properties.magnitude;

        var x = webMercX(ex) - cx;
        var y = webMercY(ey) - cy;

        mag = pow(7, mag);
        mag = sqrt(mag);
        var magmax = sqrt(pow(7, 7));
        var d = map(mag, 0, magmax, 0, 180);

        stroke(255, 0, 255);
        fill(255, 0, 255, 200);
        ellipse(x, y, d, d);
    }
}
