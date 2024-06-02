import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/helpers/formatPrice";
import { OrderProductWithProductTotalPrice } from "@/types/OrderProductWithTotalPrice";

type OrderProductItemProps = {
  orderProduct: OrderProductWithProductTotalPrice;
};

export const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const doesProductHasDiscount = orderProduct.product.discountPercentage > 0;
  const totalPrice = formatPrice(orderProduct.product.totalPrice);
  const basePrice = formatPrice(Number(orderProduct.product.basePrice));

  return (
    <div className="flex w-full gap-4">
      <div className="flex max-h-20 min-h-20 min-w-20 max-w-20 items-center justify-center rounded-lg bg-accent">
        <Link href={`product/${orderProduct.product.slug}`}>
          <Image
            src={orderProduct.product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100wv"
            className="max-h-16 min-w-14 max-w-16 object-contain"
            alt={`Imagem do produto ${orderProduct.product.name}`}
          />
        </Link>
      </div>

      <div className="flex w-full flex-col justify-center gap-2">
        <h3 className="truncate text-xs">{orderProduct.product.name}</h3>
        {doesProductHasDiscount ? (
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <h2 className="text-sm font-bold" aria-label="Preço total">
                {totalPrice}
              </h2>
              <span
                className="text-xs line-through opacity-75"
                aria-label="Preço base"
              >
                {basePrice}
              </span>
            </div>
            <span className="text-xs text-light-gray">
              Qtd: {orderProduct.quantity}
            </span>
          </div>
        ) : (
          <h2 className="text-sm font-bold" aria-label="Preço base">
            {basePrice}
          </h2>
        )}
      </div>
    </div>
  );
};
