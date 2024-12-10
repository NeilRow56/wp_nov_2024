import { z } from "zod";

export const mailSchema = z.object({
  first: z.string().trim().min(1, {
    message: "First name is required.",
  }),
  last: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
});

export type mailValues = z.output<typeof mailSchema>;

export const ManagerSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  email: z.string().email({
    message: "Valid email is required",
  }),

  firstName: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters" })
    .max(45, { message: "First Name must be less than 45 characters" })
    .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
  lastName: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters" })
    .max(45, { message: "Last Name must be less than 45 characters" })
    .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
  phone: z.string().optional(),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  security_emails: z.boolean(),
});
