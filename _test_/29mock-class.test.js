import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class save", () => {
  // test service.save()
  const userSimpan = { id: 1, name: "Yosep" };
  service.save(userSimpan);
  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(userSimpan);

  // test service.findById()
  repository.findById.mockImplementation((id) => {
    return { id: id, nama: `ini nomor ${id}` };
  });
  expect(service.findById(10)).toEqual({ id: 10, nama: `ini nomor 10` });

  // test service.findAll()
  const users = [
    { id: 1, nama: "yosep" },
    { id: 2, nama: "rivaldo" },
  ];

  repository.findAll.mockImplementation(() => {
    return users;
  });
  expect(service.findAll()).toEqual(users);
});
