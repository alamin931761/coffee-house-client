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
        bg-fantasy w-full text-sm focus:border focus:border-whiskey ${merriweather.className} italic
        `}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
