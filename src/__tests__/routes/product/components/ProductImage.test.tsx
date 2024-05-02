import { render, screen } from "@testing-library/react";

import { ProductImage } from "@/app/(routes)/product/[slug]/components/ProductImage";

type Product = {
  name: string;
  images: string[];
};

const renderComponent = () => {
  const product: Product = {
    name: "Product 1",
    images: [
      " https://image1.jpg",
      "https://image2.jpg",
      "https://image3.jpg",
      "https://image4.jpg"
    ]
  };
  render(<ProductImage name={product.name} images={product.images} />);

  const image = screen.getByAltText(`Imagem do produto ${product.name}`);
  const buttons = screen.getAllByRole("button");

  return { image, buttons };
};

describe("ProductImage", () => {
  it("should render ProductImage correctly", () => {
    const { image, buttons } = renderComponent();

    const [firstImage, secondImage, thirdImage, fourthImage] = buttons;

    expect(image).toBeInTheDocument();
    expect(buttons).toHaveLength(4);
    expect(firstImage).toBeInTheDocument();
    expect(secondImage).toBeInTheDocument();
    expect(thirdImage).toBeInTheDocument();
    expect(fourthImage).toBeInTheDocument();
  });
});
