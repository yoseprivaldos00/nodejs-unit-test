//jest juga mendukung nested scooping
// describe () di dalam describe ()

beforeEach(() => console.log("Before Each 1"));
afterEach(() => console.log("After Each 1"));

describe("inner scope", () => {
  beforeEach(() => console.log("inner before each 1"));
  afterEach(() => console.log("inner after each 1"));
  describe("inner inner scope", () => {
    beforeEach(() => console.log("inner inner before each 1"));
    afterEach(() => console.log("inner inner after each 1"));
    test("test1", () => console.log("Test1"));
    test("test2", () => console.log("Test2"));
  });
});
