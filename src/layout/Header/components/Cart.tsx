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
  const { cart, subtotalAmount, totalAmount, discountAmount, clearCart } =
    useCartContext();

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
            <CartPricing
              subtotalAmount={formattedSubtotalAmount}
              discountAmount={formattedDiscountAmount}
              totalAmount={formattedTotalAmount}
            />

            <Button onClick={handleCheckout} isLoading={isPending}>
              Finalizar compra
            </Button>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
