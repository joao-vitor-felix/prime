import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const CategoryItem: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="flex h-48 w-40 flex-col"
    >
      <div className="flex h-36 w-full items-center justify-center rounded-t-lg bg-primary">
        <Image
          src={category.imageUrl}
          width={100}
          height={53}
          alt={`Imagem da categoria ${category.name}`}
        />
      </div>
      <span className="h-10 w-full rounded-b-lg bg-accent text-center align-middle text-sm font-bold leading-9">
        {category.name}
      </span>
    </Link>
  );
};

export default CategoryItem;
