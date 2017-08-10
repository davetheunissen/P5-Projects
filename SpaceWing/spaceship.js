function spaceship() {
}

spaceship.prototype.update = function() {
}

spaceship.prototype.show = function() {
    fill(255);
    ellipse(mouseX, height - (height / 4), 25, 25);
}