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
import { doctorFields } from "@/utils/formField/formFIelds";
import { addDoctorSchema } from "@/utils/schema";

export default function Doctor() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { Option } = Select;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addDoctorSchema),
    defaultValues: {
      doctorName: "",
      userName: "",
      password: "",
      age: "",
      gender: "",
      contactNumber: "",
      specialization: "",
      qualification: "",
      doctorClinic: [{ clinicName: "", startTime: "", endTime: "" }],
    },
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

  const onSubmit = (data) =>{
    console.log("HelloWorld")
    console.log(data)
  }
  return (
    <div className="container mx-auto py-4 space-y-3">
      <TabHeader
        title="Doctor Management"
        buttonText="Add Doctor"
        showForm={showForm}
        setShowForm={setShowForm}
        data={clinicData}
        loading={clinicLoading}
        fields={doctorFields}
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        qualificationData={qualification}
        qualificationLoader={qualificationLoader}
        specializationData={specialization}
        specializationLoader={specializationLoader}
        
      />

      <SelectInput width="200px" placeholder="Select Clinic" data={clinicData} loading={clinicLoading}/>
      <SearchInput
        placeholder="Search Doctors..."
        onSearch={(value) => console.log("Searching for:", value)}
      />
      <TableList columns={doctorColumns} data={data} loading={loading} error={error}/>
    </div>
  );
}
