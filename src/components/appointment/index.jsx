"use client"
import React, { useContext, useEffect, useState } from 'react'
import SearchInput from "../formInput/searchInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TabHeader from "../headers/tabHeader";
import { appointmentColumns, appointmentData, clinicColumns, clinicData } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { appointmentFields } from '@/utils/formField/formFIelds';
import { addAppointmentSchema } from '@/utils/schema';
import useFetchData from '../table/fetchData';
import { summary } from '@/config/summaryAPI';
import { SelectInput } from '../formInput/selectInput';
import { AppContext } from '@/provider/AppProvider';
import { useSelector } from 'react-redux';
import { patientData } from '../table/doctorColumn';

const Appointment = () => {
    const [showForm, setShowForm] = useState(false);
    const [isMapVisible, setIsMapVisible] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isEdited, setIsEdited] = useState(false);
    const user = useSelector((state) => state.auth.user);
    const {
      register,
      handleSubmit,
      reset,
      control,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(addAppointmentSchema),
      defaultValues: {
        patientId: "",
        doctorId:"",
        clinicId:"Patel Hospital",
        visitDate: "",
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
    const {isLoading,clinics,doctors} = useContext(AppContext)
  return (
    <div className="container mx-auto py-4 space-y-3">
    <TabHeader
      title="Appointement Management"
      buttonText="Add Appointment"
      buttonShow={[4,5]}
      showForm={showForm}
      setShowForm={setShowForm}
      loading={isLoading}
      fields={appointmentFields}
      control={control}
      errors={errors}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      patientData={patientData}
      doctorData={doctors}
      isEdited={isEdited}
      setIsEdited={setIsEdited}
      reset={reset}
      type={user?.type}
    />
    <div className='flex gap-2'>
      <SelectInput width="200px" placeholder="Select Clinic" data={clinics} loading={isLoading}/>
      <SelectInput width="200px" placeholder="Select Doctor" data={doctors} loading={isLoading}/>
      <SelectInput width="200px" placeholder="Select Patient" data={clinics} loading={isLoading}/>
    </div>
    <SearchInput
      placeholder="Search Appointment..."
      onSearch={(value) => console.log("Searching for:", value)}
    />
    <TableList columns={appointmentColumns(handleEdit, handleDelete)} data={appointmentData} />
  </div>

  )
}

export default Appointment
