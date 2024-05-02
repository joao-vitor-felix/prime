import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ProductImage } from "@/app/(routes)/product/[slug]/components/ProductImage";

type Product = {
  name: string;
  images: string[];
};

const renderComponent = () => {
  const product: Product = {
    name: "Product 1",
    images: [
      "https://image1.jpg",
      "https://image2.jpg",
      "https://image3.jpg",
      "https://image4.jpg"
    ]
  };
  render(<ProductImage name={product.name} images={product.images} />);

  const image = screen.getByAltText(`Imagem 1 do produto ${product.name}`);
  const buttons = screen.getAllByRole("button");

  return { image, buttons, product };
};

describe("ProductImage", () => {
  it("should render ProductImage correctly", () => {
    const { image, buttons } = renderComponent();

    const [firstImage, secondImage, thirdImage, fourthImage] = buttons;

    expect(image).toBeInTheDocument();
    expect(firstImage).toBeInTheDocument();
    expect(secondImage).toBeInTheDocument();
    expect(thirdImage).toBeInTheDocument();
    expect(fourthImage).toBeInTheDocument();
  });

  it("should render the product image according to current image selected", async () => {
    const { image, buttons, product } = renderComponent();

    const secondImage = buttons[1];

    expect(image).toHaveAttribute("alt", `Imagem 1 do produto ${product.name}`);
    await userEvent.click(secondImage);
    expect(image).toHaveAttribute("alt", `Imagem 2 do produto ${product.name}`);
  });
});
