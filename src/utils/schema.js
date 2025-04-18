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

export const addDoctorSchema = z.object({
  doctorName: z
    .string()
    .min(1, {message:"Doctor Name is required"}),
  userName: z
    .string()
    .min(1, {message:"User Name is required"}),
  // age: z
  //   .string()
  //   .min(1, "Age is required"),
  // gender: z
  //   .string()
  //   .min(1, "Gender is required"),
  // clinicName: z
  //   .string()
  //   .min(1, "Clinic Name is required"),
  // contactNumber: z
  //   .string()
  //   .min(1, "Contact Number is required"),
  // specialization: z
  //   .string()
  //   .min(1, "Specialization is required"),
  // qualification: z
  //   .string()
  //   .min(1, "Qualification is required"),
});

export const addPatientSchema = z.object({
  patientName: z
    .string()
    .min(1, "Doctor Name is required"),
    dob: z
    .string()
    .min(1, "Age is required"),
  gender: z
    .string()
    .min(1, "Gender is required"),
  contactNumber: z
    .string()
    .min(1, "Contact Number is required"),
});
