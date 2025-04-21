import { z } from "zod";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=~`[\]{}|\\:;"'<>,.?/]).{6,}$/;
const time12HrRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;
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

// export const addDoctorSchema = z.object({
//   doctorName: z
//     .string()
//     .min(1, {message:"Doctor Name is required"}),
//   userName: z
//     .string()
//     .min(1, {message:"User Name is required"}),
//   // age: z
//   //   .string()
//   //   .min(1, "Age is required"),
//   // gender: z
//   //   .string()
//   //   .min(1, "Gender is required"),
//   // clinicName: z
//   //   .string()
//   //   .min(1, "Clinic Name is required"),
//   // contactNumber: z
//   //   .string()
//   //   .min(1, "Contact Number is required"),
//   // specialization: z
//   //   .string()
//   //   .min(1, "Specialization is required"),
//   // qualification: z
//   //   .string()
//   //   .min(1, "Qualification is required"),
// });


export const addDoctorSchema = z.
  object({
    doctorName: z
      .string()
      .min(1, { message: "Doctor Name is required" }),
    userName: z
      .string()
      .min(1, { message: "User Name is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one symbol",
      }),
    age: z
      .string()
      .min(1, { message: "Age is Required" })
      .refine((val) => {
          const date = new Date(val);
          const now = new Date();
          return !isNaN(date.getTime()) && date < now;
        },
        {
          message: "Date of Birth must be a valid past date",
        }
      ),
    gender: z
      .string()
      .min(1, { message: "Gender is Required" })
      .refine((val) => ["male", "female"].includes(val), {
        message: "Gender must be either 'male' or 'female'",
      }),
    contactNumber: z
      .string()
      .min(1, { message: "Number is required" })
      .max(12, { message: "Please Enter Valid Number" }),
    specialization: z
      .array(z.number())
      .min(1, { message: "Specialization is required" }),
    qualification: z
      .array(z.number())
      .min(1, { message: "Qualification is required" }),
    doctorClinic: z
      .array(z.
        object({
          clinicName: z
          .string()
          .min(1, { message: "Clinic Name is required" }),
          startTime: z
          .string()
          .min(1, { message: "Start Time is required" }),
          endTime: z
          .string()
          .min(1, { message: "End Time is required" }),
        })
      )
    .min(1, { message: "Doctor Clinic is required" }),   
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
