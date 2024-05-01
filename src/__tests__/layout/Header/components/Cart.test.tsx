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
  const emptyCartMessage = screen.queryByText(/Não há produtos no carrinho./i);
  const subtotalAmount = screen.queryByTestId("cart-subtotal-amount");
  const discountAmount = screen.queryByTestId("cart-discount-amount");
  const totalAmount = screen.queryByTestId("cart-total-amount");

  return {
    cartTitle,
    emptyCartMessage,
    subtotalAmount,
    discountAmount,
    totalAmount
  };
};

describe("Cart", () => {
  it("should render Cart message when there's no products", async () => {
    const {
      cartTitle,
      emptyCartMessage,
      discountAmount,
      subtotalAmount,
      totalAmount
    } = await renderComponent([]);

    expect(cartTitle).toBeInTheDocument();
    expect(emptyCartMessage).toBeInTheDocument();
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
      emptyCartMessage,
      discountAmount,
      subtotalAmount,
      totalAmount
    } = await renderComponent([item]);

    const cartImage = screen.queryByAltText(`Imagem do produto Product 1`);
    const name = screen.getByRole("heading", { name: /product 1/i });
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
    expect(emptyCartMessage).not.toBeInTheDocument();
    expect(cartImage).toBeInTheDocument();
    expect(name).toBeInTheDocument();
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

  it("should show total price together with base price while not show base price alone on products with discount", async () => {
    const item: CartProduct = {
      id: "1",
      name: "Product 1",
      basePrice: new Prisma.Decimal(100),
      discountPercentage: 10,
      totalPrice: 90,
      imageUrls: ["https://example.com/image.jpg"],
      quantity: 1
    };

    await renderComponent([item]);

    const totalPrice = screen.queryByRole("heading", { name: /preço total/i });
    const basePriceFromTotalPrice = screen.queryByTestId(
      "cart-item-base-price"
    );
    const basePrice = screen.queryByRole("heading", { name: /preço base/i });

    expect(basePrice).not.toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
    expect(basePriceFromTotalPrice).toBeInTheDocument();
  });

  it("should increase product quantity when increase button is clicked", async () => {
    const item: CartProduct = {
      id: "1",
      name: "Product 1",
      basePrice: new Prisma.Decimal(100),
      discountPercentage: 10,
      totalPrice: 90,
      imageUrls: ["https://example.com/image.jpg"],
      quantity: 1
    };

    await renderComponent([item]);

    const increaseButton = screen.getByRole("button", {
      name: `Aumentar quantidade do produto Product 1`
    });
    const quantity = screen.getByTestId("cart-item-quantity");
    expect(quantity).toHaveTextContent("1");
    await userEvent.click(increaseButton);
    await userEvent.click(increaseButton);
    expect(quantity).toHaveTextContent("3");
  });

  it("should decrease product quantity when decrease button is clicked", async () => {
    const item: CartProduct = {
      id: "1",
      name: "Product 1",
      basePrice: new Prisma.Decimal(100),
      discountPercentage: 10,
      totalPrice: 90,
      imageUrls: ["https://example.com/image.jpg"],
      quantity: 4
    };

    await renderComponent([item]);

    const decreaseButton = screen.getByRole("button", {
      name: `Diminuir quantidade do produto Product 1`
    });
    const quantity = screen.getByTestId("cart-item-quantity");
    expect(quantity).toHaveTextContent("4");
    await userEvent.click(decreaseButton);
    await userEvent.click(decreaseButton);
    expect(quantity).toHaveTextContent("2");
  });

  it("should remove product from cart when remove button is clicked", async () => {
    const item: CartProduct = {
      id: "1",
      name: "Product 1",
      basePrice: new Prisma.Decimal(100),
      discountPercentage: 10,
      totalPrice: 90,
      imageUrls: ["https://example.com/image.jpg"],
      quantity: 4
    };

    await renderComponent([item]);

    const name = screen.getByRole("heading", { name: /product 1/i });

    const removeButton = screen.getByRole("button", {
      name: `Remover produto Product 1`
    });

    expect(name).toBeInTheDocument();
    await userEvent.click(removeButton);
    expect(name).not.toBeInTheDocument();
    const emptyCartMessage = screen.getByText(/Não há produtos no carrinho./i);
    expect(emptyCartMessage).toBeInTheDocument();
  });

  it("should output correct subtotal, total and discount values", async () => {
    const cart: CartProduct[] = [
      {
        id: "1",
        name: "Product 1",
        basePrice: new Prisma.Decimal(100),
        discountPercentage: 10,
        totalPrice: 90,
        imageUrls: ["https://example.com/image.jpg"],
        quantity: 1
      },
      {
        id: "2",
        name: "Product 2",
        basePrice: new Prisma.Decimal(500),
        discountPercentage: 10,
        totalPrice: 450,
        imageUrls: ["https://example.com/image.jpg"],
        quantity: 4
      }
    ];

    const { subtotalAmount, discountAmount, totalAmount } =
      await renderComponent(cart);

    expect(subtotalAmount).toHaveTextContent("R$ 2.100,00");
    expect(discountAmount).toHaveTextContent("- R$ 210,00");
    expect(totalAmount).toHaveTextContent("R$ 1.890,00");
  });
});
