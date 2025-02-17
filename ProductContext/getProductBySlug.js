import { products } from "./data";

export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug);
};
