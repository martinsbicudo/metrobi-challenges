interface CarrotTypeInterface {
  kg: number;
  price: number;
}

export const getMaxValue = (
  carrotTypes: CarrotTypeInterface[],
  capacity: number
) => {
  let result = 0;
  let currentCapacity = capacity;

  carrotTypes.sort((a, b) => b.price / b.kg - a.price / a.kg);

  for (let carrot of carrotTypes) {
    if (currentCapacity === 0) break;

    const kg = Math.min(currentCapacity, carrot.kg);
    const valuePerKg = carrot.price / carrot.kg;

    result += kg * valuePerKg;
    currentCapacity -= kg;
  }

  return result;
};
