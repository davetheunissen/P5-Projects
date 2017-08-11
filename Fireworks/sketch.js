
var gravity;
var fireworks = [];

function setup() {
    createCanvas(400,400);
    stroke(255);
    strokeWeight(5);

    gravity = createVector(0, 0.2);
    
}

function draw() {
    background(52);

    if(random(1) < 0.05) {
        fireworks.push(new Firework());
    }

    fireworks.forEach(function(firework) {
        firework.update();
        firework.show();
    }, this);
}