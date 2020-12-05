import at from "../../src/at.js";

describe("At operation on object", () => {

  test("paths of example object", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3, 4]);
    expect(at(object, 'a[0]')).toStrictEqual([{ 'b': { 'c': 3 } }]);
    expect(at(object, 'a[1]')).toStrictEqual([4]);
    expect(at(object, 'a[0].b')).toStrictEqual([{ 'c': 3 }]);
  });

  test("at operation on simple object", () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    expect(at(object, 'a')).toStrictEqual([1]);
    expect(at(object,['a','b','c'])).toStrictEqual([1,2,3]);
  });

  test("at operation on array", () => {
    const list = [1,2,3]
    expect(at(list, 0)).toStrictEqual([1]);
    expect(at(list, 1)).toStrictEqual([2]);
  });
});
