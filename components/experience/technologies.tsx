type TechnologiesProps = {
   data: string[];
};

export default function Technologies({ data }: TechnologiesProps) {
   return (
      <div className="mb-20">
         <h3 className="mb-2 uppercase font-bold text-sm text-customgrey-300">
            Sou familiarizado com as seguintes tecnologias:
         </h3>
         <ul className="flex flex-wrap gap-5">
            {data.map((tech) => (
               <li
                  key={tech}
                  className="relative px-4 py-3 font-medium rounded-[3px] bg-customgrey-200 before:block before:w-[3px] before:h-4 before:bg-gradient-to-b before:from-customgreen-100 before:to-customgreen-200 before:absolute before:top-4 before:-left-[2px]"
               >
                  {tech}
               </li>
            ))}
         </ul>
      </div>
   );
}
