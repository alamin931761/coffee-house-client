import { merriweather } from "@/app/fonts";
import { UseFormRegisterReturn } from "react-hook-form";

type Errors = {
  [key: string]: {
    message?: string;
  };
};

type InputProps = {
  name: string;
  placeholder?: string;
  errors: Errors;
  type: string;
  register: UseFormRegisterReturn;
};

const Input = ({ name, placeholder, errors, type, register }: InputProps) => {
  return (
    <div className="w-full">
      <input
        type={type}
        id={name}
        {...register}
        placeholder={placeholder}
        className={`input rounded-none w-full focus:outline-none bg-[#F6F4EF] text-sm placeholder-black focus:border focus:border-[#CAA782] ${merriweather.className} italic`}
      />
      {errors[name] && (
        <p className="text-xs ml-1 text-red-500 mt-[6px]">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
