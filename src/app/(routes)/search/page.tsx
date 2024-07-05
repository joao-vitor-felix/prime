import { Metadata } from "next";

import { ProductItem } from "@/components/ProductItem";
import { ProductSection } from "@/components/ProductSection";
import { Container } from "@/components/ui";
import { prisma } from "@/lib/prisma";
import { ProductWithTotalPrice } from "@/types/ProductWithTotalPrice";

import { Searchbox } from "./components/Searchbox";

export const metadata: Metadata = {
  title: "Pesquise por produtos | Prime"
};

type SearchProps = {
  searchParams: {
    name: string;
  };
};

const Search = async ({ searchParams: { name } }: SearchProps) => {
  let products: ProductWithTotalPrice[] = [];
  let isPrismaCalled = false;

  if (name) {
    isPrismaCalled = true;
    products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              startsWith: name,
              mode: "insensitive"
            }
          },
          {
            name: {
              contains: name,
              mode: "insensitive"
            }
          },
          {
            name: {
              endsWith: name,
              mode: "insensitive"
            }
          }
        ]
      }
    });
  }

  return (
    <Container>
      <Searchbox name={name} />
      {!isPrismaCalled && (
        <p className="text-sm lg:text-2xl">
          Pesquise por seus produtos favoritos agora mesmo!
        </p>
      )}

      {isPrismaCalled && products.length === 0 && (
        <p className="text-sm lg:text-2xl">Produto não encontrado {":("}</p>
      )}

      <ProductSection>
        {products.map(product => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ProductSection>
    </Container>
  );
};

export default Search;
