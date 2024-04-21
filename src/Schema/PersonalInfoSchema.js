import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z.string().refine(value => value.trim() !== "", {
    message: "First name is required",
  }),
  lastName: z.string().refine(value => value.trim() !== "", {
    message: "Last name is required",
  }),
  phoneNumber: z
    .string()
    .refine(value => value.trim() !== "", {
      message: "Phone Number is required",
    })
    .refine(value => value.startsWith("09"), {
      message: "Phone number must start with 09",
    })
    .refine(value => value.length === 11, {
      message: "Phone number must be 11 digits",
    }),
  age: z
    .string()
    .refine(value => value.trim() !== "", {
      message: "Age is required",
    })
    .refine(value => value < 100, {
      message: "Age must be less than 100",
    })
    .refine(value => value >= 18, {
      message: "You must be 18 years old and above",
    }),
  email: z
    .string()
    .refine(value => value.trim() !== "", {
      message: "Email is required",
    })
    .refine(value => /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w{2,4}$/.test(value), {
      message: "Email must be valid",
    }),

  address: z
    .string()
    .refine(value => value.trim() !== "", {
      message: "Address is required",
    })
    .refine(value => value.length >= 5 && value.length <= 100, {
      message: "Address must be between 5 and 100 characters long",
    }),
  city: z
    .string()
    .refine(value => value.trim() !== "", {
      message: "City is required",
    })
    .refine(value => value.length >= 5 && value.length <= 100, {
      message: "Address must be between 5 and 100 characters long",
    }),
  zipCode: z
    .string()
    .refine(value => value.trim() !== "", {
      message: "Zipcode is required",
    })
    .refine(value => value.length === 4, {
      message: "Zipcode must be valid",
    }),
});
