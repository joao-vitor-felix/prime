import Link from "next/link";

import ProductList from "@/components/ui/ProductList";
import SectionTitle from "@/components/ui/SectionTitle";

import { prisma } from "../../../prisma/client";
import CategoriesButtons from "./components/CategoriesButtons";
import PromoBanner from "./components/PromoBanner";

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  });

  const keyboards = await prisma.product.findMany({
    where: {
      category: {
        slug: "keyboards"
      }
    }
  });

  const mouses = await prisma.product.findMany({
    where: {
      category: {
        slug: "mouses"
      }
    }
  });

  return (
    <main>
      <div className="p-5">
        <Link href="/deals">
          <PromoBanner
            src="/banner-home-01.svg"
            alt="Produtos com até 55% de desconto neste mês"
          />
        </Link>
        <CategoriesButtons />

        <section className="mt-6">
          <Link href="/deals">
            <SectionTitle>OFERTAS</SectionTitle>
          </Link>
          <ProductList products={deals} />
        </section>

        <PromoBanner
          className="mt-6"
          src="/banner-home-02.svg"
          alt="Produtos com até 55% de desconto neste mês"
        />

        <section className="mt-6">
          <Link href="/category/keyboards">
            <SectionTitle>TECLADOS</SectionTitle>
          </Link>
          <ProductList products={keyboards} />
        </section>

        <PromoBanner
          className="mt-6"
          src="/banner-home-03.svg"
          alt="Até 20% de desconto em fones"
        />

        <section className="mt-6">
          <Link href="/category/mouses">
            <SectionTitle>MOUSES</SectionTitle>
          </Link>
          <ProductList products={mouses} />
        </section>
      </div>
    </main>
  );
}
