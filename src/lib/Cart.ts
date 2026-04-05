import type { Product } from "./types.ts";
import CartItem, { type CartItemDetails } from "./CartItem.ts";

class Cart {
    cart: Map<string, CartItemDetails> = new Map();
    discount = 0;

    constructor(discount = 0) {
        this.discount = discount;
    }

    add(product: Product, quantity?: number | undefined, discount?: number) {
        const cartItem = this.cart.get(product.productId) as CartItem;
        if (cartItem) {
            if (quantity === undefined) {
                this.update(product.productId, cartItem.getQuantity() + 1);
                return;
            }
            this.update(product.productId, quantity);
        } else {
            this.cart.set(product.productId, new CartItem(product, quantity, discount));
        }
    }

    update(productId: string, quantity: number) {
        // if the quantity is 0, remove the item from the cart
        if (quantity === 0) {
            this.remove(productId);
            return;
        }
        const cartItem = this.cart.get(productId) as CartItem;
        if (!cartItem) {
            throw new Error(`Item with id ${productId} not found in cart`);
        }
        cartItem.setQuantity(quantity);
        // this.cart.set(productId, cartItem);
    }

    remove(productId: string) {
        // if the item doesn't exist, return
        if (!this.cart.has(productId)) {
            throw new Error(`Item with id ${productId} not found in cart`);
        }
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

    getSubTotal() {
        return Array.from(this.cart.values()).reduce((acc: number, item: CartItem) => {
            if (item.getDiscount() > 0) {
                const discountedPrice = item.getPrice() - (item.getPrice() * item.getDiscount());
                return acc + (item.getQuantity() * discountedPrice);
            }
            return acc + (item.getPrice() * item.getQuantity());
        }, 0);
    }

    getTotalCost() {
        // return Array.from(this.cart.values()).reduce((acc: number, item: CartItem) => acc + item.getPrice() * item.getQuantity(), 0);
        const subTotal = this.getSubTotal();
        if (this.discount > 0) {
            return Number(subTotal - (subTotal * this.discount)).toFixed(2);
        }
        return Number(subTotal).toFixed(2);
    }

    formatPrice(price: number, currency = "USD") {
        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
        });
        return formatter.format(price);
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