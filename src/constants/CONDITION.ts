import { ProductCondition } from "@prisma/client";

type ConditionLabel = "Novo" | "Usado";

type Condition = {
  [key in ProductCondition]: ConditionLabel;
};

export const CONDITION: Condition = {
  NEW: "Novo",
  USED: "Usado"
};
