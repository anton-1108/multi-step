import Image from "next/legacy/image";
import { ArrowLeft } from "lucide-react";

export const PreviousButton = ({ goToPreviousStep }) => {
  return (
    <button
      type="button"
      onClick={goToPreviousStep}
      className="flex items-center justify-center w-32 gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300 hover:bg-gray-100"
    >
      <ArrowLeft />
      <span>Back</span>
    </button>
  );
};
