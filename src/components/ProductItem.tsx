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
    <Link className="relative flex min-w-40 flex-col gap-4" href="#">
      <div className="flex h-52 min-h-28 items-center justify-center rounded-lg bg-accent">
        <Image
          alt={`Imagem do produto ${product.name}`}
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="max-h-[60%] min-w-[80%] object-contain"
        />
      </div>
      <DiscountBadge
        discount={product.discountPercentage}
        className="absolute left-2 top-3 px-[0.5rem]"
      />
      <div className="flex flex-col">
        <span className="truncate text-sm">{product.name}</span>
        <div className="flex items-center gap-2 truncate">
          <span className="font-bold">{totalPrice}</span>
          {doesProductHaveDiscount && (
            <span className="text-xs line-through opacity-75">{basePrice}</span>
          )}
        </div>
        {/* TODO: RATING */}
      </div>
    </Link>
  );
};
