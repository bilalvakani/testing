import React from "react";
const AuthButton = ({children}) => {
  return (
      <button type="submit"
        className="bg-blueGray-800 !text-white bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      >
        {children}
      </button>
  );
};

export default AuthButton;
