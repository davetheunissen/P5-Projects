function Particle(x, y, h, firework) {
    this.position = createVector(x,y);
    this.acceleration = createVector(0,0);
    this.firework = firework;
    this.lifespan = 255;
    this.hue = h;

    if(this.firework) {
        this.velocity = createVector(0,random(-12, -8));
    } else {
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(1,5));
    }

    this.applyForce = function(force) {
        this.acceleration.add(force);
    }

    this.update = function() {
        if(!this.firework) {
           this.velocity.mult(0.95);
           this.lifespan -= random(3,4);
        }

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.done = function() {
        return this.lifespan <= 0;
    }

    this.show = function() {
        colorMode(HSB);
        if(!this.firework){
            strokeWeight(2);
            stroke(this.hue, 255, 255, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(this.hue, 255, 255);
        }

        point(this.position.x, this.position.y);
    }
}