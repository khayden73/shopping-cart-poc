import { useContext } from "react";
import { CartContext } from "./CartProvider.tsx";
import { CartItemDetails } from "./CartItemDetails.tsx";
import styles from "./CartDetails.module.css";

function CartDetails() {
  const { cartItems, getNumItems, getSubTotal, removeFromCart, clearCart } =
    useContext(CartContext);
  return (
    <div className={styles.cartDetailsWrapper}>
      <div className={styles.cartDetailsContainer}>
        <section className={styles.cartSummary}>
          <p>Total Items: {getNumItems()}</p>
          <p>Total: ${Number(getSubTotal()).toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </section>
        {Array.from(cartItems.entries()).map(([itemId, cartItem]) => (
          <CartItemDetails key={itemId} removeFromCart={removeFromCart} itemId={itemId} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
}

export { CartDetails };
