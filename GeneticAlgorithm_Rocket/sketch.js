
var population;

var gravity;
var count = 0;
var lifespan = 200;

function setup() {
    createCanvas(600, 600);
    gravity = createVector(0, 0);
    
    population = new Population();
};

function draw() {
    background(52);

    count++;
    if(count == lifespan) {
        count = 0;
    }
    
    population.run();
};