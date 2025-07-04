import { getBracketsCloseCorrectly } from ".";

describe("Challenge 4", () => {
  test("Should return true [1]", () => {
    const result = getBracketsCloseCorrectly("[]");
    expect(result).toBeTruthy();
  });

  test("Should return true [2]", () => {
    const result = getBracketsCloseCorrectly("[{}]");
    expect(result).toBeTruthy();
  });

  test("Should return true [3]", () => {
    const result = getBracketsCloseCorrectly("(([{}]))");
    expect(result).toBeTruthy();
  });

  test("Should return true [4]", () => {
    const result = getBracketsCloseCorrectly("{[{((([{}])))}]}");
    expect(result).toBeTruthy();
  });

  test("Should return false [1]", () => {
    const result = getBracketsCloseCorrectly("{{}");
    expect(result).toBeFalsy();
  });

  test("Should return false [2]", () => {
    const result = getBracketsCloseCorrectly("{{}}]");
    expect(result).toBeFalsy();
  });

  test("Should return false [3]", () => {
    const result = getBracketsCloseCorrectly("({{}}]");
    expect(result).toBeFalsy();
  });

  test("Should return false [4]", () => {
    const result = getBracketsCloseCorrectly("a[{{}}]a");
    expect(result).toBeFalsy();
  });
});
