import React from "react";
import { CartProvider } from "./cart";

export const ContextProvider = ({ children }) => (
  <CartProvider>{children}</CartProvider>
);

export * from "./cart";
