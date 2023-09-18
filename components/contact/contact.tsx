import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import { SocialMedia } from "./social-media";
import { sora } from "@/utils/fonts";
import { Emoji } from "@/components/ui/emoji";
import squareTopSvg from "@/assets/svgs/contact-square-top-bg.svg";

export function Contact() {
   return (
      <section id="contact" className="relative scroll-mt-24 min-h-[80vh]">
         <Container className="pt-20 min-h-[80vh] flex flex-col">
            <div className="grid justify-items-center">
               <Title isBlue className="mb-20">
                  Contato
               </Title>
            </div>
            <div className="max-w-lg text-center mb-10 m-auto md:text-right md:ml-auto md:mr-0">
               <p
                  className={`${sora.className} text-2xl leading-[1.3] mb-3 md:text-3xl`}
               >
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
            <div className="flex-1 py-14 px-16 space-y-20 bg-customgreen-100 rounded-t-[12px] text-customblue-400 flex flex-col justify-between items-center md:items-start">
               <h2>
                  <a
                     href="mailto:import.devgui@gmail.com"
                     className={`${sora.className} group text-2xl underline w-fit flex items-center gap-2 md:text-3xl`}
                  >
                     <img
                        src="/email-icon.svg"
                        alt="Email icon svg"
                        className="md:w-6"
                     />
                     import.devgui
                     <img
                        src="/arrow-up-right.svg"
                        alt="Arrow up icon svg"
                        className="transition-all ease-out group-hover:origin-center group-hover:-rotate-45 md:w-4"
                     />{" "}
                  </a>
               </h2>

               <div>
                  <div className="space-y-5 md:space-y-0 md:flex md:items-center gap-4 font-medium">
                     <SocialMedia href="https://github.com/guisantoandre">
                        <img src="/github-icon.svg" alt="Github icon svg" />
                        /guisantoandre
                     </SocialMedia>
                     <SocialMedia href="https://www.instagram.com/guisantoandre/">
                        <img
                           src="/instagram-icon.svg"
                           alt="Instagram icon svg"
                        />
                        /guisantoandre
                     </SocialMedia>
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
