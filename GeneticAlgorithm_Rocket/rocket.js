function Rocket(dna) {
    this.position = createVector(width / 2, height);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.fitness = 0;
    this.completed = false;

    if (dna) {
        this.dna = dna;
    } else {
        this.dna = new DNA();
    }

    this.applyForce = function (force) {
        this.acceleration.add(force);
    };

    this.update = function () {
        var distToTarget = dist(this.position.x, this.position.y, target.x, target.y);
        if (distToTarget < 10) {
            this.completed = true;
            this.position = target.copy();
        };

        this.applyForce(this.dna.genes[count]);
        //if (!this.completed) {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
        //};
    };

    this.calculateFitness = function () {
        var distToTarget = dist(this.position.x, this.position.y, target.x, target.y);
        this.fitness = map(distToTarget, 0, width, width, 0);

        if (this.completed) {
            this.fitness *= 10;
        };
    };

    this.display = function () {
        push();
        noStroke();
        fill(250, 225);
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rectMode(CENTER);
        rect(0, 0, 25, 5);
        pop();
    };
};

