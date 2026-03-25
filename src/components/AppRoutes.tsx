import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProductDetails } from "./Catalog/ProductDetails.tsx";
import { Home } from "./Home.tsx";
import App from "../App.tsx";
import { CartDetails } from "./Cart/CartDetails.tsx";
import { Products } from "./Catalog/Products.tsx";

/*
routes needed:
/products
/product/:productId/
/cart/
/account/
/account/orders/
/account/settings/
 */

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
