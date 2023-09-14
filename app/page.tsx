import { Header } from "@/components/header/header";
import { HeroSection } from "@/components/hero-section/hero-section";
import { AboutMe } from "@/components/about-me/about-me";
import { Experience } from "@/components/experience/experience";
import { Projects } from "@/components/projects/projects";

export default function Home() {
   return (
      <>
         <Header />
         <HeroSection />
         <AboutMe />
         <Experience />
         <Projects />
      </>
   );
}
