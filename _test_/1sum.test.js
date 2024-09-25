import { sum, subs, times, devide, sumAll } from "../src/sum";

test("sum", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test("subs", () => {
  const result = subs(5, 1);

  expect(result).toBe(4);
});

test("times", () => {
  const result = times(5, 6);

  expect(result).toBe(30);
});

test("devide", () => {
  const result = devide(10, 2);

  expect(result).toBe(5);
});

test("sumAll", () => {
  const result = sumAll([1, 2, 3, 4]);
  expect(result).toBe(10);
});
