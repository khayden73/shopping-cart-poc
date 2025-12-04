import { useContext } from "react";
import { CartContext } from "./CartProvider.tsx";
import styles from "./CartSummary.module.css";
import { Link } from "react-router-dom";

function CartSummary() {
    const { getNumItems, getTotal } = useContext(CartContext);
    return (
        <div className={styles.cartSummary}>
            <h2>Shopping Cart</h2>
            <p>Total Items: {getNumItems()}</p>
            <p>Total: ${getTotal()}</p>
            <Link to="/cart">View Cart</Link>
        </div>
    )
}

export { CartSummary };