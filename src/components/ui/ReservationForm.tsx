"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Form from "../reusableForm/Form";
import { ReservationSchema } from "../reusableForm/Validation";
import Input from "../reusableForm/Input";
import FormSubmit from "../reusableForm/FormSubmit";
import Textarea from "../reusableForm/Textarea";

// type
type TReservationFormType = z.infer<typeof ReservationSchema>;

const ReservationForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TReservationFormType>({
    resolver: zodResolver(ReservationSchema),
  });

  const handleReservation = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(handleReservation) as SubmitHandler<FieldValues>}
    >
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {/* name */}
        <Input
          name="name"
          placeholder="Name"
          errors={errors}
          type="string"
          register={register("name")}
        />

        {/* phone */}
        <Input
          name="phone"
          placeholder="Phone"
          errors={errors}
          type="string"
          register={register("phone")}
        />

        {/* seats */}
        <Input
          name="seats"
          placeholder="Seats"
          errors={errors}
          type="string"
          register={register("seats")}
        />

        {/* email */}
        <Input
          name="email"
          placeholder="Email"
          errors={errors}
          type="string"
          register={register("email")}
        />

        {/* date */}
        <Input
          name="date"
          errors={errors}
          type="date"
          register={register("date")}
        />

        <Input
          name="time"
          errors={errors}
          type="time"
          register={register("time")}
        />
      </div>

      <Textarea
        name="notes"
        errors={errors}
        register={register("notes")}
        placeholder="Notes"
      />

      <FormSubmit>Submit</FormSubmit>
    </Form>
  );
};

export default ReservationForm;
