import { ArrowRight } from "lucide-react";
import Image from "next/legacy/image";

export const NextButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80"
    >
      {text}
      <ArrowRight />
    </button>
  );
};
