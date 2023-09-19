"use client";

import { useEffect, useState } from "react";

import { allLinks } from "@/utils/all-links";
import { Links } from "@/types/links";

type LinksProps = {
   onClick: () => void;
   open: boolean;
};

export function Links({ onClick, open }: LinksProps) {
   const [links, setLinks] = useState<Links[]>(allLinks);

   function handleClickedLink(clickedLink: Links) {
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

         // Percorre todas as seções e verifica qual está visível
         for (let link of links) {
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
                  handleClickedLink(link);
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
      // md:flex-row md:items-center
      <nav className="relative flex flex-col justify-between gap-y-10">
         <div
            className="absolute -top-8 -left-20 bg-customblue-400 rounded-tl-[12px] rounded-bl-[12px] p-5 cursor-pointer md:hidden"
            onClick={() => onClick()}
         >
            <img
               src="/open-menu-icon.svg"
               alt="Open menu icon"
               className={`${open ? "hidden" : "block"} w-[18px]`}
            />
            <img
               src="/close-menu-icon.svg"
               alt="Open menu icon"
               className={`${open ? "block" : "hidden"} w-[18px]`}
            />
         </div>
         <a href="#">
            <img src="/devgui-logo.png" alt="Devgui logo" />
         </a>
         {/* md:flex-row md:items-center */}
         <ul className="flex flex-col gap-10">
            {links.map((link) => (
               <li key={link.text} className={`tracking-wider`}>
                  <a
                     href={link.href}
                     className={`
                     relative flex items-center gap-x-3 text-sm md:text-base md:after:block md:after:absolute md:after:w-[0%] md:after:h-[2px] md:after:duration-100 md:after:bg-white md:hover:after:w-[60%]
                     ${
                        link.active
                           ? "md:after:block md:after:w-[60%] md:after:h-[2px] md:after:bg-white"
                           : ""
                     }
                     `}
                     onClick={() => handleClickedLink(link)}
                  >
                     <img src={link.icon} alt="asdfa" />
                     {link.text}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
}
