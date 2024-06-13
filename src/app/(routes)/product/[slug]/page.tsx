import { Metadata } from "next";
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

export async function generateMetadata({
  params: { slug }
}: ProductProps): Promise<Metadata> {
  const product = await getProductBySlug(slug);

  return {
    title: `${product?.name} | Prime`
  };
}

const Product = async ({ params: { slug } }: ProductProps) => {
  const product = await getProductBySlug(slug);

  if (!product) {
    redirect("/category");
  }
  return (
    <>
      <div className="lg:hidden">
        <ProductImage name={product.name} images={product.imageUrls} />
      </div>

      <Container>
        <div className="flex gap-8">
          <div className="hidden lg:flex lg:w-3/5">
            <ProductImage name={product.name} images={product.imageUrls} />
          </div>
          <ProductDetails product={JSON.parse(JSON.stringify(product))} />
        </div>
        <div className="flex flex-col gap-5">
          <Title>PRODUTOS RECOMENDADOS</Title>
          <ProductList products={product.category.products} />
        </div>
      </Container>
    </>
  );
};

export default Product;
