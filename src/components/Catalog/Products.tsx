import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "./CatalogProvider.tsx";
import styles from "./Products.module.css";
import type { Product } from "../../lib/types.ts";
import { FilterOptions } from "../Options/FilterOptions.tsx";
import { ProductList } from "./ProductList.tsx";
import { PageContext } from "../Page/PageProvider.tsx";

function Products() {
  const { catalog, isLoading, getCategories } = useContext(CatalogContext);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { updateBreadcrumbs } = useContext(PageContext);

  // updateTitle("Products");
  // updateBreadcrumbs([{ label: "Products" }]);

  useEffect(() => {
    if (!isLoading && catalog.length > 0) {
      setFilteredProducts(catalog);
    }
  }, [catalog, isLoading]);

  useEffect(() => {
    // updateTitle("Products");
    updateBreadcrumbs([{ label: "Products" }]);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  const handleCategorySelection = (category: string) => {
    if (category === "") {
      setFilteredProducts(catalog);
    } else {
      setFilteredProducts(
        catalog.filter((product) => product.category === category),
      );
    }
  };

  return (
    <>
      {/*<h2>Products</h2>*/}
      <div className={styles.productCategoryFilter}>
        <FilterOptions
          options={getCategories()}
          onSelect={handleCategorySelection}
        />
      </div>
      <div className={styles.productsListWrapper}>
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}

export { Products };
