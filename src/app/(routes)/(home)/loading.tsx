import { LucideLoader2 } from "lucide-react";

import { Container } from "@/components/ui";

export default function Loading() {
  return (
    <Container className="flex h-full items-center justify-center">
      <LucideLoader2 className="size-11 animate-spin text-primary" />
    </Container>
  );
}
