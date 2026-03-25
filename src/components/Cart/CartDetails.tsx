import { useContext } from "react";
import { CartContext } from "./CartProvider.tsx";
import { CartItemDetails } from "./CartItemDetails.tsx";
import styles from "./CartDetails.module.css";

function CartDetails() {
  const { cartItems, getNumItems, getTotal, removeFromCart, clearCart } =
    useContext(CartContext);
  return (
    <div className={styles.cartDetailsWrapper}>
      <div className={styles.cartDetailsContainer}>
        <section className={styles.cartSummary}>
          <p>Total Items: {getNumItems()}</p>
          <p>Total: ${Number(getTotal()).toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </section>
        {cartItems.map((item) => (
          <CartItemDetails removeFromCart={removeFromCart} item={item} />
        ))}
      </div>
    </div>
  );
}

export { CartDetails };
