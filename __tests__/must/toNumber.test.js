"use strict";
import "jest-chain";
import toNumber from "../../src/toNumber";

describe("Test toNumber function", () => {
  test("should return same value when a number was given", () => {
    const value = 3.2;
    expect(toNumber(value)).toBe(value);
  });

  test("should return the minimum number", () => {
    const value = Number.MIN_VALUE;
    expect(toNumber(value)).toBe(5e-324);
  });

  test("should return Infinity", () => {
    const value = Infinity;
    expect(toNumber(value)).toBe(Infinity);
  });

  test("should return number type when a string number was given", () => {
    const value = "3.2";
    expect(toNumber(value)).toBe(3.2);
  });

  test("should return NaN when a symbol was given", () => {
    expect(toNumber(Symbol())).toBeNaN();
  });

  test("should return 0 when a empty object was given", () => {
    expect(toNumber(new Object())).toBeNaN();
  });

  test("should return 0 when a empty object was given", () => {
    Object.prototype.valueOf = function () {
      return this.number;
    };
    const obj = new Object();
    obj.number = 0;
    expect(toNumber(obj)).toBe(0);
  });
});
