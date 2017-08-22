
var angle = 0;
var img;

function preload() {
    img = loadImage('textures/F9.png');
};

function setup() {
    createCanvas(600, 600, WEBGL)
};

function draw() {
    background(52);

    //rotateX(angle);
    //rotateY(angle);
    //rotateZ(angle);

    translate(0, angle, 0);
    texture(img);
    box(25, 250, 1);
    plane(25, 250);
    
    
    angle -= 1;
};