"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import detail1 from "@/assets/svgs/aboutme-detail1.svg";
import detail2 from "@/assets/svgs/aboutme-detail2.svg";
import cornerDetail from "@/assets/svgs/aboutme-corner-detail.svg";
import { RevealImg } from "@/components/ui/reveal-img-animation";

export function AboutMe() {
   const textEntranceVariants = {
      initial: {
         opacity: 0,
         x: -200,
      },
      animate: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 1,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
         },
      },
   };

   return (
      <section
         id="about-me"
         className="scroll-mt-8 bg-customblue-400 min-h-[90vh] md:scroll-mt-10"
      >
         <Container className="relative py-20 min-h-[90vh] flex flex-col items-center">
            <Title isBlue className="md:mb-6">
               Sobre mim
            </Title>
            <div className="relative flex-1 grid grid-cols-1 gap-6 place-items-center mt-20 min-[900px]:grid-cols-3 md:mt-0">
               {/* Profile picture */}
               <RevealImg className="relative w-full h-[300px] min-[800px]:h-[350px]">
                  <Image
                     src="/me.png"
                     alt="Profile picture"
                     fill
                     sizes="100vw"
                     className="object-contain"
                  />
               </RevealImg>

               {/* Short text about me */}
               <motion.div
                  variants={textEntranceVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                     once: true,
                  }}
                  className="relative bg-customblue-300 border-[2px] border-customblue-100 border-dashed rounded-[3px] p-7 shadow-lg min-[900px]:col-span-2 before:block before:w-[4px] before:h-7 before:bg-gradient-to-b before:from-customgreen-100 before:to-customgreen-200 before:absolute before:top-6 before:-left-1 z-10"
               >
                  <div className="leading-[1.5] text-sm md:text-base">
                     <p className="mb-4">
                        Olá, meu nome é Guilherme, entusiasta na área de
                        programação que dedica boa parte dos estudos em{" "}
                        <strong>HTML</strong>, <strong>CSS</strong> e{" "}
                        <strong>JavaScript</strong>, mas com foco principal em
                        tecnologias como <strong>ReactJS</strong>,{" "}
                        <strong>TypeScript</strong>,{" "}
                        <strong>Tailwind CSS</strong>, <strong>NextJS</strong> e{" "}
                        <strong>
                           <Link
                              href="https://github.com/guisantoandre"
                              target="_blank"
                              className="text-customgreen-100 underline"
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
               </motion.div>
               <Image
                  src={detail1}
                  alt="About me detail svg"
                  className="absolute top-[10%] right-0"
                  aria-hidden
               />
               <Image
                  src={detail2}
                  alt="About me detail svg"
                  className="hidden md:absolute md:block md:bottom-[5%] md:left-[35%]"
                  aria-hidden
               />
            </div>
            <Image
               src={cornerDetail}
               alt="About me detail svg"
               className="hidden md:block md:absolute md:top-20 md:left-5"
               aria-hidden
            />
            <Image
               src={cornerDetail}
               alt="About me detail svg"
               className="hidden md:block md:absolute md:top-20 md:right-5 rotate-90"
               aria-hidden
            />
            <Image
               src={cornerDetail}
               alt="About me detail svg"
               className="hidden md:block md:absolute md:bottom-20 md:right-5 rotate-180"
               aria-hidden
            />
            <Image
               src={cornerDetail}
               alt="About me detail svg"
               className="hidden md:block md:absolute md:bottom-20 md:left-5 -rotate-90"
               aria-hidden
            />
         </Container>
      </section>
   );
}
