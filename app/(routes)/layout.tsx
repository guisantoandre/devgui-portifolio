import { Metadata } from "next";

import { inter } from "@/utils/fonts";
import { Navbar } from "@/components/design-navbar/navbar";

export const metadata: Metadata = {
   title: "devgui - Portifólio Pessoal",
   description:
      "Este é um potifólio pessoal pra compartilhar um pouco sobre mim, meus trabalhos e habilidades.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" className="scroll-smooth relative">
         <body
            className={`${inter.variable} font-inter bg-neutral-50 text-black`}
         >
            <Navbar />
            {children}
         </body>
      </html>
   );
}
