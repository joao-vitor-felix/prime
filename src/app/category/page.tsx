import { Library } from "lucide-react";

import { Badge } from "@/components/ui/Badge";

import { prisma } from "../../../prisma/client";
import CategoryList from "./components/CategoryList";

const Categories = async () => {
  const categories = await prisma.category.findMany();

  return (
    <main className="p-5">
      <Badge
        variant="outline"
        className="flex h-9 w-fit gap-1 border-[1px] border-primary px-3 py-[0.375rem]"
      >
        <Library size={20} className="text-primary" />
        <span className="text-base font-bold">CATÁLOGO</span>
      </Badge>
      <CategoryList categories={categories} />
    </main>
  );
};

export default Categories;
