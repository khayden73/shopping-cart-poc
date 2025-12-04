import { createContext } from 'react';
import ProductList from '../../data/products.json';
import type { Product } from "../../lib/types.ts";

interface CatalogProviderProps {
    children: React.ReactNode;
}

const CatalogContext = createContext<Product[]>(ProductList);

const CatalogProvider = ({ children }: CatalogProviderProps) => {
    return (
        <CatalogContext.Provider value={ProductList}>
            {children}
        </CatalogContext.Provider>
    );
};

export { CatalogContext, CatalogProvider };