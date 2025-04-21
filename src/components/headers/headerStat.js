"use client";
import React, { useCallback, useEffect, useState } from "react";
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
const HeaderStats = () => {
  const [summaryData, setSummaryData] = useState({
    doctorSummary: {},
    clinicSummary: {},
    earningSummary: {},
    patientSummary: {},
    appointmentSummary: {},
  });
  console.log(summaryData)
  const [loading, setLoading] = useState(true)
  const TOKEN = "174462978804907-04-2025-17-48-11"
  const fetchAllSummaryData = useCallback(async () => {
    setLoading(true)
    try {
      const [doctorsRes, clinicsRes, appointmentsRes, patientsRes, earningsRes] = await Promise.all([
        Axios({
          ...summary.getSummaryDoctors,
          params: { token: TOKEN },
        }),
        Axios({
          ...summary.getSummaryClinics,
          params: { token: TOKEN },
        }),
        Axios({
          ...summary.getSummaryAppointment,
          params: { token: TOKEN },
        }),
        Axios({
          ...summary.getSummaryPatients,
          params: { token: TOKEN },
        }),
        Axios({
          ...summary.getSummaryEarnings,
          params: { token: TOKEN },
        }),
      ])
      setSummaryData({
        doctorSummary: doctorsRes.data,
        clinicSummary: clinicsRes.data,
        appointmentSummary: appointmentsRes.data,
        patientSummary: patientsRes.data,
        earningSummary: earningsRes.data,
      })
    } catch (error) {
      AxiosError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAllSummaryData()
  }, [fetchAllSummaryData])

  const doctorCount = summaryData.doctorSummary?.data
  const patientCount = summaryData.patientSummary?.data
  const clinicCount = summaryData.clinicSummary?.data
  const appointmentCount = summaryData.appointmentSummary?.data
  const earningCount = summaryData.earningSummary?.data
  return (
    <>
      {/* Header */}
      <div className="relative bg-gray-800 md:pt-24 pb-20 pt-12">
        <div className="px-4 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Clinics"
                  statCount={clinicCount?.totalClinics}
                  statIncrement={clinicCount?.totalClinicsThisMonth}
                  statIconName={<HeartPulse />}
                  statIconColor="bg-orange-500"
                  loader={loading}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Doctors"
                  statCount={doctorCount?.totalDoctors}
                  statIncrement={doctorCount?.totalDoctorsThisMonth}
                  statIconName={<Stethoscope />}
                  statIconColor="bg-red-500"
                  loader={loading}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Patients"
                  statCount={patientCount?.totalPatient}
                  statIncrement={patientCount?.totalPatientThisMonth}
                  statIconName={<Syringe />}
                  statIconColor="bg-orange-500"
                  loader={loading}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Appointment"
                  statCount={appointmentCount?.totalAppointments}
                  statIncrement={appointmentCount?.totalAppointmentsThisMonth}
                  statIconName={<HeartPulse />}
                  statIconColor="bg-pink-500"
                  loader={loading}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-2 xl:mb-4">
                <CardStats
                  statSubtitle="Total Earning"
                  // statCount={earningCount?.totalAppointments}
                    statCount={3000}
                  statIncrement={earningCount?.totalAppointmentsThisMonth}
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
