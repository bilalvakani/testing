"use client";
import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import AddDoctor from "./addDoctor";
import { Trash2 , Pencil } from 'lucide-react';
import Pagination from "../pagination";

// Sample doctor data
const initialDoctors = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialization: "Cardiology",
    contact: "03192094098",
    gender: "Male",
    clinic:"City Hospital",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialization: "Neurology",
    contact: "03192094098",
    gender: "Male",
    clinic:"Patel Hospital",
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialization: "Pediatrics",
    contact: "03192094098",
    gender: "Male",
    clinic:"Jhangir Hospital",
  },
  {
    id: 4,
    name: "Dr. Emily Davis",
    specialization: "Dermatology",
    contact: "03192094098",
    gender: "Male",
    clinic:"Aga Khan Hospital",
  },
  {
    id: 5,
    name: "Dr. Robert Wilson",
    specialization: "Orthopedics",
    contact: "03192094098",
    gender: "Male",
    clinic:"Liaqaut Hospital",
  },
  {
    id: 6,
    name: "Dr. Jennifer Lee",
    specialization: "Ophthalmology",
    contact: "03192094098",
    gender: "Male",
    clinic:"Ziauddin Hospital",
  },
  {
    id: 7,
    name: "Dr. David Miller",
    specialization: "Psychiatry",
    contact: "03192094098",
    gender: "Male",
    clinic:"Taba Hospital",
  },
  {
    id: 8,
    name: "Dr. Lisa Taylor",
    specialization: "Gynecology",
    contact: "03192094098",
    gender: "Male",
    clinic:"Civil Hospital",
  },
];

export default function Doctor() {
  const [showForm, setShowForm] = useState(false);
  const [doctors, setDoctors] = useState(initialDoctors);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialization: "",
    contact: "",
    email: "",
  });

  const itemsPerPage = 5;
  const totalPages = Math.ceil(doctors.length / itemsPerPage);

  // Filter doctors based on search term
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current page items
  const currentDoctors = filteredDoctors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto py-4 space-y-3">
      <AddDoctor showForm={showForm} setShowForm={setShowForm} />
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
          className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>
      <div className="border rounded-lg shadow-sm max-h-[250px] overflow-y-auto bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  UserName
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specialization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clinic
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentDoctors.length > 0 ? (
                currentDoctors.map((doctor) => (
                  <tr key={doctor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {doctor.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.specialization}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.clinic}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                      <Trash2 size={18} className="text-red-400"/>
                      <Pencil size={18} className="text-yellow-400"/>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No doctors found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Pagination data={filteredDoctors} itemsPerPage={itemsPerPage}/> */}
    </div>
  );
}
