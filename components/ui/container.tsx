interface Props {
   children: React.ReactNode;
   className?: string;
}

export function Container({ children, className }: Props) {
   return (
      <div className={`w-full max-w-[1280px] mx-auto px-5 ${className}`}>
         {children}
      </div>
   );
}
