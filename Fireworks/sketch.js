
var gravity;
var fireworks = [];

function setup() {
    createCanvas(400,400);
    background(52);
    stroke(255);
    strokeWeight(5);

    gravity = createVector(0, 0.2);
    
}

function draw() {
    colorMode(RGB);
    background(0, 25)    
    if(random(1) < 0.05) {
        fireworks.push(new Firework());
    }

    fireworks.forEach(function(firework) {
        if(firework.done()) {
            fireworks.splice(firework, 1);
        } else {
            firework.update();
            firework.show();
        }
    }, this);
}