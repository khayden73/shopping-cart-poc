import Styles from "./ProductCard.module.css";
import type { Product } from "../../lib/types.ts";
// import { Quantity } from "./Quantity.tsx";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.productId}`}>
      <figure className={Styles.productCard}>
        <section className={Styles.thumbnail} />
        <figcaption>{product.name}</figcaption>
      </figure>
    </Link>
  );
}

export { ProductCard };
