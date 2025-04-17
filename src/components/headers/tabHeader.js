import React from "react";
import {
  DataSelectInputs,
  SelectInputs,
  TextInputs,
} from "../formInput/textInput";
import { doctorFields } from "@/utils/formField/formFIelds";
import Accordian from "../accordian/accordian";

const TabHeader = ({
  showForm,
  setShowForm,
  title,
  buttonText,
  qualificationData,
  qualificationLoader,
  specializationData,
  specializationLoader,
}) => {
  return (
    <>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-2xl !font-bold text-neutral-800 !mb-0">{title}</h1>
        <button
          disabled
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-gray-800 !text-white rounded-3xl hover:bg-[#0066a1] transition-colors border-white border"
        >
          {showForm ? "Cancel" : buttonText}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-4 border rounded-lg shadow-sm p-4 bg-white">
        {doctorFields.map((field, index) => {
          if (field.type === "select") {
            return (
              <SelectInputs
                key={index}
                label={field.label}
                input={field.input}
                type={field.type}
                // register={register}
                // errors={errors}
                name={field.name}
                options={field.options}
              />
            );
          }
          if (field.type === "selectoption") {
            const isQualification = field.name.toLowerCase().includes("qualification")
            const isSpecialization = field.name.toLowerCase().includes("specialization")
            return (
              <DataSelectInputs
                key={index}
                label={field.label}
                input={field.input}
                type={field.type}
                // register={register}
                // errors={errors}
                name={field.name}
                options={isQualification ? qualificationData : isSpecialization ? specializationData : []}
                loading={isQualification ? qualificationLoader : isSpecialization ? specializationLoader : false}
              />
            );
          } else {
            return (
              <TextInputs
                key={index}
                label={field.label}
                input={field.input}
                type={field.type}
                // register={register}
                // errors={errors}
                name={field.name}
              />
            );
          }
        })}
        {buttonText === "Add Doctor" && <Accordian/>}
      </div>
    </>
  );
};

export default TabHeader;
