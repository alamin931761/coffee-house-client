"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaUsers, FaRegClock, FaLocationDot, FaPen } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingSchema } from "@/components/reusableForm/Validation";
import Input from "@/components/reusableForm/Input";
import Form from "@/components/reusableForm/Form";
import Select from "@/components/reusableForm/Select";
import FormSubmit from "@/components/reusableForm/FormSubmit";
import { verifyDateAndTime } from "@/utils/DateAndTimeValidations";
import { useState } from "react";
import { merriweather, oswald } from "@/app/fonts";
import toast from "react-hot-toast";

// Define the type for the form data using Zod schema
type TBookingFormType = z.infer<typeof BookingSchema>;

const BookingForm = () => {
  const [error, setError] = useState(""); // State for error handling

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TBookingFormType>({ resolver: zodResolver(BookingSchema) });

  // Function to handle form submission
  const handleBooking = (data: FieldValues) => {
    // Validate date and time
    const dateAndTimeError = verifyDateAndTime(data.date, data.time);
    if (dateAndTimeError) {
      setError(dateAndTimeError);

      // Display error message using toast
      toast.error(dateAndTimeError, {
        duration: 4000,
      });
    } else {
      // If no validation error, reset error state and display success message
      setError("");
      toast.success("Your table has been successfully booked.", {
        duration: 4000,
      });

      // Reset the form after successful submission
      reset();
    }
  };

  return (
    <div>
      {/* Form component for booking */}
      <Form
        onSubmit={handleSubmit(handleBooking) as SubmitHandler<FieldValues>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Input for name */}
          <div className="flex w-full">
            <Input
              name="name"
              placeholder="Your Name"
              errors={errors}
              type="string"
              register={register("name")}
            />

            {/* icon */}
            <FaPen className="ms-[2px] text-5xl p-2 text-whiskey bg-fantasy" />
          </div>

          {/* Select for location */}
          <div className="flex w-full">
            <div className="w-full">
              <Select register={register("location")}>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Khulna">Khulna</option>
              </Select>
            </div>

            {/* icon */}
            <FaLocationDot className="ms-[2px] text-5xl p-2 text-whiskey bg-fantasy" />
          </div>

          {/* Select for number of persons */}
          <div className="flex w-full">
            <div className="w-full">
              <Select register={register("person")}>
                <option value="1">1 Person</option>
                <option value="2">2 Person</option>
                <option value="3">3 Person</option>
                <option value="4">4 Person</option>
                <option value="5">5 Person</option>
                <option value="6">6 Person</option>
                <option value="7">7 Person</option>
                <option value="8">8 Person</option>
                <option value="9">9 Person</option>
                <option value="10">10 Person</option>
              </Select>
            </div>

            {/* icon */}
            <FaUsers className="ms-[2px] text-5xl p-2 text-whiskey bg-fantasy" />
          </div>

          {/* Input for date */}
          <div className="flex w-full">
            <Input
              name="date"
              errors={errors}
              type="date"
              register={register("date")}
            />

            {/* icon */}
            <FaCalendarDays className="col-span-1 ms-[2px] text-5xl p-2 text-whiskey bg-fantasy" />
          </div>

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

            {/* icon */}
            <FaRegClock className="ms-[2px] text-5xl p-2 text-whiskey bg-fantasy" />
          </div>

          {/* Submit button */}
          <FormSubmit className="mt-0 lg:w-full">book a table</FormSubmit>
        </div>

        {/* Error message display */}
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
    </div>
  );
};

export default BookingForm;
