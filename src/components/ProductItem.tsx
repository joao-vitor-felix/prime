import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/helpers/formatPrice";
import { ProductWithTotalPrice } from "@/types/ProductWithTotalPrice";

import { DiscountBadge } from "./DiscountBadge";

type ProductItemProps = {
  product: ProductWithTotalPrice;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const doesProductHaveDiscount = product.discountPercentage > 0;

  const totalPrice = formatPrice(product.totalPrice);
  const basePrice = formatPrice(Number(product.basePrice));

  return (
    <Link
      className="relative flex min-h-60 min-w-40 max-w-40 flex-col gap-4"
      href={`/product/${product.slug}`}
    >
      <div className="flex h-44 items-center justify-center rounded-lg bg-accent">
        <Image
          alt={`Imagem do produto ${product.name}`}
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="size-auto max-h-[60%] max-w-[70%] object-contain"
        />
      </div>

      {doesProductHaveDiscount && (
        <DiscountBadge
          discount={product.discountPercentage}
          className="absolute left-2 top-2 px-2"
        />
      )}

      <div className="flex flex-col">
        <span className="truncate text-sm">{product.name}</span>
        <div className="flex items-center gap-2">
          {doesProductHaveDiscount && (
            <span className="font-bold">{totalPrice}</span>
          )}

          <span
            className={
              doesProductHaveDiscount
                ? "truncate text-xs line-through opacity-75"
                : "font-bold"
            }
          >
            {basePrice}
          </span>
        </div>
        {/* TODO: RATING */}
      </div>
    </Link>
  );
};
