var mapImage;

//40.9006° S, 174.8860° E
//var clat = -40.9006;
//var clon = 174.8860;
var clat = 0;
var clon = 0;

//36.8485° S, 174.7633° E
var lat = -36.8485;
var lon = 174.7633;
var zoom = 1;

function preload() {
    mapImage = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1/1024x512?access_token=pk.eyJ1IjoicmVkZHJhZ29uNzIiLCJhIjoiY2o2Ym11MWp4MWd2eDJ3b2xrcXNrYzc4eiJ9.nJHyCotAQEHTEiVK-fmetQ");
}

function setup() {
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
