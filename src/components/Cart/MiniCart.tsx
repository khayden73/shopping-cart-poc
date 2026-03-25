import { useContext } from "react";
import { CartContext } from "./CartProvider.tsx";
import { IconButton } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import styles from "./MiniCart.module.css";
import { Link } from "react-router-dom";

function MiniCart() {
  const Cart = useContext(CartContext);
  return (
    <div className={styles.miniCart}>
      <Link to="/cart">
        <IconButton aria-label="cart" color="inherit">
          <ShoppingCartOutlined />
        </IconButton>
      </Link>

      <section className={styles.summary}>
        <span>{Cart.getNumItems()}</span>
        <span>${Number(Cart.getTotal()).toFixed(2)}</span>
      </section>
    </div>
  );
}

export { MiniCart };
