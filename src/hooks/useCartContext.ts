"use client";

import { useContext } from "react";

import { CartContext } from "@/providers/Cart";

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
