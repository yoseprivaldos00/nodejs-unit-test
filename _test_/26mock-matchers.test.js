// fitur mathcer untuk mock
// expect(mock).toHaveBeenCalled() -> memastikan mock pernah dipanggil
// expect(mock).toHaveBeenCalledTimes(number) -> memastikan mock pernah dipanggil sebanyak number

import { getBalance } from "../src/async";
import { calculateAndReturn } from "../src/sum";

// expect(mock.toHaveBeenCaleldWith)(arg1, arg2, ....) -> memastikan mock pernah dipanggil dengan parameter
test("Mock Matcher", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(10);
  callback.mockReturnValueOnce(20);

  calculateAndReturn([10, 10, 10], callback);
  calculateAndReturn([10, 10, 10, 10, 10], callback);

  expect(callback).toHaveBeenCalledTimes(2);
  expect(callback).toHaveBeenCalledWith(30);

  callback.mockImplementation((total) => {
    return total * 2;
  });

  calculateAndReturn([10, 10, 10, 10, 10], callback);

  expect(calculateAndReturn([10, 10, 10, 10], callback)).toBe(80);
  expect(callback).toHaveBeenCalledTimes(4);
  expect(callback).toHaveBeenCalledWith(40);
});
