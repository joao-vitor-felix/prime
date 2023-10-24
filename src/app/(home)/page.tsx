import Image from "next/image";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main className="p-5">
      <Image
        src="/banner-home-01.svg"
        alt="Produtos com até 55% de desconto neste mês"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100wv"
      />
      <Categories />
    </main>
  );
}
