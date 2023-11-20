import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { PropsWithChildren } from "react";

import Footer from "@/components/ui/Footer";
import Navigation from "@/components/ui/Navigation/Navigation";
import { AuthProvider } from "@/providers/auth";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime",
  description: "Sua loja online de alto nível."
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className={manrope.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <Navigation />
            <div className="flex-1">{children}</div>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
