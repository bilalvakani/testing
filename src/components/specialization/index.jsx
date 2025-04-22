import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TabHeader from "../headers/tabHeader";
import { specializationColumns } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { Axios, summary } from "@/config/summaryAPI";
import { fetchSpecialization } from "@/config/callingAPIs";
import { SpecializationFields } from "@/utils/formField/formFIelds";
import { addSpecializationSchema } from "@/utils/schema";

const Specialization = () => {
  const [showForm, setShowForm] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addSpecializationSchema),
    defaultValues:{
      specialization:""
    }
  });

  const { specialization, specializationLoader } = fetchSpecialization(
    summary.getSpecialization
  );
  console.log(specialization, "dddd");

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
        title="Specialization Management"
        buttonText="Add Specialization"
        showForm={showForm}
        setShowForm={setShowForm}
        fields={SpecializationFields}
        control={control}
        errors={errors}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
      <TableList
        columns={specializationColumns(handleEdit, handleDelete)}
        data={specialization} loading={specializationLoader}
      />
    </div>
  );
};

export default Specialization;
