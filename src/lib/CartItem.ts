import type { Product } from "./types.ts";
import type { SelectedOption } from "./types.ts";

class CartItem {
    product: Product;
    quantity = 0;
    discount = 0;
    total = 0;
    selectedOptions: SelectedOption[];

    constructor(product: Product, quantity = 1, discount = 0, selectedOptions: SelectedOption[] = []) {
        this.product = product;
        this.quantity = quantity;
        this.discount = discount;
        this.selectedOptions = selectedOptions;
    }

    getProduct() {
        return this.product;
    }

    getProductId() {
        return this.product.productId;
    }

    getQuantity() {
        return this.quantity;
    }

    getSubTotal() {
        return this.product.price * this.quantity;
    }

    setQuantity(quantity: number) {
        this.quantity = quantity;
    }

    setDiscount(discount: number) {
        this.discount = discount;
    }
}

export type CartItemDetails = InstanceType<typeof CartItem>;

export default CartItem;