// terdapat 2 fungsi ekspektasi untuk async
// expect(promise).resolves -> ekspektasi bahwa promise sukses
// expect(promise).reject  -> ekspektasi bahwa promise gagal

import { sayHelloAsync } from "../src/async";

test("async matcher", async () => {
  await expect(sayHelloAsync("Yosep")).resolves.toBe("Hello Yosep");
  await expect(sayHelloAsync()).rejects.toThrow("Name is empty");
});
