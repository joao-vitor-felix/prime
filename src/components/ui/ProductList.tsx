import { Product } from "@prisma/client";
import ProductItem from "./ProductItem";
import { computeProductTotalPrice } from "@/helpers/product";

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
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
