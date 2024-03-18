import { Product } from "@prisma/client";

export type ProductWithTotalPrice = Product & {
  totalPrice: number;
};
