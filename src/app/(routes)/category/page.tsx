import { Library } from "lucide-react";

import { TitleBadged } from "@/components/typography/TitleBadged";
import { Container } from "@/components/ui";
import { prisma } from "@/lib/prisma";

import { CategoryItem } from "./components/CategoryItem";

export const dynamic = "force-dynamic";

const Category = async () => {
  const categories = await prisma.category.findMany();

  return (
    <Container>
      <TitleBadged icon={<Library size={20} className="text-primary" />}>
        Categorias
      </TitleBadged>
      <section
        className="grid grid-cols-2 justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-category-item-grid"
        aria-label="Categorias"
      >
        {categories.map(category => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </section>
    </Container>
  );
};
export default Category;
