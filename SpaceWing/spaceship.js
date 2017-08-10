function Spaceship() {
    this.position = createVector(100,100);
    this.angle = 0;
}

Spaceship.prototype.update = function() {
}

Spaceship.prototype.show = function() {
    fill(255);
    ellipse(this.position.x, this.position.y, 100, 100);
}