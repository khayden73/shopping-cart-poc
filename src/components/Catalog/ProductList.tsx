import type { Product } from "../../lib/types.ts";
import styles from "./ProductList.module.css";
import { ProductCard } from "./ProductCard.tsx";

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles.productsList}>
      {products.map((product) => (
        <span key={product.productId}>
          <ProductCard product={product} />
        </span>
      ))}
    </div>
  );
}

export { ProductList };
