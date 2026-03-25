import type { CartItem } from "../../lib/types.ts";
import styles from "./CartItemDetails.module.css";

interface CartItemDetailsProps {
  item: CartItem;
  removeFromCart: (productId: string) => void;
}
//
function CartItemDetails({ item, removeFromCart }: CartItemDetailsProps) {
  return (
    <div className={styles.cartItemDetails}>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item.productId)}>remove</button>
    </div>
  );
}

export { CartItemDetails };
