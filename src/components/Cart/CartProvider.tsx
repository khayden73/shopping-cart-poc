import { createContext, useState } from "react";
import type { CartItem } from "../../lib/types.ts";

interface CartProviderProps {
  children: React.ReactNode;
}

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getNumItems: () => number;
  getTotal: () => number;
};

// hello
const CartContext = createContext<CartContextType>({
  cartItems: [] as CartItem[],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getNumItems: () => 0,
  getTotal: () => 0,
});

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.productId !== productId),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getNumItems = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const cartValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getNumItems,
    getTotal,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
