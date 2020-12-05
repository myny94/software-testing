import "jest-chain";
import map from "../../src/map.js";

describe("Test map function", () => {
  const li_int = [1, 3, 4, 6, 7];
  const li_str = ['str1', 'str2', 'str3', 'str4', 'str5'];

  test("Function maps each element of the array and makes it squared", () => {
    expect(map(li_int, (el) => el * el))
      .toHaveLength(5)
      .toEqual([1, 9, 16, 36, 49]);
  });

  test("Function maps each element of the array and adds one for each number element", () => {
    expect(map(li_int, (el) => el + 1))
      .toHaveLength(5)
      .toEqual([2, 4, 5, 7, 8]);
  });

  test("Iterater must return value. It returns an array of undefined elements", () => {
    expect(
      map(li_int, (el) => {
        el + 1;
      })
    )
      .toHaveLength(5)
      .not.toEqual([2, 4, 5, 7, 8])
      .toEqual([undefined, undefined, undefined, undefined, undefined]);
  });

  test("Function maps each element of the array and makes it squared for string element. Must return NaN", () => {
    expect(map(li_str, (el) => el * el))
      .toHaveLength(5)
      .toEqual([NaN, NaN, NaN, NaN, NaN]);
  });

  test("Function maps each element of the array and adds one for each string element", () => {
    expect(map(li_str, (el) => el + 1))
      .toHaveLength(5)
      .toEqual(['str11', 'str21', 'str31', 'str41', 'str51']);
  });
});
