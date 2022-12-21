import React, { createContext, useState } from "react";

export const MenuContext = React.createContext({
  isactive: false,
  setIsActive: () => {},
});

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addToCart = (product) => {
    setItems((prevState) => [...prevState, { product }]);
  };
  const removeFromCart = (id) => {
    setItems((current) =>
      current.filter((item) => {
        return item.product.id !== id;
      })
    );
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
