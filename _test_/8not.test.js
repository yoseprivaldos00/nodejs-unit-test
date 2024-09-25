// not matcher
// untuk melakukan kebalikannya
// semua jenis matcher mendukung properti not

test("not", () => {
  let value = 10;

  //general matchers
  expect(value).not.toEqual(7);
  expect(value).not.toBe(6);

  //truthiness matchers
  expect(value).not.toBeFalsy();
  expect(value).not.toBeUndefined();
  expect(value).not.toBeNull();

  let value2 = null;
  let value3 = undefined;
  expect(value3).not.toBeDefined();
  expect(value2).not.toBeTruthy();

  //numbers matchers
  expect(value).not.toBeGreaterThan(11);
  expect(value).not.toBeGreaterThanOrEqual(14);
  expect(value).not.toBeLessThan(7);
  expect(value).not.toBeLessThanOrEqual(7);

  //string matchers
  let value4 = "Yosep R Silaban";
  expect(value4).not.toMatch(/bambang/);

  //array matchers
  let arr1 = [1, 2, 3, 4];
  let arr2 = [{ satu: 1, dua: 2, tiga: 3 }];

  expect(arr1).not.toContain(5);
  expect(arr2).not.toContainEqual({ empat: 5, enam: 6 });
});
