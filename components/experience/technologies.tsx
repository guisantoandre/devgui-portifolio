import { RevealItems } from "./reveal-technologies-animation";

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
            {data.map((tech, index) => (
               <RevealItems index={index}>{tech}</RevealItems>
            ))}
         </ul>
      </div>
   );
}
