import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { PropsWithChildren } from "react";
import { AuthProvider } from "@/providers/auth";
import Navigation from "@/components/ui/Navigation/Navigation";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime",
  description: "Sua loja online de alto nível."
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className={manrope.className}>
        <AuthProvider>
          <Navigation />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
