import { NextRequest } from "next/server";
import Stripe from "stripe";

import { env } from "@/helpers/env";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-04-10"
    });

    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response("No signature", { status: 400 });
    }

    const text = await req.text();

    const event = stripe.webhooks.constructEvent(
      text,
      signature,
      env.STRIPE_WEBHOOK_SECRET_KEY
    );

    if (event.type === "checkout.session.completed") {
      const orderId = event.data.object.metadata?.orderId;

      prisma.$transaction(async tx => {
        const order = await tx.order.update({
          where: {
            id: orderId
          },
          data: {
            status: "PAYMENT_CONFIRMED"
          },
          include: {
            orderProducts: {
              include: {
                product: true
              }
            }
          }
        });

        await tx.product.updateMany({
          where: {
            id: {
              in: order.orderProducts.map(
                orderProduct => orderProduct.productId
              )
            }
          },
          data: {
            stock: {
              decrement: order.orderProducts.reduce(
                (accumulator, currentValue) => {
                  return accumulator + currentValue.quantity;
                },
                0
              )
            },
            sold: {
              increment: 1
            }
          }
        });
      });
    }

    return new Response("Success", { status: 200 });
  } catch (error) {
    if (error instanceof Stripe.errors.StripeSignatureVerificationError) {
      return new Response("Invalid signature", { status: 400 });
    }

    console.error(error);
  }
}
