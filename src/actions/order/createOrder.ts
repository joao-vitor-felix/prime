"use server";

import { prisma } from "@/lib/prisma";
import { CartProduct } from "@/providers/Cart";

export const createOrder = async (products: CartProduct[], userId: string) => {
  const order = await prisma.order.create({
    data: {
      userId,
      orderProducts: {
        createMany: {
          data: products.map(product => ({
            basePrice: product.basePrice,
            productId: product.id,
            quantity: product.quantity,
            discountPercentage: product.discountPercentage
          }))
        }
      }
    }
  });

  return order;
};
