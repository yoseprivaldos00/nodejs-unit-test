// teknik untuk melakukan mock terhadap suatu modules

import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js");

test("mock modules getProductById", () => {
  getProductById.mockImplementation((id) => {
    return { id: id, name: `Product Mock ke ${id}` };
  });

  const product = ProductService.findById(10);
  expect(product).toEqual({ id: 10, name: "Product Mock ke 10" });

  const products = [
    { id: 1, name: "Product Mock 1" },
    { id: 2, name: "Product Mock 2" },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });
  expect(ProductService.findAll()).toEqual(products);
});
