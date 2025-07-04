import { showAsyncConsole } from ".";

jest.useFakeTimers();

describe("Challenge 2", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  afterEach(() => {
    logSpy.mockReset();
  });

  test("Should run console.log with corrent value,time [1]", async () => {
    const promise = showAsyncConsole([1, 2, 3, 0]);

    jest.advanceTimersByTime(8000);

    await promise;

    expect(logSpy).toHaveBeenNthCalledWith(1, 1, 1000);
    expect(logSpy).toHaveBeenNthCalledWith(2, 2, 2000);
    expect(logSpy).toHaveBeenNthCalledWith(3, 3, 4000);
    expect(logSpy).toHaveBeenNthCalledWith(4, 0, 8000);
  }, 9999999);

  test("Should run console.log with corrent value,time [2]", async () => {
    const promise = showAsyncConsole([7, "5", "victor"]);

    jest.advanceTimersByTime(4000);

    await promise;

    expect(logSpy).toHaveBeenNthCalledWith(1, 7, 1000);
    expect(logSpy).toHaveBeenNthCalledWith(2, "5", 2000);
    expect(logSpy).toHaveBeenNthCalledWith(3, "victor", 4000);
  }, 9999999);

  test("Should run console.log with corrent value,time [3]", async () => {
    const promise = showAsyncConsole([[], { 1: 2 }, "3"]);

    jest.advanceTimersByTime(4000);

    await promise;

    expect(logSpy).toHaveBeenNthCalledWith(1, [], 1000);
    expect(logSpy).toHaveBeenNthCalledWith(2, { 1: 2 }, 2000);
    expect(logSpy).toHaveBeenNthCalledWith(3, "3", 4000);
  }, 9999999);

  test("Should run console.log with corrent value,time [4]", async () => {
    const promise = showAsyncConsole([100, "2", [], "0", 999]);

    jest.advanceTimersByTime(16000);

    await promise;

    expect(logSpy).toHaveBeenNthCalledWith(1, 100, 1000);
    expect(logSpy).toHaveBeenNthCalledWith(2, "2", 2000);
    expect(logSpy).toHaveBeenNthCalledWith(3, [], 4000);
    expect(logSpy).toHaveBeenNthCalledWith(4, "0", 8000);
    expect(logSpy).toHaveBeenNthCalledWith(5, 999, 16000);
  }, 9999999);
});
