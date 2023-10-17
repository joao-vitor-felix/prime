import { BadgeCheck, MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "../Button";
import { Card } from "../Card";

const Navigation = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>
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
