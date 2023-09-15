import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import squareTopSvg from "@/assets/svgs/contact-square-top-bg.svg";

export function Contact() {
   return (
      <section id="projects" className="relative scroll-mt-36">
         <Container className="py-20 flex flex-col items-center">
            <Title isBlue className="mb-20 mt-10">
               Contato
            </Title>
         </Container>
         <Image
            src={squareTopSvg}
            alt="Square top svg background"
            className="absolute top-0 w-full"
         />
      </section>
   );
}
