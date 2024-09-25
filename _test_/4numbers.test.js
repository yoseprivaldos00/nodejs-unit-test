// matcher number
// selain toBe() dan toEqual

// toBeGreaterThan(n) -> value lebih besar dari n
// toBeGreaterThanOrEqual(n) - value lebih besar atau sama dengan n
// toBeLessThan(n) -> value lebih kecil dari n
// toBeLessThanOrEqual -> value lebih kecil atau sama dengan n

test("numbers", () => {
  let value = 10;

  expect(value).toBeGreaterThan(5);
  expect(value).toBeGreaterThanOrEqual(10);

  value = 5;
  expect(value).toBeLessThan(10);
  expect(value).toBeLessThanOrEqual(5);

  expect(value).toEqual(5); // meskipun lebih cocok toBe
  expect(value).toBe(5);
});
