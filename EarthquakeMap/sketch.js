var mapImage;
<<<<<<< HEAD
var quakeData;
//40.9006° S, 174.8860° E Centre of New Zealand
//36.8485° S, 174.7633° E Auckland
 
var clat = -40.9006;
var clon = 174.7633;
 
=======

//40.9006° S, 174.8860° E
//var clat = -40.9006;
//var clon = 174.8860;
var clat = 0;
var clon = 0;

//36.8485° S, 174.7633° E
>>>>>>> d9cd0d93705c59821f1eed193bcfd01111317035
var lat = -36.8485;
var lon = 174.7633;
var zoom = 5;

function preload() {
<<<<<<< HEAD
    mapImage = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/174.7633,-40.9006,5/1024x1024?access_token=pk.eyJ1IjoicmVkZHJhZ29uNzIiLCJhIjoiY2o2Ym11MWp4MWd2eDJ3b2xrcXNrYzc4eiJ9.nJHyCotAQEHTEiVK-fmetQ");
    quakeData = loadJSON("https://api.geonet.org.nz/quake?MMI=3");
=======
    mapImage = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1/1024x512?access_token=pk.eyJ1IjoicmVkZHJhZ29uNzIiLCJhIjoiY2o2Ym11MWp4MWd2eDJ3b2xrcXNrYzc4eiJ9.nJHyCotAQEHTEiVK-fmetQ");
>>>>>>> d9cd0d93705c59821f1eed193bcfd01111317035
}
 
function setup() {
<<<<<<< HEAD
    createCanvas(1024,1024);
    frameRate(1);
=======
    createCanvas(1024,512);
    translate(width/2, height/2);
    imageMode(CENTER);
    image(mapImage, 0, 0);

    var cx = webMercX(clat);
    var cy = webMercY(clon);

    var x = webMercX(lon) - cx;
    var y = webMercY(lat) - cy;

    fill(255, 0, 255, 200);
    ellipse(x, y, 20, 20);

    console.log(cx);
    console.log(cy);
    console.log(x);
    console.log(y);
>>>>>>> d9cd0d93705c59821f1eed193bcfd01111317035
}
 
// Web Mercator https://en.wikipedia.org/wiki/Web_Mercator
function webMercX(lon) {
    x = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = x + PI;
<<<<<<< HEAD
 
=======

>>>>>>> d9cd0d93705c59821f1eed193bcfd01111317035
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
