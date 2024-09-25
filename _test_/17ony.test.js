// jika dalam satu file sudah banyak dibuat test
// jika ingin menguji satu test saja tanpa melakukan penghapusan atau komentar atau skip
// maka digunakan .only() function
// bisa lebih dari satu function

describe("Only Function Testing", () => {
  test("test 1 ", () => console.log("test 1"));
  test("test 2 ", () => console.log("test 2"));
  test("test 3 ", () => console.log("test 3"));
  test("test 4 ", () => console.log("test 4"));
  test("test 5 ", () => console.log("test 5"));

  // test yang hanya ingin di running
  test.only("test only", () => console.log("this is test only"));
  it.only("it only", () => console.log("this is it only"));
});
