// machers
// machers .toBe() -> mengecek kesamaan dengan string, integer
// machers .toEqual() -> mengecek kesamaan dengan object atau array

test("test toBe", () => {
  let umur = 30;
  const ultah = () => {
    return (umur += 1);
  };
  ultah();
  expect(umur).toBe(31);
});

test("test toEqual", () => {
  let person = { id: 1 };
  person.name = "Yosep";
  person.umur = 25;

  expect(person).toEqual({
    id: 1,
    name: "Yosep",
    umur: 25,
  });
});
