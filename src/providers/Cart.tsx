"use client";

import { createContext, ReactNode, useState } from "react";

import { ProductWithTotalPrice } from "@/types/ProductWithTotalPrice";

export type CartProduct = Pick<
  ProductWithTotalPrice,
  | "id"
  | "name"
  | "imageUrls"
  | "discountPercentage"
  | "totalPrice"
  | "basePrice"
> & {
  quantity: number;
};

export type CartContextType = {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  incrementQuantity: (product: CartProduct) => void;
  removeFromCart: (product: CartProduct) => void;
  clearFromCart: (product: CartProduct) => void;
  subtotalAmount: number;
  totalAmount: number;
  discountAmount: number;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  incrementQuantity: () => {},
  removeFromCart: () => {},
  clearFromCart: () => {},
  subtotalAmount: 0,
  totalAmount: 0,
  discountAmount: 0
});

type CartContextProviderProps = {
  children: ReactNode;
  cartValue?: CartProduct[];
};

export const CartContextProvider = ({
  children,
  cartValue = []
}: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartProduct[]>(cartValue);

  const subtotalAmount = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + Number(currentValue.basePrice) * currentValue.quantity,
    0
  );
  const discountAmount = cart.reduce(
    (accumulator, currentValue) =>
      accumulator +
      (Number(currentValue.basePrice) - currentValue.totalPrice) *
        currentValue.quantity,
    0
  );
  const totalAmount = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.totalPrice * currentValue.quantity,
    0
  );
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
        clearFromCart,
        subtotalAmount,
        discountAmount,
        totalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
