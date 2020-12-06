"use strict";
import "jest-chain";
import isTypedArray from "../../src/isTypedArray";

describe("Test isTypedArray function", () => {
  test("should return true when a typed array is given", () => {
    expect(isTypedArray(new Uint8Array())).toBe(true);
  });
  test("should return false when an untyped array is given", () => {
    expect(isTypedArray([])).toBe(false);
    expect(isTypedArray([1, 2])).toBe(false);
  });

  test("should return false when an object is given", () => {
    expect(isTypedArray({})).toBe(false);
  });
});
