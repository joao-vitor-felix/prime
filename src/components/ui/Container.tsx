import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
  ...props
}: ComponentProps<"main">) => {
  return (
    <main
      className={cn(
        "flex flex-col gap-7 px-5 py-8 container lg:gap-10",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
};
