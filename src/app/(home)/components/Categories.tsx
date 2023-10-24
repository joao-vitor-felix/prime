import { prisma } from "../../../../prisma/client";
import CategoryItem from "./CategoryItem";

const Categories = async () => {
  const categories = await prisma.category.findMany();
  return (
    <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6">
      {categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Categories;
