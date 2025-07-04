import { getMaxValue } from ".";

describe("Challenge 7", () => {
  test("Should return value 320", () => {
    const result = getMaxValue(
      [
        { kg: 5, price: 100 },
        { kg: 7, price: 150 },
        { kg: 3, price: 70 },
      ],
      36
    );

    expect(result).toBe(320);
  });

  test("Should return value 72", () => {
    const result = getMaxValue(
      [
        { kg: 3, price: 50 },
        { kg: 7, price: 150 },
        { kg: 5, price: 120 },
      ],
      3
    );

    expect(result).toBe(72);
  });

  test("Should return value 460", () => {
    const result = getMaxValue(
      [
        { kg: 1, price: 10 },
        { kg: 10, price: 350 },
        { kg: 2, price: 100 },
      ],
      22
    );

    expect(result).toBe(460);
  });

  test("Should return value 250", () => {
    const result = getMaxValue(
      [
        { kg: 1, price: 10 },
        { kg: 10, price: 150 },
        { kg: 2, price: 100 },
        { kg: 7, price: 75 },
        { kg: 5, price: 20 },
      ],
      12
    );

    expect(result).toBe(250);
  });

  test("Should return value 1150", () => {
    const result = getMaxValue(
      [
        { kg: 10, price: 150 },
        { kg: 20, price: 1000 },
      ],
      70
    );

    expect(result).toBe(1150);
  });
});
