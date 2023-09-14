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

export function Experience() {
   return (
      <section
         id="experience"
         className="scroll-mt-36 bg-customgrey-100 rounded-t-[24px] text-customblue-400"
      >
         <Container className="py-20 h-full flex flex-col items-center">
            <Title className="mb-20">Experiência</Title>
            <div className="grid grid-cols-1 md:grid-cols-2">
               <Knowledges data={knowledgesData} />
               <div>
                  <Technologies data={technologiesData} />
                  <Courses data={coursesData} />
               </div>
            </div>
         </Container>
      </section>
   );
}
