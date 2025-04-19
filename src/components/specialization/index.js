import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TabHeader from "../headers/tabHeader";
import { specializationColumns } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { Axios, summary } from "@/config/summaryAPI";
import { fetchSpecialization } from "@/config/callingAPIs";

const Specialization = () => {

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

  return (
    <div className="container mx-auto py-4 space-y-3">
      <TableList
        columns={specializationColumns(handleEdit, handleDelete)}
        data={specialization}
      />
    </div>
  );
};

export default Specialization;
