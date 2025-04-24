"use client";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { Axios, summary } from "@/config/summaryAPI";
import { AxiosError } from "@/utils/axiosError";
import { patientData } from "@/components/table/doctorColumn";
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);
  const [clinics, setClinics] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState(patientData);
  const [appointment, setAppointment] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [specialization, setSpecialization] = useState([]);
  const [doctorSummary, setDoctorSummary] = useState({});
  const [clinicSummary, setClinicSummary] = useState({});
  const [earningSummary, setEarningSummary] = useState({});
  const [patientSummary, setPatientSummary] = useState({});
  const [appointmentSummary, setAppointmentSummary] = useState({});
  const isLoading = loadingCount > 0;
  const startLoading = () => setLoadingCount((count) => count + 1);
  const stopLoading = () => setLoadingCount((count) => Math.max(0, count - 1));
  const TOKEN = "174462978804907-04-2025-17-48-11";
  const fetchAllSummaryData = useCallback(async () => {
    startLoading();
    try {
      const [
        doctorsRes,
        clinicsRes,
        appointmentsRes,
        patientsRes,
        earningsRes,
      ] = await Promise.all([
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
      ]);
      setDoctorSummary(doctorsRes.data);
      setClinicSummary(clinicsRes.data);
      setEarningSummary(earningsRes.data);
      setPatientSummary(patientsRes.data);
      setAppointmentSummary(appointmentsRes.data);
    } catch (error) {
      AxiosError(error);
    } finally {
      stopLoading();
    }
  }, []);
  const fetchClinicDropdown = async () => {
    try {
      startLoading();
      const { url, method, transformer = (data) => data } = summary.getClinics;
      const response = await Axios({
        url,
        method,
        params: {
          token: TOKEN,
        },
      });
      const transformed = transformer(response.data.data);
      setClinics(transformed);
    } catch (error) {
      AxiosError(error);
    } finally {
      stopLoading();
    }
  };
  const fetchQualificationDropdown = async () => {
    try {
      startLoading();
      const response = await Axios({
        ...summary.getQualification,
        params: {
          token: TOKEN,
        },
      });
      setQualification(response.data.data.qualifications);
    } catch (error) {
      AxiosError(error);
    } finally {
      stopLoading();
    }
  };
  const fetchQSpecializationDropdown = async () => {
    try {
      startLoading();
      const response = await Axios({
        ...summary.getSpecialization,
        params: {
          token: TOKEN,
        },
      });
      setSpecialization(response.data.data.specializations);
    } catch (error) {
      AxiosError(error);
    } finally {
      stopLoading();
    }
  };
  const fetchDoctorDropdown = async () => {
    try {
      startLoading();
      const { url, method, transformer = (data) => data } = summary.getDoctors;
      const response = await Axios({
        url,
        method,
        params: {
          token: TOKEN,
        },
      });
      const transformed = transformer(response.data.data);
      setDoctors(transformed);
    } catch (error) {
      AxiosError(error);
    } finally {
      stopLoading();
    }
  };
  // useEffect(() => {
  //   fetchAllSummaryData();
  //   fetchClinicDropdown();
  //   fetchQualificationDropdown();
  //   fetchQSpecializationDropdown();
  //   fetchDoctorDropdown();
  // }, []);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        clinics,
        setClinics,
        doctors,
        setDoctors,
        patients,
        setPatients,
        appointment,
        setAppointment,
        qualification,
        setQualification,
        specialization,
        setSpecialization,
        doctorSummary,
        clinicSummary,
        earningSummary,
        patientSummary,
        appointmentSummary,
        fetchAllSummaryData,
        fetchClinicDropdown,
        fetchQualificationDropdown,
        fetchQSpecializationDropdown,
        fetchDoctorDropdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
