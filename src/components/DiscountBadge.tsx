import { ArrowDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "./ui";

type DiscountBadgeProps = {
  className?: string;
  discount: number;
};

export const DiscountBadge = ({ className, discount }: DiscountBadgeProps) => {
  return (
    <Badge className={cn("w-fit", className)}>
      <ArrowDown size={16} />
      <span className="font-bold">{discount}%</span>
    </Badge>
  );
};
