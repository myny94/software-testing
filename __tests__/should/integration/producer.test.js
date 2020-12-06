"use strict";

import "jest-chain";
import at from "../../../src/at";
import capitalize from "../../../src/capitalize";
import defaultTo from "../../../src/defaultTo";
import eq from "../../../src/eq";
import filter from "../../../src/filter";
import map from "../../../src/map";
import { dummyProducts } from "../../testdata";

const searchByProducer = (keyword) => {
  keyword = defaultTo(keyword, "Unknown");
  const searched = filter(dummyProducts, (product) =>
    eq(capitalize(keyword), capitalize(product.producer))
  );
  return capitalizeAllFields([...searched]);
};

const capitalizeAllFields = (products) => {
  const capitalizedArr = [];
  map(products, (item) => {
    const capitalizedObj = { ...item };
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const element = item[key];
        capitalizedObj[key] = capitalize(element);
      }
    }
    capitalizedArr.push(capitalizedObj);
  });
  return capitalizedArr;
};

describe("Integration testing of should features for food producers", () => {
  describe("A producer can select one or more products from the list", () => {
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

  describe("A producer can map all selected products from the list", () => {
    test("should return the selected items after capitalizing fields of each item", () => {
      const selected = at(dummyProducts, 0, 2, 4);
      expect(capitalizeAllFields([...selected]))
        .toHaveLength(3)
        .toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: "Tuc" }),
            expect.objectContaining({ name: "Brezel" }),
            expect.objectContaining({ name: "Chiqulta banana" }),
          ])
        );
    });
  });

  describe("A producer can filter products by the producer name", () => {
    test("should return products by 'LU'", () => {
      expect(searchByProducer("lu"))
        .toHaveLength(1)
        .toEqual(
          expect.arrayContaining([expect.objectContaining({ name: "Tuc" })])
        );
    });

    test("should return products whose producer is 'Unknown' if any keyword was given", () => {
      expect(searchByProducer()).toHaveLength(4);
    });
  });
});
