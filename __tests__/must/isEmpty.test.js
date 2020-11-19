import isEmpty from "../../src/isEmpty.js";

describe("Test isEmpty function", () => {
  test("Return true if there is no argument", () => {
    expect(isEmpty()).toBe(true);
  });

  describe("Except string type, an argument of primitive data type returns true, e.g. number, bigint, boolean, undefined, symbol, and null.", () => {
    test("number returns true", () => {
      expect(isEmpty(1)).toBe(true);
      expect(isEmpty(12)).toBe(true);
      expect(isEmpty(0)).toBe(true);
    });
    test("boolean returns true", () => {
      expect(isEmpty(false)).toBe(true);
      expect(isEmpty(true)).toBe(true);
    });
    test("undefined or null value returns true", () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });
  });

  describe("Parameter with string", () => {
    test("Empty string returns true", () => {
      expect(isEmpty("")).toBe(true);
    });
    test("String more than one character returns false", () => {
      expect(isEmpty("1")).toBe(false);
      expect(isEmpty("a")).toBe(false);
      expect(isEmpty("text")).toBe(false);
      expect(isEmpty("123")).toBe(false);
    });
  });

  describe("Parameter with object and array", () => {
    test("Empty object returns true", () => {
      expect(isEmpty({})).toBe(true);
      expect(isEmpty({ a: 1 })).toBe(false);
    });
    test("Empty array returns true", () => {
      expect(isEmpty([])).toBe(true);
      expect(isEmpty([1, 2, 3])).toBe(false);
    });
  });
});
