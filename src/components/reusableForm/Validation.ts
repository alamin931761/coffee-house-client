import { z } from "zod";

// reservation schema
export const ReservationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name field is required" })
    .regex(/^[A-Za-z\s\-\.]+$/, "Name must contain only letters"),

  phone: z
    .string()
    .min(1, { message: "Phone Number field is required" })
    .regex(
      /^0\d{10}$/,
      "Invalid phone number, please enter 11 digit phone number"
    ),

  seats: z
    .string()
    .min(1, { message: "Seats field is required" })
    .regex(/^(?:[1-9]\d*|0)$/, "Seats must be a positive integer number"),

  // date
  date: z
    .string()
    .min(1, { message: "Date field is required" })
    .refine(
      (value) => {
        const selectedDate = new Date(value);
        selectedDate.setHours(0);
        selectedDate.setMinutes(0);
        selectedDate.setSeconds(0);
        selectedDate.setMilliseconds(0);
        const currentDate = new Date();
        return selectedDate > currentDate;
      },
      {
        message: "Please select a future date.",
      }
    ),

  // time
  time: z.string().min(1, { message: "Time field is required" }),

  email: z
    .string()
    .min(1, { message: "Email field is required" })
    .email({ message: "Invalid email address" }),

  notes: z.string().min(1, { message: "Notes field is required" }).trim(),
});

// contact us schema
export const ContactUsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name field is required" })
    .regex(/^[A-Za-z\s\-\.]+$/, "Name must contain only letters"),

  email: z
    .string()
    .min(1, { message: "Email field is required" })
    .email({ message: "Invalid email address" }),

  message: z.string().min(1, { message: "Message field is required" }).trim(),
});
