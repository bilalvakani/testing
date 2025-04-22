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
import { AxiosError } from "@/utils/axiosError";
import toast from "react-hot-toast";

const Specialization = () => {
  const [showForm, setShowForm] = useState(true);
    const [loader, setLoader] = useState(false);

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

  // const onSubmit = (data) =>{
  //   console.log(data)
  // }
    const onSubmit = async (data) => {
      try {
        setLoader(true);
        const payload = {
          name: data.specialization, // ✅ matching the backend key
        };

        const response = await Axios({
          ...summary.addSpecialization,
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
        console.log(error);
        AxiosError(error);
      } finally {
        setLoader(false);
      }
    };

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
