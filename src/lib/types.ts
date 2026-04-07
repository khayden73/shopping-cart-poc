export enum Category {
  TShirts = "T-Shirts",
  Hoodies = "Hoodies",
  Pants = "Pants",
  Socks = "Socks",
  Underwear = "Underwear",
  Hats = "Hats",
}

// export enum SizeOption {
//   XS = "XS",
//   S = "S",
//   M = "M",
//   L = "L",
//   XL = "XL",
//   XXL = "XXL",
//   Size28 = "28",
//   Size30 = "30",
//   Size32 = "32",
//   Size34 = "34",
//   Size36 = "36",
//   OneSize = "One Size",
//   SM = "S/M",
//   LXL = "L/XL",
// }

// export enum ColorOption {
//   White = "White",
//   Black = "Black",
//   Navy = "Navy",
//   Gray = "Gray",
//   Khaki = "Khaki",
//   Red = "Red",
//   Green = "Green",
//   Olive = "Olive",
//   Blue = "Blue",
// }

export type Product = {
  productId: string;
  name: string;
  category: Category;
  price: number;
  inventory: number;
  options: ProductOption[];
  image?: string;
};

export type ProductOption = {
  id: string;
  label: string;
  defaultValue?: string;
  values: string[];
};

export type SelectedOption = {
  id: string;
  label: string;
  value: string;
}

export type CartItem = {
  product: Product;
  quantity: number;
  selectedOptions?: SelectedOption[];
};

export type ProductsByCategory = Map<string, Product[]>;

export type Breadcrumb = { label: string; route?: string };


export type AddToCartArgs = {
  product: Product;
  quantity: number;
  selectedOptions: SelectedOption[];
}

export type UpdateCartArgs = {
  itemId: string;
  quantity: number;
  selectedOptions: SelectedOption[];
}
