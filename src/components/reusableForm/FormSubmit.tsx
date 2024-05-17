import { open_sans } from "@/app/fonts";
import { ReactNode } from "react";

const FormSubmit = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <button
        className={`btn btn-outline rounded-none px-10 border-none bg-[#CAA782] uppercase font-extrabold transition ease-linear duration-500 mt-5 ${open_sans.className}`}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default FormSubmit;
