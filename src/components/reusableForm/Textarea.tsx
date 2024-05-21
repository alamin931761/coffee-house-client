import { merriweather } from "@/app/fonts";
import { UseFormRegisterReturn } from "react-hook-form";

type Errors = {
  [key: string]: {
    message?: string;
  };
};

type TextareaProps = {
  name: string;
  errors: Errors;
  register: UseFormRegisterReturn;
  placeholder: string;
};

const Textarea = ({ name, errors, register, placeholder }: TextareaProps) => {
  return (
    <div className="w-full">
      <textarea
        {...register}
        cols={30}
        rows={10}
        className={`textarea rounded-none w-full border focus:outline-none bg-[#F6F4EF] text-sm text-[#CAA782] placeholder-[#CAA782] focus:border focus:border-[#CAA782] ${merriweather.className} italic`}
        placeholder={placeholder}
      />

      {errors[name] && (
        <p className="text-xs text-red-500 ml-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default Textarea;
