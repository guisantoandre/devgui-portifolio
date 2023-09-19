"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { Links } from "./links";

export function Header() {
   const [open, setOpen] = useState(false);

   function openMenu() {
      setOpen(!open);
   }

   return (
      // md:sticky md:top-0
      <header
         className={`fixed right-0 top-1/2 transform -translate-y-1/2 ${
            open ? "translate-x-0" : "translate-x-[90%]"
         } transition-all duration-150 py-8 z-50 bg-customblue-400 md:bg-customblue-300/60 md:backdrop-blur-sm`}
      >
         <Container>
            <Links onClick={openMenu} open={open} />
         </Container>
      </header>
   );
}
