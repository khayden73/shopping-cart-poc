import { createContext, useEffect, useState } from "react";
// import ProductList from '../../data/products.json';
import { type Product } from "../../lib/types.ts";
import { getCatalog } from "../../data/catalog.ts";

interface CatalogProviderProps {
  children: React.ReactNode;
}

interface CatalogContextType {
  catalog: Product[];
  categories: string[];
  isLoading: boolean;
  getCategories: () => string[];
  getItemsByCategory: (maxPerCategory?: number) => Product[];
}

const initialState: CatalogContextType = {
  catalog: [],
  categories: [],
  isLoading: true,
  getCategories: () => [],
  getItemsByCategory: () => [],
};

const CatalogContext = createContext<CatalogContextType>(initialState);

const CatalogProvider = ({ children }: CatalogProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (catalog.length === 0) {
      getCatalog().then((data) => {
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
    if (catalog.length > 0) {
      return Array.from(
        catalog.reduce((acc, item) => {
          if (!acc.has(item.category)) {
            acc.set(item.category, [item]);
          } else if (acc.get(item.category).length < maxPerCategory) {
            acc.get(item.category)?.push(item);
          }
          return acc;
        }, new Map()),
      );
    }
    return [];
  };

  const ProviderProps = {
    catalog,
    categories,
    isLoading,
    getCategories,
    getItemsByCategory,
  };

  return (
    <CatalogContext.Provider value={ProviderProps}>
      {children}
    </CatalogContext.Provider>
  );
};

export { CatalogContext, CatalogProvider };
