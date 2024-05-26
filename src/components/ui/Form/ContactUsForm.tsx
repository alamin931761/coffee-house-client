"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { ContactUsSchema } from "@/components/reusableForm/Validation";
import Form from "@/components/reusableForm/Form";
import Input from "@/components/reusableForm/Input";
import Textarea from "@/components/reusableForm/Textarea";
import FormSubmit from "@/components/reusableForm/FormSubmit";

// Define the type for the form data using Zod schema
type TContactUsFormType = z.infer<typeof ContactUsSchema>;

const ContactUsForm = () => {
  // Initialize form state and validation using react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TContactUsFormType>({ resolver: zodResolver(ContactUsSchema) });

  // Function to send email using emailjs
  const sendEmail = (data: FieldValues) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        // Display success message when email is sent successfully
        (result) => {
          toast.success("Your message has been sent successfully", {
            duration: 4000,
          });
        },
        // Display error message if there's an issue sending the email
        (error) => {
          toast.error(`${error.text}`, { duration: 4000 });
        }
      );

    // Reset the form after email is sent
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(sendEmail) as SubmitHandler<FieldValues>}>
      <div className="flex flex-col gap-5">
        {/* Input for name */}
        <Input
          name="name"
          placeholder="Your Name"
          errors={errors}
          type="string"
          register={register("name")}
        />

        {/* Input for email */}
        <Input
          name="email"
          placeholder="Your Email"
          errors={errors}
          type="string"
          register={register("email")}
        />

        {/* Textarea for message */}
        <Textarea
          name="message"
          errors={errors}
          register={register("message")}
          placeholder="Your Message"
        />
      </div>

      {/* Submit button */}
      <FormSubmit className="mt-5">send</FormSubmit>
    </Form>
  );
};

export default ContactUsForm;
