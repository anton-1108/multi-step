import Button from "./Button";

import Input from "./Input";

export default function Header() {
  return (
    <div className="flex h-[100vh]">
      <div className="w-[480px] h-[655px] bg-[#F4F4F4] m-auto rounded-[8px] p-[32px] flex-col justify-between items-start ">
        <img className="w-[60px] h-[60px]" src="./Main.png" alt="" />
        <h1 className="text-[#202124] font-semibold text-[26px] ">
          Join Us! 😎
        </h1>
        <p className="text-[#8E8E8E] font-normal mb-[26px]">
          Please provide all current information accurately.
        </p>
        <Input
          temp="First name *"
          placeholder="Your first name"
          error="Нэрээ оруулна yy"
        />
        <Input
          temp="Last name *"
          placeholder="Your last name"
          error="Овгоо оруулна yy"
        />
        <Input
          temp="Username *"
          placeholder="Your username"
          error="Хэрэглэгчийн нэрээ оруулна yy"
        />
        <Button />
      </div>
    </div>
  );
}
