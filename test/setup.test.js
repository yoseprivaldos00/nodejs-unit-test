import {sum} from "../src/sum.js"

beforeEach(() => {
   console.info("Before Each");
});

test("first test", ()=> {
   expect(sum(10,2)).toBe(12)
   console.info("First test")
})

test("second test", () => {
   expect(sum(20,20)).toBe(40)
   console.info("Second test")
})

afterEach(() => {
   console.info("After Each")
})