"use client";

import { DiscountBadge } from "@/components/DiscountBadge";
import { Button } from "@/components/ui";
import { CONDITION } from "@/constants/CONDITION";
import { formatPrice } from "@/helpers/formatPrice";
import { ProductWithTotalPrice } from "@/types/ProductWithTotalPrice";

type ProductDetailsProps = {
  product: ProductWithTotalPrice;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const DoesProductHasStock = product.stock > 0;
  const DoesProductHasDiscount = product.discountPercentage > 0;
  const buttonText = DoesProductHasStock
    ? "Adicionar ao carrinho"
    : "Produto indisponível";

  const totalPrice = formatPrice(product.totalPrice);
  const basePrice = formatPrice(Number(product.basePrice));

  const handleAddToCart = () => {
    if (!DoesProductHasStock) return;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-xs text-light-gray">
          {CONDITION[product.condition]} | {product.sold} vendidos
        </span>
        <h1 className="text-lg">{product.name}</h1>
        {/* TODO: RATING */}
      </div>
      {DoesProductHasStock && (
        <>
          <div className="flex flex-col">
            {DoesProductHasDiscount ? (
              <>
                <div className="flex gap-2">
                  <h2 className="text-lg font-bold">{totalPrice}</h2>
                  <DiscountBadge discount={product.discountPercentage} />
                </div>
                <span className="text-sm line-through opacity-75">
                  {basePrice}
                </span>
              </>
            ) : (
              <h2 className="text-lg font-bold">{basePrice}</h2>
            )}
          </div>
          {/* TODO: Quantidade */}
          {/* <div className="flex flex-col">QUANTIDADE</div> */}
        </>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold">Descrição</h3>
        <p className="hyphens-auto break-words text-xs leading-5 text-light-gray">
          {product.description}
        </p>
      </div>

      <Button
        className={`font-bold ${DoesProductHasStock ? "bg-primary" : "bg-light-gray"}`}
        onClick={handleAddToCart}
        disabled={!DoesProductHasStock}
      >
        {buttonText}
      </Button>
    </div>
  );
};
