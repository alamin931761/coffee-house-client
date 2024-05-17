"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../reusableForm/Form";
import FormSubmit from "../reusableForm/FormSubmit";
import Input from "../reusableForm/Input";
import Textarea from "../reusableForm/Textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactUsSchema } from "../reusableForm/Validation";

type TContactUsFormType = z.infer<typeof ContactUsSchema>;

const ContactUsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TContactUsFormType>({ resolver: zodResolver(ContactUsSchema) });

  const handleContactUs = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(handleContactUs) as SubmitHandler<FieldValues>}
    >
      <div className="flex flex-col gap-5">
        {/* name */}
        <Input
          name="name"
          placeholder="Your Name"
          errors={errors}
          type="string"
          register={register("name")}
        />

        {/* email */}
        <Input
          name="email"
          placeholder="Your Email"
          errors={errors}
          type="string"
          register={register("email")}
        />

        <Textarea
          name="message"
          errors={errors}
          register={register("message")}
          placeholder="Your Message"
        />
      </div>

      <FormSubmit>send</FormSubmit>
    </Form>
  );
};

export default ContactUsForm;
