import { clinicFields } from "@/utils/formField/clinicFIelds";
import { addClinicSchema } from "@/utils/schema";
import React from "react";
import TextInput from "../formInput/textInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AddClinic = ({ showForm, setShowForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addClinicSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-2xl font-bold text-neutral-800">
          Clinic Management
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-gray-800 text-white rounded-3xl hover:bg-[#0066a1] transition-colors border-white border"
        >
          {showForm ? "Cancel" : "Add Clinic"}
        </button>
      </div>
      {showForm && (
        <div className="w-full border rounded-lg shadow-sm p-6 bg-white">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {clinicFields.map((field, index) => (
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
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Save Clinic
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddClinic;
