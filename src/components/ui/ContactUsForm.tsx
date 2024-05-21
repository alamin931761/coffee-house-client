"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../reusableForm/Form";
import FormSubmit from "../reusableForm/FormSubmit";
import Input from "../reusableForm/Input";
import Textarea from "../reusableForm/Textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactUsSchema } from "../reusableForm/Validation";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

type TContactUsFormType = z.infer<typeof ContactUsSchema>;

const ContactUsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TContactUsFormType>({ resolver: zodResolver(ContactUsSchema) });

  const sendEmail = (data: FieldValues) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          toast.success("Your message has been sent successfully", {
            duration: 4000,
          });
        },
        (error) => {
          toast.error(`${error.text}`, { duration: 4000 });
        }
      );
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(sendEmail) as SubmitHandler<FieldValues>}>
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
