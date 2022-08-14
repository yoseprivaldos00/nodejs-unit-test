import {sum} from "../src/sum.js";

beforeAll(() => {
   console.info("Before All")
})

test("first test", ()=> {
   expect(sum(10,2)).toBe(12)
   console.info("First test")
})

test("second test", () => {
   expect(sum(20,20)).toBe(40)
   console.info("Second test")
})

afterAll(() => {
   console.info("After All")
})