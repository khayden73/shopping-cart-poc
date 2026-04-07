import { useContext, useState } from "react";
import type { CartItem } from "../../lib/types.ts";
import styles from "./CartItemDetails.module.css";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Quantity } from "../Catalog/Quantity.tsx";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider.tsx";

interface CartItemDetailsProps {
  itemId: string;
  cartItem: CartItem;
  // removeFromCart: (productId: string) => void;
  // updateInCart: (args: UpdateCartArgs) => void;
}
//
function CartItemDetails({ itemId, cartItem }: CartItemDetailsProps) {

  const { removeFromCart, updateCart } = useContext(CartContext);
  const { product, quantity, selectedOptions = [] } = cartItem;
  const [updateQuantity, setUpdateQuantity] = useState(quantity);
  const { image } = product;
  const imagePath = image
    ? `/products/${image}`
    : "/products/no-image-icon-15.png";

  const handleUpdate = () => {
    updateCart({
      itemId,
      quantity: updateQuantity,
      selectedOptions
    });
  }
  return (
    <div className={styles.cartItemDetailsWrapper}>
      <section className={styles.productDetailsWrapper}>
        <figure className={styles.productThumbContainer}>
          <section className={styles.imageContainer}>
            <Link to={`/product/${product.productId}`}>
              <img src={imagePath} alt={product.name} width="auto" height="auto" />
            </Link>
          </section>
          <figcaption className={styles.productDetailsContainer}>
            <p>{cartItem.product.name}</p>
            <p>price: ${cartItem.product.price}</p>
            <ul>
              {cartItem.selectedOptions?.map(opt => <li>{opt.label}: {opt.value}</li>)}
            </ul>

            <Quantity selected={updateQuantity} onChange={(q) => setUpdateQuantity(q)} />
            <p>subtotal: ${cartItem.product.price * cartItem.quantity}</p>
          </figcaption>
        </figure>
      </section>
      <section className={styles.actionsWrapper}>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeFromCart(itemId)}>remove</Button>
        <Button variant="contained" onClick={() => handleUpdate()}>update</Button>
      </section>
    </div>
  );
}

export { CartItemDetails };
