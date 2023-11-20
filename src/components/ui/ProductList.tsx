import { Product } from "@prisma/client";

import { computeProductTotalPrice } from "@/helpers/product";
import { cn } from "@/lib/utils";

import ProductItem from "./ProductItem";

type ProductListProps = {
  products: Product[];
  className?: string;
};

const ProductList: React.FC<ProductListProps> = ({ products, className }) => {
  return (
    <div
      className={cn(
        "flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden",
        className
      )}
    >
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
          className="w-[156px]"
        />
      ))}
    </div>
  );
};

export default ProductList;
