import { merriweather } from "@/app/fonts";
import { UseFormRegisterReturn } from "react-hook-form";

// Type for error messages
type Errors = {
  [key: string]: {
    message?: string;
  };
};

// Props type for the Textarea component
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
        className={`textarea rounded-none w-full border focus:outline-none bg-fantasy text-sm placeholder-black focus:border focus:border-whiskey ${merriweather.className} italic`}
        placeholder={placeholder}
      />

      {/* Display error message if exists */}
      {errors[name] && (
        <p className="text-xs text-red-500 ml-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default Textarea;
