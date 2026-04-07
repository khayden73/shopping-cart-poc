import { createContext, useEffect, useMemo, useState } from "react";
// import ProductList from '../../data/products.json';
import { type Product, type ProductsByCategory } from "../../lib/types.ts";
import { getCatalog } from "../../data/catalog.ts";

interface CatalogProviderProps {
  children: React.ReactNode;
}

interface CatalogContextType {
  catalog: Product[];
  categories: string[];
  isLoading: boolean;
  getCategories: () => string[];
  getItemsByCategory: () => ProductsByCategory;
}

const initialState: CatalogContextType = {
  catalog: [],
  categories: [],
  isLoading: true,
  getCategories: () => [],
  getItemsByCategory: () => new Map(),
};

const CatalogContext = createContext<CatalogContextType>(initialState);

const CatalogProvider = ({ children }: CatalogProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (catalog.length === 0) {
      console.info("[CatalogProvider][useEffect] catalog is empty, fetch catalog");
      getCatalog().then((data) => {
        // console.log({ data });
        setCatalog(data as Product[]);
        setIsLoading(false);
        setCategories(getCategories());
      });
    }
  }, []);

  const getCategories = () => {
    if (catalog.length > 0) {
      return [...new Set(catalog.map((product) => product.category))];
    }

    return [];
  };

  const getItemsByCategory = (maxPerCategory = 1) => {
    // console.info("[getItemsByCategory]", { catalog });
    if (catalog.length > 0) {
      return catalog.reduce((acc, item) => {
        if (!acc.has(item.category)) {
          acc.set(item.category, [item]);
        } else if (acc.get(item.category).length < maxPerCategory) {
          acc.get(item.category)?.push(item);
        }
        return acc;
      }, new Map());
    }
    return new Map();
  };

  const ProviderProps = useMemo(
    () => ({
      catalog,
      categories,
      isLoading,
      getCategories,
      getItemsByCategory,
    }),
    [catalog, categories, isLoading],
  );

  return (
    <CatalogContext.Provider value={ProviderProps}>
      {children}
    </CatalogContext.Provider>
  );
};

export { CatalogContext, CatalogProvider };
