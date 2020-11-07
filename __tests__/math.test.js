import add from '../src/add.js';
import ceil from '../src/ceil.js';

describe('Test add function', () => {

    // when all value types are numbers
    test('2 + 3 = 5', () => {
        expect(add(2, 3)).toBe(5);
    })

    test('(-1) + (-1) = -2', () => {
        expect(add(-1, -1)).toBe(-2);
    })

    test('0 + 5 = 5', () => {
        expect(add(0, 5)).toBe(5);
    })

    test('0 + (-1) = -1', () => {
        expect(add(0, -1)).toBe(-1);
    })

    test('5 + (-1) = 4', () => {
        expect(add(5, -1)).toBe(4);
    }) 

    // when one of the value types is string
    test('2 + str = 2str', () => {
        expect(add(2, 'str')).toBe('2str');
    })

    test('str1 + str2 = str1str2', () => {
        expect(add('str1','str2')).toBe('str1str2')
    })
})

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