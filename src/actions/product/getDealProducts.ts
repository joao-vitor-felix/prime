"use server";

import { prisma } from "@/lib/prisma";

export const getDealProducts = async () => {
  const deals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  });

  return deals;
};
