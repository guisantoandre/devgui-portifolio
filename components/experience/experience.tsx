import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import {
   knowledgesData,
   technologiesData,
   coursesData,
} from "@/utils/knowledges";
import { Knowledges } from "./knowledges";
import Technologies from "./technologies";
import Courses from "./courses";
import detailBg from "@/assets/svgs/experience-detail-bg.svg";
import Image from "next/image";
import { CvDownloadButton } from "./cv-download-button";

export function Experience() {
   return (
      <section
         id="experience"
         className="scroll-mt-8 bg-customgrey-100 rounded-t-[24px] text-customblue-400 md:scroll-mt-10"
      >
         <Container className="relative py-20 flex flex-col items-center">
            <Title className="mb-20">Experiência</Title>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
               <div>
                  <Knowledges data={knowledgesData} />
               </div>
               <div>
                  <Technologies data={technologiesData} />
                  <Courses data={coursesData} />
                  <CvDownloadButton />
               </div>
            </div>
            <Image
               src={detailBg}
               alt="Background detail svg"
               className="hidden md:block md:absolute md:left-4"
               aria-hidden
            />
            <Image
               src={detailBg}
               alt="Background detail svg"
               className="hidden md:block md:absolute md:right-4 md:rotate-90 lg:right-4 lg:bottom-20 lg:rotate-180"
               aria-hidden
            />
         </Container>
      </section>
   );
}
