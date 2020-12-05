import "jest-chain";
import reduce from "../../src/reduce.js";

describe("Test reduce function", () => {
  test("The sum of numbers from 0 to 10 equals to 55", () => {
    const li = Array.from(Array(11).keys()); // number from 0 to 10
    expect(reduce(li, (sum, el) => sum + el, 0))
      .not.toBeNaN()
      .toEqual(55);
  });

  test("use reduce to flip key and value in object", () => {
    const object = { '1': ['a', 'c'], '2': ['b'] };
    expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key)
      return result
    }, {})).toStrictEqual( { '1': ['a', 'c'], '2': ['b'] })
  })
});