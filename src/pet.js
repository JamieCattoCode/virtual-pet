const MAX_FITNESS = 10;
const MAX_AGE = 30;
const MAX_HUNGER = 10;
const MIN_HUNGER = 0;
const IS_HUNGRY = 5;
const IS_UNFIT = 3;
const IS_UNFIT_MSG = "I need a walk";
const IS_HUNGRY_MSG = "I am hungry";
const PET_DEAD_MSG = "Your pet is no longer alive :("


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAX_FITNESS;
}

Pet.prototype = {
    get isAlive(){
        if (this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > 0) {
            return true;
        }
        else {
            return false;
        }
    },

    growUp () {
        if (!this.isAlive){
            throw new Error(PET_DEAD_MSG);
        }
        else{
            this.age++;
            this.hunger += 5;
            this.fitness -= 3;         
        }
        
    },

    walk () {
        if (!this.isAlive){
            throw new Error(PET_DEAD_MSG);
        }
        else if ((this.fitness+4) > MAX_FITNESS){
            this.fitness += (MAX_FITNESS-this.fitness);
        }
        else {
            this.fitness += 4;
        }
    },

    feed () {
        if (!this.isAlive){
            throw new Error(PET_DEAD_MSG);
        }
        else if ((this.hunger - 3) <= MIN_HUNGER){
            this.hunger = MIN_HUNGER;
        }
        else {
            this.hunger -= 3;
        }
    },

    checkUp () {
        if(!this.isAlive){
            return PET_DEAD_MSG;
        }
        if (this.hunger >= IS_HUNGRY && this.fitness <= IS_UNFIT){
            return IS_HUNGRY_MSG + " AND " + IS_UNFIT_MSG + "!";
        }
        if (this.hunger >= IS_HUNGRY){
            return IS_HUNGRY_MSG;
        }
        if (this.fitness <= IS_UNFIT){
            return IS_UNFIT_MSG;
        }
        else {
            return "I feel great!";
        }
    }
}

module.exports = Pet;