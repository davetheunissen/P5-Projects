function Population() {
    this.rockets = [];
    this.size = 20;

    for (var i = 0; i < this.size; i++) {
        this.rockets[i] = new Rocket();
    };

    this.reproduce = function () {
        var maxFitness = 0;
        var newRockets = [];
        this.rockets.forEach(function (rocket) {
            rocket.calculateFitness();
            if (rocket.fitness > maxFitness) {
                maxFitness = rocket.fitness;
            };
        }, this);

        console.log(maxFitness);

        for(var i = 0; i < this.rockets.length; i++) {
            var parentA = this.parentSelection(maxFitness);
            var parentB = this.parentSelection(maxFitness);
            var childDNA = parentA.dna.crossover(parentB.dna);
            childDNA.mutation();
            newRockets[i] = new Rocket(childDNA);
        };

        this.rockets = newRockets;
    };

    this.parentSelection = function (fitness) {
        while (true) {
            var i = floor(random(this.rockets.length));
            var r = random(0, fitness);
            var rocket = this.rockets[i];
            if (r < rocket.fitness) {
                return rocket;
            };
        };
    };

    this.run = function () {
        for (var i = 0; i < this.size; i++) {
            this.rockets[i].update();
            this.rockets[i].display();
        }
    };
};