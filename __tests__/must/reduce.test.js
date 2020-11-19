import "jest-chain";
import reduce from "../../src/reduce.js";

describe("Test reduce function", () => {
  test("The sum of numbers from 0 to 10 equals to 55", () => {
    const li = Array.from(Array(11).keys()); // number from 0 to 10
    expect(reduce(li, (sum, el) => sum + el, 0))
      .not.toBeNaN()
      .toEqual(55);
  });
});
