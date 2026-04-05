import Cart from "./Cart";
import { mockProducts } from "../__mocks__/mockProducts";
import type { CartItemDetails } from "./CartItem";

const product1 = mockProducts[0];
const product2 = mockProducts[1];

describe("Cart", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize correctly", () => {
    const cart = new Cart();
    expect(cart.getTotalItems()).toBe(0);
    expect(cart.getDiscount()).toBe(0);
  });

  it("should add item to cart", () => {
    const cart = new Cart();
    cart.add(product1, 2);

    const cartItems = cart.getAllItems() as unknown as CartItemDetails[];
    const currentItem = cartItems[0];
    expect(cartItems.length).toBe(1);
    expect(currentItem.getProductId()).toBe(product1.productId);
    expect(currentItem.getQuantity()).toBe(2);
  });

  it("should increment quantity when adding existing item and quantity is undefined", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.add(product1);
    const cartItems = cart.getAllItems() as unknown as CartItemDetails[];
    const currentItem = cartItems[0];
    expect(currentItem).toBeDefined();
    expect(currentItem.getProductId()).toBe(product1.productId);
    expect(currentItem.getQuantity()).toBe(2);
  });

  it("should update quantity when adding existing item and quantity is defined", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.add(product1, 3);
    expect(cart.getTotalItems()).toBe(3);
  });

  it("should update quantity correctly", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.update(product1.productId, 5);
    expect(cart.getTotalItems()).toBe(5);
  });

  it("should throw error when updating but item doesn't exist in cart", () => {
    const cart = new Cart();
    expect(() => cart.update(product1.productId, 5)).toThrow(
      `Item with id ${product1.productId} not found in cart`,
    );
  });

  it("should remove item when quantity is set to 0", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.update(product1.productId, 0);
    expect(cart.getTotalItems()).toBe(0);
    expect(cart.getAllItems().length).toBe(0);
  });

  it("should remove item by id", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.remove(product1.productId);
    expect(cart.getTotalItems()).toBe(0);
  });

  it("should throw error when removing but item doesn't exist in cart", () => {
    const cart = new Cart();
    expect(() => cart.remove(product1.productId)).toThrow(
      `Item with id ${product1.productId} not found in cart`,
    );
  });

  it("should clear all items", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.add(product2, 1);
    cart.clear();
    expect(cart.getTotalItems()).toBe(0);
  });

  it("should format price correctly", () => {
    const cart = new Cart();
    expect(cart.formatPrice(123.456, "USD")).toBe("$123.46");
  });

  it("should calculate total cost correctly WITHOUT discounts", () => {
    const cart = new Cart();
    cart.add(product1, 2); // 200
    cart.add(product2, 1); // 50
    expect(cart.getTotalCost()).toBe("40.00");
  });

  it("should calculate total cost correctly WITH discounts", () => {
    const cart = new Cart();
    cart.add(product1, 1, 0.1); // 10% discount on item
    expect(cart.getTotalCost()).toBe("9.00");
  });

  it("should calculate total cost with cart discount", () => {
    const cart = new Cart(0.1); // 10% discount on cart
    cart.add(product1, 2);
    cart.add(product2, 1);
    expect(cart.getTotalCost()).toBe("36.00");
  });

  it("should calculate total cost with both cart and item discounts applied sequentially", () => {
    const cart = new Cart(0.1); // 10% cart discount
    cart.add(product1, 1, 0.1); // 10% item discount
    expect(cart.getTotalCost()).toBe("8.10"); // item discount first, then cart discount on subtotal
  });

  it("should handle setDiscount and getDiscount", () => {
    const cart = new Cart();
    cart.setDiscount(0.2);
    expect(cart.getDiscount()).toBe(0.2);
  });
});
