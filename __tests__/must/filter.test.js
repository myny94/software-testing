import filter from '../../src/filter.js';

describe('Test filter function', () => {
    const users = [
        { 'user': 'barney', 'active': true, 'age': 25 },
        { 'user': 'fred', 'active': false, 'age': 19 },
        { 'user': 'doe', 'active': false, 'age': 30 },
        { 'user': 'jane', 'active': false, 'age': 38 },
        { 'user': 'john', 'active': true, 'age': 56 }
    ]

    // when all value types are numbers
    test('Filter object user with activeness', () => {
        expect(filter(users, ({ active }) => active))
            .toStrictEqual([
                { 'user': 'barney', 'active': true, 'age': 25 },
                { 'user': 'john', 'active': true, 'age': 56 }]);
    })

    test('Filter object user with user name', () => {
        expect(filter(users, ({ user }) => user == 'barney'))
            .toStrictEqual([{ 'user': 'barney', 'active': true, 'age': 25 }]);
    })

    test('Filter object user with age', () => {
        expect(filter(users, ({ age }) => age > 30))
            .toStrictEqual([
                { 'user': 'jane', 'active': false, 'age': 38 },
                { 'user': 'john', 'active': true, 'age': 56 }
            ]);
    })

    test(`Filter with the condition that does not match any element in object`, () => {
        expect(filter(users, ({ age }) => age > 60))
            .toStrictEqual([
                []
            ]);
    })

    test('Filter empty array returns array of empty array', () => {
        expect(filter([],() => {})).toStrictEqual([[]])
    })

    test('Filter on NaN or null returns array of empty array', () => {
        expect(filter(NaN,() => {})).toStrictEqual([[]])
        expect(filter(null,() => {})).toStrictEqual([[]])
    })
})