import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";

export function Projects() {
   return (
      <section id="projects" className="scroll-mt-36 bg-customblue-400">
         <Container className="py-20 h-full flex flex-col items-center">
            <Title isBlue>Projetos</Title>
         </Container>
      </section>
   );
}
