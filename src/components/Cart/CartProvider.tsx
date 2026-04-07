import { createContext, useState } from "react";
import type { CartItem, AddToCartArgs, UpdateCartArgs } from "../../lib/types.ts";
import { v4 as uuidv4 } from 'uuid';

interface CartProviderProps {
  children: React.ReactNode;
}

type CartContextType = {
  cartItems: Map<string, CartItem>;
  addToCart: (args: AddToCartArgs) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  updateCart: (args: UpdateCartArgs) => void;
  getNumItems: () => number;
  getSubTotal: () => number;
};

// hello
const CartContext = createContext<CartContextType>({
  cartItems: new Map(),
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { },
  updateCart: () => { },
  getNumItems: () => 0,
  getSubTotal: () => 0,
});

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Map<string, CartItem>>(new Map());

  console.info("[CartProvider]", { cartItems });

  const addToCart = ({ product, quantity, selectedOptions }: AddToCartArgs) => {
    const cartItem: CartItem = {
      product,
      quantity,
      selectedOptions
    }
    // if item is in cart
    // -- existing item may have different options selected
    // -- existing item should be handled via update

    // generate new id for this cart item
    const itemId = uuidv4();

    setCartItems(previousCart => {
      const temp = new Map(previousCart);
      temp.set(itemId, cartItem);
      return temp;
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(previousCart => {
      const temp = new Map(previousCart);
      temp.delete(itemId);
      return temp;
    });
  };

  const clearCart = () => {
    setCartItems(new Map());
  };

  const updateCart = ({ itemId, quantity, selectedOptions }: UpdateCartArgs) => {
    // if item is not in cart, throw an error
    const cartItem: CartItem | undefined = cartItems.get(itemId);
    if (!cartItem) {
      throw new Error("item does not exist in cart");
    }

    // update details
    setCartItems(previousCart => {
      const temp = new Map(previousCart);
      temp.set(itemId, { ...cartItem, quantity, selectedOptions });
      return temp;
    });
  };

  const getNumItems = () =>
    Array.from(cartItems.values()).reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0,
    );

  const getSubTotal = () =>
    Array.from(cartItems.values()).reduce((acc: number, item: CartItem) => {
      // if (item.getDiscount() > 0) {
      //   const discountedPrice = item.getPrice() - (item.getPrice() * item.getDiscount());
      //   return acc + (item.getQuantity() * discountedPrice);
      // }
      return acc + (item.product.price * item.quantity);
    }, 0);

  const cartValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    updateCart,
    getNumItems,
    getSubTotal,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
