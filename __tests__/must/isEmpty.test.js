import isPrototype from "../../src/.internal/isPrototype.js";
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

  describe("Parameter with map and set objects", () => {
    test("Empty map object returns true", () => {
      const map = new Map();
      expect(isEmpty(map)).toBe(true);
    });

    test("should return false when a map has more than one property", () => {
      const map = new Map();
      map.set("a", 1);
      expect(isEmpty(map)).toBe(false);
    });

    test("Empty set object returns true", () => {
      const set = new Set();
      expect(isEmpty(set)).toBe(true);
    });

    test("should return false when a set has more than one property", () => {
      const set = new Set();
      set.add(1);
      expect(isEmpty(set)).toBe(false);
    });
  });

  describe("Parameter with object prototypes", () => {
    function Student() {
      this.name = "John";
      this.gender = "M";
    }
    test("should return true with empty object prototype", () => {
      expect(isEmpty(Student.prototype)).toBe(true);
    });

    test("should return false with non-empty prototype", () => {
      Student.prototype.age = 15
      expect(isEmpty(Student.prototype)).toBe(false);
    });
  });
});
