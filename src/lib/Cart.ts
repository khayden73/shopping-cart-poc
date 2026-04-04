import type { Product } from "./types.ts";
import CartItem, { type CartItemDetails } from "./CartItem.ts";

class Cart {
    cart: Map<string, CartItemDetails> = new Map();
    discount = 0;

    constructor(discount = 0) {
        this.discount = discount;
    }

    add(product: Product, quantity: number = 1, discount: number = 0) {
        const cartItem = this.cart.get(product.productId) as CartItem;
        if (cartItem) {
            console.log("cartItem already exists", cartItem);
            if (quantity === undefined) {
                this.update(product.productId, cartItem.quantity + 1);
                return;
            }
            this.update(product.productId, quantity);
        } else {
            this.cart.set(product.productId, new CartItem(product, quantity, discount));
        }
    }

    update(productId: string, quantity: number) {
        const cartItem = this.cart.get(productId) as CartItem;
        if (cartItem) {
            cartItem.quantity = quantity;
        }
    }

    remove(productId: string) {
        this.cart.delete(productId);
    }

    clear() {
        this.cart.clear();
    }

    getTotalItems() {
        return Array.from(this.cart.values()).reduce(
            (acc, cartItem) => acc + cartItem.quantity,
            0,
        );
    }

    getTotalCost() {
        return Array.from(this.cart.values()).reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);
    }

    formatPrice(price: number, currency = "USD") {
        return `${currency} ${price.toFixed(2)}`;
    }

    getAllItems() {
        return Array.from(this.cart.values());
    }

    setDiscount(discount: number) {
        this.discount = discount;
    }

    getDiscount() {
        return this.discount;
    }
}

export default Cart;