import React, { useState } from 'react'
import SearchInput from "../formInput/searchInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TabHeader from "../headers/tabHeader";
import { Dialog } from "@headlessui/react";
import { appointmentColumns, appointmentData, clinicColumns, clinicData } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { appointmentFields } from '@/utils/formField/formFIelds';
import { addAppointmentSchema } from '@/utils/schema';
import useFetchData from '../table/fetchData';
import { summary } from '@/config/summaryAPI';
import { SelectInput } from '../formInput/selectInput';

const Appointment = () => {
    const [showForm, setShowForm] = useState(false);
    const [isMapVisible, setIsMapVisible] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const {
      register,
      handleSubmit,
      reset,
      control,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(addAppointmentSchema),
      defaultValues: {
        patient: "",
        doctor:"",
        clinic:"",
        age: "",
        contactNumber: "",
      },
    });
    const onSubmit = () => {
        console.log(data,"data")
    }
    const handleEdit = (record) => {
      console.log("Edit clicked:", record);
    };
  
    const handleDelete = (record) => {
      console.log("Delete clicked:", record);
    };
    const api = { ...summary.getDoctors };
    const clinicApi = { ...summary.getClinics };
    const { data, loading, error } = useFetchData(api);
    const { data:clinicData, loading:clinicLoading, error:clinicError } = useFetchData(clinicApi);
  return (
    <div className="container mx-auto py-4 space-y-3">
    <TabHeader
      title="Appointement Management"
      buttonText="Add Appointment"
      showForm={showForm}
      setShowForm={setShowForm}
      fields={appointmentFields}
      control={control}
      errors={errors}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
    <div className='flex gap-2'>
      <SelectInput width="200px" placeholder="Select Clinic" data={clinicData} loading={clinicLoading}/>
      <SelectInput width="200px" placeholder="Select Doctor" data={data} loading={loading}/>
      <SelectInput width="200px" placeholder="Select Patient" data={data} loading={loading}/>
    </div>
    <SearchInput
      placeholder="Search Appointment..."
      onSearch={(value) => console.log("Searching for:", value)}
    />
    <TableList columns={appointmentColumns(handleEdit, handleDelete)} data={appointmentData} />
    {selectedLocation && <Dialog open={isMapVisible} onClose={() => {}} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="w-full max-w-xl rounded bg-white p-6">
          <Dialog.Title className="text-lg font-bold">
            Location Map
          </Dialog.Title>
          <p>Your map goes here{selectedLocation?.lat}{selectedLocation?.long}</p>
        </Dialog.Panel>
      </div>
    </Dialog>}
  </div>

  )
}

export default Appointment
