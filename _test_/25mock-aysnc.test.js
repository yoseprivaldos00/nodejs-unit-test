import { getBalance } from "../src/async";

test("mock async function ", async () => {
  const from = jest.fn().mockResolvedValueOnce(1000);
  await expect(getBalance("Yosep", from)).resolves.toEqual({
    name: "Yosep",
    balance: 1000,
  });

  await expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected ", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Ups"));

  await getBalance("BRRR", from);
});

test("mock async function error matcher", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("rejected");

  await expect(getBalance("Brrr", from)).rejects.toBe("rejected");
});
