// teknik menjalankan test secara concurrent
// sejauh ini versi 29.7 masih experimental

import { sayHelloAsync } from "../src/async";

describe("harusnya totalnya 1 menitan", () => {
  test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("Yosep")).resolves.toBe("Hello Yosep");
  });
  test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("Rivaldo")).resolves.toBe("Hello Rivaldo");
  });
  test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("Silaban")).resolves.toBe("Hello Silaban");
  });
});
