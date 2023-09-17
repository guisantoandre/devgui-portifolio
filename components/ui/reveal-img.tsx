import { motion } from "framer-motion";
import React from "react";

type RevealSvgProps = React.ComponentProps<"div"> & {
   className?: string;
};

export function RevealImg({ children, className }: RevealSvgProps) {
   const imgEntranceVariants = {
      initial: { opacity: 0, scale: 0.5 },
      animate: {
         opacity: 1,
         scale: 1,
         transition: {
            duration: 0.7,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
         },
      },
   };

   return (
      <motion.div
         variants={imgEntranceVariants}
         initial="initial"
         whileInView="animate"
         viewport={{
            once: true,
         }}
         className={`z-10 ${className}`}
      >
         {children}
      </motion.div>
   );
}
