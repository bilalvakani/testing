import React, { useContext } from "react";
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
import DeleteConformation from "../deleteConformation";
import { AppContext } from "@/provider/AppProvider";
import { useSelector } from "react-redux";

const Specialization = () => {
  const [showForm, setShowForm] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [id, setId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addSpecializationSchema),
    defaultValues: {
      specialization: "",
    },
  });

  const { isLoading, specialization } = useContext(AppContext);

  const handleEdit = async (obj) => {
    setShowForm(true);
    setIsEdited(true);
    console.log(obj);
    setId(obj.id);
    reset({
      specialization: obj.name,
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

  const editSubmit = async (data) => {
    try {
      setLoader(true);
      const { lat, lng, ...rest } = data;
      const payload = {
        ...rest,
        LatLong: `${data.lat},${data.lng}`,
      };
      console.log(payload);
      console.log(id);
      return;
      const response = await Axios({
        ...summary.updateClinic,
        data: payload,
        params: {
          token: "174435878371907-04-2025-17-48-11",
          id: id,
        },
      });
      if (response.status == 200) {
        toast.success("Clinic Add Successfully");
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
        buttonShow={[5]}
        showForm={showForm}
        setShowForm={setShowForm}
        fields={SpecializationFields}
        control={control}
        errors={errors}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        loader={loader}
        isEdited={isEdited}
        setIsEdited={setIsEdited}
        reset={reset}
        editSubmit={editSubmit}
        type={user?.type}
      />
      <TableList
        columns={specializationColumns(handleEdit, handleDelete)}
        data={specialization}
        loading={isLoading}
      />
      <DeleteConformation
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default Specialization;
