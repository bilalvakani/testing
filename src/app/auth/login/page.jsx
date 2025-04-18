"use client"
import Link from "next/link";
import React from "react";
import bgImage from "@/assets/img/bgImage.jpg";
import {TextInput} from "@/components/formInput/textInput";
import AuthButton from "@/components/button/authButton";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from "@/utils/schema";
import { loginFields } from "@/utils/formField/authFields";
import { Axios, summary } from "@/config/summaryAPI";
import { AxiosError } from "@/utils/axiosError";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async(data) =>{
    console.log("Hello World")
    try {
      const response = await Axios({
        ...summary.login,
        params: {
          username:data.username,
          password:data.password,
          UUID:175678932,
          type:5
        }
      })
      console.log(response.data)
    } catch (error) {
      console.log(error)
      AxiosError(error)
    }finally{
      
    }
  }
  return (
    <div
      className="container h-screen bg-cover bg-center bg-blend-overlay bg-[#0066a1] flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="flex content-center items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-full lg:w-5/12 px-4">
        <div className="bg-white relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div className="rounded-t text-center mb-0 px-6 py-6">
            <h6 className="text-gray-600 text-xl font-bold">LOG IN</h6>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-4 pt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              {loginFields.map((field, index) => (
                <TextInput
                  key={index}
                  label={field.label}
                  input={field.input}
                  type={field.type}
                  name={field.name}
                  register={register}
                  errors={errors}
                />
              ))}
              <AuthButton>Log in</AuthButton>

              <div className="w-1/2">
                <a
                  href="#pablo"
                  // onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
