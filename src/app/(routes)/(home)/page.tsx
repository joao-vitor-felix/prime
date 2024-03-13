import Link from "next/link";

import { PromoBanner } from "./components/PromoBanner";

export default function Home() {
  return (
    <main className="mt-7 flex flex-col gap-7 px-5">
      <Link href="#" aria-label="Produtos com até 55% de desconto">
        <PromoBanner
          src="banner-discount-mobile.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full"
          alt="Produtos com até 55% de desconto"
        />
      </Link>
    </main>
  );
}
