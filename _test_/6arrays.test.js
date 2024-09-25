// Array Matchers
// toEqual -> hanya untuk mengecek arraynya sama

// .toContain(item) -> memastikan value array memiliki item, dimana pengecekan item menggunakan toBe
// .toContainEqual(item) -> memastikan value array memiliki item, dimana pengecekan item menggunakan toEqual

test("array", () => {
  let arr = ["Yosep", "Rivaldo", "Silaban"];
  expect(arr).toContain("Rivaldo");

  let arrObj = [
    { name: "Yosep", umur: 25 },
    { name: "Silaban", umur: 25 },
  ];
  expect(arrObj).toContainEqual({ name: "Yosep", umur: 25 });
});
