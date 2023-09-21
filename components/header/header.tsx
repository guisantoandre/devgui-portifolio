"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { Links } from "./links";

export function Header() {
   const [open, setOpen] = useState(false);
   const [hideMenu, setHideMenu] = useState(false);

   function openMenu() {
      setOpen(!open);
   }

   useEffect(() => {
      let lastScroll = 0;

      function handleScrollMenu() {
         const currentScroll = window.scrollY;

         if (currentScroll > lastScroll) setHideMenu(true);

         if (currentScroll < lastScroll) setHideMenu(false);

         lastScroll = currentScroll;
      }

      // Ouvinte de scroll para chamar a função handleScrollMenu
      window.addEventListener("scroll", handleScrollMenu);

      // Remover o ouvinte de scroll quando o componente é desmontado
      return () => {
         window.removeEventListener("scroll", handleScrollMenu);
      };
   }, []);

   return (
      <header
         className={`fixed right-0 bottom-0 ${
            open ? "translate-x-0" : "translate-x-[175px]"
         } transition py-8 z-50 bg-customblue-200/60 backdrop-blur-sm md:sticky md:top-0 md:translate-x-0 md:bg-customblue-300/60 md:transform md:duration-300 ${
            hideMenu ? "md:-translate-y-[100%]" : "md:-translate-y-0"
         }`}
      >
         <Container>
            <Links
               onClick={openMenu}
               open={open}
               onClose={() => setOpen(false)}
            />
         </Container>
      </header>
   );
}
