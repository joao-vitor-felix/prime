import {
  BadgeCheck,
  HomeIcon,
  Library,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon
} from "lucide-react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../Sheet";

const Navigation = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col gap-2">
          <SheetHeader className="text-lg font-semibold">Menu</SheetHeader>
          <Button variant="outline" className="w-full gap-2">
            <LogInIcon size={20} className="text-primary" />
            Fazer login
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <HomeIcon size={20} className="text-primary" />
            Início
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <PercentIcon size={20} className="text-primary" />
            Ofertas
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <Library size={20} className="text-primary" />
            Catálogo
          </Button>
        </SheetContent>
      </Sheet>

      <h1 className="flex gap-1 font-semibold">
        <span className="text-primary">
          <BadgeCheck />{" "}
        </span>
        Prime
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Navigation;
