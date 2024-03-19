"use server";

import { Categories } from "@/constants/CATEGORIES.";
import { prisma } from "@/lib/prisma";

export const getProductsByCategory = async (category: Categories) => {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  });

  return products;
};
