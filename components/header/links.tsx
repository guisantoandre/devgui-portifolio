"use client";

import { useEffect, useState } from "react";

import { Links } from "@/types/links";
import { DevGuiLogo } from "./devgui-logo";

export function Links() {
   const allLinks = [
      { text: "Sobre", href: "#about-me", active: false },
      { text: "Experiência", href: "#experience", active: false },
      { text: "Projetos", href: "#projects", active: false },
      { text: "Contato", href: "#contact", active: false },
   ];

   const [links, setLinks] = useState<Links[]>(allLinks);

   function handleLinkClick(clickedLink: Links) {
      const updatedLinks = links.map((link) => ({
         ...link,
         active: link === clickedLink ? true : false,
      }));

      setLinks(updatedLinks);
   }

   // Ativar link ao scrollar a página
   useEffect(() => {
      function handleScroll() {
         const scrollY = window.scrollY;

         // Verificar se o usuário está no topo da página
         if (scrollY === 0) {
            // Se estiver no topo, desative todos os links
            const updatedLinks = links.map((link) => ({
               ...link,
               active: false,
            }));
            setLinks(updatedLinks);
         }

         // Percorra todas as seções e verifique qual está visível
         for (const link of links) {
            const section = document.querySelector(
               `${link.href}`
            ) as HTMLElement;
            if (section) {
               const sectionTop = section.offsetTop - 150;
               const sectionHeight = section.offsetHeight;

               if (
                  scrollY >= sectionTop &&
                  scrollY < sectionTop + sectionHeight
               ) {
                  // A seção está visível, então atualize os links de navegação
                  handleLinkClick(link);
               }
            }
         }
      }

      // Ouvinte de scroll para chamar a função handleScroll
      window.addEventListener("scroll", handleScroll);

      // Remover o ouvinte de scroll quando o componente é desmontado
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [links]);

   return (
      <nav className="flex items-center justify-between">
         <a href="#">
            <DevGuiLogo />
         </a>
         <ul className="flex gap-10">
            {links.map((link) => (
               <li key={link.text} className={`tracking-wider`}>
                  <a
                     href={link.href}
                     className={`
                     relative after:block after:absolute after:w-[0%] after:h-[2px] after:duration-100  after:bg-white hover:after:w-[60%]
                     ${
                        link.active
                           ? "after:block after:w-[60%] after:h-[2px] after:bg-white"
                           : ""
                     }
                     `}
                     onClick={() => handleLinkClick(link)}
                  >
                     {link.text}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
}
