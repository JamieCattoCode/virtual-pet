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

describe('walk method', () => {
    it('increases fitness by 4', () => {
        const fides = new Pet('Fido');
        fides.growUp(); fides.growUp();
        fides.walk();
        expect(fides.fitness).toStrictEqual(8);
    })

    it('does not let fitness go above 10', () =>{
        const fides = new Pet('Fido');
        fides.walk();
        expect(fides.fitness).toStrictEqual(10);
        fides.growUp();
        expect(fides.fitness).toStrictEqual(7);
        fides.walk();
        expect(fides.fitness).toStrictEqual(10);
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
})

})