//exception matcher
// .toThrow() -> memastikan terjadi exception apapun
// .toThrow(exception) -> memastikan terjadi exception sesuai denagn expected exception
// .toThrow(message) -> Memastikan terjadi exception seusai dengan string message

import { callMe, MyException } from "../src/exception";

test("exception", () => {
  expect(() => callMe("Yosep")).toThrow();
  expect(() => callMe("Yosep")).toThrow(MyException);
  expect(() => callMe("Yosep")).toThrow("Ups my exception happens");
});

test("exception 2", () => {
  expect(callMe()).toBe("OK");
});
