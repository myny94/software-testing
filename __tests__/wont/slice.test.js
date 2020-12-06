"use strict";
import "jest-chain";
import slice from "../../src/slice";

describe("Test slice function", () => {
  test("should return empty array", () => {
    expect(slice([], 2)).toEqual([]);
  });

  test("should return empty array", () => {
    expect(slice([1,2,3,4], -1, 2)).toEqual([]);
  });

  test("temp pass", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2)).toEqual([3, 4]);
  });
});
