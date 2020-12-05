import castArray from "../../src/castArray.js";
import compact from "../../src/castArray.js";

describe("castArray operation on Array", () => {
  test("castArray function on value", () => {
    expect(castArray(1)).toStrictEqual([1]);
    expect(castArray('abc')).toStrictEqual(['abc']);
  });

  test("castArray function on undefined or null", () => {
    expect(castArray(undefined)).toStrictEqual([undefined]);
    expect(castArray(null)).toStrictEqual([null]);
  });

  test("castArray function on empty array", () => {
    expect(castArray([])).toStrictEqual([]);
  });

  test("castArray function on object", () => {
    expect(castArray({'a': 1})).toStrictEqual([{'a': 1}]);
    expect(castArray({'a': 1, 'b':2, 'c':3 })).toStrictEqual([{'a': 1, 'b':2, 'c':3 }]);
  });

  test("castArray on array does not change anything", () => {
    const array = [1, 2, 3]
    const arrayWithObjects = [{'a': 1, 'b':2, 'c':3 }]
    expect(castArray(array)).toStrictEqual(array);
    expect(castArray(arrayWithObjects)).toStrictEqual(arrayWithObjects);
  });
});
