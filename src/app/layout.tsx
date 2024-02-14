import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Header from "@/layout/Header/Header";
import { AuthProvider } from "@/providers/auth";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime",
  description: "Sua loja online de alto nível."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={manrope.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
