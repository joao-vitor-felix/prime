"use server";

import { prisma } from "@/lib/prisma";

export const getOrders = async (userId: string) => {
  const orders = await prisma.order.findMany({
    where: {
      userId
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  });

  return orders;
};
