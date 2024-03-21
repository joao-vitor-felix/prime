import { Library } from "lucide-react";

import { TitleBadged } from "@/components/typography/TitleBadged";
import { prisma } from "@/lib/prisma";

import { CategoryItem } from "./components/CategoryItem";

export const dynamic = "force-dynamic";

const Category = async () => {
  const categories = await prisma.category.findMany();

  return (
    <section className="flex flex-col gap-7 px-5 py-8">
      <TitleBadged icon={<Library size={20} className="text-primary" />}>
        Categorias
      </TitleBadged>
      <div className="grid grid-cols-2 justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-category-item-grid">
        {categories.map(category => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </section>
  );
};
export default Category;
