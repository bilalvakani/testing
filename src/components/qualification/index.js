
import React from "react";
import { qualificationColumns, specializationColumns } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { Axios, summary } from "@/config/summaryAPI";
import { fetchQualification, fetchSpecialization } from "@/config/callingAPIs";

const qualification = () => {

  const { qualification, qualificationLoader } = fetchQualification(summary.getQualification);
  console.log(qualification, "dddd");
  
  const handleEdit = (record) => {
    console.log("Edit clicked:", record);
  };

  const handleDelete = (record) => {
    console.log("Delete clicked:", record);
  };

  return (
    <div className="container mx-auto py-4 space-y-3">
      <TableList
        columns={qualificationColumns(handleEdit, handleDelete)}
        data={qualification}
      />
    </div>
  );
};

export default qualification;
