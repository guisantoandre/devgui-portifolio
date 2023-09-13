"use client";

import { Container } from "@/components/ui/container";
import { Links } from "./links";

export function Header() {
   return (
      <header className="sticky top-0 bg-customblue-300/60 backdrop-blur-sm py-10 z-50">
         <Container>
            <Links />
         </Container>
      </header>
   );
}
