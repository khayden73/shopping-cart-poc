import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "./CatalogProvider.tsx";
import Styles from "./Products.module.css";
import { ProductCard } from "./ProductCard.tsx";
import type { Product } from "../../lib/types.ts";

function Products() {
  const { catalog, isLoading, getCategories } = useContext(CatalogContext);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(catalog);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  if (isLoading) return <p>Loading...</p>;

  const handleCategorySelection = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredProducts(catalog);
    } else {
      setFilteredProducts(
        catalog.filter((product) => product.category === selectedCategory),
      );
    }
  }, [selectedCategory]);

  return (
    <>
      <h2>Products</h2>
      <div className={Styles.productCategoryFilter}>
        <ul>
          {getCategories().map((category) => (
            <li key={category}>
              <button
                className={category === selectedCategory ? Styles.selected : ""}
                onClick={() => handleCategorySelection(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={Styles.productsList}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </>
  );
}

export { Products };
