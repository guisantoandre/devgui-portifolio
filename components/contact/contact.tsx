import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import squareTopSvg from "@/assets/svgs/contact-square-top-bg.svg";
import { Emoji } from "../ui/emoji";
import { sora } from "@/utils/fonts";

export function Contact() {
   return (
      <section id="contact" className="relative scroll-mt-36 min-h-[75vh]">
         <Container className="pt-20 min-h-[75vh] flex flex-col">
            <div className="grid justify-items-center">
               <Title isBlue className="mb-20">
                  Contato
               </Title>
            </div>
            <div className="max-w-lg text-right ml-auto mr-0 mb-10">
               <p className={`${sora.className} text-2xl leading-[1.3] mb-3`}>
                  <span className="inline-block">Algum projeto em mente?</span>
                  <span className="inline-block">Vamos trabalhar juntos</span>
               </p>
               <p>
                  Estou disponível para novos trabalhos. Entre em contato comigo
                  e marcamos uma conversa.{" "}
                  <Emoji
                     role="img"
                     aria-label="Earth icon img"
                     aria-hidden="true"
                  >
                     👋
                  </Emoji>
               </p>
            </div>
            <div className="flex-1 py-12 px-16 space-y-20 bg-[#D0EA33] rounded-t-[24px] text-customblue-400 flex flex-col justify-between">
               <h2>
                  <a
                     href="mailto:import.devgui@gmail.com"
                     className={`${sora.className} text-2xl underline flex items-center gap-2`}
                  >
                     icone import.devgui
                  </a>
               </h2>

               <div>
                  <div className="flex items-center gap-4">
                     <h4>
                        <span>icone</span> /guisantoandre
                     </h4>
                     <h4>
                        <span>icone</span> /guisantoandre
                     </h4>
                  </div>
               </div>
            </div>
         </Container>
         <Image
            src={squareTopSvg}
            alt="Square top svg background"
            className="absolute top-0 w-full"
         />
      </section>
   );
}
