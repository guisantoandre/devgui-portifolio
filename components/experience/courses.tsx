import { CoursesType } from "@/types/knowledges";

type CoursesProps = {
   data: CoursesType[];
};

export default function Courses({ data }: CoursesProps) {
   return (
      <div>
         <h3 className="mb-4 uppercase font-bold text-sm flex items-center gap-2 text-customgrey-300 before:inline-block before:bg-[url('/notebook-icon.svg')] before:w-6 before:h-6 before:bg-contain before:bg-no-repeat">
            Cursos intensivos
         </h3>
         <ul className="space-y-3">
            {data.map((item) => (
               <li
                  key={item.title}
                  className="flex items-center justify-between"
               >
                  <span className="font-medium">
                     {item.title}
                     <span className="font-normal text-customgrey-300">
                        {" "}
                        / {item.company}
                     </span>
                  </span>
                  <span className="flex items-center gap-2 text-customgrey-300">
                     {item.hours}
                     <a
                        href={item.link}
                        target="_blank"
                        className="inline-block p-2 bg-customgrey-200 border border-neutral-300 hover:bg-customgrey-100 transition-all duration-75 rounded-[3px]"
                     >
                        <img
                           src="/graduation-cap-icon.svg"
                           alt="Graduation cap icon"
                        />
                     </a>
                  </span>
               </li>
            ))}
         </ul>
      </div>
   );
}
