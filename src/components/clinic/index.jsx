"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import SearchInput from "../formInput/searchInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TabHeader from "../headers/tabHeader";
import { Dialog } from "@headlessui/react";
import { clinicColumns, clinicData } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useFetchData from "../table/fetchData";
import { Axios, summary } from "@/config/summaryAPI";
import { clinicFields } from "@/utils/formField/formFIelds";
import { addClinicSchema } from "@/utils/schema";
import { AxiosError } from "@/utils/axiosError";
import toast from "react-hot-toast";
import { DeleteButtonWithText } from "../button/deleteButton";

export default function Clinic() {
  const api = { ...summary.getClinics };
  const { data, loading, error } = useFetchData(api);
  const [showForm, setShowForm] = useState(false);
  const [loader, setLoader] = useState(false);
  const [clinicData, setClinicData] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addClinicSchema),
    defaultValues: {
      name: "",
      address: "",
      lat: "",
      lng: "",
    },
  });
  const onLocationClick = (latlong) => {
    console.log(latlong);
    const [lat, long] = latlong.split(", ");
    setSelectedLocation({ lat, long });
    setIsMapVisible(true);
  };
  const closeMap = () => {
    // setIsMapVisible(false);
    // setSelectedLocation(null);
  };
  useEffect(() => {
    setClinicData(data);
  }, [data]);

  const handleEdit = (record) => {};

  const handleDelete = async (id) => {
    
  };

  const handleDeleteClinic = async() =>{
    try {
      const response = await Axios({
        ...summary.deleteClinic,
        params:{
          token:"174435878371907-04-2025-17-48-11",
          id:id
        }
      })
      if(response.status == 200){
      }
    } catch (error) {
      AxiosError(error)
    }
  }
  const onSubmit = async (data) => {
    try {
      setLoader(true);
      const { lat, lng, ...rest } = data;
      const payload = {
        ...rest,
        LatLong: `${data.lat},${data.lng}`,
      };
      const response = await Axios({
        ...summary.addClinic,
        data: payload,
        params: {
          token: "174435878371907-04-2025-17-48-11",
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
        title="Clinic Management"
        buttonText="Add Clinic"
        showForm={showForm}
        setShowForm={setShowForm}
        fields={clinicFields}
        control={control}
        errors={errors}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        loader={loader}
      />
      <SearchInput
        placeholder="Search Clinics..."
        onSearch={(value) => console.log("Searching for:", value)}
      />
      <TableList
        columns={clinicColumns(onLocationClick, handleEdit, handleDelete)}
        data={clinicData}
        loading={loading}
      />
      {selectedLocation && (
        <Dialog
          open={modalVisible}
          onClose={() => {}}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="w-full max-w-xl rounded bg-white p-6">
              <Dialog.Title className="text-lg font-bold">
                Location Map
              </Dialog.Title>
              <p>
                Your map goes here{selectedLocation?.lat}
                {selectedLocation?.long}
              </p>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
      <Dialog open={!modalVisible} onClose={() => {}} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="w-full max-w-xl rounded bg-gray-100 p-6">
            <Dialog.Title className="text-lg font-bold">
              Confirmation Delete
            </Dialog.Title>
            <div className="flex gap-2">
              <button className="cursor-pointer border px-3 py-2 rounded-lg" onClick={() => onDeleteClick(id)}>Cancel</button>
              <button className="cursor-pointer bg-red-600 !text-white px-3 py-2 rounded-lg" onClick={() => onDeleteClick(id)}>Delete</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
