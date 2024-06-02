import { Percent } from "lucide-react";
import { Metadata } from "next";

import { getDealProducts } from "@/actions/product/getDealProducts";
import { ProductItem } from "@/components/ProductItem";
import { TitleBadged } from "@/components/typography/TitleBadged";
import { Container } from "@/components/ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ofertas | Prime",
  description: "Ofertas de produtos"
};

const Deals = async () => {
  const deals = await getDealProducts();

  return (
    <Container>
      <TitleBadged icon={<Percent size={18} className="text-primary" />}>
        OFERTAS
      </TitleBadged>

      <section
        className="grid grid-cols-2 justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-category-item-grid"
        aria-label="Produtos em oferta"
      >
        {deals.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </Container>
  );
};

export default Deals;
