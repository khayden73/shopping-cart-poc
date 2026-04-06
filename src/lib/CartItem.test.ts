import { describe, it, expect } from "vitest";
import CartItem from "./CartItem";
import { mockProducts } from "../__mocks__/mockProducts.ts";

describe("CartItem", () => {
  const mockProduct = mockProducts[0];

  it("should initialize correctly with default quantity and discount", () => {
    const item = new CartItem(mockProduct);
    expect(item.getProduct()).toBe(mockProduct);
    expect(item.getQuantity()).toBe(1);
    expect(item.discount).toBe(0);
    expect(item.getSubTotal()).toBe(10);
  });

  it("should initialize correctly with specified quantity and discount", () => {
    const item = new CartItem(mockProduct, 2, 0.1);
    expect(item.getQuantity()).toBe(2);
    expect(item.discount).toBe(0.1);
    expect(item.getSubTotal()).toBe(20);
  });

  it("should update subTotal when quantity is changed", () => {
    const item = new CartItem(mockProduct, 1);
    item.setQuantity(3);
    expect(item.getQuantity()).toBe(3);
    expect(item.getSubTotal()).toBe(30);
  });
});
