// kode yang perlu dibuat sebelum atau sesudah unit test berjalan
// beforeEach(function) --> dieksekusi sebelum unit test berjalan
// afterEach(function) --> dieksekusi setelah unit test berjalan

import { sum } from "../src/sum";
// penjelasan
// karena unit test dibawah ada 2
// beforeEach dan afterEach akan dipanggil 2 kali juga

beforeEach(() => {
  console.log("before test");
});

afterEach(() => {
  console.log("after test");
});

test("test 1", () => {
  const value = sum(1, 2);
  expect(value).toBe(3);
});
test("test 2", () => {
  const value = sum(3, 3);
  expect(value).toBe(6);
});
