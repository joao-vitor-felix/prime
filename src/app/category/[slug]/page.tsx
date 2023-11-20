import { Badge } from "@/components/ui/Badge";
import ProductList from "@/components/ui/ProductList";
import { CATEGORY_ICON } from "@/constants/category-icon";

import { prisma } from "../../../../prisma/client";

type CategoryProps = {
  params: {
    slug: string;
  };
};

const Category: React.FC<CategoryProps> = async ({ params }) => {
  const category = await prisma.category.findFirst({
    where: {
      slug: params.slug
    },
    include: {
      products: true
    }
  });

  if (!category) {
    return null;
  }

  return (
    <main className="p-5">
      <Badge
        variant="outline"
        className="flex h-9 w-fit gap-1 border-[1px] border-primary px-3 py-[0.375rem]"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-base font-bold">{category.name}</span>
      </Badge>
      <ProductList
        products={category.products}
        className="mt-6 flex-wrap justify-center gap-6"
      />
    </main>
  );
};

export default Category;
