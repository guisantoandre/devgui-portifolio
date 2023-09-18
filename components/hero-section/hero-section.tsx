"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { sora } from "@/utils/fonts";
import { HeroImg } from "./hero-img";
import { Container } from "@/components/ui/container";
import { Emoji } from "@/components/ui/emoji";
import { RevealSvg } from "@/components/ui/reveal-svg-animation";
import { RevealImg } from "@/components/ui/reveal-img-animation";
import underlineSvg from "@/assets/svgs/underline-svg.svg";
import scrollSvg from "@/assets/svgs/scroll-icon.svg";
import arrowSvg from "@/assets/svgs/arrow-detail.svg";
import circleSvg from "@/assets/svgs/circle-detail.svg";
import squareSvg from "@/assets/svgs/square-detail.svg";
import blurSvg from "@/assets/svgs/blur-detail.svg";
import squareBottomBg from "@/assets/svgs/hero-square-bottom-bg.svg";

export function HeroSection() {
   const fadeInAnimationVariants = {
      initial: {
         opacity: 0,
         y: 100,
      },
      animate: {
         opacity: 1,
         y: 0,
      },
   };

   return (
      <section className="h-[calc(100vh-118px)] relative overflow-hidden">
         <Container className="h-full relative">
            <div className="h-full grid place-content-center md:gap-4 min-[830px]:pt-0 min-[830px]:grid-cols-5 min-[830px]:items-center">
               {/* Hero text left */}
               <div className="md:col-span-3 md:justify-self-start z-20">
                  <div className={`md:ml-[7%] ${sora.className}`}>
                     <motion.h2
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                           duration: 0.4,
                           delay: 0.2,
                           ease: "easeInOut",
                        }}
                        className="relative max-w-[11ch] font-semibold leading-[1.2] text-[36px] min-[500px]:text-[48px] md:leading-[1.14] lg:text-7xl before:content-['{'] before:inline-block before:bg-gradient-to-b before:from-customgreen-100 before:to-customgreen-200 before:bg-clip-text before:text-transparent before:absolute before:ml-[-7%] after:content-['}'] after:inline-block after:bg-gradient-to-b after:from-customgreen-100 after:to-customgreen-200 after:bg-clip-text after:text-transparent after:absolute after:ml-[2%] z-10"
                     >
                        Desenvolvedor Front End{" "}
                        <span className="text-customgreen-100">&</span>{" "}
                        <span className="relative">
                           UI/UX
                           <Image
                              src={underlineSvg}
                              fill
                              alt="Underline Svg"
                              className="mt-8"
                           />
                        </span>{" "}
                        Design
                     </motion.h2>
                     <motion.span
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                           duration: 0.5,
                           delay: 0.3,
                           ease: "easeInOut",
                        }}
                        className="md:text-lg flex items-center gap-2 mt-6"
                     >
                        Localizado em Brotas - SP
                        <Emoji
                           role="img"
                           aria-label="Earth icon img"
                           aria-hidden="true"
                        >
                           🌎
                        </Emoji>
                     </motion.span>
                  </div>
               </div>

               {/* Hero img section right */}
               <RevealImg className="hidden min-[830px]:block min-[830px]:justify-self-center lg:col-span-2 lg:justify-self-end">
                  <HeroImg width={530} className="max-[930px]:w-[425px]" />
               </RevealImg>
            </div>

            <RevealSvg>
               <Image
                  src={scrollSvg}
                  alt="Scroll icon detail"
                  className="absolute animate-bounce bottom-[10%] left-1/2 transform -translate-x-1/2"
               />
            </RevealSvg>
            <RevealSvg>
               <Image
                  src={arrowSvg}
                  alt="Arrow icon detail"
                  className="animate-spin-4 absolute top-[8%] left-[8%] -z-10"
               />
            </RevealSvg>
            <RevealSvg>
               <Image
                  src={circleSvg}
                  alt="Circle icon detail"
                  className="animate-spin-5 absolute bottom-[15%] left-[30%] -z-10"
               />
            </RevealSvg>
            <RevealSvg>
               <Image
                  src={squareSvg}
                  alt="Circle icon detail"
                  className="animate-spin-10 absolute top-[25%] md:top-[10%] -right-[5%] -z-10"
               />
            </RevealSvg>
            <RevealSvg>
               <Image
                  src={blurSvg}
                  alt="Blur background detail 1"
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
               />
            </RevealSvg>
            <RevealSvg>
               <Image
                  src={blurSvg}
                  alt="Blur background detail 2"
                  className="absolute -bottom-[10%] -left-[8%] -z-10"
               />
            </RevealSvg>
         </Container>
         <RevealSvg>
            <Image
               src={squareBottomBg}
               alt="Square bottom svg background"
               className="absolute bottom-0 w-full"
            />
         </RevealSvg>
      </section>
   );
}
