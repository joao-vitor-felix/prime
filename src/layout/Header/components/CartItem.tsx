import { Trash } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

import { Button } from "@/components/ui";
import { formatPrice } from "@/helpers/formatPrice";
import { useCartContext } from "@/hooks/useCartContext";
import { CartProduct } from "@/providers/Cart";

import { CartQuantity } from "./CartQuantity";

type CartItemProps = {
  product: CartProduct;
};

export const CartItem = memo(({ product }: CartItemProps) => {
  const { clearFromCart } = useCartContext();

  const doesProductHasDiscount = product.discountPercentage > 0;
  const totalPrice = formatPrice(product.totalPrice);
  const basePrice = formatPrice(Number(product.basePrice));

  return (
    <div className="flex w-full gap-4">
      <div className="flex max-h-20 min-h-20 min-w-20 max-w-20 items-center justify-center rounded-lg bg-accent lg:min-w-24 lg:max-w-24">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100wv"
          className="max-h-16 min-w-14 max-w-16 object-contain lg:min-w-16"
          alt={`Imagem do produto ${product.name}`}
        />
      </div>

      <div className="flex w-1/2 flex-col">
        <h3 className="truncate break-words text-xs lg:text-base">
          {product.name}
        </h3>
        {doesProductHasDiscount ? (
          <div className="flex items-center gap-1">
            <h2
              className="text-sm font-bold lg:text-base"
              aria-label="Preço total"
            >
              {totalPrice}
            </h2>
            <span
              className="text-xs line-through opacity-75"
              aria-label="Preço base"
              data-testid="cart-item-base-price"
            >
              {basePrice}
            </span>
          </div>
        ) : (
          <h2
            className="text-sm font-bold lg:text-base"
            aria-label="Preço base"
          >
            {basePrice}
          </h2>
        )}
        <CartQuantity product={product} />
      </div>

      <Button
        variant="link"
        className="size-8 p-0"
        onClick={() => clearFromCart(product)}
        aria-label={`Remover produto ${product.name}`}
      >
        <Trash className="size-5" />
      </Button>
    </div>
  );
});

CartItem.displayName = "CartItem";
