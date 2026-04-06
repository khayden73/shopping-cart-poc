import type { CartItem } from "../../lib/types.ts";
import styles from "./CartItemDetails.module.css";

interface CartItemDetailsProps {
  itemId: string;
  cartItem: CartItem;
  removeFromCart: (productId: string) => void;
}
//
function CartItemDetails({ itemId, cartItem, removeFromCart }: CartItemDetailsProps) {
  return (
    <div className={styles.cartItemDetails}>
      <p>{cartItem.product.name}</p>
      <p>${cartItem.product.price}</p>
      <p>Quantity: {cartItem.quantity}</p>
      <p>Total: ${cartItem.product.price * cartItem.quantity}</p>
      <button onClick={() => removeFromCart(itemId)}>remove</button>
    </div>
  );
}

export { CartItemDetails };
