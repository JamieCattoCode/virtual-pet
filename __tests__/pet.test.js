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
        const fides = new Pet('Fido')
        fides.growUp();
        expect(fides.hunger).toStrictEqual(5);
        fides.growUp();
        expect(fides.hunger).toStrictEqual(10);
    })

    it('decreases fitness by 3', () => {
        const fides = new Pet('Fido')
        fides.growUp();
        expect(fides.fitness).toStrictEqual(7);
        fides.growUp();
        expect(fides.fitness).toStrictEqual(4);
    })
})