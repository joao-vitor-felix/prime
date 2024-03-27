import Link from "next/link";

import { getCategoryWithProducts } from "@/actions/category/getCategoryWithProducts";
import { ProductList } from "@/components/ProductList";
import { Title } from "@/components/typography/Title";
import { Container } from "@/components/ui";
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

  const keyboards = await getCategoryWithProducts("keyboards");
  const mouses = await getCategoryWithProducts("mouses");

  return (
    <Container>
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
        {/* TODO: levar para página de ofertas */}
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
        {/* TODO: levar para página de teclados */}
        <Title>TECLADOS</Title>
        <ProductList products={keyboards.products} />
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
        {/* TODO: levar para página de mouses */}
        <Title>MOUSES</Title>
        <ProductList products={mouses.products} />
      </section>
    </Container>
  );
}
