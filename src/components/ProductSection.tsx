import { ComponentPropsWithRef } from "react";

export const ProductSection = ({
  children,
  ...props
}: ComponentPropsWithRef<"section">) => {
  return (
    <section
      className="grid grid-cols-2 justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-category-item-grid"
      {...props}
    >
      {children}
    </section>
  );
};
