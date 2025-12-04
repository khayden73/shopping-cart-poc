export enum Category {
    TShirts = "T-Shirts",
    Hoodies = "Hoodies",
    Pants = "Pants",
    Socks = "Socks",
    Underwear = "Underwear",
    Hats = "Hats",
}

export enum SizeOption {
    XS = "XS",
    S = "S",
    M = "M",
    L = "L",
    XL = "XL",
    XXL = "XXL",
    Size28 = "28",
    Size30 = "30",
    Size32 = "32",
    Size34 = "34",
    Size36 = "36",
    OneSize = "One Size",
    SM = "S/M",
    LXL = "L/XL",
}

export enum ColorOption {
    White = "White",
    Black = "Black",
    Navy = "Navy",
    Gray = "Gray",
    Khaki = "Khaki",
    Red = "Red",
    Green = "Green",
    Olive = "Olive",
    Blue = "Blue",
}

export type Product = {
    productId: string;
    name: string;
    category: string | Category;
    price: number;
    inventory: number;
    colorOptions: string[] | ColorOption[];
    sizeOptions: string[] | SizeOption[];
}

export type CartItem = {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    color?: string | ColorOption;
    size?: string | SizeOption;
};