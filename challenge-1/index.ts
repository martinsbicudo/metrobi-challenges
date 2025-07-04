export const getDuplicateItems = (arr: unknown[]) => {
  const countMap = new Map();
  const referenceMap = new Map();

  for (const item of arr) {
    const key = `${typeof item}:${JSON.stringify(item)}`;

    const count = countMap.get(key) || 0;
    countMap.set(key, count + 1);

    if (!referenceMap.has(key)) {
      referenceMap.set(key, item);
    }
  }

  const duplicated = [...countMap.entries()]
    .filter(([, count]) => count >= 2)
    .map(([key]) => referenceMap.get(key));

  return duplicated;
};
