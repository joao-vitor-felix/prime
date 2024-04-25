import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions/product/getProductBySlug";
import { ProductList } from "@/components/ProductList";
import { Title } from "@/components/typography/Title";
import { Container } from "@/components/ui";

import { ProductDetails } from "./components/ProductDetails";
import { ProductImage } from "./components/ProductImage";

type ProductProps = {
  params: {
    slug: string;
  };
};

const Product = async ({ params: { slug } }: ProductProps) => {
  const product = await getProductBySlug(slug);

  if (!product) {
    redirect("/category");
  }
  return (
    <>
      <ProductImage name={product.name} images={product.imageUrls} />
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col gap-5">
          <Title>PRODUTOS RECOMENDADOS</Title>
          <ProductList products={product.category.products} />
        </div>
      </Container>
    </>
  );
};

export default Product;
