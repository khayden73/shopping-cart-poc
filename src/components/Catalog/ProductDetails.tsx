import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "./CatalogProvider.tsx";
import { ProductOptions } from "./ProductOptions.tsx";
import styles from "./ProductDetails.module.css";
import { Quantity } from "./Quantity.tsx";
import { CartContext } from "../Cart/CartProvider.tsx";
import type { Product, SelectedOption } from "../../lib/types.ts";
import { PageContext } from "../Page/PageProvider.tsx";

function defaultSelectedOptions(options: Product["options"]): SelectedOption[] {
  return options
    .filter((o) => o.values.length > 0)
    .map((o) => ({
      id: o.id,
      label: o.label,
      value: o.defaultValue ?? o.values[0],
    }));
}

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const { productId } = useParams();
  const { catalog } = useContext(CatalogContext);
  const cart = useContext(CartContext);
  const { updateTitle, updateBreadcrumbs } = useContext(PageContext);
  const product =
    catalog.find((product) => product.productId === productId) ||
    ({} as Product);

  useEffect(() => {
    if (!product.productId) return;
    updateTitle(product.category);
    updateBreadcrumbs([
      { label: "Products", route: "/products" },
      { label: product.category },
    ]);
  }, [product.productId, product.category, updateTitle, updateBreadcrumbs]);

  useEffect(() => {
    if (!product.productId) {
      setSelectedOptions([]);
      return;
    }
    setSelectedOptions(defaultSelectedOptions(product.options));
    setQuantity(1);
  }, [product.productId]);

  if (!productId || !product.productId) {
    return null;
  }

  const { image, options } = product;
  const imagePath = image
    ? `/products/${image}`
    : "/products/no-image-icon-15.png";

  const optionsChangeHandler = (updatedOption: SelectedOption) => {
    console.info("[ProductDetails][optionsChangeHandler]", { updatedOption });
    setSelectedOptions(previous => {
      if (previous.length === 0) {
        return [updatedOption];
      }
      return previous.map(opt => opt.id === updatedOption.id ? updatedOption : opt);
    });
  };

  // TODO: add a success/error handler
  const addButtonHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    console.info("[ProductDetails][addButtonHandler]", { selectedOptions });
    cart.addToCart({ product, quantity, selectedOptions });
  };

  return (
    <div className={styles.productWrapper}>
      <figure className={styles.productImage}>
        <img src={imagePath} alt={product.name} />
      </figure>
      <section className={styles.details}>
        <h2>{product?.name}</h2>
        <p>Price: ${product.price}</p>
        <section>
          {/* <ProductOptions option={colorOption} />
          <ProductOptions option={sizeOption} /> */}
          {options.map((productOption) => (
            <ProductOptions
              onChange={optionsChangeHandler}
              key={productOption.id}
              option={productOption}
              selectedValue={
                selectedOptions.find((s) => s.id === productOption.id)
                  ?.value ??
                productOption.defaultValue ??
                productOption.values[0]
              }
            />
          ))}
          <Quantity onChange={(quantity) => setQuantity(quantity)} />
        </section>
        <button onClick={addButtonHandler} className={styles.addToCart}>
          Add
        </button>
      </section>
    </div>
  );
}

export { ProductDetails };
