const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    })

    it('sets name property in constructor', () => {
        const fides = new Pet('Fido');
        expect(fides.name).toEqual('Fido');
    })

    it('sets initial age as 0', () => {
        const fides = new Pet('Fido');
        expect(fides.age).toStrictEqual(0);
    })
})

describe('growUp method', () => {
    it('increments age by 1', () => {
        const fides = new Pet('Fido');
        fides.growUp();
        expect(fides.age).toStrictEqual(1);
        fides.growUp();
        expect(fides.age).toStrictEqual(2);
    })

    it('increases hunger by 5', () => {
        const fides = new Pet('Fido');
        fides.growUp();
        expect(fides.hunger).toStrictEqual(5);
        fides.growUp();
        expect(fides.hunger).toStrictEqual(10);
    })

    it('decreases fitness by 3', () => {
        const fides = new Pet('Fido');
        fides.growUp();
        expect(fides.fitness).toStrictEqual(7);
        fides.growUp();
        expect(fides.fitness).toStrictEqual(4);
    })

    it("throws an error if the pet is not alive", () => {
        const fides = new Pet('Fido');
        fides.age = 50;
        expect(() => fides.growUp()).toThrow('Your pet is no longer alive :(');
    })

    
describe('walk method', () => {
    it('increases fitness by 4', () => {
        const fides = new Pet('Fido');
        fides.fitness = 4;
        fides.walk();
        expect(fides.fitness).toStrictEqual(8);
    })

    it('does not let fitness go above 10', () => {
        const fides = new Pet('Fido');
        fides.walk();
        expect(fides.fitness).toStrictEqual(10);
        fides.growUp();
        expect(fides.fitness).toStrictEqual(7);
        fides.walk();
        expect(fides.fitness).toStrictEqual(10);
    })

    it("throws an error if the pet is not alive", () => {
        const fides = new Pet('Fido');
        fides.age = 50;
        expect(() => fides.walk()).toThrow('Your pet is no longer alive :(');
    })
})

describe('feed method', () => {
    it('decreases hunger by 3', () => {
        const fides = new Pet('Fido');
        fides.hunger = 7;
        fides.feed();
        expect(fides.hunger).toStrictEqual(4);
    })

    it('does not let hunger go below 0', () => {
        const fides = new Pet('Fido');
        fides.hunger = 2;
        fides.feed();
        expect(fides.hunger).toStrictEqual(0);
        fides.feed();
        expect(fides.hunger).toStrictEqual(0);
    })

    it("throws an error if the pet is not alive", () => {
        const fides = new Pet('Fido');
        fides.age = 50;
        expect(() => fides.feed()).toThrow('Your pet is no longer alive :(');
    })
})

describe('checkUp', () => {
    it('returns that it is hungry and needs a walk if it is hungry and unfit', () => {
        const fides = new Pet('Fido');
        fides.hunger = 6;
        fides.fitness = 2;
        expect(fides.checkUp()).toBe('I am hungry AND I need a walk!');
    })

    it('returns that it needs a walk if it is only unfit', () => {
        const fides = new Pet('Fido');
        fides.hunger = 2;
        fides.fitness = 2;
        expect(fides.checkUp()).toBe('I need a walk');
    })

    it('returns that it is hungry if it is hungry', () => {
        const fides = new Pet('Fido');
        fides.hunger = 6;
        fides.fitness = 5;
        expect(fides.checkUp()).toBe('I am hungry');
    })

    it('returns that it feels great if it neither unfit nor hungry', () => {
        const fides = new Pet('Fido');
        fides.hunger = 3;
        fides.fitness = 8;
        expect(fides.checkUp()).toBe('I feel great!');
    })
})

describe('isAlive', () => {
    it('returns true if the pet is alive, and false if not', () => {
        const fides = new Pet('Fido');
        fides.age = 30;
        expect(fides.isAlive).toBe(false);
        fides.age = 20;
        expect(fides.isAlive).toBe(true);
    })
})

describe('adoptChild', () => {
    it('adds the child to the parent\'s children property.', () => {
        const parent = new Pet('Johnson');
        const child = new Pet("Jimson")
        parent.adoptChild(child);
        expect(parent.children).toStrictEqual([child]);
    })
})

})