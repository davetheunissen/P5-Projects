function setup() {
    createCanvas(400,400);
    spaceship = new Spaceship();
}

function draw() {
    background(52);
    spaceship.update();
    spaceship.show();
}