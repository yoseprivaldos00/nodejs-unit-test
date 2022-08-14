//urutan jika dijalankan
// before All outer > before each outer > test outer > after each outer > 
// before each outer > before each inner > test inner > after each inner > after each outer > after all outer

beforeAll(() => console.log("Before All Outer"));
afterAll(()=> console.log("After All outer"));

beforeEach(() => console.log("before each outer"));
afterEach(() => console.log("after each outer"))

test("Test Outer", () => console.log("Test Outer"))

describe("Inner", () => {
   beforeEach(() => console.info("Before each inner"))
   afterEach(()=> console.info("after each inner"))

   test("Test Inner", () => console.log("Test Inner"))
})