// Set Up Function secara default dieksekusi setiap test() dalam file unit test
// terdapat fitur scooping atau grouping, dimana hanya test tertentu yang dilakukan set up function
// describe()

import { devide, sum } from "../src/sum";

describe("scooping 2", () => {
  beforeEach(() => {
    console.log("before each diluar scooping 2");
  });

  afterEach(() => {
    console.log("after each diluar scooping 2");
  });

  test("test untuk scooping 2", () => {
    const value = devide(10, 5);
    expect(value).toBe(2);
  });
});

describe("scooping 1", () => {
  beforeAll(() => {
    console.log("before all");
  });

  afterAll(() => {
    console.log("after all");
  });

  test("test 1 untuk scooping 1", () => {
    const value = sum(3, 3);
    expect(value).toBe(6);
  });

  test("test 2 untuk scooping 2", () => {
    const value = devide(10, 5);
    expect(value).toBe(2);
  });
});
