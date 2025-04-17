import React, { useState } from 'react'
import SearchInput from "../formInput/searchInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TabHeader from "../headers/tabHeader";
import { Dialog } from "@headlessui/react";
import { appointmentColumns, appointmentData, clinicColumns, clinicData } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const Appointment = () => {
    const [showForm, setShowForm] = useState(false);
    const [isMapVisible, setIsMapVisible] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(),
    });
    const onLocationClick = (latlong) => {
      console.log("Under aya ya nahii");
      const [lat, long] = latlong.split(", ");
      setSelectedLocation({ lat, long });
      setIsMapVisible(true);
    };
  return (
    <div className="container mx-auto py-4 space-y-3">
    <TabHeader
      title="Appointement Management"
      showForm={showForm}
      setShowForm={setShowForm}
    />
    {/* <SearchInput
      placeholder="Search Clinics..."
      onSearch={(value) => console.log("Searching for:", value)}
    /> */}
    <TableList columns={appointmentColumns(onLocationClick)} data={appointmentData} />
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
