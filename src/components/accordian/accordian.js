"use client";
import React, { useEffect, useState } from "react";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Select, TimePicker, Collapse, Space } from "antd";
import AuthButton from "../button/authButton";
import { SelectInput } from "../formInput/selectInput";
import { X } from "lucide-react";
import { Controller, useFieldArray } from "react-hook-form";
import Spinner from "../spinner/spinner";
import dayjs from "dayjs";
const Accordian = ({ data, loading, errors, control, name }) => {
  const { Option } = Select;
  const [showAccordion, setShowAccordion] = useState(true);
  const [accordionItems, setAccordionItems] = useState([
    {
      id: "1",
      option: "",
      startTime: null,
      endTime: null,
    },
  ]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  // Add a default clinic if none exists
  useEffect(() => {
    if (fields.length === 0) {
      append({ clinicName: "", startTime: "", endTime: "" });
    }
  }, [fields.length, append]);

  const handleAddAccordion = (length) => {
    const newItem = {
      id: length + 1,
      option: "",
      startTime: null,
      endTime: null,
    };
    setAccordionItems([...accordionItems, newItem]);
  };

  const handleStartTimeChange = (time, id) => {
    setAccordionItems(
      accordionItems.map((item) =>
        item.id === id ? { ...item, startTime: time } : item
      )
    );
  };

  const handleEndTimeChange = (time, id) => {
    setAccordionItems(
      accordionItems.map((item) =>
        item.id === id ? { ...item, endTime: time } : item
      )
    );
  };

  const handleRemoveAccordion = (id) => {
    if (accordionItems.length > 1) {
      setAccordionItems(accordionItems.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="">
      <label
        className="block uppercase text-xs font-bold mb-2 text-neutral-800"
        htmlFor="grid-password"
      >
        Doctor Clinics
      </label>
      {showAccordion && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-4">
            {accordionItems.map((item, index) => (
              <div key={item.id} className="border rounded-md overflow-hidden">
                {/* Static header that doesn't collapse */}
                <div className="flex items-center justify-between bg-gray-50 p-3">
                  <h3 className="font-medium !mb-0">Clinic{item.id}</h3>
                  <button
                    type="button"
                    onClick={() => handleRemoveAccordion(item.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-4 p-3">
                  <div>
                    <Controller
                      control={control}
                      name={`${name}.${index}.clinicName`}
                      render={({ field: controllerField }) => (
                        <>
                          <Select
                            className="!h-[40px] w-full"
                            placeholder="Enter Clinic"
                            notFoundContent={
                              loading ? <Spinner /> : "No data found"
                            }
                            status={
                              errors?.doctorClinic?.[index]?.clinicName
                                ? "error"
                                : ""
                            }
                            value={controllerField.value}
                            onChange={controllerField.onChange}
                          >
                            {loading ? (
                              <Select.Option key="loading" value="loading">
                                <Spinner size={16} />
                              </Select.Option>
                            ) : (
                              data?.map(
                                (item) =>
                                  item?.id != null &&
                                  item?.name != null && (
                                    <Select.Option
                                      key={item.id}
                                      value={item.name}
                                    >
                                      {item.name}
                                    </Select.Option>
                                  )
                              )
                            )}
                          </Select>
                          {errors?.doctorClinic?.[index]?.clinicName && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.doctorClinic[index].clinicName.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-x-2">
                    <div className="w-full">
                      <label className="block mb-1 font-medium">
                        Start Time:
                      </label>
                      <Controller
                        control={control}
                        name={`${name}.${index}.startTime`}
                        render={({ field: { onChange, value } }) => (
                          <>
                            <TimePicker
                              use12Hours
                              format="h:mm A"
                              className="w-full"
                              value={value ? dayjs(value, "h:mm A") : null}
                              onChange={(time, timeString) => {
                                const timeStr = time?.format("h:mm A");
                                console.log(timeStr);
                                onChange(timeStr);
                              }}
                            />
                            {errors?.doctorClinic?.[index]?.startTime && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.doctorClinic[index].startTime.message}
                              </p>
                            )}
                          </>
                        )}
                      />
                    </div>

                    <div className="w-full">
                      <label className="block mb-1 font-medium">End Time:</label>
                      <Controller
                        control={control}
                        name={`${name}.${index}.endTime`}
                        render={({ field: { onChange, value } }) => (
                          <>
                            <TimePicker
                              use12Hours
                              format="h:mm A"
                              className="w-full"
                              value={value ? dayjs(value, "h:mm A") : null}
                              onChange={(time, timeString) => {
                                const timeStr = time?.format("h:mm A");
                                console.log(timeStr);
                                onChange(timeStr);
                              }}
                            />
                            {errors?.doctorClinic?.[index]?.endTime && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.doctorClinic[index].endTime.message}
                              </p>
                            )}
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => handleAddAccordion(accordionItems.length)}
            className="!mt-3 w-fit border px-3 py-2 rounded-[50%] bg-neutral-800 !text-white"
          >
            +
          </button>
        </>
      )}
    </div>
  );
};

export default Accordian;
