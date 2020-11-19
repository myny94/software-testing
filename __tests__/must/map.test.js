import "jest-chain";
import map from "../../src/map.js";

describe("Test map function", () => {
  const li = [1, 3, 4, 6, 7];

  test("Function maps each element of the array and makes it squared", () => {
    expect(map(li, (el) => el * el))
      .toHaveLength(5)
      .toEqual([1, 9, 16, 36, 49]);
  });

  test("Function maps each element of the array and adds one for each", () => {
    expect(map(li, (el) => el + 1))
      .toHaveLength(5)
      .toEqual([2, 4, 5, 7, 8]);
  });

  test("Iteratee must return value. It returns an array of undefined elements", () => {
    expect(
      map(li, (el) => {
        el + 1;
      })
    )
      .toHaveLength(5)
      .not.toEqual([2, 4, 5, 7, 8])
      .toEqual([undefined, undefined, undefined, undefined, undefined]);
  });
});
