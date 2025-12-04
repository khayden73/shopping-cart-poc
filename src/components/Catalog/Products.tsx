import { useContext } from "react";
import { CatalogContext } from "./CatalogProvider.tsx";
import Styles from "./Products.module.css";
import { ProductCard } from "./ProductCard.tsx";

function Products() {
  const { catalog, isLoading, getCategories } = useContext(CatalogContext);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h2>Products</h2>
      <div className={Styles.productsList}>
        <ul>
          {getCategories().map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        {/*{catalog.map((product) => (*/}
        {/*  <ProductCard key={product.productId} product={product} />*/}
        {/*))}*/}
      </div>
    </>
  );
}

export { Products };
