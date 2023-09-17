import { Container } from "@/components/ui/container";

export function Footer() {
   return (
      <div className="bg-customblue-400">
         <Container className="flex items-center justify-between py-10">
            <p className="text-customgrey-300">
               Site desenvolvido por{" "}
               <a
                  href="https://github.com/guisantoandre"
                  target="_blank"
                  className="underline text-customgreen-100"
               >
                  mim
               </a>
               .
            </p>

            <img
               src="/lettermark.svg"
               alt="Lettermark icon svg"
               className="w-6"
            />
         </Container>
      </div>
   );
}
