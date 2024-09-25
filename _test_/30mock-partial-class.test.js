// sama seperti mock function (berhubung class juga sebenarnya function
// jadi secara defauld mock class mealkukan mock terdapat semua instansce nya
// fitur yang digunakan untuk melakukan partial mock terhadap class adalah
// jest.spyOn()

import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class partial findById only", () => {
  const user = { id: 1, name: "Yosep" };
  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
});
