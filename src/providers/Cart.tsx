"use client";

import { createContext, PropsWithChildren, useState } from "react";

import { ProductWithTotalPrice } from "@/types/ProductWithTotalPrice";

export type CartProduct = ProductWithTotalPrice & {
  quantity: number;
};

type CartContext = {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  incrementQuantity: (product: CartProduct) => void;
  removeFromCart: (product: CartProduct) => void;
  clearFromCart: (product: CartProduct) => void;
};

export const CartContext = createContext<CartContext>({
  cart: [],
  addToCart: () => {},
  incrementQuantity: () => {},
  removeFromCart: () => {},
  clearFromCart: () => {}
});

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    const isProductAlreadyOnCart = cart.some(
      cartProduct => cartProduct.id === product.id
    );

    if (isProductAlreadyOnCart) {
      const newCart = cart.map(cartProduct => {
        if (cartProduct.id === product.id) {
          cartProduct.quantity += product.quantity;
        }

        return cartProduct;
      });

      setCart(newCart);
      return;
    }

    const newProduct = { ...product, quantity: product.quantity };

    setCart([...cart, newProduct]);
  };

  const incrementQuantity = (product: CartProduct) => {
    const newCart = cart.map(cartProduct => {
      if (cartProduct.id === product.id) {
        cartProduct.quantity += 1;
      }

      return cartProduct;
    });

    setCart(newCart);
  };

  const removeFromCart = (product: CartProduct) => {
    const isProductQuantityValid = product.quantity < 2;

    if (isProductQuantityValid) {
      clearFromCart(product);
      return;
    }

    const newCart = cart.map(cartProduct => {
      if (cartProduct.id === product.id) {
        cartProduct.quantity -= 1;
      }

      return cartProduct;
    });

    setCart(newCart);
  };

  const clearFromCart = (product: CartProduct) => {
    const newProducts = cart.filter(
      cartProduct => cartProduct.id !== product.id
    );

    setCart(newProducts);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        removeFromCart,
        clearFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
