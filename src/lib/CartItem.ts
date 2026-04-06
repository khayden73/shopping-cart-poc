import type { Product } from "./types.ts";
import type { ProductOption } from "./types.ts";

class CartItem {
    product: Product;
    quantity = 0;
    discount = 0;
    total = 0;
    ProductOptions: ProductOption[];

    constructor(product: Product, quantity = 1, discount = 0, ProductOptions: ProductOption[] = []) {
        this.product = product;
        this.quantity = quantity;
        this.discount = discount;
        this.ProductOptions = ProductOptions;
    }

    getProduct() {
        return this.product;
    }

    getProductId() {
        return this.product.productId;
    }

    getPrice() {
        return this.product.price
    }

    getQuantity() {
        return this.quantity;
    }

    getDiscount() {
        return this.discount;
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