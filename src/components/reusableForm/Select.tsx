import { merriweather } from "@/app/fonts";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type SelectProps = {
  register: UseFormRegisterReturn;
  children: ReactNode;
};

const Select = ({ register, children }: SelectProps) => {
  return (
    <div>
      <select
        {...register}
        className={`select rounded-none focus:outline-none
        bg-[#F6F4EF] w-full text-sm focus:border focus:border-[#CAA782] ${merriweather.className} italic
        `}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
