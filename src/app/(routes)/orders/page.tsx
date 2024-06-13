import { ShoppingBasket } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { getOrders } from "@/actions/order/getOrders";
import { TitleBadged } from "@/components/typography/TitleBadged";
import { Button, Container } from "@/components/ui";
import { auth } from "@/lib/auth";

import { OrderItem } from "./components/OrderItem";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pedidos | Prime",
  description: "Pedidos"
};

const Orders = async () => {
  const session = await auth();

  if (!session) return;

  const orders = await getOrders(session?.user.id);

  const noOrdersFound = orders.length === 0;

  return (
    <Container>
      <TitleBadged icon={<ShoppingBasket size={18} className="text-primary" />}>
        Pedidos
      </TitleBadged>
      {noOrdersFound && (
        <p className="text-sm lg:text-2xl">
          Não há pedidos no momento.{" "}
          <Button
            asChild
            variant="link"
            className="inline-flex p-0 text-sm lg:text-2xl"
          >
            <Link href="/deals">Fazer pedido agora!</Link>
          </Button>
        </p>
      )}
      {orders
        .toSorted(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((order, index) => (
          <OrderItem order={order} key={order.id} isOpen={index === 0} />
        ))}
    </Container>
  );
};

export default Orders;
