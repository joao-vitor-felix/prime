import { BadgeCheck, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";

import {
  Button,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui";

import { Cart } from "./components/Cart";
import { Menu } from "./components/Menu";

export const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <div className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col gap-3 lg:min-w-[500px]"
          >
            <SheetTitle>Menu</SheetTitle>
            <Menu />
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex gap-1" aria-label="Logo da Prime">
          <BadgeCheck className="text-primary" />
          <span className="font-bold">Prime</span>
        </Link>

        <Cart />
      </div>
    </header>
  );
};
