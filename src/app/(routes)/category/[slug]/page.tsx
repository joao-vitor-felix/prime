import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getCategoryWithProducts } from "@/actions/category/getCategoryWithProducts";
import { ProductItem } from "@/components/ProductItem";
import { ProductSection } from "@/components/ProductSection";
import { TitleBadged } from "@/components/typography/TitleBadged";
import { Container } from "@/components/ui";
import { CATEGORIES, Categories } from "@/constants/CATEGORIES.";
import { CATEGORY_ICON } from "@/constants/CATEGORY_ICON";

type CategoryProductsProps = {
  params: {
    slug: Categories;
  };
};

export async function generateMetadata({
  params: { slug }
}: CategoryProductsProps): Promise<Metadata> {
  const isValidCategory = CATEGORIES.includes(slug);

  if (!isValidCategory) {
    return { title: "Produto | Prime" };
  }

  const category = await getCategoryWithProducts(slug);

  return {
    title: `${category.name} | Prime`
  };
}

const CategoryProducts = async ({
  params: { slug }
}: CategoryProductsProps) => {
  const isValidCategory = CATEGORIES.includes(slug);

  if (!isValidCategory) {
    redirect("/category");
  }

  const category = await getCategoryWithProducts(slug);

  return (
    <Container>
      <div className="flex items-center gap-2">
        <Link href="/category">
          <ArrowLeft size={20} />
        </Link>
        <TitleBadged icon={CATEGORY_ICON[slug]}>{category.name}</TitleBadged>
      </div>
      <ProductSection aria-label={`Produtos da categoria ${category.name}`}>
        {category.products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductSection>
    </Container>
  );
};

export default CategoryProducts;
