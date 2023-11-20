import { Category } from "@prisma/client";

import CategoryItem from "./CategoryItem";

const CategoryList: React.FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <div className="mt-6 grid grid-cols-2 place-items-center gap-4">
      {categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;
