import React, { useContext, useState } from 'react'
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
    const {isLoading,clinics,doctors} = useContext(AppContext)
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
    <div className='sm:flex gap-3 sm:flex-row mt-2 flex flex-col w-auto'>
      <SelectInput placeholder="Select Clinic" data={clinics} loading={isLoading}/>
      <SelectInput placeholder="Select Doctor" data={doctors} loading={isLoading}/>
      <SelectInput placeholder="Select Patient" data={clinics} loading={isLoading}/>
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
