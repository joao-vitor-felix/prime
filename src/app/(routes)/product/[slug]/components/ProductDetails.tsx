"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { DiscountBadge } from "@/components/DiscountBadge";
import { Button } from "@/components/ui";
import { CONDITION } from "@/constants/CONDITION";
import { formatPrice } from "@/helpers/formatPrice";
import { useCartContext } from "@/hooks/useCartContext";
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

  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!DoesProductHasStock) return;

    addToCart({ ...product, quantity: quantity });
    setQuantity(1);
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
          <div className="flex items-center gap-2">
            <Button
              variant="link"
              className="size-8 p-0"
              onClick={handleDecreaseQuantity}
              aria-label={`Diminuir quantidade do produto ${product.name}`}
            >
              <ChevronLeft size={20} />
            </Button>
            <span
              className="text-sm"
              aria-label={`Quantidade do produto ${product.name}`}
            >
              {quantity}
            </span>
            <Button
              variant="link"
              className="size-8 p-0"
              onClick={handleIncreaseQuantity}
              aria-label={`Aumentar quantidade do produto ${product.name}`}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
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
