import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge, BadgeProps } from "../ui";

type BadgeTitleProps = BadgeProps & {
  icon?: ReactNode;
};

export const TitleBadged = ({
  icon,
  children,
  className,
  ...props
}: BadgeTitleProps) => {
  return (
    <Badge
      className={cn(
        "flex w-fit gap-1 px-3 py-1 border-[1px] border-primary",
        className
      )}
      variant="outline"
      {...props}
    >
      {icon}
      <span className="text-base font-bold uppercase">{children}</span>
    </Badge>
  );
};
