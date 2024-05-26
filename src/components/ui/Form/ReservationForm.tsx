"use client";

import { merriweather, oswald } from "@/app/fonts";
import Form from "@/components/reusableForm/Form";
import FormSubmit from "@/components/reusableForm/FormSubmit";
import Input from "@/components/reusableForm/Input";
import Select from "@/components/reusableForm/Select";
import Textarea from "@/components/reusableForm/Textarea";
import { ReservationSchema } from "@/components/reusableForm/Validation";
import { verifyDateAndTime } from "@/utils/DateAndTimeValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

// Define the type for the form data using Zod schema
type TReservationFormType = z.infer<typeof ReservationSchema>;

const ReservationForm = () => {
  // Initialize state for handling errors
  const [error, setError] = useState("");

  // Initialize form state and validation using react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TReservationFormType>({
    resolver: zodResolver(ReservationSchema),
  });

  // Function to handle form submission
  const handleReservation = (data: FieldValues) => {
    // Validate date and time
    const dateAndTimeError = verifyDateAndTime(data.date, data.time);
    if (dateAndTimeError) {
      // Display error message if date and time are invalid
      setError(dateAndTimeError);

      // Show error toast
      toast.error(dateAndTimeError, {
        duration: 4000,
      });
    } else {
      // Reset error state
      setError("");

      // Show success toast
      toast.success("Thank you for your message. It has been sent.", {
        duration: 4000,
      });

      // Reset the form after successful submission
      reset();
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(handleReservation) as SubmitHandler<FieldValues>}
    >
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {/* Input for name */}
        <Input
          name="name"
          placeholder="Name"
          errors={errors}
          type="string"
          register={register("name")}
        />

        {/* Input for phone */}
        <Input
          name="phone"
          placeholder="Phone"
          errors={errors}
          type="string"
          register={register("phone")}
        />

        {/* Input for seats */}
        <Input
          name="seats"
          placeholder="Seats"
          errors={errors}
          type="string"
          register={register("seats")}
        />

        {/* Input for email */}
        <Input
          name="email"
          placeholder="Email"
          errors={errors}
          type="string"
          register={register("email")}
        />

        {/* Input for date */}
        <Input
          name="date"
          errors={errors}
          type="date"
          register={register("date")}
        />

        {/* Select for time */}
        <div className="flex w-full">
          <div className="w-full">
            <Select register={register("time")}>
              <option value="09:00">09:00 am</option>
              <option value="09:30">09:30 am</option>
              <option value="10:00">10:00 am</option>
              <option value="10:30">10:30 am</option>
              <option value="11:00">11:00 am</option>
              <option value="11:30">11:30 am</option>
              <option value="12:00">12:00 am</option>
              <option value="12:30">12:30 am</option>
              <option value="13:00">01:00 pm</option>
              <option value="13:30">01:30 pm</option>
              <option value="14:00">02:00 pm</option>
              <option value="14:30">02:30 pm</option>
              <option value="15:00">03:00 pm</option>
              <option value="15:30">03:30 pm</option>
              <option value="16:00">04:00 pm</option>
              <option value="16:30">04:30 pm</option>
              <option value="17:00">05:00 pm</option>
              <option value="17:30">05:30 pm</option>
              <option value="18:00">06:00 pm</option>
              <option value="18:30">06:30 pm</option>
              <option value="19:00">07:00 pm</option>
              <option value="19:30">07:30 pm</option>
              <option value="20:00">08:00 pm</option>
              <option value="20:30">08:30 pm</option>
              <option value="21:00">09:00 pm</option>
              <option value="21:00">09:00 pm</option>
              <option value="21:30">09:30 pm</option>
            </Select>
          </div>
        </div>
      </div>

      {/* Textarea for note */}
      <Textarea
        name="notes"
        errors={errors}
        register={register("notes")}
        placeholder="Notes"
      />
      {/* Submit button */}
      <FormSubmit className="mt-5">Submit</FormSubmit>

      {/* Display error message if any */}
      {error ? (
        <p className={`${oswald.className} mt-5 text-red-500 font-bold`}>
          Error:{" "}
          <span className={`${merriweather.className} font-normal`}>
            {error}
          </span>
        </p>
      ) : (
        ""
      )}
    </Form>
  );
};

export default ReservationForm;
