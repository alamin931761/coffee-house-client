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
        className="select rounded-none w-full focus:outline-none"
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
