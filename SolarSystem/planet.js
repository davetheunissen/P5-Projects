// planet class
function planet(c, d, r, s) {
    var colour = c;
    var distance = d;
    var radius = r;
    
    var angle = TWO_PI;
    var speed = s;

    var moons = [];

    this.addMoon = function() {
        var moon = new planet(250, distance/8, radius/3, speed * 4);
        moons.push(moon);
    };

    this.update = function() {
        angle += speed;
    }

    this.show = function() {
        push();

        fill(colour);
        rotate(angle);
        translate(distance, 0);
        
        ellipse(0,0,radius,radius);

        for(var m = 0; m < moons.length; m++) {
            moons[m].update();
            moons[m].show();
        };

        pop();
    };
};