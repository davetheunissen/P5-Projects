function setup() {
    createCanvas(400,600);
    noCursor();

    spaceship = new spaceship();
}

function draw() {
    background(52);
    spaceship.update();
    spaceship.show();
}