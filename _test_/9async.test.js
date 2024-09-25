import { sayHelloAsync } from "../src/async";

describe("Harusnya totalnya 4 detik minimal", () => {
  test("async", async () => {
    const result = await sayHelloAsync("Yosep");
    expect(result).toBe("Hello Yosep");
  });

  test("async reject ", async () => {
    await expect(sayHelloAsync()).rejects.toThrow("Name is empty");
  });

  test("async with empty string", async () => {
    await expect(sayHelloAsync("")).rejects.toThrow("Name is empty");
  });

  test("async with null", async () => {
    await expect(sayHelloAsync(null)).rejects.toThrow("Name is empty");
  });
});
