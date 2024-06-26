"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { DiscountBadge } from "@/components/DiscountBadge";
import { Button, useToast } from "@/components/ui";
import { CONDITION } from "@/constants/CONDITION";
import { formatPrice } from "@/helpers/formatPrice";
import { useCartContext } from "@/hooks/useCartContext";
import { CartProduct } from "@/providers/Cart";
import { ProductWithTotalPrice } from "@/types/ProductWithTotalPrice";

type ProductDetailsProps = {
  product: ProductWithTotalPrice;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const doesProductHasStock = product.stock > 0;
  const doesProductHasDiscount = product.discountPercentage > 0;
  const buttonText = doesProductHasStock
    ? "Adicionar ao carrinho"
    : "Produto indisponível";

  const totalPrice = formatPrice(product.totalPrice);
  const basePrice = formatPrice(Number(product.basePrice));

  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleAddToCart = () => {
    if (!doesProductHasStock) return;

    const productToAdd: CartProduct = {
      id: product.id,
      name: product.name,
      imageUrls: product.imageUrls,
      discountPercentage: product.discountPercentage,
      basePrice: product.basePrice,
      totalPrice: product.totalPrice,
      quantity
    };

    addToCart(productToAdd);
    setQuantity(1);
    toast({
      title: "Produto adicionado ao carrinho!",
      variant: "success"
    });
  };

  return (
    <div className="flex flex-col gap-4 lg:w-2/5 lg:rounded-[10px] lg:bg-accent lg:p-10">
      <div className="flex flex-col">
        <span
          className="text-xs text-light-gray lg:text-sm"
          role="status"
          aria-label="Informações do produto"
        >
          {CONDITION[product.condition]} | {product.sold} vendidos
        </span>
        <h1 className="text-lg lg:text-2xl">{product.name}</h1>
        {/* TODO: RATING */}
      </div>
      {doesProductHasStock && (
        <>
          <div className="flex flex-col">
            {doesProductHasDiscount ? (
              <>
                <div className="flex gap-2">
                  <h2
                    className="text-lg font-bold lg:text-2xl"
                    aria-label="Preço total"
                  >
                    {totalPrice}
                  </h2>
                  <DiscountBadge discount={product.discountPercentage} />
                </div>
                <span
                  className="text-sm line-through opacity-75 lg:text-base"
                  data-testid="product-base-price"
                >
                  {basePrice}
                </span>
              </>
            ) : (
              <h2
                className="text-lg font-bold lg:text-2xl"
                aria-label="Preço base"
              >
                {basePrice}
              </h2>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="link"
              className="size-8 p-0"
              onClick={handleDecreaseQuantity}
              aria-label={`Diminuir quantidade do produto ${product.name}`}
            >
              <ChevronLeft />
            </Button>
            <span
              className="text-sm lg:text-base"
              role="status"
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
              <ChevronRight />
            </Button>
          </div>
        </>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold lg:text-base">Descrição</h3>
        <p className="hyphens-auto break-words text-xs leading-5 text-light-gray lg:text-sm lg:leading-6">
          {product.description}
        </p>
      </div>

      <Button
        className={`font-bold ${doesProductHasStock ? "bg-primary" : "bg-light-gray"}`}
        onClick={handleAddToCart}
        disabled={!doesProductHasStock}
      >
        {buttonText}
      </Button>
    </div>
  );
};
