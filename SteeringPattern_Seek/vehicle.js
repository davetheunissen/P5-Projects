function vehicle(x, y) {

    this.position = createVector(x, y);
    this.velocity = createVector(0, -1);
    this.accleration = createVector(0, 0);

    this.maxSpeed = 10;
    this.maxForce = 0.2;

    this.radius = 5;

    this.applyForce = function (force) { 
        this.accleration.add(force);
    };

    this.seek = function (target) { 
        // determine desired vector
        var desired = p5.Vector.sub(target, this.position);
        var d = desired.mag();

        // scale with arbitrary damping within 100 pixels
        if (d < 100) {
            var m = map(d,0,100,0, this.maxSpeed);
            desired.setMag(m);
        } else {
            desired.setMag(this.maxSpeed);
        }

        // seek equals desired - velocity
        var steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);

        this.applyForce(steer);
    };
    
    this.update = function () { 
        // add acceleration to velocity
        this.velocity.add(this.accleration);
        // limit velocity to our speed limit
        this.velocity.limit(this.maxSpeed);
        // add velocity to our position
        this.position.add(this.velocity);
        // reset acceleration 
        this.accleration.mult(0);
    };

    this.display = function () {
        // Draw a triangle rotated in the direction of velocity
        var theta = this.velocity.heading() + PI/2;
        fill(127);
        stroke(200);
        strokeWeight(1);

        push();
        translate(this.position.x,this.position.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.radius*2);
        vertex(-this.radius, this.radius*2);
        vertex(this.radius, this.radius*2);
        endShape(CLOSE);
        pop();
    };

};