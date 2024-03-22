import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getCategoryWithProducts } from "@/actions/category/getCategoryWithProducts";
import { ProductItem } from "@/components/ProductItem";
import { TitleBadged } from "@/components/typography/TitleBadged";
import { Container } from "@/components/ui";
import { CATEGORIES, Categories } from "@/constants/CATEGORIES.";
import { CATEGORY_ICON } from "@/constants/CATEGORY_ICON";

type CategoryProductsProps = {
  params: {
    slug: Categories;
  };
};

const CategoryProducts = async ({ params }: CategoryProductsProps) => {
  const slug = params.slug;

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
      <section
        className="grid grid-cols-2 justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-category-item-grid"
        aria-label={`Produtos da categoria ${category.name}`}
      >
        {category.products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </Container>
  );
};

export default CategoryProducts;
