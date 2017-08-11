function Firework() {
    this.hue = random(255);
    this.firework = new Particle(random(width), height, this.hue, true);
    this.exploded = false;
    this.particles = [];

    this.update = function() {
        if(!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            if(this.firework.velocity.y >= 0) {
                this.explode();
            }
        }

        this.particles.forEach(function(p) {
            if(p.done()) {
                this.particles.splice(p, 1);
            } else {
                p.applyForce(gravity);
                p.update();
            }
        }, this);
    }

    this.explode = function() {
        this.exploded = true;

        for(var i = 0; i < 100; i++){
            var p = new Particle(this.firework.position.x, this.firework.position.y, this.hue, false);
            this.particles.push(p);
        }
    }

    this.done = function() {
        return this.exploded && this.particles.length === 0;
    }

    this.show = function() {
        if(!this.exploded){
            this.firework.show();
        }

        this.particles.forEach(function(p) {
            p.show();
        }, this);
    }
}