"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import { Trash2, Pencil } from "lucide-react";
import Pagination from "../pagination";
import SearchInput from "../formInput/searchInput";
import { SelectInput } from "../formInput/selectInput";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchField } from "@/utils/formField/searchField";
import TabHeader from "../headers/tabHeader";
import { Select, Input } from "antd";
import { doctorColumns, doctorData } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { Axios, summary } from "@/config/summaryAPI";
import useFetchData from "../table/fetchData";
import { fetchQualification, fetchSpecialization } from "@/config/callingAPIs";

export default function Doctor() {
  const [showForm, setShowForm] = useState(true);
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
  // const filteredDoctors = data.filter(
  //   (doctor) =>
  //     doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     // doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const api = { ...summary.getDoctors };
  const clinicApi = { ...summary.getClinics };
  const { data, loading, error } = useFetchData(api);
  const { data:clinicData, loading:clinicLoading, error:clinicError } = useFetchData(clinicApi);
  
  const { qualification, qualificationLoader } = fetchQualification(summary.getQualification);
  const { specialization, specializationLoader } = fetchSpecialization(summary.getSpecialization);
  
  console.log(qualification)
  console.log(specialization)
  return (
    <div className="container mx-auto py-4 space-y-3">
      <TabHeader
        title="Doctor Management"
        buttonText="Add Doctor"
        showForm={showForm}
        setShowForm={setShowForm}
        qualificationData={qualification}
        qualificationLoader={qualificationLoader}
        specializationData={specialization}
        specializationLoader={specializationLoader}
      />

      <SelectInput placeholder="Select Clinic" data={clinicData} loading={clinicLoading}/>
      <SearchInput
        placeholder="Search Doctors..."
        onSearch={(value) => console.log("Searching for:", value)}
      />
      <TableList columns={doctorColumns} data={data} loading={loading} error={error}/>
    </div>
  );
}
