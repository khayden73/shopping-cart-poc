import { CatalogContext } from "./Catalog/CatalogProvider.tsx";
import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./Catalog/Products.module.css";
import { ProductList } from "./Catalog/ProductList.tsx";
import type { Product } from "../lib/types.ts";
function Home() {
  const { catalog, isLoading, getItemsByCategory } = useContext(CatalogContext);
  const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);

  useEffect(() => {
    if (!isLoading && catalog.length > 0) {
      setProductsByCategory(getItemsByCategory());
    }
  });

  return (
    <>
      <h1>Home</h1>
      <Box>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.productsListWrapper}>
            <ProductList products={productsByCategory} />
          </div>
        )}
      </Box>
    </>
  );
}

export { Home };
