// salah satu kesalah membuat unit test adalah melakukan duplicate
// biasanya alasan melakukan duplicate unit test, hanya karena data yang di test nya saja berbeda
// jika kasusnya begitu idealnya menggunakan each function

import { sumAll } from "../src/sum";

const table = [
  { numbers: [], expected: 0 },
  { numbers: [10, 10, 10], expected: 30 },
  { numbers: [10, 10, 10, 10, 10], expected: 50 },
  { numbers: [10, 10, 10, 10, 10, 10, 10], expected: 70 },
];

test.each(table)(
  "test sumAll($numbers) should result $expected",
  ({ numbers, expected }) => {
    expect(sumAll(numbers)).toBe(expected);
  }
);
