import React from "react";

type TitleProps = React.ComponentProps<"h3"> & {
   isBlue?: boolean;
   className?: string;
};

export function Title({ children, isBlue, className, ...props }: TitleProps) {
   return (
      <h3
         className={`inline-block rounded-full px-5 py-2 font-bold ${className} ${
            isBlue
               ? "bg-[#131328] text-[#69698E]"
               : "bg-[#E6E8EA] text-[#68727D]"
         }`}
         {...props}
      >
         {children}
      </h3>
   );
}
