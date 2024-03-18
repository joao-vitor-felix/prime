import { prisma } from "@/lib/prisma";

import { CategoriesButtonItem } from "./CategoriesButtonItem";

export const CategoriesButtonList = async () => {
  const categories = await prisma.category.findMany();
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
      {categories.map(category => (
        <CategoriesButtonItem
          name={category.name}
          slug={category.slug}
          key={category.id}
        />
      ))}
    </div>
  );
};
