import { BadgeCheck, Menu, ShoppingCart } from "lucide-react";

import {
  Button,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui";

import _Menu from "./components/Menu/Menu";

const Header = () => {
  return (
    <header className="rounded-lg border shadow-sm">
      <div className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Abrir Menu">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col gap-3">
            <SheetTitle>Menu</SheetTitle>
            <_Menu />
          </SheetContent>
        </Sheet>

        <div className="flex gap-1" aria-label="Logo da Prime">
          <BadgeCheck className="text-primary" />
          <span className="font-bold">Prime</span>
        </div>

        <Button
          variant="outline"
          size="icon"
          aria-label="Seu carrinho de compras"
        >
          <ShoppingCart />
        </Button>
      </div>
    </header>
  );
};

export default Header;
