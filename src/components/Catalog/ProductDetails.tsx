import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CatalogContext } from "./CatalogProvider.tsx";
import { ProductOptions } from "./ProductOptions.tsx";
import styles from "./ProductDetails.module.css";
import { Quantity } from "./Quantity.tsx";
import { CartContext } from "../Cart/CartProvider.tsx";
import type { CartItem } from "../../lib/types.ts";

function ProductDetails() {
  const { productId } = useParams();
  const { catalog } = useContext(CatalogContext);
  const cart = useContext(CartContext);
  const product = catalog.find((product) => product.productId === productId);
  console.log({ product });

  if (!product) return null;
  // thing
  const addButtonHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const item: CartItem = {
      productId: product.productId,
      quantity: 1,
      name: product.name,
      price: product.price,
    };
    cart.addToCart(item);
  };

  return (
    <>
      <Link to="/">&lt;&lt; Back to Products</Link>
      <div className={styles.productWrapper}>
        <section className={styles.productImage} />
        <section className={styles.details}>
          <h2>{product?.name}</h2>
          <p>Price: ${product.price}</p>
          <section>
            <ProductOptions label="colors" options={product.colorOptions} />
            <ProductOptions label="sizes" options={product.sizeOptions} />
            <Quantity />
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
