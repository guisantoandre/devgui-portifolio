"use client";

import { Links } from "@/types/links";
import { useState } from "react";

export function Links() {
   const allLinks = [
      { text: "Sobre", href: "#about-me", active: false },
      { text: "Experiência", href: "#experience", active: false },
      { text: "Projetos", href: "#projects", active: false },
      { text: "Contato", href: "#contact", active: false },
   ];

   const [links, setLinks] = useState<Links[]>(allLinks);

   const handleLinkClick = (clickedLink: Links) => {
      const updatedLinks = links.map((link) => ({
         ...link,
         active: link === clickedLink ? true : false,
      }));

      setLinks(updatedLinks);
   };

   return (
      <nav>
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
