function Population() {
    this.rockets = [];
    this.size = 20;

    for (var i = 0; i < this.size; i++) {
        this.rockets[i] = new Rocket();
    };

    this.run = function () {
        for (var i = 0; i < this.size; i++) {
            this.rockets[i].update();
            this.rockets[i].display();
        }
    };
};