export const showAsyncConsole = async (arr: unknown[]) => {
  let initialCounter = 0.5;

  const promises = arr.map((item) => {
    initialCounter = initialCounter * 2;

    return new Promise((resolve) => {
      const time = initialCounter * 1000;

      setTimeout(() => {
        console.log(item, time);
        resolve(undefined);
      }, time);
    });
  });

  return await Promise.all(promises);
};
