import { CodingProjectsType, DesignProjectsType } from "@/types/projects";
import { sora } from "@/utils/fonts";

type ProjectsProps = React.ComponentProps<"div"> & {
   data: CodingProjectsType[] | DesignProjectsType[];
};

export function ProjectsItemsList({ data, children }: ProjectsProps) {
   return (
      <div>
         <h3 className="mb-2 uppercase font-bold text-sm text-customgrey-300">
            {children}
         </h3>
         <ul className="grid max-[540px]:grid-cols-1 grid-cols-2 gap-4">
            {data.map((item) => (
               <a href={item.link} target="_blank">
                  <li
                     key={item.title}
                     className="bg-[#10101E] flex items-center justify-between gap-3 p-5 rounded-[3px] border border-[#23232F] cursor-pointer group transition-all ease-out hover:duration-200 hover:scale-[1.02] hover:bg-customgreen-100"
                  >
                     <div className="flex items-center gap-3">
                        <h4
                           className={`${sora.className} relative flex items-center gap-3 font-bold transition-all ease-out duration-500 group-hover:text-customblue-400 before:block before:w-[2px] before:h-4 before:bg-gradient-to-b before:from-customgreen-100 before:to-customgreen-200 group-hover:before:from-customblue-400 group-hover:before:to-customblue-400`}
                        >
                           {item.title}
                        </h4>
                        <div className="flex gap-2">
                           {item.icons.map((icon) => (
                              <img
                                 src={icon.src}
                                 alt={icon.alt}
                                 className="w-5"
                              />
                           ))}
                        </div>
                     </div>
                     <img
                        src="/arrow-up-right.svg"
                        alt="Arrow up icon svg"
                        className="transition-all ease-out group-hover:origin-center group-hover:-rotate-45"
                     />
                  </li>
               </a>
            ))}
         </ul>
      </div>
   );
}
