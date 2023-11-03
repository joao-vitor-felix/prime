import { ProductWithTotalPrice } from "@/helpers/product";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./DiscountBadge";

type ProductItemProps = {
  product: ProductWithTotalPrice;
  className?: string;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, className }) => {
  const formatPrice = (price: number): string => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  const hasDiscount = product.discountPercentage > 0;

  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn("flex min-w-[156px] flex-col gap-4", className)}
    >
      <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="max-h-[55%] w-auto max-w-[80%] object-contain"
          alt={`Imagem do produto ${product.name}`}
        />

        {product.discountPercentage > 0 && (
          <DiscountBadge className="absolute left-2 top-3">
            {product.discountPercentage}
          </DiscountBadge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <span className="truncate text-sm">{product.name}</span>

        <div className="flex items-center gap-2 truncate">
          {hasDiscount && (
            <span className="font-semibold">
              {formatPrice(product.totalPrice)}
            </span>
          )}

          <span
            className={
              hasDiscount ? "text-xs line-through opacity-75" : "font-semibold"
            }
          >
            {formatPrice(Number(product.basePrice))}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
