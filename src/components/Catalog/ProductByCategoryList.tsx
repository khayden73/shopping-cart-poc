import type { Product, ProductsByCategory } from "../../lib/types.ts";
import styles from "./ProductList.module.css";
import { ProductCard } from "./ProductCard.tsx";

interface ProductByCategoryListProps {
  products: ProductsByCategory;
  maxPerCategory?: number;
}

function ProductByCategoryList({ products }: ProductByCategoryListProps) {
  const productList = new Array<Product>();
  products.forEach((items) => {
    productList.push(items[0]);
  });

  return (
    <div className={styles.productsList}>
      {productList.map((product) => (
        <span key={product.productId}>
          <ProductCard product={product} />
        </span>
      ))}
    </div>
  );
}

export { ProductByCategoryList };
