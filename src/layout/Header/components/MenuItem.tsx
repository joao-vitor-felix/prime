import Link from "next/link";
import { ComponentPropsWithRef, ReactNode } from "react";

import { Button, SheetClose } from "@/components/ui";

type MenuItemProps = {
  href: string;
  icon: ReactNode;
  linkChildren: ReactNode;
} & ComponentPropsWithRef<"a">;

export const MenuItem = ({
  linkChildren,
  href,
  icon,
  ...props
}: MenuItemProps) => {
  return (
    <SheetClose asChild>
      <Button variant="outline" asChild>
        <Link href={href} className="flex gap-2 lg:text-base" {...props}>
          {icon}
          {linkChildren}
        </Link>
      </Button>
    </SheetClose>
  );
};
