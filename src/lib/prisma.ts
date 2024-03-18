import { PrismaClient } from "@prisma/client";

function getExtendedClient() {
  return new PrismaClient().$extends({
    result: {
      product: {
        totalPrice: {
          needs: { basePrice: true, discountPercentage: true },
          compute({ basePrice, discountPercentage }) {
            if (discountPercentage === 0) {
              return Number(basePrice);
            }
            const totalDiscount =
              Number(basePrice) * (discountPercentage / 100);

            return Number(basePrice) - totalDiscount;
          }
        }
      }
    }
  });
}

type ExtendedPrismaClient = ReturnType<typeof getExtendedClient>;
declare global {
  var cachedPrisma: ExtendedPrismaClient;
}

export let prisma: ExtendedPrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = getExtendedClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = getExtendedClient();
  }
  prisma = global.cachedPrisma;
}
