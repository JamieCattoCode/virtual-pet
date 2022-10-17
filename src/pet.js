const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
const IS_HUNGRY = 5;
const IS_UNFIT = 3;
const IS_UNFIT_MSG = "I need a walk";
const IS_HUNGRY_MSG = "I am hungry";


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAX_FITNESS;
}

Pet.prototype = {
    growUp () {
        this.age++;
        this.hunger += 5;
        this.fitness -= 3;
    },

    walk () {
        if ((this.fitness+4) > MAX_FITNESS){
            this.fitness += (MAX_FITNESS-this.fitness);
        }
        else {
            this.fitness += 4;
        }
    },

    feed () {
        if ((this.hunger - 3) <= MIN_HUNGER){
            this.hunger = MIN_HUNGER;
        }
        else {
            this.hunger -= 3;
        }
    },

    checkUp () {
        if (this.hunger >= IS_HUNGRY && this.fitness <= IS_UNFIT){
            return IS_HUNGRY_MSG + " AND " + IS_UNFIT_MSG + "!";
        }
        else if (this.hunger >= IS_HUNGRY){
            return IS_HUNGRY_MSG;
        }
        else if (this.fitness <= IS_UNFIT){
            return IS_UNFIT_MSG;
        }
        else {
            return "I feel great!";
        }
    }
}

module.exports = Pet;