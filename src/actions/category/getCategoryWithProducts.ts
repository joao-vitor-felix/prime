"use server";

import { Categories } from "@/constants/CATEGORIES.";
import { prisma } from "@/lib/prisma";

export const getCategoryWithProducts = async (slug: Categories) => {
  const category = await prisma.category.findFirstOrThrow({
    where: {
      slug
    },
    include: {
      products: true
    }
  });

  return category;
};
