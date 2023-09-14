import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import { codingData, designData } from "@/utils/projects";
import { ProjectsItemsList } from "./projects-items-list";

export function Projects() {
   return (
      <section id="projects" className="scroll-mt-36 bg-customblue-400">
         <Container className="py-20 flex flex-col items-center">
            <Title isBlue className="mb-20">
               Projetos
            </Title>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 w-full space-y-10 lg:space-y-0">
               <ProjectsItemsList data={codingData}>
                  Programação:
               </ProjectsItemsList>
               <div>
                  <ProjectsItemsList data={designData}>
                     Design:
                  </ProjectsItemsList>
               </div>
            </div>
         </Container>
      </section>
   );
}
