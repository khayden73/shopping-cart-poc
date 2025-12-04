import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProductDetails } from "./Catalog/ProductDetails.tsx";
import { Products } from "./Catalog/Products.tsx";
import App from "../App.tsx";
import { CartDetails } from "./Cart/CartDetails.tsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Products/>}/>
                    <Route path="/product/:productId" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<CartDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes };