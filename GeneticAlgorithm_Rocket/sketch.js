var target;
var population;
var gravity;
var count = 0;
var lifespan = 400;
var mutationRate = 0.001;

function setup() {
    createCanvas(600, 600);
    gravity = createVector(0, 0);
    
    target = createVector(width/2, 100);
    population = new Population();

};

function draw() {
    background(52);

    // draw the target
    noStroke();
    fill(255, 0, 255, 200);
    ellipse(target.x, target.y, 25, 25);

    count++;
    if(count == lifespan) {
        population.reproduce();
        count = 0;
    }
    
    population.run();
};