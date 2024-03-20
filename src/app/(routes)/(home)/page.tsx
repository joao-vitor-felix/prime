import Link from "next/link";

import { getProductsByCategory } from "@/actions/getProductsByCategory";
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

  const keyboards = await getProductsByCategory("keyboards");
  const mouses = await getProductsByCategory("mouses");

  return (
    <main className="mt-7 flex flex-col gap-7 px-5">
      <Link href="#" aria-label="Produtos com até 55% de desconto">
        <PromoBanner
          src="banner-discount-mobile.svg"
          width={0}
          height={0}
          className="w-full"
          alt="Banner exibindo produtos com até 55% de desconto"
        />
      </Link>

      <CategoriesButtonList />

      <section className="flex flex-col gap-5" aria-label="Ofertas">
        <Title>OFERTAS</Title>
        <ProductList products={deals} />
      </section>

      <Link href="#" aria-label="Mouses com até 55% de desconto">
        <PromoBanner
          src="banner-mouses-mobile.svg"
          width={0}
          height={0}
          className="w-full"
          alt="Banner exibindo mouses com até 55% de desconto"
        />
      </Link>

      <section className="flex flex-col gap-5" aria-label="Teclados">
        <Title>TECLADOS</Title>
        <ProductList products={keyboards} />
      </section>

      <Link href="#" aria-label="Fones com até 55% de desconto">
        <PromoBanner
          src="banner-fones-mobile.svg"
          width={0}
          height={0}
          className="w-full"
          alt="Banner exibindo fones com até 55% de desconto"
        />
      </Link>

      <section className="mb-5 flex flex-col gap-5" aria-label="Mouses">
        <Title>MOUSES</Title>
        <ProductList products={mouses} />
      </section>
    </main>
  );
}
