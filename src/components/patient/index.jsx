"use client";
import React, { useContext } from "react";
import { useState } from "react";
import SearchInput from "../formInput/searchInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TabHeader from "../headers/tabHeader";
import { Dialog } from "@headlessui/react";
import { clinicColumns, clinicData, patientColumn } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SelectInput } from "../formInput/selectInput";
import { PatientFields } from "@/utils/formField/formFIelds";
import { addPatientSchema } from "@/utils/schema";
import useFetchData from "../table/fetchData";
import { summary } from "@/config/summaryAPI";
import { AppContext } from "@/provider/AppProvider";

export default function Patient() {
  const [showForm, setShowForm] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const {isLoading,clinics,doctors} = useContext(AppContext)
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addPatientSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      contactNumber: "",
      password:""
    },
  });

  const onSubmit = (data) =>{
    console.log(data)
}

  return (
    <div className="container mx-auto py-4 space-y-3">
      <TabHeader
        title="Patient Management"
        buttonText="Add Patient"
        showForm={showForm}
        setShowForm={setShowForm}
        fields={PatientFields}
        control={control}
        errors={errors}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isEdited={isEdited}
        setIsEdited={setIsEdited}
        reset={reset}
      />
      <div className="sm:flex gap-3 sm:flex-row mt-2 flex flex-col">
        <SelectInput className="w-full" placeholder="Select Clinic" data={clinics} loading={isLoading}/>
        <SelectInput className="w-full" placeholder="Select Doctor" data={doctors} loading={isLoading}/>
      </div>
      <SearchInput
        placeholder="Search Patient..."
        onSearch={(value) => console.log("Searching for:", value)}
      />
      <TableList columns={patientColumn} />
    </div>
  );
}
