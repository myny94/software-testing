"use strict";

import defaultTo from "../../../src/defaultTo";
import isEmpty from "../../../src/isEmpty";
import toNumber from "../../../src/toNumber";
import "jest-chain";

const addProduct = ({ name, category, price, producer }) => {
  const errors = [];
  if (isEmpty(name))
    errors.push({ field: "name", message: `'Name' must not be empty` });
  if (isEmpty(price))
    errors.push({ field: "price", message: `'Price' must not be empty` });
  if (errors.length > 0) return Promise.reject(errors);
  const newProduct = {};
  newProduct.name = toNumber(name);
  newProduct.category = defaultTo(category, "Other");
  newProduct.price = price;
  newProduct.producer = defaultTo(producer, "Unknown");
  return Promise.resolve(newProduct);
};

describe("Integration testing for food producers", () => {
  describe("A food producer should provide the name and the price of a product to be added", () => {
    const productToBeAdded = {};
    test("should throw error and fail to add the product with an empty name field", () => {
      productToBeAdded.price = "0.0";
      expect.assertions(2);
      return addProduct(productToBeAdded).catch((errors) =>
        expect(errors)
          .toHaveLength(1)
          .toEqual(
            expect.arrayContaining([expect.objectContaining({ field: "name" })])
          )
      );
    });

    test("should throw error and fail to add the product with an empty price field", () => {
      delete productToBeAdded.price;
      productToBeAdded.name = "snack";
      expect.assertions(2);
      return addProduct(productToBeAdded).catch((errors) =>
        expect(errors)
          .toHaveLength(1)
          .toEqual(
            expect.arrayContaining([
              expect.objectContaining({ field: "price" }),
            ])
          )
      );
    });
  });

  describe("A food producer can leave some fields empty when adding a product, and they will be replaced to a default value", () => {
    const productToBeAdded = { name: "snack", price: "1.95" };
    test("should replace an empty category field to 'Other'", () => {
      expect(productToBeAdded).not.toHaveProperty("category");
      return addProduct(productToBeAdded).then((product) => {
        expect(product).toHaveProperty("category");
        expect(product.category).toEqual("Other");
      });
    });

    test("should replace an empty producer field to 'Unknown'", () => {
      expect(productToBeAdded).not.toHaveProperty("producer");
      return addProduct(productToBeAdded).then((product) => {
        expect(product).toHaveProperty("producer");
        expect(product.producer).toEqual("Unknown");
      });
    });
  });
});
