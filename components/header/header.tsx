"use client";

import { Container } from "@/components/ui/container";
import { DevGuiLogo } from "./devgui-logo";
import { Links } from "./links";

export function Header() {
   return (
      <header className="sticky top-0 bg-customblue-400/65 backdrop-blur-sm py-10 z-50">
         <Container>
            <div className="flex items-center justify-between">
               <a href="#">
                  <DevGuiLogo />
               </a>
               <Links />
            </div>
         </Container>
      </header>
   );
}
