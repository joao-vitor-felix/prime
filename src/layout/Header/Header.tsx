import { BadgeCheck, Menu as MenuIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";

import {
  Button,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui";

import { Menu } from "./components/Menu";

export const Header = () => {
  return (
    <header className="border shadow-sm">
      <div className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Abrir menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col gap-3">
            <SheetTitle>Menu</SheetTitle>
            <Menu />
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex gap-1" aria-label="Logo da Prime">
          <BadgeCheck className="text-primary" />
          <span className="font-bold">Prime</span>
        </Link>

        <Button
          variant="outline"
          size="icon"
          aria-label="Abrir carrinho de compras"
        >
          <ShoppingCart />
        </Button>
      </div>
    </header>
  );
};
