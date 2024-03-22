export const CATEGORIES = [
  "keyboards",
  "monitors",
  "headphones",
  "mousepads",
  "speakers",
  "mouses"
] as const;

export type Categories = (typeof CATEGORIES)[number];
