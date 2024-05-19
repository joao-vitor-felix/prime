/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

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
  decrementQuantity: (product: CartProduct) => void;
  clearFromCart: (product: CartProduct) => void;
  clearCart: () => void;
  subtotalAmount: number;
  totalAmount: number;
  discountAmount: number;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  clearFromCart: () => {},
  clearCart: () => {},
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
  const localStorageCart =
    typeof window !== "undefined" ? window.localStorage.getItem("cart") : null;

  const [storedCart, setStoredCart] = useState(localStorageCart);
  const [cart, setCart] = useState<CartProduct[]>(cartValue);

  useEffect(() => {
    if (!storedCart) {
      return;
    }

    const parsedCart = JSON.parse(storedCart) as CartProduct[];

    setCart(parsedCart);
  }, []);

  const subtotalAmount = cart.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.basePrice) * currentValue.quantity;
  }, 0);

  const totalAmount = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.totalPrice * currentValue.quantity;
  }, 0);

  const discountAmount = subtotalAmount - totalAmount;

  const setLocalStorage = (cart: CartProduct[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setStoredCart(JSON.stringify(cart));
  };

  const addToCart = (product: CartProduct) => {
    const isProductAlreadyOnCart = cart.some(
      cartProduct => cartProduct.id === product.id
    );

    if (isProductAlreadyOnCart) {
      const newCart = cart.map(cartProduct => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity
          };
        }

        return cartProduct;
      });

      setCart(newCart);
      setLocalStorage(newCart);
      return;
    }

    const newProduct = { ...product, quantity: product.quantity };
    const newCart = [...cart, newProduct];

    setCart(newCart);
    setLocalStorage(newCart);
  };

  const incrementQuantity = (product: CartProduct) => {
    const newCart = cart.map(cartProduct => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, quantity: cartProduct.quantity + 1 };
      }

      return cartProduct;
    });

    setCart(newCart);
    setLocalStorage(newCart);
  };

  const decrementQuantity = (product: CartProduct) => {
    const isProductQuantityValid = product.quantity < 2;

    if (isProductQuantityValid) {
      clearFromCart(product);
      return;
    }

    const newCart = cart.map(cartProduct => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, quantity: cartProduct.quantity - 1 };
      }

      return cartProduct;
    });

    setCart(newCart);
    setLocalStorage(newCart);
  };

  const clearFromCart = (product: CartProduct) => {
    const newCart = cart.filter(cartProduct => cartProduct.id !== product.id);

    setCart(newCart);
    setLocalStorage(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setLocalStorage([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        clearFromCart,
        clearCart,
        subtotalAmount,
        discountAmount,
        totalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
