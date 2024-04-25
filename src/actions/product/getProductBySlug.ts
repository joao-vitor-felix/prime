"use server";

import { prisma } from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  const product = await prisma.product.findFirst({
    where: {
      slug
    },
    include: {
      category: {
        select: {
          products: {
            where: {
              slug: {
                not: slug
              }
            }
          }
        }
      }
    }
  });

  return product;
};
