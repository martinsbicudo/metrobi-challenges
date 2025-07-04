import { createGetEggBroke, checkSafeFloorWithEggs } from ".";

describe("Challenge 5", () => {
  test("Should return floor 55", () => {
    const criticalFloor = 56;
    const result = checkSafeFloorWithEggs(createGetEggBroke(criticalFloor));
    expect(result).toBe(criticalFloor - 1);
  });

  test("Should return floor 3", () => {
    const criticalFloor = 4;
    const result = checkSafeFloorWithEggs(createGetEggBroke(criticalFloor));
    expect(result).toBe(criticalFloor - 1);
  });

  test("Should return floor 99", () => {
    const criticalFloor = 100;
    const result = checkSafeFloorWithEggs(createGetEggBroke(criticalFloor));
    expect(result).toBe(criticalFloor - 1);
  });

  test("Should return floor 32", () => {
    const criticalFloor = 33;
    const result = checkSafeFloorWithEggs(createGetEggBroke(criticalFloor));
    expect(result).toBe(criticalFloor - 1);
  });

  test("Should return floor 78", () => {
    const criticalFloor = 79;
    const result = checkSafeFloorWithEggs(createGetEggBroke(criticalFloor));
    expect(result).toBe(criticalFloor - 1);
  });

  test("Should return floor 36", () => {
    const criticalFloor = 37;
    const result = checkSafeFloorWithEggs(createGetEggBroke(criticalFloor));
    expect(result).toBe(criticalFloor - 1);
  });
});
