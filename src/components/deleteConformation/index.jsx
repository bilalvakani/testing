import React, { useState } from 'react'
import { Dialog } from "@headlessui/react";
import { X } from 'lucide-react';

const DeleteConformation = ({modalVisible,setModalVisible,confirmDelete}) => {

  const handleClose = () => {
    setModalVisible(false)
  };
  

  return (
    <Dialog open={modalVisible} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-xl font-semibold text-gray-800">
              Confirm Deletion
            </Dialog.Title>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-2 text-sm text-gray-600">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium !text-white hover:bg-red-700 transition"
              onClick={() => confirmDelete(1)}
            >
              Delete
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default DeleteConformation;
