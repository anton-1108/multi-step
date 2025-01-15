import { ChevronRight } from "lucide-react";
export default function Button({ title, handleClick, currentStep }) {
  return (
    <div className="bg-[#121316] text-white h-[44px] w-[416px] rounded-[6px] mt-[90px] flex items-center justify-center ">
      <button onClick={handleClick} className="ps-2.5 px-3 text-base font-bold">
        Continue {currentStep}/3
      </button>
      <ChevronRight className="w-[24px] h-[24px]" />
    </div>
  );
}
