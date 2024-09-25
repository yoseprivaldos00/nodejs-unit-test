// String Matcher
// Selain dari .toBe()
// .toMatch(regex) -> memastikan value string sesua dengan regex

test("strings", () => {
  let value = "Yosep Rivaldo Silaban";

  expect(value).toBe("Yosep Rivaldo Silaban");
  expect(value).toMatch(/valdo/);
});
