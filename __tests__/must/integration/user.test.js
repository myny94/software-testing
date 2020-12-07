"use strict";
import "jest-chain";
import add from "../../../src/add";
import capitalize from "../../../src/capitalize";
import ceil from "../../../src/ceil";
import filter from "../../../src/filter";
import map from "../../../src/map";
import reduce from "../../../src/reduce";
import { dummyProducts } from "../../../testdata";

const searchByName = (keyword) => {
  const searched = filter(dummyProducts, (product) =>
    new RegExp(keyword, "i").test(product.name)
  );
  return capitalizeAllFields([...searched]);
};

const searchByProducer = (keyword) => {
  const searched = filter(
    dummyProducts,
    (product) => capitalize(keyword) === capitalize(product.producer)
  );
  return capitalizeAllFields([...searched]);
};

const searchByCategory = (keyword) => {
  const searched = filter(
    dummyProducts,
    (product) => capitalize(keyword) === capitalize(product.category)
  );
  return capitalizeAllFields([...searched]);
};

const searchByPrice = (lower, upper) => {
  const searched = filter(dummyProducts, (product) => {
    if (lower > upper) [lower, upper] = [upper, lower];
    if (product.price >= lower && product.price <= upper) return true;
  });
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

const cart = { totalPrice: 0, products: [] };
const addProductToCart = (product) => {
  if (!product || !product.price) return;
  cart.products.push(product);
  cart.totalPrice = reduce(
    cart.products,
    (total, prod) => add(total, prod.price),
    0
  );
  cart.totalPrice = ceil(cart.totalPrice, 2);
};

describe("Integration testing of must features for users", () => {
  describe("Users can search products by name, category, price and producer, and the store frontend application displays products by making them look similar", () => {
    test("should return products whose name contains 'cucumber'", () => {
      expect(searchByName("cucumber"))
        .toHaveLength(2)
        .toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: "Cucumber suomi",
            }),
          ])
        )
        .toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: "Cucumber luomu",
            }),
          ])
        );
    });
    test("should return products whose producer is 'LU'", () => {
      expect(searchByProducer("lu"))
        .toHaveLength(1)
        .toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: "Tuc",
            }),
          ])
        );
    });
    test("should return products whose category is 'Snack'", () => {
      expect(searchByCategory("snack"))
        .toHaveLength(3)
        .toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: "Tuc",
            }),
            expect.objectContaining({
              name: "Fries",
            }),
            expect.objectContaining({
              name: "Brezel",
            }),
          ])
        );
    });

    test("should return products whose price is between 1 and 2 euros", () => {
      expect(searchByPrice(1, 2)).toHaveLength(7);
      expect(searchByPrice(2, 1)).toHaveLength(7);
    });
  });

  describe("Users can add products to a shopping cart and it automatically updates and shows total price", () => {
    test("should return 2.49 as total price after adding a meatball", () => {
      const meatball = dummyProducts.find(
        (product) => product.name === "meatball"
      );
      addProductToCart(meatball);
      expect(cart.totalPrice).not.toBeNaN().toBe(2.49);
    });

    test("should return 4.98 as total price after adding another meatball", () => {
      const meatball = dummyProducts.find(
        (product) => product.name === "meatball"
      );
      addProductToCart(meatball);
      expect(cart.totalPrice).not.toBeNaN().toBe(4.98);
    });

    test("should return 5.98 as total price after adding a brezel", () => {
      const brezel = dummyProducts.find((product) => product.name === "brezel");
      addProductToCart(brezel);
      expect(cart.totalPrice).not.toBeNaN().toBe(5.98);
    });
  });
});
