import { ProductWithTotalPrice } from "@/types/ProductWithTotalPrice";

import { ProductItem } from "./ProductItem";

type ProductListProps = {
  products: ProductWithTotalPrice[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
