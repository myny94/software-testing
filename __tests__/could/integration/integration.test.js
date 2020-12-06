"use strict";
import "jest-chain";
import countBy from "../../../src/countBy";
import map from "../../../src/map";
import words from "../../../src/words";
import { dummyProducts } from "../../../testdata";

const search = (keywords) => {
  keywords = words(keywords);
  return dummyProducts.filter((product) =>
    map(keywords, (keyword) =>
      new RegExp(keyword, "i").test(product.name)
    ).includes(true)
  );
};

const getProductNumByProducer = (producer) => {
  return countBy(dummyProducts, (value) => value.producer)[producer];
};

describe("Integration testing of should test cases", () => {
  describe("A user can search product with multiple keywords", () => {
    test("should return products whose name contains 'cucumber' or 'banana'", () => {
      expect(search("cucumber, banana"))
        .toHaveLength(4)
        .toEqual(
          expect.arrayContaining([
            expect.objectContaining(
              { name: "cucumber suomi" },
              { name: "cucumber luomu" },
              { name: "kaupan banana" },
              { name: "chiqulta banana" }
            ),
          ])
        );
    });

    test("should return products whose name contains 'suomi' or 'ea'", () => {
      expect(search("suomi, ea"))
        .toHaveLength(3)
        .toEqual(
          expect.arrayContaining([
            expect.objectContaining(
              { name: "cucumber suomi" },
              { name: "meatball" },
              { name: "white bread" }
            ),
          ])
        );
    });
  });

  describe("A producer can get how many products have added by him/her", () => {
    test("should return 1 as total number that 'LU' has added", () => {
      expect(getProductNumByProducer("LU")).toBe(1);
    });

    test("should return 4 as total number that 'Unknown' producer has added", () => {
      expect(getProductNumByProducer("Unknown")).toBe(4);
    });
  });
});
