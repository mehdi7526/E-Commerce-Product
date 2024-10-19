import { Product, products } from "./staticProducts";

// Function to find product by id
export const findProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
