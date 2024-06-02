import { ShoppingBasket } from "lucide-react";
import { Metadata } from "next";

import { getOrders } from "@/actions/order/getOrders";
import { TitleBadged } from "@/components/typography/TitleBadged";
import { Container } from "@/components/ui";
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

  return (
    <Container>
      <TitleBadged icon={<ShoppingBasket size={18} className="text-primary" />}>
        Pedidos
      </TitleBadged>
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
