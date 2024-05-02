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
  const { cart, subtotalAmount, totalAmount, discountAmount } =
    useCartContext();

  const isCartEmpty = cart.length === 0;

  const formattedSubtotalAmount = formatPrice(subtotalAmount);
  const formattedDiscountAmount = formatPrice(discountAmount);
  const formattedTotalAmount = formatPrice(totalAmount);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Carrinho de compras">
          <ShoppingCart />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex w-[90%] flex-col gap-8">
        <SheetHeader>
          <TitleBadged icon={<ShoppingCart />}>Carrinho</TitleBadged>
        </SheetHeader>

        <div className="flex size-full flex-col gap-5 overflow-y-auto">
          {cart.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
          {isCartEmpty && (
            <span className="text-sm">Não há produtos no carrinho.</span>
          )}
        </div>

        {!isCartEmpty && (
          <>
            <div className="flex flex-col gap-3 text-xs">
              <Separator />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span data-testid="cart-subtotal-amount">
                  {formattedSubtotalAmount}
                </span>
              </div>

              <Separator />
              <div className="flex justify-between">
                <span>Entrega</span>
                <span>Grátis</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Descontos</span>
                <span data-testid="cart-discount-amount">
                  - {formattedDiscountAmount}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Total</span>
                <span data-testid="cart-total-amount">
                  {formattedTotalAmount}
                </span>
              </div>
            </div>
            <Button>Finalizar compra</Button>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
