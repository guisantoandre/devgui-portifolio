import Image from "next/image";

import { sora } from "@/utils/fonts";
import { Container } from "@/components/ui/container";
import { Emoji } from "@/components/ui/emoji";
import { HeroImg } from "./hero-img";

import underlineSvg from "@/assets/svgs/underline-svg.svg";
import scrollSvg from "@/assets/svgs/scroll-icon.svg";
import arrowSvg from "@/assets/svgs/arrow-detail.svg";
import circleSvg from "@/assets/svgs/circle-detail.svg";
import squareSvg from "@/assets/svgs/square-detail.svg";
import blurSvg from "@/assets/svgs/blur-detail.svg";
import squareBottomBg from "@/assets/svgs/square-bottom-bg.svg";

export function HeroSection() {
   return (
      <section className="h-[calc(100vh-118px)] relative overflow-hidden">
         <Container className="h-full relative">
            <div className="h-full grid place-content-center md:gap-4 md:pt-0 md:grid-cols-5 md:items-center">
               <div className="md:col-span-3 md:justify-self-start">
                  <div className="md:ml-[7%]">
                     <h2
                        className={`${sora.className} relative max-w-[10ch] font-semibold leading-[1.2] text-[56px] max-[550px]:text-[40px] md:leading-[1.14] md:text-5xl lg:text-7xl before:content-['{'] before:inline-block before:bg-gradient-to-b before:from-customgreen-100 before:to-customgreen-200 before:bg-clip-text before:text-transparent before:absolute before:ml-[-7%] after:content-['}'] after:inline-block after:bg-gradient-to-b after:from-customgreen-100 after:to-customgreen-200 after:bg-clip-text after:text-transparent after:absolute after:ml-[2%] z-10`}
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
                     </h2>
                     <span className="md:text-lg flex items-center gap-2 mt-6">
                        Localizado em Brotas - SP
                        <Emoji symbol="🌎" label="Earth Icon" />
                     </span>
                  </div>
               </div>
               <div className="hidden md:block md:justify-self-center lg:col-span-2 lg:justify-self-end">
                  <HeroImg width={500} />
               </div>
            </div>
            <Image
               src={scrollSvg}
               alt="Scroll icon detail"
               className="hidden md:block animate-bounce md:absolute md:bottom-[10%] md:left-1/2 md:transform md:-translate-x-1/2"
            />
            <Image
               src={arrowSvg}
               alt="Arrow icon detail"
               className="animate-spin-4 absolute top-[8%] left-[8%] -z-10"
            />
            <Image
               src={circleSvg}
               alt="Circle icon detail"
               className="animate-spin-5 absolute bottom-[20%] left-[30%] -z-10"
            />
            <Image
               src={squareSvg}
               alt="Circle icon detail"
               className="animate-spin-10 absolute top-[25%] md:top-[10%] -right-[5%] -z-10"
            />
            <Image
               src={blurSvg}
               alt="Blur background detail 1"
               className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
            />

            <Image
               src={blurSvg}
               alt="Blur background detail 2"
               className="absolute -bottom-[10%] -left-[8%] -z-10"
            />
         </Container>
         <Image
            src={squareBottomBg}
            alt="Blur background detail 2"
            className="absolute bottom-0 w-full"
         />
      </section>
   );
}
