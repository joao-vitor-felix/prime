import { Prisma } from "@prisma/client";
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
  it("should render Cart message when there's no products", async () => {
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

  it("should render Cart correctly", async () => {
    const item: CartProduct = {
      id: "1",
      name: "Product 1",
      basePrice: new Prisma.Decimal(100),
      discountPercentage: 10,
      totalPrice: 90,
      imageUrls: ["https://example.com/image.jpg"],
      quantity: 1
    };

    const {
      cartTitle,
      emptyCartContent,
      discountAmount,
      subtotalAmount,
      totalAmount
    } = await renderComponent([item]);

    const cartImage = screen.queryByAltText(`Imagem do produto Product 1`);
    const totalPrice = screen.queryByRole("heading", { name: /preço total/i });
    const basePrice = screen.queryByTestId("cart-item-base-price");
    const increaseButton = screen.queryByRole("button", {
      name: `Aumentar quantidade do produto Product 1`
    });
    const quantity = screen.getByTestId("cart-item-quantity");
    const decreaseButton = screen.queryByRole("button", {
      name: `Diminuir quantidade do produto Product 1`
    });
    const removeButton = screen.queryByRole("button", {
      name: `Remover produto Product 1`
    });
    const buyButton = screen.queryByRole("button", {
      name: /finalizar compra/i
    });

    expect(cartTitle).toBeInTheDocument();
    expect(emptyCartContent).not.toBeInTheDocument();
    expect(cartImage).toBeInTheDocument();
    expect(basePrice).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
    expect(discountAmount).toHaveTextContent("- R$ 10,00");
    expect(subtotalAmount).toHaveTextContent("R$ 100,00");
    expect(totalAmount).toHaveTextContent("R$ 90,00");
    expect(buyButton).toBeInTheDocument();
  });

  it("should show base price and not show total price together with base price on products without discount", async () => {
    const item: CartProduct = {
      id: "1",
      name: "Product 1",
      basePrice: new Prisma.Decimal(100),
      discountPercentage: 0,
      totalPrice: 100,
      imageUrls: ["https://example.com/image.jpg"],
      quantity: 1
    };

    await renderComponent([item]);

    const totalPrice = screen.queryByRole("heading", { name: /preço total/i });
    const basePriceFromTotalPrice = screen.queryByTestId(
      "cart-item-base-price"
    );

    const basePrice = screen.getByRole("heading", { name: /preço base/i });

    expect(basePrice).toBeInTheDocument();
    expect(totalPrice).not.toBeInTheDocument();
    expect(basePriceFromTotalPrice).not.toBeInTheDocument();
  });
});
