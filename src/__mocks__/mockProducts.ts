import type { Product } from "../lib/types.ts";
import { Category } from "../lib/types.ts";

export const mockProducts: Product[] = [
  {
    productId: "1",
    name: "product 1",
    category: Category.TShirts,
    price: 10.0,
    inventory: 100,
    options: [
      {
        id: "color",
        label: "Color",
        values: ["White", "Black"],
      },
      {
        id: "size",
        label: "Size",
        values: ["S", "M", "L"],
      },
    ],
  },
  {
    productId: "2",
    name: "product 2",
    category: Category.Hoodies,
    price: 20.0,
    inventory: 100,
    options: [
      {
        id: "color",
        label: "Color",
        values: ["White", "Black"],
      },
      {
        id: "size",
        label: "Size",
        values: ["S", "M", "L"],
      },
    ],
  },
  {
    productId: "3",
    name: "product 3",
    category: Category.Pants,
    price: 30.0,
    inventory: 100,
    options: [
      {
        id: "color",
        label: "Color",
        values: ["White", "Black"],
      },
      {
        id: "size",
        label: "Size",
        values: ["S", "M", "L"],
      },
    ],
  },
];
