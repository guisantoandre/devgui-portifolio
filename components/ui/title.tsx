interface Props {
   text: string;
   isBlue?: boolean;
}

export function Title({ text, isBlue }: Props) {
   return (
      <h3
         className={`inline-block rounded-full px-5 py-2 font-bold ${
            isBlue
               ? "bg-[#131328] text-[#69698E]"
               : "bg-[#E6E8EA] text-[#68727D]"
         }`}
      >
         {text}
      </h3>
   );
}
