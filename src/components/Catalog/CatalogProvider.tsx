import { createContext, useEffect, useState } from "react";
// import ProductList from '../../data/products.json';
import type { Product } from "../../lib/types.ts";
import { getCatalog } from "../../data/catalog.ts";

interface CatalogProviderProps {
  children: React.ReactNode;
}

interface CatalogContextType {
  catalog: Product[];
  isLoading: boolean;
  getCategories: () => string[];
}

const initialState: CatalogContextType = {
  catalog: [],
  isLoading: true,
  getCategories: () => [],
};

const CatalogContext = createContext<CatalogContextType>(initialState);

const CatalogProvider = ({ children }: CatalogProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [catalog, setCatalog] = useState<Product[]>([]);

  useEffect(() => {
    if (catalog.length === 0) {
      getCatalog().then((data) => {
        setCatalog(data as Product[]);
        setIsLoading(false);
      });
    }
  }, []);

  const getCategories = () => {
    if (catalog.length > 0) {
      return [...new Set(catalog.map((product) => product.category))];
    }

    return [];
  };

  return (
    <CatalogContext.Provider value={{ catalog, isLoading, getCategories }}>
      {children}
    </CatalogContext.Provider>
  );
};

export { CatalogContext, CatalogProvider };
