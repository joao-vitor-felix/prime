import { render, RenderOptions } from "@testing-library/react";
import { ReactNode } from "react";

import { CartContextProvider, CartProduct } from "@/providers/Cart";

export const renderWithCartContext = (
  ui: ReactNode,
  cart: CartProduct[],
  renderOptions: RenderOptions
) => {
  return render(
    <CartContextProvider cartValue={cart}>{ui}</CartContextProvider>,
    {
      ...renderOptions
    }
  );
};
