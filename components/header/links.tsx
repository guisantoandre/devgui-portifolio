"use client";

import { useEffect, useState } from "react";

import { allLinks } from "@/utils/all-links";
import { Links } from "@/types/links";

type LinksProps = {
   onClick: () => void;
   onClose: () => void;
   open: boolean;
};

export function Links({ onClick, open, onClose }: LinksProps) {
   const [links, setLinks] = useState<Links[]>(allLinks);

   function handleClickedLink(clickedLink: Links) {
      const updatedLinks = links.map((link) => ({
         ...link,
         active: link === clickedLink ? true : false,
      }));

      setLinks(updatedLinks);
      onClose();
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
      <nav className="relative flex flex-col justify-between gap-y-10 md:flex-row md:items-center">
         <div
            className="absolute -top-[32px] -left-[69px] bg-customblue-100/60 backdrop-blur-sm rounded-tl-[4px] rounded-bl-[4px] py-4 px-2 cursor-pointer select-none md:hidden"
            onClick={() => onClick()}
         >
            <img
               src="/open-menu-icon.svg"
               alt="Open menu icon"
               className={`${open ? "hidden" : "block"} w-[17px]`}
            />
            <img
               src="/close-menu-icon.svg"
               alt="Open menu icon"
               className={`${open ? "block" : "hidden"} w-[17px]`}
            />
         </div>
         <a href="#">
            <img
               src="/devgui-logo.png"
               alt="Devgui logo"
               className="w-[90px] md:w-[110px]"
            />
         </a>

         <ul className="flex flex-col gap-10 md:flex-row md:items-center">
            {links.map((link) => (
               <li key={link.text} className={`tracking-wider`}>
                  <a
                     href={link.href}
                     className={`
                     relative flex items-center gap-x-3 text-sm md:block md:text-base md:after:block md:after:absolute md:after:w-[0%] md:after:h-[2px] md:after:duration-100 md:after:bg-white md:hover:after:w-[60%]
                     ${
                        link.active
                           ? "md:after:block md:after:w-[60%] md:after:h-[2px] md:after:bg-white"
                           : ""
                     }
                     `}
                     onClick={() => handleClickedLink(link)}
                  >
                     <img
                        src={link.icon}
                        alt="icon menu"
                        className="md:hidden"
                     />
                     {link.text}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
}
