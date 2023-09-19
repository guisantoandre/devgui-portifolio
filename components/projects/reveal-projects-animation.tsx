"use client";

import React from "react";
import { motion } from "framer-motion";

import { CodingProjectsType } from "@/types/projects";
import { sora } from "@/utils/fonts";

type RevealProjectsProps = {
   index: number;
   item: CodingProjectsType;
};

export function RevealProjects({ item, index }: RevealProjectsProps) {
   const fadeInAnimationVariants = {
      initial: {
         opacity: 0,
         y: 100,
      },
      animate: (index: number) => ({
         opacity: 1,
         y: 0,
         transition: {
            delay: 0.05 * index,
         },
      }),
   };

   return (
      <motion.li
         variants={fadeInAnimationVariants}
         initial="initial"
         whileInView="animate"
         viewport={{
            once: true,
         }}
         custom={index}
         key={item.title}
         className="bg-[#10101E] flex items-center justify-between gap-3 p-5 rounded-[3px] border border-[#23232F] cursor-pointer group transition-all ease-out hover:duration-200 hover:scale-[1.02] hover:bg-customgreen-100"
      >
         <div className="flex items-center gap-3">
            <h4
               className={`${sora.className} relative flex items-center gap-3 font-bold transition-all ease-out duration-500 group-hover:text-customblue-400 before:block before:w-[2px] before:h-4 before:bg-gradient-to-b before:from-customgreen-100 before:to-customgreen-200 group-hover:before:from-customblue-400 group-hover:before:to-customblue-400`}
            >
               {item.title}
            </h4>
            <div className="flex gap-2">
               {item.icons.map((icon, index) => (
                  <img
                     key={index}
                     src={icon.src}
                     alt={icon.alt}
                     className="w-5"
                  />
               ))}
            </div>
         </div>
         <img
            src="/arrow-up-right.svg"
            alt="Arrow up icon svg"
            className="transition-all ease-out group-hover:origin-center group-hover:-rotate-45"
         />
      </motion.li>
   );
}
