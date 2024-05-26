import { z } from "zod";

// Define the schema for reservation validation
export const ReservationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name field is required" })
    .regex(/^[A-Za-z\s\-\.]+$/, "Name must contain only letters"), // Allow only letters, spaces, hyphens, and dots

  phone: z
    .string()
    .min(1, { message: "Phone Number field is required" })
    .regex(
      /^0\d{10}$/,
      "Invalid phone number, please enter 11 digit phone number"
    ), // Validate phone number format (11 digits starting with 0)

  seats: z
    .string()
    .min(1, { message: "Seats field is required" })
    .regex(/^(?:[1-9]\d*|0)$/, "Seats must be a positive integer number"), // Validate seats as a positive integer

  // date
  date: z.string().min(1, { message: "Date field is required" }),

  // time
  time: z.string().min(1, { message: "Time field is required" }),

  email: z
    .string()
    .min(1, { message: "Email field is required" })
    .email({ message: "Invalid email address" }),

  notes: z.string().min(1, { message: "Notes field is required" }).trim(),
});

// --------------------------------------------------------

// Define the schema for booking validation
export const BookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name field is required" })
    .regex(/^[A-Za-z\s\-\.]+$/, "Name must contain only letters"), // Allow only letters, spaces, hyphens, and dots

  location: z.string().min(1, { message: "Location field is required" }),

  person: z.string().min(1, { message: "Person field is required" }),

  date: z.string().min(1, { message: "Date field is required" }),

  time: z.string().min(1, { message: "Time field is required" }),
});

// ------------------------------------------------------------

// Define the schema for contact form validation
export const ContactUsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name field is required" })
    .regex(/^[A-Za-z\s\-\.]+$/, "Name must contain only letters"), // Allow only letters, spaces, hyphens, and dots

  email: z
    .string()
    .min(1, { message: "Email field is required" })
    .email({ message: "Invalid email address" }),

  message: z.string().min(1, { message: "Message field is required" }).trim(),
});
