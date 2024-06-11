"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui";
import { useCartContext } from "@/hooks/useCartContext";
import { CartProduct } from "@/providers/Cart";

type CartQuantity = {
  product: CartProduct;
};

export const CartQuantity = ({ product }: CartQuantity) => {
  const { incrementQuantity, decrementQuantity } = useCartContext();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="link"
        className="size-8 p-0"
        onClick={() => decrementQuantity(product)}
        aria-label={`Diminuir quantidade do produto ${product.name}`}
      >
        <ChevronLeft className="size-5 lg:size-6" />
      </Button>
      <span
        className="text-sm lg:text-base"
        data-testid="cart-item-quantity"
        aria-label={`Quantidade do produto ${product.name}`}
      >
        {product.quantity}
      </span>
      <Button
        variant="link"
        className="size-8 p-0"
        onClick={() => incrementQuantity(product)}
        aria-label={`Aumentar quantidade do produto ${product.name}`}
      >
        <ChevronRight className="size-5 lg:size-6" />
      </Button>
    </div>
  );
};
