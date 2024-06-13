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
      <div className="flex max-h-20 min-h-20 min-w-20 max-w-20 items-center justify-center rounded-lg bg-accent lg:max-h-24 lg:min-h-24 lg:min-w-24 lg:max-w-24">
        <Link href={`product/${orderProduct.product.slug}`}>
          <Image
            src={orderProduct.product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100wv"
            className="max-h-16 min-w-16 max-w-16 object-contain lg:min-w-20 lg:max-w-20"
            alt={`Imagem do produto ${orderProduct.product.name}`}
          />
        </Link>
      </div>

      <div className="flex w-full flex-col justify-center gap-2">
        <h3 className="truncate text-xs lg:text-base">
          {orderProduct.product.name}
        </h3>
        {doesProductHasDiscount ? (
          <div className="flex justify-between">
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
              >
                {basePrice}
              </span>
            </div>
            <span className="text-xs text-light-gray lg:hidden">
              Qtd: {orderProduct.quantity}
            </span>
            <span className="hidden text-sm text-light-gray lg:block">
              Quantidade: {orderProduct.quantity}
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
      </div>
    </div>
  );
};
