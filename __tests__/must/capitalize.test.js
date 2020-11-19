import capitalize from "../../src/capitalize.js";

describe("Test capitalize function", () => {
  test(`"example string" returns "Example string"`, () => {
    expect(capitalize("example string")).toBe("Example string");
  });

  test(`"EXAMPLE STRING" returns "Example string"`, () => {
    expect(capitalize("EXAMPLE STRING")).toBe("Example string");
  });

  test(`"eXamPle StrinG" returns "Example string"`, () => {
    expect(capitalize("eXamPle StrinG")).toBe("Example string");
  });

  test(`"example" and "eXample" are identical`, () => {
    expect(capitalize("example")).toEqual(capitalize("eXample"));
  });
});
