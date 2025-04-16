import { Button } from "antd";
export const doctorColumns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "User Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
 
  {
    title: "Gender",
    dataIndex: "gender",
    sorter: (a, b) => a.gender.length - b.gender.length,
  },
  {
    title: "Clinic",
    dataIndex: "clinic",
    sorter: (a, b) => a.clinic.length - b.clinic.length,
  },
  {
    title: "Contact",
    dataIndex: "contact",
  },
  {
    title: "Specialization",
    dataIndex: "specialization",
  },
  {
    title: "Qualification",
    dataIndex: "qualification",
  },
];
export const patientColumns = (onLocationClick) => [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "User Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "DOB",
    dataIndex: "DOB",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    sorter: (a, b) => a.gender.length - b.gender.length,
  },
  {
    title: "Contact",
    dataIndex: "contact",
  },
];


export const clinicColumns = (onLocationClick) => [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Clinic Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Location",
    dataIndex: "latlong",
    render: (latlong) => (
      <Button className="" onClick={() => onLocationClick(latlong)}>
        View Map
      </Button>
    ),
  },
];

export const doctorData = [
  {
    id: 1,
    name: "Dr. Bilal",
    specialization: "Cardiology",
    qualification: "MBBS, MD",
    contact: "03192094098",
    gender: "Male",
    clinic: "City Hospital",
    age: "20",
  },
  {
    id: 2,
    name: "Dr. Basit",
    specialization: "Cardiology",
    qualification: "MBBS, MD",
    contact: "03192094098",
    gender: "Male",
    clinic: "Patel Hospital",
    age: "40",
  },
  {
    id: 3,
    name: "Dr. Basit",
    specialization: "Cardiology",
    qualification: "MBBS, MD",
    contact: "03192094098",
    gender: "Male",
    clinic: "Patel Hospital",
    age: "40",
  },
  {
    id: 4,
    name: "Dr. Basit",
    specialization: "Cardiology",
    qualification: "MBBS, MD",
    contact: "03192094098",
    gender: "Male",
    clinic: "Patel Hospital",
    age: "40",
  },
  {
    id: 5,
    name: "Dr. Basit",
    specialization: "Cardiology",
    qualification: "MBBS, MD",
    contact: "03192094098",
    gender: "Male",
    clinic: "Patel Hospital",
    age: "40",
  },
  {
    id: 6,
    name: "Dr. Basit",
    specialization: "Cardiology",
    qualification: "MBBS, MD",
    contact: "03192094098",
    gender: "Male",
    clinic: "Patel Hospital",
    age: "40",
  },
  {
    id: 7,
    name: "Dr. Basit",
    specialization: "Cardiology",
    qualification: "MBBS, MD",
    contact: "03192094098",
    gender: "Male",
    clinic: "Patel Hospital",
    age: "40",
  },
  {
    id: 8,
    name: "Dr. Basit",
    specialization: "Cardiology",
    qualification: "MBBS, MD",
    contact: "03192094098",
    gender: "Male",
    clinic: "Patel Hospital",
    age: "40",
  },
  {
    id: 9,
    name: "Dr. Basit",
    specialization: "Cardiology",
    qualification: "MBBS, MD",
    contact: "03192094098",
    gender: "Male",
    clinic: "Patel Hospital",
    age: "40",
  },
];

export const clinicData = [
  {
    id: 1,
    name: "Dental Vision 2000",
    address: "Street 1, Block 6 Gulshan-e-Iqbal",
    latlong: "24.925696403600487, 67.0924404002646",
  },
  {
    id: 2,
    name: "Patel Hospital",
    address: "ST-18, Block 4 Gulshan-e-Iqbal",
    latlong: "24.936011673986155, 67.09700367391424",
  },
  {
    id: 3,
    name: "Family Care Clinic",
    address: "Jauhar Square, B-12/8, Block 18 Gulistan-e-Johar",
    latlong: "24.91064881437952, 67.12531532266284",
  },
  {
    id: 4,
    name: "Diabetes & Foot Care",
    address: "KDA Officers Housing Society Block A",
    latlong: "24.897859596511033, 67.0995810616582",
  },
  {
    id: 5,
    name: "Dental Vision 2000",
    address: "Shahrae Faisal",
    latlong: "24.88698500524078,67.14920279786963",
  },
];

export const patientData = [
  {
    id: 1,
    name: "Ahmed raza",
    DOB: "2015-04-11",
    gender: "Male",
    contact: "03192094098",

  },
  {
    id: 2,
    name: "Raza",
    DOB: "2015-04-11",
    gender: "Male",
    contact: "03192094098",

  },
  {
    id: 3,
    name: "Basit",
    DOB: "1959-04-11",
    gender: "Male",
    contact: "03192094098",

  },
  {
    id: 4,
    name: "Khadija",
    DOB: "1959-04-11",
    gender: "Male",
    contact: "03192094098",

  },
];
