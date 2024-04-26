"use client";

import { ShoppingCart } from "lucide-react";

import { TitleBadged } from "@/components/typography/TitleBadged";
import {
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui";
import { formatPrice } from "@/helpers/formatPrice";
import { useCartContext } from "@/hooks/useCartContext";

import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart } = useCartContext();

  const isCartEmpty = cart.length === 0;

  const subtotalAmount = formatPrice(
    cart.reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.basePrice) * currentValue.quantity,
      0
    )
  );

  const discountAmount = formatPrice(
    cart.reduce(
      (accumulator, currentValue) =>
        accumulator +
        (Number(currentValue.basePrice) - currentValue.totalPrice) *
          currentValue.quantity,
      0
    )
  );

  const totalAmount = formatPrice(
    cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.totalPrice * currentValue.quantity,
      0
    )
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart aria-label="Carrinho de compras" />
      </SheetTrigger>

      <SheetContent className="flex w-[90%] flex-col gap-8">
        <SheetHeader>
          <TitleBadged icon={<ShoppingCart />}>Carrinho</TitleBadged>
        </SheetHeader>

        <div className="flex size-full flex-col gap-5 overflow-y-auto">
          {cart.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
          {isCartEmpty && <span>Não há produtos no carrinho.</span>}
        </div>

        {!isCartEmpty && (
          <>
            <div className="flex flex-col gap-3 text-xs">
              <Separator />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotalAmount}</span>
              </div>

              <Separator />
              <div className="flex justify-between">
                <span>Entrega</span>
                <span>Grátis</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Descontos</span>
                <span>- {discountAmount}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Total</span>
                <span>{totalAmount}</span>
              </div>
            </div>
            <Button>Finalizar compra</Button>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
