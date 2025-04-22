import React from "react";
import {
  DataSelectInputs,
  SelectInputs,
  TextInputs,
} from "../formInput/textInput";
import { doctorFields } from "@/utils/formField/formFIelds";
import Accordian from "../accordian/accordian";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { addDoctorSchema } from "@/utils/schema";
import { Input } from "antd";
import Spinner from "../spinner/spinner";

const TabHeader = ({
  showForm,
  setShowForm,
  title,
  buttonText,
  data,
  loading,
  fields,
  handleSubmit,
  onSubmit,
  control,
  errors,
  qualificationData,
  qualificationLoader,
  specializationData,
  specializationLoader,
  loader,
  isEdited,
  setIsEdited,
  reset,
  editSubmit
}) => {
  return (
    <>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-2xl !font-bold text-neutral-800 !mb-0">{title}</h1>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setIsEdited(false)
            reset({
              name: "",
              address: "",
              lat: "",
              lng: "",
            });
          }}
          className="px-4 py-2 bg-gray-800 !text-white rounded-3xl hover:bg-[#0066a1] transition-colors border-white border"
        >
          {showForm ? "Cancel" : buttonText}
        </button>
      </div>
      {showForm && <form
        onSubmit={handleSubmit(isEdited ? editSubmit : onSubmit)}
        className="mt-4 border rounded-lg shadow-sm p-4 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {fields?.map((field, index) => {
            if (field.type === "select") {
              return (
                <SelectInputs
                  key={index}
                  label={field.label}
                  input={field.input}
                  type={field.type}
                  control={control}
                  errors={errors}
                  name={field.name}
                  options={field.options}
                />
              );
            }
            if (field.type === "selectoption") {
              const isQualification = field.name
                .toLowerCase()
                .includes("qualification");
              const isSpecialization = field.name
                .toLowerCase()
                .includes("specialization");
              return (
                <DataSelectInputs
                  key={index}
                  label={field.label}
                  input={field.input}
                  type={field.type}
                  control={control}
                  errors={errors}
                  name={field.name}
                  options={
                    isQualification
                      ? qualificationData
                      : isSpecialization
                      ? specializationData
                      : []
                  }
                  loading={
                    isQualification
                      ? qualificationLoader
                      : isSpecialization
                      ? specializationLoader
                      : false
                  }
                />
              );
            } else {
              return (
                <TextInputs
                  key={index}
                  label={field.label}
                  input={field.input}
                  type={field.type}
                  control={control}
                  errors={errors}
                  name={field.name}
                />
              );
            }
          })}
        </div>
        <div>
          {buttonText === "Add Doctor" && (
            <Accordian
              data={data}
              loading={loading}
              control={control}
              errors={errors}
              name="doctorClinic"
            />
          )}
          <button
            type="submit"
            disabled={loader}
            className="border px-4 py-2 !mt-2 rounded-2xl bg-neutral-800 !text-white"
          >
            {loader ? <Spinner size={16} style={{ color: "white" }}/> : isEdited ? "Update" :buttonText}
          </button>
        </div>
      </form>}
    </>
  );
};

export default TabHeader;

// "use client"

// import { useState } from "react"
// import { useForm, Controller } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import { Input, Select, Button } from "antd"
// import { addDoctorSchema } from "@/utils/schema"
// import { doctorFields } from "@/utils/formField/formFIelds"

// export default function TabHeader() {
//   const [qualificationData, setQualificationData] = useState([
//     { label: "MBBS", value: "mbbs" },
//     { label: "MD", value: "md" },
//     { label: "MS", value: "ms" },
//     { label: "DNB", value: "dnb" },
//   ])

//   const [specializationData, setSpecializationData] = useState([
//     { label: "Cardiology", value: "cardiology" },
//     { label: "Neurology", value: "neurology" },
//     { label: "Orthopedics", value: "orthopedics" },
//     { label: "Pediatrics", value: "pediatrics" },
//   ])

//   const [qualificationLoader, setQualificationLoader] = useState(false)
//   const [specializationLoader, setSpecializationLoader] = useState(false)

//   // Initialize form with react-hook-form and zod resolver
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm({
//     resolver: zodResolver(addDoctorSchema),
//     defaultValues: {
//       doctorName: "",
//       userName: "",
//       password: "",
//       age: "",
//       gender: "",
//       contactNumber: "",
//       specialization: "",
//       qualification: "",
//     },
//   })

//   function onSubmit(data) {
//     console.log("Form submitted:", data)
//     // Handle form submission here
//   }

//   return (
//     <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">Add Doctor</h2>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         {doctorFields.map((field, index) => {
//           if (field.type === "select") {
//             return (
//               <div key={index} className="relative w-full mb-3">
//                 <label className="block uppercase text-xs font-bold mb-2 text-neutral-800">{field.label}</label>
//                 <Controller
//                   control={control}
//                   name={field.name}
//                   render={({ field: controllerField }) => (
//                     <Select
//                       placeholder={field.input}
//                       className="w-full h-[40px]"
//                       status={errors[field.name] ? "error" : ""}
//                       options={field.options}
//                       value={controllerField.value}
//                       onChange={controllerField.onChange}
//                     />
//                   )}
//                 />
//                 {errors[field.name] && <span className="text-red-500 text-sm">{errors[field.name]?.message}</span>}
//               </div>
//             )
//           }

//           if (field.type === "selectoption") {
//             const isQualification = field.name.toLowerCase().includes("qualification")
//             const isSpecialization = field.name.toLowerCase().includes("specialization")
//             const options = isQualification ? qualificationData : isSpecialization ? specializationData : []
//             const loading = isQualification ? qualificationLoader : isSpecialization ? specializationLoader : false

//             return (
//               <div key={index} className="relative w-full mb-3">
//                 <label className="block uppercase text-xs font-bold mb-2 text-neutral-800">{field.label}</label>
//                 <Controller
//                   control={control}
//                   name={field.name}
//                   render={({ field: controllerField }) => (
//                     <Select
//                       placeholder={loading ? "Loading..." : field.input}
//                       className="w-full h-[40px]"
//                       status={errors[field.name] ? "error" : ""}
//                       options={options}
//                       loading={loading}
//                       disabled={loading}
//                       value={controllerField.value}
//                       onChange={controllerField.onChange}
//                     />
//                   )}
//                 />
//                 {errors[field.name] && <span className="text-red-500 text-sm">{errors[field.name]?.message}</span>}
//               </div>
//             )
//           }

//           return (
//             <div key={index} className="relative w-full mb-3">
//               <label className="block uppercase text-xs font-bold mb-2 text-neutral-800">{field.label}</label>
//               <Controller
//                 control={control}
//                 name={field.name}
//                 render={({ field: controllerField }) => (
//                   <Input
//                     type={field.type}
//                     placeholder={field.input}
//                     className="h-[40px]"
//                     status={errors[field.name] ? "error" : ""}
//                     value={controllerField.value}
//                     onChange={controllerField.onChange}
//                   />
//                 )}
//               />
//               {errors[field.name] && <span className="text-red-500 text-sm">{errors[field.name]?.message}</span>}
//             </div>
//           )
//         })}

//         <Button type="primary" htmlType="submit" className="w-full h-[40px] mt-6">
//           Submit
//         </Button>
//       </form>
//     </div>
//   )
// }
