"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import CardStats from "../cards/CardStats";
import {
  Stethoscope,
  Syringe,
  HeartPulse,
  MessageSquareDiff,
  TrendingUp,
} from "lucide-react";
import { AxiosError } from "@/utils/axiosError";
import { Axios, summary } from "@/config/summaryAPI";
import { AppContext } from "@/provider/AppProvider";
const HeaderStats = () => {
  const { doctorSummary,clinicSummary,earningSummary,patientSummary,appointmentSummary,fetchAllSummaryData } = useContext(AppContext);
  useEffect(()=>{
    fetchAllSummaryData()
  },[])
  const [loading, setLoading] = useState(true)

  const doctorCount = doctorSummary?.data
  const patientCount = patientSummary?.data
  const clinicCount = clinicSummary?.data
  const appointmentCount = appointmentSummary?.data
  const earningCount = earningSummary?.data
  return (
    <>
      {/* Header */}
      <div className="relative bg-gray-800 md:pt-24 pb-20 pt-12">
        <div className="px-4 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-[20%] px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Clinics"
                  statCount={clinicCount?.totalClinics || "0"}
                  statIncrement={clinicCount?.totalClinicsThisMonth || "0"}
                  statIconName={<HeartPulse />}
                  statIconColor="bg-red-500"
                  loader={loading}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-[20%] px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Doctors"
                  statCount={doctorCount?.totalDoctors || "0"}
                  statIncrement={doctorCount?.totalDoctorsThisMonth || "0"}
                  statIconName={<Stethoscope />}
                  statIconColor="bg-blue-500"
                  loader={loading}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-[20%] px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Patients"
                  statCount={patientCount?.totalPatient || "0"}
                  statIncrement={patientCount?.totalPatientThisMonth || "0"}
                  statIconName={<Syringe />}
                  statIconColor="bg-orange-500"
                  loader={loading}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-[20%] px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Appointment"
                  statCount={appointmentCount?.totalAppointments || "0"}
                  statIncrement={appointmentCount?.totalAppointmentsThisMonth || "0"}
                  statIconName={<HeartPulse />}
                  statIconColor="bg-pink-500"
                  loader={loading}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-[20%] px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Earning"
                  statCount={earningCount?.totalAppointments || "0"}
                  statIncrement={earningCount?.totalAppointmentsThisMonth || "0"}
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName={<TrendingUp/>}
                  statIconColor="bg-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderStats;
