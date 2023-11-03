import Categories from "./components/Categories";
import { prisma } from "../../../prisma/client";
import ProductList from "@/components/ui/ProductList";
import SectionTitle from "@/components/ui/SectionTitle";
import PromoBanner from "./components/PromoBanner";

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  });
  return (
    <main className="p-5">
      <PromoBanner
        src="/banner-home-01.svg"
        alt="Produtos com até 55% de desconto neste mês"
      />

      <Categories />

      <section className="mt-6">
        <SectionTitle>OFERTAS</SectionTitle>
        <ProductList products={deals} />
      </section>

      <PromoBanner
        className="mt-6"
        src="/banner-home-02.svg"
        alt="Produtos com até 55% de desconto neste mês"
      />
    </main>
  );
}
