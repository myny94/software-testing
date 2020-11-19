import filter from '../src/filter.js';

describe('Test filter function', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
    ]
    // when all value types are numbers
    test('Filter object user with activeness', () => {
        expect(filter(users, ({ active }) => active)).toStrictEqual([{ 'user': 'barney', 'active': true }]);
    })
})