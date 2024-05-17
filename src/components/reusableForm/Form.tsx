import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

type FormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};
const Form = ({ children, onSubmit }: FormProps) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
