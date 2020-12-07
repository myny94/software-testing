import countBy from "../../src/countBy.js";

describe("countBy operation test", () => {
  test("countBy function on object users (example case)", () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
    expect(countBy(users, value => value.active)).toStrictEqual({ 'true': 2, 'false': 1 });
    expect(countBy(users, value => value.user)).toStrictEqual({ 'barney': 1, 'betty': 1, 'fred': 1});
  });

  test("countBy function on empty array", () => {
    const empty = []
    expect(countBy(empty, value => value)).toStrictEqual({});
  });

  test("countBy function on customized object", () => {
    const users = [
      { 'user': 'john', 'profession': 'nurse', 'age': 45 },
      { 'user': 'joe', 'profession': 'doctor', age: 39 },
      { 'user': 'diana', 'profession': 'nurse', age: 27 },
      { 'user': 'jane', 'profession': 'programmer', age: 31}
    ]
    expect(countBy(users, value => value.profession)).toStrictEqual({ 'nurse': 2, 'doctor': 1, 'programmer':1 });
    expect(countBy(users, value => value.age)).toStrictEqual({ 27: 1, 39: 1, 45: 1, 31: 1});
  });

});