import Cart from "./Cart";
import { mockProducts } from "../__mocks__/mockProducts";
import type { CartItemDetails } from "./CartItem";

describe("Cart", () => {
  const product1 = mockProducts[0];
  const product2 = mockProducts[1];

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
    cart.add(product1, undefined);
    const cartItems = cart.getAllItems() as unknown as CartItemDetails[];
    const currentItem = cartItems[0];
    expect(currentItem).toBeDefined();
    expect(currentItem.getProductId()).toBe(product1.productId);
    expect(currentItem.getQuantity()).toBe(2);
    // expect(currentItem.discount).toBe(0.1);
  });

  it("should update quantity when adding existing item and quantity is defined", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.add(product1, 3);
    expect(cart.getTotalItems()).toBe(3);
  });

  it.skip("should update quantity correctly", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.update(product1.id, 5);
    expect(cart.getTotalItems()).toBe(5);
  });

  it.skip("should throw error when updating but item doesn't exist in cart", () => {
    const cart = new Cart();
    expect(() => cart.update(product1.id, 5)).toThrow(
      `Item with id ${product1.id} not found in cart`,
    );
  });

  it.skip("should remove item when quantity is set to 0", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.update(product1.id, 0);
    expect(cart.getTotalItems()).toBe(0);
    expect(cart.getAllItems().length).toBe(0);
  });

  it.skip("should remove item by id", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.remove(product1.id);
    expect(cart.getTotalItems()).toBe(0);
  });

  it.skip("should throw error when removing but item doesn't exist in cart", () => {
    const cart = new Cart();
    expect(() => cart.remove(product1.id)).toThrow(
      `Item with id ${product1.id} not found in cart`,
    );
  });

  it.skip("should clear all items", () => {
    const cart = new Cart();
    cart.add(product1, 1);
    cart.add(product2, 1);
    cart.clear();
    expect(cart.getTotalItems()).toBe(0);
  });

  it.skip("should calculate total cost correctly without discounts", () => {
    const cart = new Cart();
    cart.add(product1, 2); // 200
    cart.add(product2, 1); // 50
    expect(cart.getTotalCost()).toBe("40.00");
  });

  it.skip("should calculate total cost with cart discount", () => {
    const cart = new Cart(0.1); // 10% discount
    cart.add(product1, 2); // 200 - (200 * 0.1) = 180
    cart.add(product2, 1); // 50 - (50 * 0.1) = 45
    expect(cart.getTotalCost()).toBe("36.00");
  });

  it.skip("should calculate total cost with both cart and item discounts", () => {
    const cart = new Cart(0.1); // 10% cart discount
    cart.add(product1, 1, 0.1); // 100 - (100 * 0.2) = 80
    expect(cart.getTotalCost()).toBe("8.00");
  });

  it.skip("should format price correctly", () => {
    const cart = new Cart();
    expect(cart.formatPrice(123.456, "USD")).toBe("$123.46");
  });

  it.skip("should handle setDiscount and getDiscount", () => {
    const cart = new Cart();
    cart.setDiscount(0.2);
    expect(cart.getDiscount()).toBe(0.2);
  });
});
