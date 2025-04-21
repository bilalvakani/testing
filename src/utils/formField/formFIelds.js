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
    require: true,
  },
  {
    label: "User Name",
    input: "Enter User Name",
    type: "text",
    name: "userName",
  },
  {
    label: "Password",
    input: "Enter Doctor Password",
    type: "password",
    name: "password",
  },
  {
    label: "Age",
    input: "Enter your Age",
    type: "number",
    name: "age",
  },
  {
    label: "Gender",
    type: "select",
    name: "gender", 
    input: "Select Gender",
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
  {
    label: "Specialization",
    type: "selectoption",
    name: "specialization", 
    input: "Select Specialization",
    require: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
  {
    label: "Qualification",
    type: "selectoption",
    name: "qualification", 
    input: "Select Qualification",
    require: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
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
 