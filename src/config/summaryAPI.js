import axios from "axios";
export const baseURL = "http://192.168.18.21:8080/tabib";

export const Axios = axios.create({
  baseURL: baseURL,
  //   withCredentials: true,
});
// Axios.interceptors.request.use(async (config) => {
//     const Token = localStorage.getItem('token')
//     if (Token) {
//         config.headers.Authorization = `Bearer ${Token}`
//     }
//     return config
// },
//     (error) => {
//         return Promise.reject(error)
//     })

export const summary = {
  login: {
    url: "/login",
    method: "get",
  },
  getDoctors: {
    url: "/getAllDoctors",
    method: "get",
    transformer: (data) =>
      data.doctors.map((item, index) => ({
        id: item.id || index + 1,
        name: item.name,
        specialization: item.specializations[0]?.name || "No Specialization",
        qualification: item.qualifications[0]?.name,
        address: item.address,
        gender: item.gender,
        clinic: item.doctorClinicDALS[0]?.clinic?.name,
        age: item.age,
      })),
  },
  getClinics: {
    url: "/getAllClinics",
    method: "get",
    transformer: (data) =>
      data.clinics.map((item, index) => ({
        id: item.id || index + 1,
        name: item.name,
        address: item.address,
        LatLong: item.LatLong,
      })),
  },
  getQualification: {
    url: "/getAllQualification",
    method: "get",
  },
  getSpecialization: {
    url: "/getAllSpecialization",
    method: "get",
  },
};
