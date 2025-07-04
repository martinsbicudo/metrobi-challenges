import { getDuplicateItems } from ".";

describe("Challenge 1", () => {
  test("Should return [0]", () => {
    const result = getDuplicateItems([1, 2, 3, 0, 88, 5, 6, 0]);
    expect(result).toEqual([0]);
  });

  test("Should return [{ 0: 'a' }, 2]", () => {
    const result = getDuplicateItems([
      "a",
      2,
      999,
      {},
      { 0: "a" },
      2,
      "test",
      { 0: "a" },
    ]);
    expect(result).toEqual([2, { 0: "a" }]);
  });

  test("Should return [99, 55]", () => {
    const result = getDuplicateItems(["victor", "test", 99, 55, 99, 55]);
    expect(result).toEqual([99, 55]);
  });

  test("Should return [[]]", () => {
    const result = getDuplicateItems([[], "test", 99, 66, 999, 77, []]);
    expect(result).toEqual([[]]);
  });
});
