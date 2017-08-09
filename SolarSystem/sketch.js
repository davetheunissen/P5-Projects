
var planets = [];
var stars = [];

var numStars = 1000;
var earthSpeed = 0.02 * -1;

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    createSun();
    createMercury();
    createVenus();
    createEarth();
    createMars();
    createJupiter();
    createSaturn();
    createUranus();
    createNeptune();

    for(var i = 0; i < numStars; i++) {
        this.stars.push(new star());
    };
}

function createSun() {
    var c = color(255,255,102);
    var sun = new planet(c, 0, 50, 0);

    this.planets.push(sun);
};

function createMercury() {
    var c = color(128,128,128);
    var s = earthSpeed * (12 / 3);
    var mercury = new planet(c, 60, 15, s);

    this.planets.push(mercury);
};

function createVenus() {
    var c = color(255,179,102);
    var s = earthSpeed * (12 / 7);
    var venus = new planet(c, 90, 15, s);

    this.planets.push(venus);
};

function createEarth() {
    var c = color(102,179,255);
    var earth = new planet(c, 110, 15, earthSpeed);
    earth.addMoon();
    
    this.planets.push(earth);
}

function createMars() {
    var c = color(255,102,102);
    var s = earthSpeed / 2;
    var mars = new planet(c, 130, 15, s);
    mars.addMoon();
    mars.addMoon();
    this.planets.push(mars);
}

function createJupiter() {
    var c = color(204,102,0);
    var s = earthSpeed / 12;
    var jupiter = new planet(c, 160, 15, s);

    this.planets.push(jupiter);
}

function createSaturn() {
    var c = color(230, 255, 153);
    var s = earthSpeed / 30;
    var saturn = new planet(c, 190, 15, s);

    this.planets.push(saturn);
}

function createUranus() {
    var c = color(0, 153, 204);
    var s = earthSpeed / 84;
    var uranus = new planet(c, 210, 15, s);

    this.planets.push(uranus);
}

function createNeptune() {
    var c = color(0, 51, 204);
    var s = earthSpeed / 165;
    var neptune = new planet(c, 240, 15, s);

    this.planets.push(neptune);
}

function draw() {
    background(52);
    translate(width/2, height/2);

    for(var i = 0; i < stars.length; i++) {
        this.stars[i].update();
        this.stars[i].show();
    };

    for(var i = 0; i < planets.length; i++) {
        this.planets[i].update();
        this.planets[i].show();
    };

}
