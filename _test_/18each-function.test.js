// salah satu kesalah membuat unit test adalah melakukan duplicate
// biasanya alasan melakukan duplicate unit test, hanya karena data yang di test nya saja berbeda
// jika kasusnya begitu idealnya menggunakan each function

import { sumAll } from "../src/sum";

const table = [
  [[10], 10],
  [[10, 10, 10], 30],
  [[10, 10, 10, 10, 10], 50],
];

test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});
