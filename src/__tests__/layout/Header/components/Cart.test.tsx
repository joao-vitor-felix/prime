import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithCartContext } from "@/__tests__/utils/renderWithCartContext";
import { Cart } from "@/layout/Header/components/Cart";
import { CartProduct } from "@/providers/Cart";

const renderComponent = async (cart: CartProduct[]) => {
  renderWithCartContext(<Cart />, cart, {});

  const cartButton = screen.getByRole("button", {
    name: /carrinho de compras/i
  });

  await userEvent.click(cartButton);

  const cartTitle = screen.getByRole("heading", {
    name: /carrinho/i
  });

  const emptyCartContent = screen.queryByText(/Não há produtos no carrinho./i);

  const subtotalAmount = screen.queryByTestId("cart-subtotal-amount");
  const discountAmount = screen.queryByTestId("cart-discount-amount");
  const totalAmount = screen.queryByTestId("cart-total-amount");

  return {
    cartTitle,
    emptyCartContent,
    subtotalAmount,
    discountAmount,
    totalAmount
  };
};

describe("Cart", () => {
  it("should render the Cart message when there's no products", async () => {
    const {
      cartTitle,
      emptyCartContent,
      discountAmount,
      subtotalAmount,
      totalAmount
    } = await renderComponent([]);

    expect(cartTitle).toBeInTheDocument();
    expect(emptyCartContent).toBeInTheDocument();
    expect(discountAmount).not.toBeInTheDocument();
    expect(subtotalAmount).not.toBeInTheDocument();
    expect(totalAmount).not.toBeInTheDocument();
  });
});
