import { message } from "antd";
import { z } from "zod";

export const reserveCarSchema = z.object({
  carType: z.string().refine(value => value.trim() !== "", {
    message: "Car Type is required",
  }),
  pickUp: z.string().refine(value => value.trim() !== "", {
    message: "Pickup location is required",
  }),
  dropOff: z.string().refine(value => value.trim() !== "", {
    message: "Drop off location is required ",
  }),
  pickUpDate: z
    .string()
    .refine(value => value.trim() !== "", {
      message: "Pickup Date is required",
    })
    .refine(value => new Date(value) > new Date(), {
      message: "Date must be valid",
    }),

  dropOffDate: z
    .string()
    .refine(value => value.trim() !== "", {
      message: "Drop off Date is required",
    })
    .refine(value => new Date(value) > new Date(), {
      message: "Date must be valid",
    }),
});
