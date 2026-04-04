import type { Product } from "../lib/types.ts";

export const mockProducts: Product[] = [
  {
    productId: "1",
    name: "product 1",
    category: "category 1",
    price: 10.0,
    inventory: 100,
    colorOptions: ["color 1"],
    sizeOptions: ["size 1"],
  },
  {
    productId: "2",
    name: "product 2",
    category: "category 2",
    price: 20.0,
    inventory: 100,
    colorOptions: ["color 2"],
    sizeOptions: ["size 2"],
  },
  {
    productId: "3",
    name: "product 3",
    category: "category 1",
    price: 30.0,
    inventory: 100,
    colorOptions: ["color 3"],
    sizeOptions: ["size 3"],
  },
];
