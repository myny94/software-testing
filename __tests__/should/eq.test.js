import eq from "../../src/eq.js";

describe("Eq operation test", () => {

  test("equal function on two different objects", () => {
    const object = { 'a': 1 }
    const other = { 'a': 2 , 'b': 4 }
    expect(eq(object, object)).toBe(true);
    expect(eq(object, other)).toBe(false);
    expect(eq(object, Object('a'))).toBe(false);
  });

  test("equal function on two different numbers", () => {
    expect(eq(2, 3)).toBe(false);
    expect(eq(2, 2)).toBe(true);
    expect(eq(+0, -0)).toBe(true);
    expect(eq(-0, +0)).toBe(true);
  });

  test("equal function on two different strings", () => {
    expect(eq('a','a')).toBe(true);
    expect(eq('a','b')).toBe(false);
  });
  
  test("equal function on value and object", () => {
    expect(eq('a', Object('a'))).toBe(false);
    expect(eq('a','b')).toBe(false);
  });

  test("equal function on NaN value", () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  test("equal function on booleans", () => {
    expect(eq(true, true)).toBe(true);
    expect(eq(false, false)).toBe(true);
    expect(eq(true, false)).toBe(false);
    expect(eq(false, true)).toBe(false);
  });

});