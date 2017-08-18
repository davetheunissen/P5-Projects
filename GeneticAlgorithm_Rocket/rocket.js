function Rocket() {
    this.position = createVector(width/2, height/2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.dna = new DNA();

    this.applyForce = function(force) {
        this.acceleration.add(force);
    };

    this.update = function() {
        this.applyForce(this.dna.genes[count]);

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    };

    this.display = function(){
        push();
        noStroke();
        fill(250, 225);
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rectMode(CENTER);
        rect(0, 0, 50, 10);
        pop();
    };
};

