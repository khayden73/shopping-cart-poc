import "./App.css";
import { CartSummary } from "./components/Cart/CartSummary.tsx";
import { CatalogProvider } from "./components/Catalog/CatalogProvider.tsx";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./components/Cart/CartProvider.tsx";

function App() {
  // todo
  return (
    <div className="app-wrapper">
      <CatalogProvider>
        <CartProvider>
          <header>
            <h1>Welcome</h1>
          </header>
          <aside>
            <CartSummary />
          </aside>
          <main>
            <Outlet />
          </main>
        </CartProvider>
      </CatalogProvider>
    </div>
  );
}

export default App;
