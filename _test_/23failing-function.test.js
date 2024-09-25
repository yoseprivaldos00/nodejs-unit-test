// jangan hanya membuat skenario sukses
// failing function -> membuat skenario gagal atau ekspektasi gagal
// selain mengguna error matcher, cara ini lebih disarankan
// test.failing(name, fn, timeout)

import { sayHello } from "../src/sayHello";

test("sayHello success", () => {
  expect(sayHello("Yosep")).toBe("Hello Yosep");
});

// cara pertama
test.failing("sayHello error 1 (failing)", () => {
  sayHello(null);
});

// cara kedua
test("sayHello error 2 (mathcer)", () => {
  expect(() => sayHello(null)).toThrow();
});
