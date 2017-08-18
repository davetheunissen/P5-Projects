function DNA() {
    this.genes = [];
    var maxForce = 0.2;

    for(var i = 0; i < lifespan; i++) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(maxForce);
        
        console.log(this.genes[i]);
    };
};