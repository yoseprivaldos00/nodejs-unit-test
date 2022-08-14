import { callMe, MyException } from "../src/exception";

test("exception test", ()=> {
   expect(() => callMe("Yosep")).toThrow();
   expect(() => callMe("Yosep")).toThrow(MyException);
   expect(() => callMe("Yosep")).toThrow("Ups my exception happens")
})