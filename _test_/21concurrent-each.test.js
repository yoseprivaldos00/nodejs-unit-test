// teknik menjalankan test secara concurrent
// sejauh ini versi 29.7 masih experimental
// kasus berikut menggunakan conccurent + each

import { sayHelloAsync } from "../src/async";

const names = [
  { name: "Yosep", expected: "Hello Yosep" },
  { name: "Rivaldo", expected: "Hello Rivaldo" },
  { name: "Silaban", expected: "Hello Silaban" },
];

it.concurrent.each(names)(
  "test sayHello($name) result must be $expected",
  async ({ name, expected }) => {
    await expect(sayHelloAsync(name)).resolves.toBe(expected);
  }
);
