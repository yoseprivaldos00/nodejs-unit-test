// secara default jika melakukan mock pada modules, seluruh module akan di mock
// bagaimana caranya agar sebagian saja di mock?
// jest.requireActual(module)

import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");
  return {
    _esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
  };
});

test("mock partial modules", () => {
  const products = [
    { id: 1, nama: "produk 1" },
    { id: 2, name: "produk 2" },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });
});

// getProductById tidak di mock, jadi ekspektasinya harusnya error
test.failing("mock test failing partial modules", () => {
  getProductById.mockImplementation((id) => {
    return { id: id, nama: `product ${id}` };
  });

  expect(ProductService.getProductById(10)).toEqual({
    id: 10,
    name: "roduct 10",
  });
});
