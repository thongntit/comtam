import React from "react";
import cartReducer from "./reducer";

const initialState = { items: [], shippingInfo: {} };
const CartContext = React.createContext(undefined);
const CartDispatchContext = React.createContext(undefined);

const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
const useCartState = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
};

const useCartDispatchState = () => {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("useCartDispatchState must be used within a CartDispatchProvider");
  }
  return context;
};

export * from "./action";
export { CartProvider, useCartState, useCartDispatchState };

