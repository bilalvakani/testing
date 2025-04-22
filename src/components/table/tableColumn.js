import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Pencil,Trash2  } from 'lucide-react';
import { Button, Space } from "antd";
import {EditButton} from "../button/editButton";
import {DeleteButton} from "../button/deleteButton";

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
    title: "Address",
    dataIndex: "address",
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

export const clinicColumns = (onLocationClick,onEditClick,onDeleteClick) => [
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
    dataIndex: "LatLong",
    render: (LatLong) => (
      <button className="" onClick={() => onLocationClick(LatLong)}>
        View Map
      </button>
    ),
  },
  {
    title: "Actions",
    dataIndex: "e",
    render: (_,record) => (
      <div className="flex gap-3">
        <EditButton onEditClick={onEditClick} obj={record}><Pencil size={18} className="text-yellow-400"/></EditButton>
        <DeleteButton onDeleteClick={onDeleteClick} obj={record}><Trash2 size={18} className="text-red-600"/></DeleteButton>
      </div>
    ),
  },
];

export const appointmentColumns = (onEditClick, onDeleteClick) => [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Patient",
    dataIndex: "patient",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Visit_date",
    dataIndex: "visitDate",
  },
  {
    title: "Clinic",
    dataIndex: "clinic",
  },
  {
    title: "Doctor",
    dataIndex: "doctor",
  },
  {
    title: "Actions",
    dataIndex: "e",
    render: (_, record) => (
      <Space>
        <Button icon={<EditOutlined />} onClick={() => onEditClick(record)} />
        <Button
          icon={<DeleteOutlined />}
          danger
          onClick={() => onDeleteClick(record)}
        />
      </Space>
    ),
  },
];

export const qualificationColumns = (onEditClick, onDeleteClick) => [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Actions",
    dataIndex: "e",
    render: (_,record) => (
      <div className="flex gap-3">
        <EditButton onEditClick={onEditClick} obj={record}><Pencil size={18} className="text-yellow-400"/></EditButton>
        <DeleteButton onDeleteClick={onDeleteClick} obj={record}><Trash2 size={18} className="text-red-600"/></DeleteButton>
      </div>
    ),
  },
];

export const specializationColumns = (onEditClick, onDeleteClick) => [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Actions",
    dataIndex: "e",
    render: (_,record) => (
      <div className="flex gap-3">
        <EditButton onEditClick={onEditClick} obj={record}><Pencil size={18} className="text-yellow-400"/></EditButton>
        <DeleteButton onDeleteClick={onDeleteClick} obj={record}><Trash2 size={18} className="text-red-600"/></DeleteButton>
      </div>
    ),
  },
];

export const patientColumn = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Patient Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Age",
    dataIndex: "age",
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

export const appointmentData = [
  {
    id: 1,
    age: "15",
    patient: "Osama",
    charges: "Male",
  },
  {
    id: 2,
    age: "11",
    bloodPressure: "120/160",
    charges: "3000",
    diagnosis: "Fever",
    prescription: "Paracetamol",
    VISIT_DATE: "2023-10-01",
    weight: "70",
  },
  {
    id: 3,
    age: "22",
    bloodPressure: "180/110",
    charges: "3000",
    diagnosis: "Fever",
    prescription: "Paracetamol",
    VISIT_DATE: "2023-10-01",
    weight: "70",
  },
  {
    id: 4,
    age: "20",
    bloodPressure: "180/120",
    charges: "2000",
    diagnosis: "Fever",
    prescription: "Paracetamol",
    VISIT_DATE: "2023-10-01",
    weight: "70",
  },
];

export const qualificationData = [
  {
    id: 1,
    name: "MBBS",
    updateDate: "2023-10-01",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 2,
    name: "MBBS",
    updateDate: "2023-10-01",
    edit: "Edit",
    delete: "Delete",
  },
];
export const specializationData = [
  {
    id: 1,
    name: "Dentist",
    updateDate: "2023-10-01",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 2,
    name: "Physician",
    updateDate: "2023-10-01",
    edit: "Edit",
    delete: "Delete",
  },
];
