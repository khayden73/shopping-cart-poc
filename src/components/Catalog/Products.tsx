import { useContext } from "react";
import { CatalogContext } from "./CatalogProvider.tsx";
import Styles from "./Products.module.css";
import { ProductCard } from "./ProductCard.tsx";

function Products() {
    const catalog = useContext(CatalogContext);
    return (
        <>
            <h2>Products</h2>
            <div className={Styles.productsList}>
                {catalog.map((product) => (
                    <ProductCard key={product.productId} product={product}/>
                ))}
            </div>
        </>
    );
}

export { Products };