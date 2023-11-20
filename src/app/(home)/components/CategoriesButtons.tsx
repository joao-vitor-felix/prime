import { prisma } from "../../../../prisma/client";
import CategoryButton from "./CategoryButton";

const CategoriesButtons = async () => {
  const categories = await prisma.category.findMany();
  return (
    <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6">
      {categories.map(category => (
        <CategoryButton category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoriesButtons;
