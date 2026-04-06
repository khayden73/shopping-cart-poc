import type { CartItem } from "../../lib/types.ts";
import styles from "./CartItemDetails.module.css";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface CartItemDetailsProps {
  itemId: string;
  cartItem: CartItem;
  removeFromCart: (productId: string) => void;
}
//
function CartItemDetails({ itemId, cartItem, removeFromCart }: CartItemDetailsProps) {
  const { product } = cartItem;
  const { image } = product;
  const imagePath = image
    ? `/products/${image}`
    : "/products/no-image-icon-15.png";
  return (
    <div className={styles.cartItemDetailsWrapper}>
      <section className={styles.productDetailsWrapper}>
        <figure className={styles.productThumbContainer}>
          <section className={styles.imageContainer}>
            <img src={imagePath} alt={product.name} width="auto" height="auto" />
          </section>
          <figcaption className={styles.productDetailsContainer}>
            <p>{cartItem.product.name}</p>
            <p>${cartItem.product.price}</p>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Total: ${cartItem.product.price * cartItem.quantity}</p>
          </figcaption>
        </figure>
      </section>
      <section className={styles.actionsWrapper}>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeFromCart(itemId)}>remove</Button>
        <Button variant="contained" onClick={() => { }}>update</Button>
      </section>
    </div>
  );
  // return (
  //   <div className={styles.cartItemDetails}>
  //     <p>{cartItem.product.name}</p>
  //     <p>${cartItem.product.price}</p>
  //     <p>Quantity: {cartItem.quantity}</p>
  //     <p>Total: ${cartItem.product.price * cartItem.quantity}</p>
  //     <button onClick={() => removeFromCart(itemId)}>remove</button>
  //   </div>
  // );
}

export { CartItemDetails };
