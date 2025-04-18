export const clinicFields = [
  {
    label: "Clinic Name",
    input: "Enter Clinic Your",
    type: "text",
    name: "clinicName",
  },
  {
    label: "Address",
    input: "Enter Clinic Address",
    type: "text",
    name: "clinicAddress",
  },
  {
    label: "Location",
    input: "Enter Clinic Location",
    type: "text",
    name: "cliniclocation",
  },
];

export const doctorFields = [
  {
    label: "Doctor Name",
    input: "Enter Doctor Name",
    type: "text",
    name: "doctorName",
  },
  {
    label: "Age",
    input: "Enter your Age",
    type: "number",
    name: "age",
  },
  {
    type: "select",
    name: "gender", 
    placeholder: "Enter your Gender",
    require: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
  {
    label: "Clinic Name",
    input: "Enter Clinic Name",
    type: "text",
    name: "clinicName",
  },
  {
    label: "Contact Number",
    input: "Enter Contact Number",
    type: "text",
    name: "contactNumber",
  },
  {
    label: "Specialization",
    input: "Enter Specialization",
    type: "text",
    name: "specialization",
  },
  {
    label: "Qualification",
    input: "Enter Qualification",
    type: "text",
    name: "qualification",
  },
];
 
export const PatientFields = [
  {
    label: "Patient Name",
    input: "Enter Patient Name",
    type: "text",
    name: "patientName",
  },
  {
    label: "DOB",
    input: "Enter your date of birth",
    type: "date",
    name: "dob",
  },
  {
    type: "select",
    name: "gender", 
    placeholder: "Enter your Gender",
    require: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
 
  {
    label: "Contact Number",
    input: "Enter Contact Number",
    type: "text",
    name: "contactNumber",
  },
];
 