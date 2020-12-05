import defaultTo from "../../src/defaultTo.js";

describe("Test defaultTo function", () => {
  let value;
  let array;
  let object;
  const defaultValue = 10;
  const defaultValueStr = 'default';
  const defaultArray = [1,2];
  const defaultObject = Object('a');

  test("Undefined input returns the default value (for number)", () => {
    expect(defaultTo(null, defaultValue)).toBe(defaultValue);
    expect(defaultTo(undefined, defaultValue)).toBe(defaultValue);
    expect(defaultTo(value, defaultValue)).toBe(defaultValue);
  });

  test("Undefined input returns the default value (for string)", () => {
    expect(defaultTo(null, defaultValueStr)).toBe(defaultValueStr);
    expect(defaultTo(undefined, defaultValueStr)).toBe(defaultValueStr);
    expect(defaultTo(value, defaultValueStr)).toBe(defaultValueStr);
  });

  test("Undefined input returns the default array or object", () => {
    expect(defaultTo(null, defaultArray)).toBe(defaultArray);
    expect(defaultTo(undefined, defaultArray)).toBe(defaultArray);
    expect(defaultTo(null, defaultObject)).toBe(defaultObject);
    expect(defaultTo(undefined, defaultObject)).toBe(defaultObject);
  });

  test("A valid input returns itself", () => {
    value = 42;
    array = [1,2];
    object = Object('a');

    // on value
    expect(defaultTo(value, defaultValue)).toBe(value);
    expect(defaultTo(value, defaultValueStr)).toBe(value);
    expect(defaultTo(value, defaultArray)).toBe(value);
    expect(defaultTo(value, defaultObject)).toBe(value);

    // on array
    expect(defaultTo(array, defaultValue)).toBe(array);
    expect(defaultTo(array, defaultValueStr)).toBe(array);
    expect(defaultTo(array, defaultArray)).toBe(array);
    expect(defaultTo(array, defaultObject)).toBe(array);

    // on object
    expect(defaultTo(object, defaultValue)).toBe(object);
    expect(defaultTo(object, defaultValueStr)).toBe(object);
    expect(defaultTo(object, defaultArray)).toBe(object);
    expect(defaultTo(object, defaultObject)).toBe(object);

  });
});
