import type { CartItem } from "../../lib/types.ts";

interface CartItemDetailsProps {
    item: CartItem;
    removeFromCart: (productId: string) => void;
}

function CartItemDetails({ item, removeFromCart }: CartItemDetailsProps) {
    return (<div>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <button onClick={() => removeFromCart(item.productId)}>remove</button>
    </div>)
}

export { CartItemDetails };