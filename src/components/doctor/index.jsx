"use client";
import React, { useContext, useEffect } from "react";
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
import { AppContext } from "@/provider/AppProvider";

export default function Doctor() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEdited, setIsEdited] = useState(false);
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
  const {isLoading,clinics,qualification,specialization,doctors} = useContext(AppContext)

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
        data={clinics}
        loading={isLoading}
        fields={doctorFields}
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        qualificationData={qualification}
        specializationData={specialization}
        isEdited={isEdited}
        setIsEdited={setIsEdited}
        reset={reset}
      />

      <SelectInput className="w-auto" placeholder="Select Clinic" data={clinics} loading={isLoading}/>
      <SearchInput
        placeholder="Search Doctors..."
        onSearch={(value) => console.log("Searching for:", value)}
      />
      <TableList columns={doctorColumns} data={doctors} loading={isLoading}/>
    </div>
  );
}
