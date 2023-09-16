import React from "react";

type SocialMediaProps = React.ComponentProps<"h4"> & {
   href: string;
};

export function SocialMedia({ children, href }: SocialMediaProps) {
   return (
      <h4>
         <a
            href={href}
            target="_blank"
            className="underline flex items-center gap-2"
         >
            {children}
         </a>
      </h4>
   );
}
