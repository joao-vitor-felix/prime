import { Separator } from "@/components/ui";

type CartPricingProps = {
  subtotalAmount: string;
  totalAmount: string;
  discountAmount: string;
};

export const CartPricing = ({
  subtotalAmount,
  discountAmount,
  totalAmount
}: CartPricingProps) => {
  return (
    <div className="flex flex-col gap-3 text-xs lg:text-base">
      <Separator />
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span data-testid="cart-subtotal-amount">{subtotalAmount}</span>
      </div>

      <Separator />
      <div className="flex justify-between">
        <span>Entrega</span>
        <span>Grátis</span>
      </div>
      <Separator />
      <div className="flex justify-between">
        <span>Descontos</span>
        <span data-testid="cart-discount-amount">- {discountAmount}</span>
      </div>
      <Separator />
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span data-testid="cart-total-amount">{totalAmount}</span>
      </div>
    </div>
  );
};
