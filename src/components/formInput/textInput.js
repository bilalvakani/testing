import React from "react";

const TextInput = ({ label, input, type, register, errors, name }) => {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-gray-600 text-xs font-bold mb-2 text-neutral-800"
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
        <span className="text-red-500 text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextInput;
