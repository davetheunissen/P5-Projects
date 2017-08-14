var mapImage;

//36.8485° S, 174.7633° E
var lat = -36.8485;
var lon = 174.7633;
var zoom = 1;

function preload() {
    mapImage = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/174.8860,-40.9006,5/1024x1024?access_token=pk.eyJ1IjoicmVkZHJhZ29uNzIiLCJhIjoiY2o2Ym11MWp4MWd2eDJ3b2xrcXNrYzc4eiJ9.nJHyCotAQEHTEiVK-fmetQ");
}

function setup() {
    createCanvas(1024,1024);
    translate(width/2, height/2);
    imageMode(CENTER);
    image(mapImage, 0, 0);

    var cx = webMercX(0);
    var cy = webMercY(0);

    var x = webMercX(lon) - cx;
    var y = webMercY(lat) - cy;

    fill(255, 0, 255, 200);
    ellipse(x, y, 20, 20);

    console.log(cx);
    console.log(cy);

}

// Web Mercator https://en.wikipedia.org/wiki/Web_Mercator
function webMercX(lon) {
    lon = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = lon + PI;

    return a * b;
}

function webMercY(lat) {
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoom);
    var b = tan(PI / 4 + lat / 2);
    var c = PI - log(b);
    return a * c;
}
