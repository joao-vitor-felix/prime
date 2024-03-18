import Link from "next/link";

import { ProductList } from "@/components/ProductList";
import { Title } from "@/components/typography/Title";
import { prisma } from "@/lib/prisma";

import { CategoriesButtonList } from "./components/CategoriesButtonList";
import { PromoBanner } from "./components/PromoBanner";

export const dynamic = "force-dynamic";

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  });

  return (
    <main className="mt-7 flex flex-col gap-7 px-5">
      <Link href="#" aria-label="Produtos com até 55% de desconto">
        <PromoBanner
          src="banner-discount-mobile.svg"
          width={0}
          height={0}
          className="w-full"
          alt="Produtos com até 55% de desconto"
        />
      </Link>
      <CategoriesButtonList />
      <Title>OFERTAS</Title>
      <ProductList products={deals} />
    </main>
  );
}
