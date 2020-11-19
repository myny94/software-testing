import defaultTo from "../../src/defaultTo.js";

describe("Test defaultTo function", () => {
  let value;
  const defaultValue = 10;
  test("Undefined input returns the default value", () => {
    expect(defaultTo(null, defaultValue)).toBe(defaultValue);
    expect(defaultTo(undefined, defaultValue)).toBe(defaultValue);
    expect(defaultTo(value, defaultValue)).toBe(defaultValue);
  });

  test("A valid input returns itself", () => {
    value = 42;
    expect(defaultTo(value, defaultValue)).toBe(value);
  });
});
