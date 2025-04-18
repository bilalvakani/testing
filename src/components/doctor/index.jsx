"use client";
import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import { Trash2, Pencil } from "lucide-react";
import Pagination from "../pagination";
import SearchInput from "../formInput/searchInput";
import { SelectInput } from "../formInput/selectInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchField } from "@/utils/formField/searchField";
import TabHeader from "../headers/tabHeader";
import { Select, Input } from "antd";
import { doctorColumns, doctorData } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { summary } from "@/config/summaryAPI";
import useFetchData from "../table/fetchData";
// Sample doctor data
const initialDoctors = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialization: "Cardiology",
    contact: "03192094098",
    gender: "Male",
    clinic: "City Hospital",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialization: "Neurology",
    contact: "03192094098",
    gender: "Male",
    clinic: "Patel Hospital",
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialization: "Pediatrics",
    contact: "03192094098",
    gender: "Male",
    clinic: "Jhangir Hospital",
  },
  {
    id: 4,
    name: "Dr. Emily Davis",
    specialization: "Dermatology",
    contact: "03192094098",
    gender: "Male",
    clinic: "Aga Khan Hospital",
  },
  {
    id: 5,
    name: "Dr. Robert Wilson",
    specialization: "Orthopedics",
    contact: "03192094098",
    gender: "Male",
    clinic: "Liaqaut Hospital",
  },
  {
    id: 6,
    name: "Dr. Jennifer Lee",
    specialization: "Ophthalmology",
    contact: "03192094098",
    gender: "Male",
    clinic: "Ziauddin Hospital",
  },
  {
    id: 7,
    name: "Dr. David Miller",
    specialization: "Psychiatry",
    contact: "03192094098",
    gender: "Male",
    clinic: "Taba Hospital",
  },
  {
    id: 8,
    name: "Dr. Lisa Taylor",
    specialization: "Gynecology",
    contact: "03192094098",
    gender: "Male",
    clinic: "Civil Hospital",
  },
];

export default function Doctor() {
  const [showForm, setShowForm] = useState(false);
  const [doctors, setDoctors] = useState(initialDoctors);
  const [searchTerm, setSearchTerm] = useState("");
  const { Option } = Select;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(),
  });

  // Filter doctors based on search term
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const api = { ...summary.getDoctors };
  const doctorTransformer = (data) => {

    return data.doctors.map((item, index) => ({
      id: item.id || index + 1,
      name: item.name,
      specialization: item.specializations[0].name || "No Specialization",
      qualification: item.qualifications[0].name,
      address: item.address,
      gender: item.gender,
      clinic: item.doctorClinicDALS[0]?.clinic?.name,
      age: item.age,
    }));
  };
  const { data, loading, error } = useFetchData(api,doctorTransformer);
  console.log(data, loading, error);
  return (
    <div className="container mx-auto py-4 space-y-3">
      <TabHeader
        title="Doctor Management"
        buttonText="Add Doctor"
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <SelectInput placeholder="Select Clinic" />
      <SearchInput
        placeholder="Search Doctors..."
        onSearch={(value) => console.log("Searching for:", value)}
      />
      <TableList columns={doctorColumns} data={data} loading={loading} error={error}/>
    </div>
  );
}
