"use-client";
import React, { useMemo } from "react";
import { Input, Select } from "antd";
import Spinner from "../spinner/spinner";
import { Controller } from "react-hook-form";
const TextInput = ({ label, input, type, register, errors, name }) => {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-gray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <input
        type={type}
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder={input}
        {...register(name, { required: true })}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </div>
  );
};

const TextInputs = ({
  label,
  input,
  type,
  register,
  errors,
  name,
  control,
}) => {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-xs font-bold mb-2 text-neutral-800"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field: controllerField }) => (
          <Input
            type={type}
            placeholder={input}
            className="h-[40px]"
            status={errors[name] ? "error" : ""}
            value={controllerField.value}
            onChange={controllerField.onChange}
          />
        )}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </div>
  );
};

const SelectInputs = ({
  label,
  input,
  type,
  control,
  errors,
  name,
  options,
}) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-xs font-bold mb-2 text-neutral-800"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field: controllerField }) => (
          <Select
            options={options}
            className="!h-[40px] w-full"
            placeholder={input}
            status={errors[name] ? "error" : ""}
            value={controllerField.value}
            onChange={controllerField.onChange}
          />
        )}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </div>
  );
};

const DataSelectInputs = ({
  label,
  input,
  type,
  register,
  errors,
  name,
  options,
  loading,
  control
}) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const option = useMemo(() => {
    return options?.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  }, [options]);

  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-xs font-bold mb-2 text-neutral-800"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field: controllerField }) =>{
          console.log(controllerField)
          return(
            <Select
            mode="multiple"
            options={option}
            className="!h-[40px] w-full"
            placeholder={input}
            notFoundContent={loading ? <Spinner /> : "No data found"}
            status={errors[name] ? "error" : ""}
            value={Array.isArray(controllerField.value) ? controllerField.value : []}
            onChange={controllerField.onChange}
          />
          )   
        }
        }
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export { TextInput, TextInputs, SelectInputs, DataSelectInputs };
