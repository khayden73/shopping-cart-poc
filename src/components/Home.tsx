import { CatalogContext } from "./Catalog/CatalogProvider.tsx";
import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./Catalog/Products.module.css";
import type { ProductsByCategory } from "../lib/types.ts";
import { ProductByCategoryList } from "./Catalog/ProductByCategoryList.tsx";

function Home() {
  const { catalog, isLoading, getItemsByCategory } = useContext(CatalogContext);
  const [productsByCategory, setProductsByCategory] =
    useState<ProductsByCategory | null>(null);

  useEffect(() => {
    if (!isLoading && catalog.length > 0) {
      const itemsByCategory = getItemsByCategory();
      // console.info("[Home]", { itemsByCategory });
      setProductsByCategory(itemsByCategory);
    }
  }, [isLoading, catalog]);

  return (
    <>
      {/*<header className="page-header">
        <h1>Home</h1>
      </header>*/}
      <Box>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.productsListWrapper}>
            {productsByCategory && (
              <ProductByCategoryList products={productsByCategory} />
            )}
          </div>
        )}
      </Box>
    </>
  );
}

export { Home };
