import add from '../src/add.js';

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