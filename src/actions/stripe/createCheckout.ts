"use server";

import { Stripe } from "stripe";

import { env } from "@/helpers/env";
import { CartProduct } from "@/providers/Cart";

export const createCheckout = async (
  products: CartProduct[],
  orderId: string
) => {
  const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10"
  });

  const stripeCheckout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: products.map(product => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: product.name,
          images: [product.imageUrls[0]]
        },
        unit_amount: product.totalPrice * 100
      },
      quantity: product.quantity
    })),
    mode: "payment",
    metadata: {
      orderId
    },
    // TODO: redirect to /orders
    success_url: `${env.HOST_URL}/category`,
    cancel_url: `${env.HOST_URL}`
  });

  return stripeCheckout.url;
};
