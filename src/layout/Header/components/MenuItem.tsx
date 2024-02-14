import Link from "next/link";
import { ComponentPropsWithRef, ReactNode } from "react";

import { Button } from "@/components/ui";

type MenuItemProps = {
  href: string;
  icon: ReactNode;
  linkChildren: ReactNode;
} & ComponentPropsWithRef<"a">;

const MenuItem = ({ linkChildren, href, icon, ...props }: MenuItemProps) => {
  return (
    <Button variant="outline" asChild>
      <Link href={href} className="flex gap-2" {...props}>
        {icon}
        {linkChildren}
      </Link>
    </Button>
  );
};

export default MenuItem;
