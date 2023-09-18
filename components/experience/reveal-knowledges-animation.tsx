"use client";

import { motion } from "framer-motion";

const revealKnowledgeVariants = {
   initial: {
      translateX: 0,
   },
   animate: (index: number) => ({
      translateX: 1500,
      transition: {
         delay: 0.15 * index,
         duration: 0.8,
      },
   }),
};

export function RevealKnowledges({ index }: { index: number }) {
   return (
      <motion.div
         variants={revealKnowledgeVariants}
         initial="initial"
         whileInView="animate"
         viewport={{
            once: true,
         }}
         custom={index}
         className="absolute inset-0 bg-customgreen-100"
      />
   );
}
