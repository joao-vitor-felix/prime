import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";
import { cn } from "@/lib/utils";
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
      <body className={cn("flex flex-col", manrope.className)}>
        <AuthProvider>
          <Header />
          <div className="grow">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
