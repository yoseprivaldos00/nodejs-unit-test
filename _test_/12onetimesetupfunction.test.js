// berbeda dengan beforeEach dan afterEach, yang dieksekusi sejumlah test
// beforeAll() dan afterAll(), diakses sekali saja

// penjelasan
// beforeAll akan dijalankan sekali sebelum seluruh test dijalankan
// afterALl akan dijalankan sekali setelah seluruh test dijalankan

// urutan
// beforeAll -> test 1 -> test 2 -> test n -> afterAll

import { sum } from "../src/sum";
beforeAll(() => {
  console.log("Before ALL");
});

afterAll(() => {
  console.log("After all");
});

test("first testing", () => {
  const value = sum(10, 10);
  expect(value).toBeGreaterThan(7);
});

test("second testing ", () => {
  const value = sum(12, 1);
  expect(value).not.toBeFalsy();
});
