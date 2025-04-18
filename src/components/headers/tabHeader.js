import React from "react";

const TabHeader = ({showForm,setShowForm,title,buttonText}) => {
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
      {showForm && (
        <div className="w-full border rounded-lg shadow-sm p-6 bg-white">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Doctor Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={newDoctor.name}
                  onChange={handleInputChange}
                  placeholder="Enter doctor name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="specialization"
                  className="block text-sm font-medium text-gray-700"
                >
                  Specialization
                </label>
                <input
                  id="specialization"
                  name="specialization"
                  value={newDoctor.specialization}
                  onChange={handleInputChange}
                  placeholder="Enter specialization"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  id="contact"
                  name="contact"
                  value={newDoctor.contact}
                  onChange={handleInputChange}
                  placeholder="Enter contact number"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={newDoctor.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Save Doctor
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default TabHeader;
