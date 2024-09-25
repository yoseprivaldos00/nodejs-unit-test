import { calculate, calculateAndReturn } from "../src/sum";

test("test calculate", () => {
  const callback = jest.fn();
  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10, 10], callback);

  expect(callback.mock.calls.length).toBe(2);
  console.log(callback.mock.calls);

  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(60);
});

test("test calculate and return", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(80);
  callback.mockReturnValueOnce(160);

  expect(calculateAndReturn([10, 10], callback)).toBe(80);
  expect(calculateAndReturn([10, 10, 10, 10], callback)).toBe(160);

  expect(callback.mock.results[0].value).toBe(80);
  expect(callback.mock.results[1].value).toBe(160);
});

test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  });

  expect(calculateAndReturn([10, 10, 10, 10], callback)).toBe(80);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);

  expect(callback.mock.results[0].value).toBe(80);
  expect(callback.mock.results[1].value).toBe(100);
});
