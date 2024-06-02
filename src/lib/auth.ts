import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse
} from "next";
import { type AuthOptions, getServerSession } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/helpers/env";
import { prisma } from "@/lib/prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({ token }) {
      if (token.email) {
        const foundUser = await prisma.user.findUnique({
          where: { email: token.email },
          select: { id: true }
        });

        if (foundUser) {
          token.id = foundUser.id;
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    }
  }
};

export async function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return await getServerSession(...args, authOptions);
}
