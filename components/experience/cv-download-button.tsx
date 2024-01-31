import { FileDown } from "lucide-react";
export function CvDownloadButton() {
   return (
      <a
         href="/cv.pdf"
         download="cv.pdf"
         className="w-full mt-10 flex items-center gap-x-3 font-semibold bg-white py-3 px-5 border-2 border-dashed border-customgrey-300 rounded-[5px] hover:border-customgreen-200 hover:bg-customgrey-200 hover:text-customgrey-300 transition-all duration-300"
      >
         <FileDown strokeWidth={2.3} className="w-6 h-6" />
         Download C.V
      </a>
   );
}
