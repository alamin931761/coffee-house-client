import { merriweather } from "@/app/fonts";
import { UseFormRegisterReturn } from "react-hook-form";

// Type for error messages
type Errors = {
  [key: string]: {
    message?: string;
  };
};

// Props type for the Input component
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
      {/* Input element */}
      <input
        type={type}
        id={name}
        {...register}
        placeholder={placeholder}
        className={`input rounded-none w-full focus:outline-none bg-fantasy text-sm placeholder-black focus:border focus:border-whiskey ${merriweather.className} italic`}
      />

      {/* Display error message if exists */}
      {errors[name] && (
        <p className="text-xs ml-1 text-red-500 mt-[6px]">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
