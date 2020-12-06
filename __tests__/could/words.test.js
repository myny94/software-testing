"use strict";
import "jest-chain";
import words from "../../src/words";

describe("unit testing of words function", () => {
  test("should divide string to words by comma", () => {
    expect(words("fred, barney, & pebbles")).toStrictEqual([
      "fred",
      "barney",
      "pebbles",
    ]);
  });

  test("should divide string to words by hyphen", () => {
    expect(words("fred-barney-pebbles")).toStrictEqual([
      "fred",
      "barney",
      "pebbles",
    ]);
  });

  test("should divide string to words by regular expression", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).toStrictEqual([
      "fred",
      "barney",
      "&",
      "pebbles",
    ]);
  });
  
  test("should ignore special characters by default", () => {
    expect(words("fred, barney, & pebbles")).not.toContain("&");
  });
});
