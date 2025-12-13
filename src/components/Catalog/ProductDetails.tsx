import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CatalogContext } from "./CatalogProvider.tsx";
import { ProductOptions } from "./ProductOptions.tsx";
import styles from "./ProductDetails.module.css";
import { Quantity } from "./Quantity.tsx";
import { CartContext } from "../Cart/CartProvider.tsx";
import type { CartItem, Product } from "../../lib/types.ts";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { catalog } = useContext(CatalogContext);
  const cart = useContext(CartContext);
  const product =
    catalog.find((product) => product.productId === productId) ||
    ({} as Product);

  const { image } = product;
  const imagePath = image
    ? `/public/products/${image}`
    : "/public/products/no-image-icon-15.png";

  if (!product) return null;
  // thing
  const addButtonHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    const item: CartItem = {
      productId: product.productId,
      quantity,
      name: product.name,
      price: product.price,
    };
    cart.addToCart(item);
  };

  return (
    <>
      <Link to="/">&lt;&lt; Back to Products</Link>
      <div className={styles.productWrapper}>
        <figure className={styles.productImage}>
          <img src={imagePath} alt={product.name} />
        </figure>
        <section className={styles.details}>
          <h2>{product?.name}</h2>
          <p>Price: ${product.price}</p>
          <section>
            <ProductOptions label="colors" options={product.colorOptions} />
            <ProductOptions label="sizes" options={product.sizeOptions} />
            <Quantity onChange={(quantity) => setQuantity(quantity)} />
          </section>
          <button onClick={addButtonHandler} className={styles.addToCart}>
            Add
          </button>
        </section>
      </div>
    </>
  );
}

export { ProductDetails };
