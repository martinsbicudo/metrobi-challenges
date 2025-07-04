export const createGetEggBroke = (criticalFloor: number) => (floor: number) =>
  floor >= criticalFloor;

export const checkSafeFloorWithEggs = (
  getEggBroke: (floor: number) => boolean
) => {
  let increaseFloor = 14;
  let currentFloor = increaseFloor;

  while (!getEggBroke(currentFloor)) {
    increaseFloor--;
    currentFloor += increaseFloor || 1;
  }

  for (let i = currentFloor - increaseFloor; i < currentFloor; i++) {
    if (getEggBroke(i)) return i - 1;
  }
};
