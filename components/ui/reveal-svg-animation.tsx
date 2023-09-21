import { motion } from "framer-motion";
import React from "react";

type RevealSvgProps = React.ComponentProps<"span">;

export function RevealSvg({ children }: RevealSvgProps) {
   return (
      <motion.span
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         viewport={{
            once: true,
         }}
         transition={{
            duration: 3,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
         }}
      >
         {children}
      </motion.span>
   );
}
