"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTransition } from "react";

import { createOrder } from "@/actions/order/createOrder";
import { createCheckout } from "@/actions/stripe/createCheckout";
import { TitleBadged } from "@/components/typography/TitleBadged";
import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui";
import { useToast } from "@/components/ui";
import { formatPrice } from "@/helpers/formatPrice";
import { useCartContext } from "@/hooks/useCartContext";

import { CartItem } from "./CartItem";
import { CartPricing } from "./CartPricing";

export const Cart = () => {
  const {
    cart,
    subtotalAmount,
    totalAmount,
    discountAmount,
    clearCart,
    cartQuantity
  } = useCartContext();

  const isCartEmpty = cart.length === 0;

  const formattedSubtotalAmount = formatPrice(subtotalAmount);
  const formattedDiscountAmount = formatPrice(discountAmount);
  const formattedTotalAmount = formatPrice(totalAmount);
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const session = useSession();
  const router = useRouter();

  const handleCheckout = () => {
    const userId = session.data?.user.id;

    if (!userId) {
      toast({
        title: "Erro ao finalizar compra",
        description: "Entre para realizar uma compra.",
        variant: "destructive"
      });
      return;
    }

    startTransition(async () => {
      const order = await createOrder(cart, userId);
      const sessionUrl = await createCheckout(cart, order.id);

      if (!sessionUrl) {
        toast({
          title: "Erro ao finalizar compra",
          description: "Tente novamente mais tarde.",
          variant: "destructive"
        });
        return;
      }

      clearCart();
      router.push(sessionUrl);
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Carrinho de compras"
          className="relative"
        >
          <ShoppingCart className="z-0" />
          <span
            className="absolute right-[3px] top-[-3px] z-50 text-[10px] font-bold text-primary"
            data-testid="cart-quantity"
            aria-label="Quantidade de itens do carrinho"
          >
            {cartQuantity}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-[90%] flex-col gap-8 lg:min-w-[500px]">
        <SheetHeader>
          <TitleBadged icon={<ShoppingCart />}>Carrinho</TitleBadged>
        </SheetHeader>

        <div className="scrollbar flex size-full flex-col gap-5 overflow-y-auto">
          {cart.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
          {isCartEmpty && (
            <span className="text-sm lg:text-base">
              Não há produtos no carrinho.
            </span>
          )}
        </div>

        {!isCartEmpty && (
          <>
            <CartPricing
              subtotalAmount={formattedSubtotalAmount}
              discountAmount={formattedDiscountAmount}
              totalAmount={formattedTotalAmount}
            />

            <Button
              onClick={handleCheckout}
              isLoading={isPending}
              className="lg:text-base"
            >
              Finalizar compra
            </Button>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
