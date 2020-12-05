import ceil from '../../src/ceil.js';

describe('Test ceil function', () => {
    test('ceil(4.006) = 5', () => {
        expect(ceil(4.006)).toBe(5);
    })

    test('ceil(4.006, 2) = 4.1', () => {
        expect(ceil(4.006, 1)).toBe(4.1);
    })

    test('ceil(-7.086) = -7', () => {
        expect(ceil(-7.006)).toBe(-7);
    })

    test('ceil(-7.086, 3) = -7.006', () => {
        expect(ceil(-7.006, 3)).toBe(-7.006);
    })

    // ceil operation on wrong type
    test('ceil function on wrong types', () => {
        expect(ceil('str')).toBeNaN();
        expect(ceil([1,2,3])).toBeNaN()
        expect(ceil({'nickname': 'doe', 'age': 25})).toBeNaN()
    })
})