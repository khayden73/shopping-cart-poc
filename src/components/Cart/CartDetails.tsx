import { useContext } from "react";
import { CartContext } from "./CartProvider.tsx";
import { CartItemDetails } from "./CartItemDetails.tsx";

function CartDetails() {
    const { cartItems, getNumItems, getTotal, removeFromCart, clearCart } = useContext(CartContext);
    return (
        <div>
            <section>
                <button onClick={clearCart}>Clear Cart</button>
                <p>Total Items: {getNumItems()}</p>
                <p>Total: ${getTotal()}</p>
            </section>
            {cartItems.map(item => (<CartItemDetails removeFromCart={removeFromCart} item={item}/>))}
        </div>
    );
}

export { CartDetails };