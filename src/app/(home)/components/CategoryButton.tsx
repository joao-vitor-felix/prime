import { Category } from "@prisma/client";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { CATEGORY_ICON } from "@/constants/category-icon";

type CategoryButtonProps = {
  category: Category;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg py-3"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryButton;
