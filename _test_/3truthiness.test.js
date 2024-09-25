// Truthiness Matcherr Function
// toBeNull() -> memastikan valud adalah null
// toBeUndefined() -> memastikan value ada adalah undefined
// toBeDefined() -> kebalikan dari toBeUndefiend()
// toBeTruthy() -> memastikan value bernilai apapun, asal if statement mengganggap true
// toBeFalsy() -> memastikan value bernilai apapun, asal if staetment mengganggap false

test("truthiness", () => {
  let value = null;
  expect(value).toBeNull();
  expect(value).toBeDefined();
  expect(value).toBeFalsy();

  value = undefined;
  expect(value).toBeUndefined();
  expect(value).toBeFalsy();

  value = "Yosep";
  expect(value).toBeTruthy();
});
