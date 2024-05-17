"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../reusableForm/Form";
import Select from "../reusableForm/Select";
import FormSubmit from "../reusableForm/FormSubmit";
import { FaUsers, FaRegClock } from "react-icons/fa6";

type TBookingForm = {
  person: string;
  time: string;
  date: string;
};

const BookingForm = () => {
  const { handleSubmit, register } = useForm<TBookingForm>();

  const handleBooking = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit(handleBooking) as SubmitHandler<FieldValues>}
      >
        <div className="flex items-center">
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
          <FaUsers className="ms-[2px] text-5xl p-2 text-[#C7A17A] bg-white" />
        </div>

        <p className="uppercase">For</p>

        <input type="date" {...register("date")} />

        <p className="uppercase">at</p>
        <div className="flex items-center">
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
          <FaRegClock className="ms-[2px] text-5xl p-2 text-[#C7A17A] bg-white" />
        </div>

        {/* <Select register={register("time")}></Select> */}
        <FormSubmit>book a table</FormSubmit>
      </Form>
    </div>
  );
};

export default BookingForm;
