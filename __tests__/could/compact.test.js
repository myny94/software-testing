import compact from "../../src/compact.js";

describe("compact operation on array", () => {

  test("compact method on array with falsy value", () => {
    expect(compact([0,1, false, 2, '', 3])).toStrictEqual([1, 2, 3]);
    expect(compact([0, false, null, 1])).toStrictEqual([1]);
    expect(compact([0, false, '', null])).toStrictEqual([]);
    expect(compact([1, false, '',3, 5, 6])).toStrictEqual([1,3,5,6]);
  });

  test("compact method on array without falsy value", () => {
    expect(compact([1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
    expect(compact([1,'str1',2,'str2'])).toStrictEqual([1,'str1',2,'str2']);
  });

  test("compact method on empty array", () => {
    expect(compact([])).toStrictEqual([]);
  });
});
