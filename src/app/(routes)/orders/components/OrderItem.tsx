/* eslint-disable no-case-declarations */
"use client";

import { OrderStatus } from "@prisma/client";
import { format } from "date-fns";
import { useMemo, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Separator
} from "@/components/ui";
import { formatPrice } from "@/helpers/formatPrice";
import { CartPricing as OrderPricing } from "@/layout/Header/components/CartPricing";
import { OrderWithTotalPrice } from "@/types/OrderProductWithTotalPrice";

import { OrderProductItem } from "./OrderProductItem";

type OrderItemProps = {
  order: OrderWithTotalPrice;
  isOpen: boolean;
};

const getOrderStatus = (status: OrderStatus) => {
  switch (status) {
    case "WAITING_FOR_PAYMENT":
      return <span className="text-light-gray">Pendente</span>;

    case "PAYMENT_CONFIRMED":
      return <span className="text-primary">Pago</span>;

    default:
      const _exhaustiveCheck: never = status;
      return _exhaustiveCheck;
  }
};

export const OrderItem = ({ order, isOpen }: OrderItemProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

  const subtotalAmount = useMemo(() => {
    return order.orderProducts.reduce((accumulator, currentValue) => {
      return (
        accumulator + Number(currentValue.basePrice) * currentValue.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const totalAmount = useMemo(() => {
    return order.orderProducts.reduce((accumulator, currentValue) => {
      return (
        accumulator + currentValue.product.totalPrice * currentValue.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const discountAmount = subtotalAmount - totalAmount;

  const formattedSubtotalAmount = formatPrice(subtotalAmount);
  const formattedDiscountAmount = formatPrice(discountAmount);
  const formattedTotalAmount = formatPrice(totalAmount);

  const toggleAccordion = (value: string | undefined) => {
    if (!value) {
      setIsAccordionOpen(false);
      return;
    }

    if (value === order.id) {
      setIsAccordionOpen(false);
      return;
    }

    setIsAccordionOpen(true);
  };

  return (
    <Accordion
      type="single"
      collapsible
      value={isAccordionOpen ? order.id : undefined}
      onValueChange={value => toggleAccordion(value)}
    >
      <AccordionItem value={order.id}>
        <AccordionTrigger>
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold">
              Pedido com{" "}
              {`${order.orderProducts.length} ${order.orderProducts.length > 1 ? "produtos" : "produto"}`}
            </span>
            <span className="text-xs text-light-gray">
              {format(order.createdAt, "dd/MM/yyyy 'às' HH:mm")}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex flex-col text-xs font-bold">
              <span>STATUS</span>
              {getOrderStatus(order.status)}
            </div>
            <div className="flex flex-col text-xs font-bold">
              <span>DATA</span>
              <span className="text-light-gray">
                {format(order.createdAt, "dd/MM/yyyy")}
              </span>
            </div>
            <div className="flex flex-col text-xs font-bold">
              <span>PAGAMENTO</span>
              <span className="text-light-gray">Cartão</span>
            </div>
          </div>
          <Separator className="text-light-gray" />
          {order.orderProducts.map(product => (
            <OrderProductItem orderProduct={product} key={product.id} />
          ))}
          <OrderPricing
            subtotalAmount={formattedSubtotalAmount}
            discountAmount={formattedDiscountAmount}
            totalAmount={formattedTotalAmount}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
