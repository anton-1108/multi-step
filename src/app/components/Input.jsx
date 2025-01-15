export default function Input({
  label,
  placeholder,
  errortext,
  name,
  onChange,
  type,
}) {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch">
      <p className="text-[#334155] text-[14px] font-semibold">
        {label} <span className="text-[#E14942]">*</span>
      </p>
      <input
        className={`text-black ${
          type == "file" ? "h-[100px]" : ""
        } flex p-3 items-center self-stretch rounded-lg border-[1px] border-solid ${
          errortext ? "border-[#E14942]" : "border-[#8B8E95]"
        }
        focus:outline-none focus:border-[#0CA5E9]`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        type={type}
      />
      <p className="text-[#E14942] text-[13px]">{errortext}</p>
      {/* {{errortext}} */}
    </div>
  );
}
