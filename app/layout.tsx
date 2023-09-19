import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/utils/fonts";

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
         <body className={`${inter.className} bg-customblue-300 text-white`}>
            {children}
         </body>
      </html>
   );
}
