"use strict";
import "jest-chain";
import at from "../../../src/at";
import capitalize from "../../../src/capitalize";
import countBy from "../../../src/countBy";
import map from "../../../src/map";
import { dummyProducts } from "../../../testdata";

describe("Integration testing of should features for users", () => {
  describe("A user can select one or more products from the list", () => {
    test("should return 'tuc' as the first item from the list", () => {
      expect(at(dummyProducts, 0))
        .toHaveLength(1)
        .toEqual(
          expect.arrayContaining([expect.objectContaining({ name: "tuc" })])
        );
    });

    test("should return 'tuc' and 'brezel' as the selected items from the list", () => {
      expect(at(dummyProducts, 0, 2))
        .toHaveLength(2)
        .toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: "tuc" }),
            expect.objectContaining({ name: "brezel" }),
          ])
        );
    });
  });

  describe("The application shows the total number of products by different criteria", () => {
    test("should return an empty object if nothing is selected", () => {
      expect(countBy([], (value) => value)).toStrictEqual({});
    });
    test("should return an object counted by category", () => {
      expect(countBy(dummyProducts, (value) => value.category)).toStrictEqual({
        Snack: 3,
        Fruits: 2,
        Vegetables: 2,
        Other: 2,
        Bread: 1,
      });
    });
    test("should return an object counted by producer", () => {
      expect(countBy(dummyProducts, (value) => value.producer)).toStrictEqual({
        LU: 1,
        Taffel: 1,
        Snackline: 1,
        Unknown: 4,
        saarioinen: 1,
        Kivikylan: 1,
        Graham: 1,
      });
    });
  });
});
