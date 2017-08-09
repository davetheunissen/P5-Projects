function star() {
    var s = random(1, 3);
    var x = random(-width, width);
    var y = random(-height, height);
    var z = random(width);
    var c = color(255,255,255);

    this.update = function() {
        z = z - 1;
        c = color(random(150,255), random(150,255), 255);
        if(z < 1) {
            s = random(1, 5);
            x = random(-width, width);
            y = random(-height, height);
            z = width;
        };
    };
    
    this.show = function(){
        fill(c);
        noStroke();

        var sx = map(x / z, 0, 1,0, width);
        var sy = map(y / z, 0, 1,0, height);

        ellipse(sx,sy,s,s);
    };
}