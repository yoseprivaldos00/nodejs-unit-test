// cara meng-ignore unite test
// tidak harus di beri komentar

describe("test skip", () => {
  test("test 1 ", () => console.log("test 1"));
  test("test 2 ", () => console.log("test 2"));
  test.skip("test 3 ", () => console.log("test 3"));
  it("test 4 ", () => console.log("test 4"));
  test("test 5 ", () => console.log("test 5"));
});
