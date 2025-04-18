"use client";
import React, { useState } from "react";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Select, TimePicker, Collapse, Space } from "antd";
import AuthButton from "../button/authButton";
import { SelectInput } from "../formInput/selectInput";
const Accordian = ({ data, loading }) => {
  const { Panel } = Collapse;
  const { Option } = Select;
  const [showAccordion, setShowAccordion] = useState(false);
  const [accordionItems, setAccordionItems] = useState([
    {
      id: "1",
      option: "",
      startTime: null,
      endTime: null,
    },
  ]);

  const handleAddAccordion = (length) => {
    const newItem = {
      id: length + 1,
      option: "",
      startTime: null,
      endTime: null,
    }
    setAccordionItems([...accordionItems, newItem])
  }
  
  const handleStartTimeChange = (time, id) => {
    setAccordionItems(accordionItems.map((item) => (item.id === id ? { ...item, startTime: time } : item)))
  }

  const handleEndTimeChange = (time ,id) => {
    setAccordionItems(accordionItems.map((item) => (item.id === id ? { ...item, endTime: time } : item)))
  }

  const handleRemoveAccordion = (id) => {
    if (accordionItems.length > 1) {
      setAccordionItems(accordionItems.filter((item) => item.id !== id))
    }
  }
  return (
    <div className="">
      <button
        onClick={() => setShowAccordion(!showAccordion)}
        className="border p-2 rounded-lg bg-gray-600 !text-white font-semibold"
      >
        Add Clinic
      </button>

      {showAccordion && (
        <div className="bg-white mt-2">
          <Collapse defaultActiveKey={["1"]}>
            {accordionItems.map((item) => (
              <Panel
                key={item.id}
                header={`Clinic ${item.id}`}
                extra={
                  <CloseOutlined
                    onClick={(e) => {
                      e.stopPropagation();
                        handleRemoveAccordion(item.id);
                    }}
                  />
                }
              >
                <div className="space-y-4">
                  <SelectInput
                    placeholder="Enter Clinic"
                    data={data}
                    loading={loading}
                  />
                  <div className="grid grid-cols-2 gap-x-2">
                    <div className="w-full">
                      <label className="block mb-1 font-medium">
                        Start Time:
                      </label>
                      <TimePicker
                        use12Hours
                        format="h:mm A"
                        value={item.startTime}
                        className="w-full"
                        onChange={(time) =>
                          handleStartTimeChange(time, item.id)
                        }
                      />
                    </div>

                    <div className="w-full">
                      <label className="block mb-1 font-medium">
                        End Time:
                      </label>
                      <TimePicker
                        use12Hours
                        format="h:mm A"
                        value={item.endTime}
                        className="w-full"
                        onChange={(time) => handleEndTimeChange(time, item.id)}
                      />
                    </div>
                  </div>
                </div>
              </Panel>
            ))}
          </Collapse>

          <button
            onClick={()=>handleAddAccordion(accordionItems.length)}
            className="!mt-3 w-fit border px-6 py-2 rounded-2xl bg-neutral-800 !text-white"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default Accordian;
