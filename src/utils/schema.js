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
  name: z
    .string()
    .min(1, "Clinic Name is required"),
  address: z.
    string().
    min(1, "Address is required"),
  lat: z.
    string().
    min(1, "Location is required"),
  lng: z.
    string().
    min(1, "Location is required"),
});

export const addDoctorSchema = z.object({
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
        message:"Password must contain at least one uppercase letter, one lowercase letter, and one symbol",
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
  name: z
    .string()
    .min(1, "Patient Name is required"),
  age: z
    .string()
    .min(1, "Age is required"),
  gender: z
    .string()
    .min(1, "Gender is required"),
  contactNumber: z
    .string()
    .min(1, "Contact Number is required"),
  password: z
    .string()
    .min(1, "Password Number is required"),
});

export const addAppointmentSchema = z.object({
  patientId: z
    .coerce.string()
    .min(1, "Patient Name is required"),
  clinicId: z
    .coerce.string()
    .min(1, "Clinic Name is required"),
  doctorId: z
    .coerce.string()
    .min(1, "Doctor Name is required"),
  visitDate: z
    .date({
      required_error: "Visit Date is required",
      invalid_type_error: "Visit Date must be a valid date"
    })
    .min(new Date())
});

export const addQualificationSchema = z.object({
  qualification: z
    .string()
    .min(1, "Qualification Name is required"),
});

export const addSpecializationSchema = z.object({
  specialization: z
    .string()
    .min(1, "Specialization Name is required"),
});
