import { Prisma } from "@prisma/client";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ProductDetails } from "@/app/(routes)/product/[slug]/components/ProductDetails";
import { ProductWithTotalPrice } from "@/types/ProductWithTotalPrice";

const productWithStock: ProductWithTotalPrice = {
  id: "1",
  name: "Product 1",
  slug: "product-1",
  description: "description",
  condition: "NEW",
  imageUrls: [
    "https://image1.jpg",
    "https://image2.jpg",
    "https://image3.jpg",
    "https://image4.jpg"
  ],
  basePrice: new Prisma.Decimal(100),
  discountPercentage: 10,
  totalPrice: 90,
  sold: 50,
  stock: 10,
  brandId: "as",
  categoryId: "as",
  userId: "as"
};

const productWithoutStock: ProductWithTotalPrice = {
  id: "1",
  name: "Product 1",
  slug: "product-1",
  description: "description",
  condition: "USED",
  imageUrls: [
    "https://image1.jpg",
    "https://image2.jpg",
    "https://image3.jpg",
    "https://image4.jpg"
  ],
  basePrice: new Prisma.Decimal(100),
  discountPercentage: 10,
  totalPrice: 90,
  sold: 50,
  stock: 0,
  brandId: "as",
  categoryId: "as",
  userId: "as"
};

const productWithoutDiscount: ProductWithTotalPrice = {
  id: "1",
  name: "Product 1",
  slug: "product-1",
  description: "description",
  condition: "USED",
  imageUrls: [
    "https://image1.jpg",
    "https://image2.jpg",
    "https://image3.jpg",
    "https://image4.jpg"
  ],
  basePrice: new Prisma.Decimal(100),
  discountPercentage: 0,
  totalPrice: 100,
  sold: 50,
  stock: 50,
  brandId: "as",
  categoryId: "as",
  userId: "as"
};

const renderComponent = (product: ProductWithTotalPrice) => {
  render(<ProductDetails product={product} />);

  const name = screen.getByRole("heading", { name: product.name });
  const description = screen.getByText(product.description);
  const decreaseButton = screen.queryByRole("button", {
    name: `Diminuir quantidade do produto ${product.name}`
  });

  const quantity = screen.queryByRole("status", {
    name: `Quantidade do produto ${product.name}`
  });

  const increaseButton = screen.queryByRole("button", {
    name: `Aumentar quantidade do produto ${product.name}`
  });

  const regularAddToCartButton = screen.queryByRole("button", {
    name: `Adicionar ao carrinho`
  });

  const disabledAddToCartButton = screen.queryByRole("button", {
    name: `Produto indisponível`
  });

  const totalPrice = screen.queryByRole("heading", { name: /preço total/i });
  const basePriceFromTotalPrice = screen.queryByTestId("product-base-price");
  const basePrice = screen.queryByRole("heading", { name: /preço base/i });

  return {
    name,
    description,
    decreaseButton,
    increaseButton,
    quantity,
    regularAddToCartButton,
    disabledAddToCartButton,
    totalPrice,
    basePriceFromTotalPrice,
    basePrice
  };
};

describe("ProductDetails", () => {
  it("should render correctly when product has stock", () => {
    const {
      name,
      description,
      quantity,
      basePriceFromTotalPrice,
      totalPrice,
      decreaseButton,
      increaseButton,
      regularAddToCartButton
    } = renderComponent(productWithStock);

    const status = screen.getByRole("status", {
      name: /informações do produto/i
    });

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(basePriceFromTotalPrice).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
    expect(status).toHaveTextContent("Novo | 50 vendidos");
    expect(regularAddToCartButton).toBeInTheDocument();
    expect(regularAddToCartButton).toHaveClass("bg-primary");
    expect(regularAddToCartButton).not.toBeDisabled();
  });

  it("should render correctly when product hasn't stock", () => {
    const {
      name,
      description,
      quantity,
      basePriceFromTotalPrice,
      totalPrice,
      decreaseButton,
      increaseButton,
      disabledAddToCartButton
    } = renderComponent(productWithoutStock);

    const status = screen.getByRole("status", {
      name: /informações do produto/i
    });

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(status).toHaveTextContent("Usado | 50 vendidos");
    expect(quantity).not.toBeInTheDocument();
    expect(basePriceFromTotalPrice).not.toBeInTheDocument();
    expect(totalPrice).not.toBeInTheDocument();
    expect(increaseButton).not.toBeInTheDocument();
    expect(decreaseButton).not.toBeInTheDocument();
    expect(disabledAddToCartButton).toBeInTheDocument();
    expect(disabledAddToCartButton).toHaveClass("bg-light-gray");
    expect(disabledAddToCartButton).toBeDisabled();
  });

  it("should increase quantity when increase button is clicked", async () => {
    const { quantity, increaseButton } = renderComponent(productWithStock);

    if (!increaseButton) {
      throw new Error("increaseButton button not found");
    }

    expect(quantity).toHaveTextContent("1");
    await userEvent.click(increaseButton);
    await userEvent.click(increaseButton);
    expect(quantity).toHaveTextContent("3");
  });
});
