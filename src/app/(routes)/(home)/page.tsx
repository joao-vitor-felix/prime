import Link from "next/link";

import { getCategoryWithProducts } from "@/actions/category/getCategoryWithProducts";
import { getDealProducts } from "@/actions/product/getDealProducts";
import { ProductList } from "@/components/ProductList";
import { Title } from "@/components/typography/Title";
import { Container } from "@/components/ui";

import { CategoriesButtonList } from "./components/CategoriesButtonList";
import { PromoBanner } from "./components/PromoBanner";

export default async function Home() {
  const deals = await getDealProducts();
  const keyboards = await getCategoryWithProducts("keyboards");
  const mouses = await getCategoryWithProducts("mouses");

  return (
    <>
      <Link href="/deals">
        <PromoBanner
          src="/banner-deals-desktop.png"
          width={0}
          height={0}
          sizes="100wv"
          className="hidden w-full lg:block"
          alt="Banner exibindo produtos com até 55% de desconto"
        />
      </Link>
      <Container className="lg:pt-0">
        <Link href="/deals" aria-label="Produtos com até 55% de desconto">
          <PromoBanner
            src="banner-discount-mobile.svg"
            width={0}
            height={0}
            className="w-full lg:hidden"
            alt="Banner exibindo produtos com até 55% de desconto"
          />
        </Link>

        <CategoriesButtonList />

        <section className="flex flex-col gap-5" aria-label="Ofertas">
          <div className="flex w-fit items-center gap-2">
            <Title>OFERTAS</Title>
            <Link href="/deals" className="text-xs font-bold text-primary">
              Ver mais
            </Link>
          </div>
          <ProductList products={deals} />
        </section>

        <div className="flex gap-9">
          <Link
            href="/category/mouses"
            aria-label="Mouses com até 55% de desconto"
            className="flex-1"
          >
            <PromoBanner
              src="banner-mouses-mobile.svg"
              width={0}
              height={0}
              className="w-full"
              alt="Banner exibindo mouses com até 55% de desconto"
            />
          </Link>

          <Link
            href="/category/headphones"
            aria-label="Fones com até 55% de desconto"
            className="hidden flex-1 lg:flex"
          >
            <PromoBanner
              src="banner-fones-mobile.svg"
              width={0}
              height={0}
              className="w-full"
              alt="Banner exibindo fones com até 55% de desconto"
            />
          </Link>
        </div>

        <section className="flex flex-col gap-5" aria-label="Teclados">
          <div className="flex w-fit items-center gap-2">
            <Title>TECLADOS</Title>
            <Link
              href="/category/keyboards"
              className="text-xs font-bold text-primary"
            >
              Ver mais
            </Link>
          </div>

          <ProductList products={keyboards.products} />
        </section>

        <Link
          href="/category/headphones"
          aria-label="Fones com até 55% de desconto"
          className="lg:hidden"
        >
          <PromoBanner
            src="banner-fones-mobile.svg"
            width={0}
            height={0}
            className="w-full"
            alt="Banner exibindo fones com até 55% de desconto"
          />
        </Link>

        <section className="mb-5 flex flex-col gap-5" aria-label="Mouses">
          <div className="flex w-fit items-center gap-2">
            <Title>MOUSES</Title>
            <Link
              href="/category/mouses"
              className="text-xs font-bold text-primary"
            >
              Ver mais
            </Link>
          </div>

          <ProductList products={mouses.products} />
        </section>
      </Container>
    </>
  );
}
