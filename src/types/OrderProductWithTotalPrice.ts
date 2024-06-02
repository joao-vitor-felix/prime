import { Order, OrderProduct } from "@prisma/client";

import { ProductWithTotalPrice } from "./ProductWithTotalPrice";

export type OrderProductWithProductTotalPrice = OrderProduct & {
  product: ProductWithTotalPrice;
};

export type OrderWithTotalPrice = Order & {
  orderProducts: OrderProductWithProductTotalPrice[];
};
