"use client";
import React, { useContext, useState } from "react";
import {qualificationColumns,specializationColumns} from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { Axios, summary } from "@/config/summaryAPI";
import { fetchQualification, fetchSpecialization } from "@/config/callingAPIs";
import TabHeader from "../headers/tabHeader";
import {PatientFields,QualificationFields} from "@/utils/formField/formFIelds";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { addQualificationSchema } from "@/utils/schema";
import { AxiosError } from "@/utils/axiosError";
import DeleteConformation from "../deleteConformation";
import { AppContext } from "@/provider/AppProvider";

const qualification = () => {
  const [showForm, setShowForm] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");

  const {isLoading,qualification} = useContext(AppContext)
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

  const handleEdit = async (obj) => {
    setShowForm(true);
    setIsEdited(true);
    console.log(obj)
    setId(obj.id);
    reset({
      qualification: obj.name,
    });
  };

  const handleDelete = (id) => {
    setModalVisible(true);
  };

  const confirmDelete = () => {
    console.log("Deleting item with ID:", selectedId);
  };

  const onSubmit = async (data) => {
    try {
      setLoader(true);
      const payload = {
        name: data.qualification
      };

      const response = await Axios({
        ...summary.addQualification,
        data: payload,
        params: {
          token: "174435878371907-04-2025-17-48-11",
        },
      });
      if (response.status == 200) {
        toast.success("specialization Add Successfully");
        reset();
        // setClinicData((prev) => ({
        //   ...prev,
        //   ...response,
        // }));
      }
    } catch (error) {
      AxiosError(error);
    } finally {
      setLoader(false);
    }
  };

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
        loader={loader}
        isEdited={isEdited}
        setIsEdited={setIsEdited}
        reset={reset}
      />
      <TableList
        columns={qualificationColumns(handleEdit, handleDelete)}
        data={qualification}
        loading={isLoading}
      />
      <DeleteConformation modalVisible={modalVisible} setModalVisible={setModalVisible} confirmDelete={confirmDelete}/>
    </div>
  );
};

export default qualification;
