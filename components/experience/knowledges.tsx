"use client";

import React, { useEffect, useState } from "react";

import { sora } from "@/utils/fonts";
import { KnowledgesType } from "@/types/knowledges-types";
import { RevealKnowledges } from "./reveal-knowledges-animation";

type KnowledgesProps = React.ComponentProps<"ul"> & {
   data: KnowledgesType[];
};

export function Knowledges({ data }: KnowledgesProps) {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) {
      return null;
   }

   return (
      <div className="mb-20">
         <h3 className="mb-2 uppercase font-bold text-sm text-customgrey-300">
            Conhecimentos:
         </h3>
         <ul className="space-y-4">
            {data.map((knowledge) => (
               <li
                  key={knowledge.title}
                  className="relative overflow-hidden bg-customgrey-200 p-5 grid gap-x-3 gap-y-2 grid-cols-[auto_1fr] border-l-4 border-customgreen-100 rounded-[3px]"
               >
                  <img
                     src={knowledge.icon}
                     alt={`${knowledge.title} icon`}
                     className="mt-[3px]"
                  />
                  <h4
                     className={`${sora.className} col-span-2 col-start-2 font-bold text-lg`}
                  >
                     {knowledge.title}
                  </h4>
                  {knowledge.text.map((item, index) => (
                     <h5
                        key={index}
                        className="flex items-center col-sh3an-2 col-start-2 before:block before:bg-customgreen-100 before:rounded-full before:w-1 before:h-1 before:absolute before:-ml-6"
                     >
                        {item}
                        <RevealKnowledges index={index} />
                     </h5>
                  ))}
               </li>
            ))}
         </ul>
      </div>
   );
}
