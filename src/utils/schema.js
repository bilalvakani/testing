import { z } from "zod";
export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "User Name is required"),
  password: z.
    string().
    min(1, "Password is required"),
});