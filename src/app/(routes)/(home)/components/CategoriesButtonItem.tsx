import Link from "next/link";

import { Badge } from "@/components/ui";
import { CATEGORY_ICON } from "@/constants/CATEGORY_ICON";

type CategoriesButtonItemProps = {
  name: string;
  slug: string;
};

export const CategoriesButtonItem = ({
  name,
  slug
}: CategoriesButtonItemProps) => {
  return (
    <Link href={`/category/${slug}`}>
      <Badge
        variant="outline"
        className="flex justify-center gap-2 rounded-xl py-3 font-bold lg:text-sm"
      >
        {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
        {name}
      </Badge>
    </Link>
  );
};
