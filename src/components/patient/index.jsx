"use client";
import React from "react";
import { useState } from "react";
import SearchInput from "../formInput/searchInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TabHeader from "../headers/tabHeader";
import { Dialog } from "@headlessui/react";
import { clinicColumns, clinicData, patientColumn } from "../table/tableColumn";
import TableList from "../table/doctorTable";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SelectInput } from "../formInput/selectInput";

export default function Patient() {
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
  const closeMap = () => {
    // setIsMapVisible(false);
    // setSelectedLocation(null);
  };

  return (
    <div className="container mx-auto py-4 space-y-3">
      <TabHeader
        title="Patient Management"
        buttonText="Add Patient"
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <div className="flex">
        <SelectInput placeholder="Select Clinic" />
        <SelectInput placeholder="Select Doctor" />
      </div>
      <SearchInput
        placeholder="Search Patient..."
        onSearch={(value) => console.log("Searching for:", value)}
      />
      <TableList columns={patientColumn} data={clinicData} />
    </div>
  );
}
