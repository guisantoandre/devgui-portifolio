import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import meSvg from "@/assets/svgs/me.svg";
import detail1 from "@/assets/svgs/aboutme-detail1.svg";
import detail2 from "@/assets/svgs/aboutme-detail2.svg";

export function AboutMe() {
   return (
      <section
         id="about-me"
         className="scroll-mt-36 bg-customblue-400 h-screen"
      >
         <Container className="py-20 h-full flex flex-col items-center">
            <Title text="Sobre mim" isBlue />
            <div className="relative h-full grid grid-cols-1 gap-4 place-items-center mt-20 md:grid-cols-5 md:mt-0">
               <div className="md:col-span-2 md:justify-self-start z-10">
                  <Image
                     src={meSvg}
                     alt="Profile picture"
                     className="max-[500px]:w-[80%] max-[500px]:m-auto"
                  />
               </div>
               <div className="relative bg-customblue-300 border-[2px] border-customblue-100 border-dashed rounded-[3px] p-7 shadow-lg md:col-span-3 after:block after:w-[4px] after:h-7 after:bg-gradient-to-b after:from-customgreen-100 after:to-customgreen-200 after:absolute after:top-6 after:-left-1 z-10">
                  <div className="leading-[1.5] text-sm md:text-base">
                     <p className="mb-4">
                        Olá, meu nome é Guilherme, sou apaixonado por tecnologia
                        e entusiasta na área de programação onde dedico boa
                        parte dos meus estudos em <strong>HTML</strong>,{" "}
                        <strong>CSS</strong> e <strong>JavaScript</strong>.
                        Também me aventuro em outras tecnologias como ReactJS,
                        <strong>Typescript</strong>, <strong>Tailwind</strong>,{" "}
                        <strong>NextJS</strong> e{" "}
                        <strong>
                           <Link
                              href="https://github.com/guisantoandre"
                              target="_blank"
                              className="text-customgreen-100 hover:underline"
                           >
                              Git.
                           </Link>
                        </strong>
                     </p>
                     <p>
                        Tenho facilidade em aprender e trabalhar em equipe, além
                        de estar constantemente atualizado com as novidades do
                        mercado, e sempre em busca de novos desafios e
                        aprendizados.
                     </p>
                  </div>
               </div>
               <Image
                  src={detail1}
                  alt="About me detail svg"
                  className="absolute top-[15%] right-0"
               />
               <Image
                  src={detail2}
                  alt="About me detail svg"
                  className="hidden md:block md:absolute md:-top-[5%] md:left-0"
               />
               <Image
                  src={detail2}
                  alt="About me detail svg"
                  className="hidden md:block md:absolute md:-top-[5%] md:right-0 rotate-90"
               />
               <Image
                  src={detail2}
                  alt="About me detail svg"
                  className="hidden md:block md:absolute md:bottom-0 md:right-0 rotate-180"
               />
               <Image
                  src={detail2}
                  alt="About me detail svg"
                  className="hidden md:block md:absolute md:bottom-0 md:left-0 -rotate-90"
               />
            </div>
         </Container>
      </section>
   );
}
