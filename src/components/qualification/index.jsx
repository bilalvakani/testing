"use client"
import React, { useState } from "react";
import { qualificationColumns, specializationColumns } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { Axios, summary } from "@/config/summaryAPI";
import { fetchQualification, fetchSpecialization } from "@/config/callingAPIs";
import TabHeader from "../headers/tabHeader";
import { PatientFields, QualificationFields } from "@/utils/formField/formFIelds";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addQualificationSchema } from "@/utils/schema";

const qualification = () => {
  const [showForm, setShowForm] = useState(false);
  const { qualification, qualificationLoader } = fetchQualification(summary.getQualification);
  console.log(qualification)
  const {
      register,
      handleSubmit,
      control,
      reset,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(addQualificationSchema),
      defaultValues: {
        qualification: "",
      },
    });
  
  const handleEdit = (record) => {
    console.log("Edit clicked:", record);
  };

  const handleDelete = (record) => {
    console.log("Delete clicked:", record);
  };

  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <div className="container mx-auto py-4 space-y-3">
      <TabHeader
        title="Qualification Management"
        buttonText="Add Qualification"
        showForm={showForm}
        setShowForm={setShowForm}
        fields={QualificationFields}
        control={control}
        errors={errors}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
      <TableList
        columns={qualificationColumns(handleEdit, handleDelete)}
        data={qualification} loading={qualificationLoader}
      />
    </div>
  );
};

export default qualification;
