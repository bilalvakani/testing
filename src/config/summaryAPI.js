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
};
