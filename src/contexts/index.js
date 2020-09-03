import React from "react";
import { CartProvider } from "./cart";
import { StepsProvider } from "./steps";
export const ContextProvider = ({ children }) => (
  <CartProvider>
    <StepsProvider>{children}</StepsProvider>
  </CartProvider>
);

export * from "./cart";
