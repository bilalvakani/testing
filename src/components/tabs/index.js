"use client"
import { useState } from "react"
import Doctor from "../doctor"
import Clinic from "../clinic"
import Patient from "../patient"
import Appointment from "../appointment"
import Qualification from "../qualification"
import Specialization from "../specialization"

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case "doctor":
      return (
        <Doctor/>
      )
    case "clinic":
      return (
        <>
        <Clinic/>
        </>
      )
    case "patient":
      return (
        <>
        <Patient/>
        </>
      )
    case "appointment":
      return (
        <>
        <Appointment/>
        </>
      )
    case "qualification":
      return (
        <>
        <Qualification/>
        </>
      )
    case "specialization":
      return (
        <>
        <Specialization/>
        </>
      )
    default:
      return null
  }
}

export default TabContent

