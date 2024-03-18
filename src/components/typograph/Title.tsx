import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const Title = ({ className, ...props }: ComponentProps<"h3">) => {
  return (
    <h3 className={cn("font-bold", className)} {...props}>
      {props.children}
    </h3>
  );
};
