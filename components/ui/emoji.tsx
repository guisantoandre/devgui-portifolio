"use client";

interface Props {
   symbol: string;
   label?: string;
}

export function Emoji({ symbol, label }: Props) {
   return (
      <span
         role="img"
         aria-label={label ? label : ""}
         aria-hidden={label ? true : false}
      >
         {symbol}
      </span>
   );
}
