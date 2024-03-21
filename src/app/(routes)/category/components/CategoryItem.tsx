import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type CategoryItemProps = {
  category: Category;
};

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link
      className="flex h-48 w-40 flex-col"
      href={`/category/${category.slug}`}
    >
      <div className="flex size-full items-center justify-center rounded-t-lg bg-category-item-gradient">
        <Image
          src={category.imageUrl}
          alt={`Imagem da categoria ${category.name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-3/5 object-contain"
        />
      </div>
      <span className="w-full rounded-b-lg bg-accent py-4 text-center text-sm font-bold text-white">
        {category.name}
      </span>
    </Link>
  );
};
