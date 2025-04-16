import { z } from "zod";
export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "User Name is required"),
  password: z.
    string().
    min(1, "Password is required"),
});
export const addClinicSchema = z.object({
  clinicName: z
    .string()
    .min(1, "Clinic Name is required"),
  clinicAddress: z.
    string().
    min(1, "Clinic Address is required"),
  clinicLocation: z.
    string().
    min(1, "Clinic Location is required"),
});