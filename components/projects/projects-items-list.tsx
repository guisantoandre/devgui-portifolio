import { CodingProjectsType, DesignProjectsType } from "@/types/projects-types";
import { RevealProjects } from "./reveal-projects-animation";

type ProjectsProps = React.ComponentProps<"div"> & {
   data: CodingProjectsType[] | DesignProjectsType[];
};

export function ProjectsItemsList({ data, children }: ProjectsProps) {
   return (
      <div>
         <h3 className="mb-2 uppercase font-bold text-sm text-customgrey-300">
            {children}
         </h3>
         <ul className="grid max-[580px]:grid-cols-1 grid-cols-2 gap-4">
            {data.map((item, index) => (
               <a href={item.link} target="_blank">
                  <RevealProjects index={index} item={item} />
               </a>
            ))}
         </ul>
      </div>
   );
}
