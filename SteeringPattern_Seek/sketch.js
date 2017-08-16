
var vehicle;

function setup() {
    noCursor();
    createCanvas(600, 600);
    
    // Create a new vehicle in the centre of the screen.
    vehicle = new vehicle(width/2, height/2);
}

function draw() {
    background(52);

    var target = createVector(mouseX, mouseY);

    ellipse(target.x, target.y, 20, 20);

    vehicle.seek(target);
    vehicle.update();
    vehicle.display();
}