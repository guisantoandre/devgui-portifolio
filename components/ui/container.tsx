import React from "react";

type ContainerProps = React.ComponentProps<"div">;

export function Container({ children, className }: ContainerProps) {
   return (
      <div className={`w-full max-w-[1280px] mx-auto px-5 ${className}`}>
         {children}
      </div>
   );
}
