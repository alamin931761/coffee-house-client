import { open_sans } from "@/app/fonts";
import { ReactNode } from "react";

const FormSubmit = ({
  children,
  className,
}: {
  children: ReactNode;
  className: ReactNode;
}) => {
  return (
    <div>
      {/* Button element for form submission */}
      <button
        className={`btn btn-outline rounded-none px-10 border-none bg-whiskey uppercase font-extrabold transition ease-linear duration-500 ${className} ${open_sans.className}`}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default FormSubmit;
