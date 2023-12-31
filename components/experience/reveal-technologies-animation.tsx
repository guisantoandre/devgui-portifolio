"use client";

import { motion } from "framer-motion";
import React from "react";

type RevealItemsProps = React.ComponentProps<"li"> & {
   index: number;
};

export function RevealItems({ children, index }: RevealItemsProps) {
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
         key={index}
         className="relative px-4 py-3 font-medium rounded-[3px] bg-customgrey-200 before:block before:w-[3px] before:h-4 before:bg-gradient-to-b before:from-customgreen-100 before:to-customgreen-200 before:absolute before:top-4 before:-left-[2px]"
      >
         {children}
      </motion.li>
   );
}
