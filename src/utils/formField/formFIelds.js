export const clinicFields = [
  {
    label: "Clinic Name",
    input: "Enter Clinic Your",
    type: "text",
    name: "name",
  },
  {
    label: "Address",
    input: "Enter Clinic Address",
    type: "text",
    name: "address",
  },
  {
    label: "latitude",
    input: "Enter Location",
    type: "text",
    name: "lat",
  },
  {
    label: "longitude",
    input: "Enter Location",
    type: "text",
    name: "lng"
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
    name: "name",
  },
  {
    label: "DOB",
    input: "Enter your date of birth",
    type: "date",
    name: "age",
  },
  {
    label: "Gender",
    type: "select",
    name: "gender", 
    input: "Enter your Gender",
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
    label: "Password",
    input: "Enter your Password",
    type: "password",
    name: "password",
  },
];

export const appointmentFields = [
  {
    label: "Patient Name",
    input: "Select Patient Name",
    type: "singleSelect",
    name: "patientId",
  },
  {
    label: "Doctor Name",
    input: "Select Doctor Name",
    type: "singleSelect",
    name: "doctorId",
  },
  {
    label: "Clinic Name",
    input: "Enter Clinic Name",
    type: "text",
    name: "clinicId",
    disabled:true
  },
  {
    label: "Visit Date",
    input: "Enter Visit Date",
    type: "date",
    name: "visitDate",
  },
  // {
  //   label: "Contact Number",
  //   input: "Enter Contact Number",
  //   type: "text",
  //   name: "contactNumber",
  // },
];

export const QualificationFields = [
  {
    label: "Qualification Name",
    input: "Enter Qualification Name",
    type: "text",
    name: "qualification",
  },
];

export const SpecializationFields = [
  {
    label: "Specialization Name",
    input: "Enter Specialization Name",
    type: "text",
    name: "specialization",
  },
];
 