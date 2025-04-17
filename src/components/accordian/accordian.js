"use client";
import React, { useState } from "react";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Select, TimePicker, Collapse, Space } from "antd";
import AuthButton from "../button/authButton";
const Accordian = () => {
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
  return (
    <div className="">
      <button
        onClick={() => setShowAccordion(!showAccordion)}
        className="border p-2 rounded-lg bg-gray-600 !text-white font-semibold"
      >
        {showAccordion ? "Hide Accordion" : "Add Clinic"}
      </button>

      {showAccordion && (
        <div className="border rounded-md p-4 bg-white">
          <Collapse defaultActiveKey={["1"]}>
            {accordionItems.map((item) => (
              <Panel
                key={item.id}
                header={`Item ${item.id}`}
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
                  <div>
                    <label className="block mb-2">Select Option:</label>
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select an option"
                      value={item.option || undefined}
                      onChange={(value) => handleOptionChange(value, item.id)}
                    >
                      <Option value="option1">Option 1</Option>
                      <Option value="option2">Option 2</Option>
                      <Option value="option3">Option 3</Option>
                    </Select>
                  </div>

                  <Space className="w-full flex flex-wrap gap-4">
                    <div>
                      <label className="block mb-2">Start Time:</label>
                      <TimePicker
                        use12Hours
                        format="h:mm A"
                        value={item.startTime}
                        onChange={(time) =>
                          handleStartTimeChange(time, item.id)
                        }
                      />
                    </div>

                    <div>
                      <label className="block mb-2">End Time:</label>
                      <TimePicker
                        use12Hours
                        format="h:mm A"
                        value={item.endTime}
                        onChange={(time) => handleEndTimeChange(time, item.id)}
                      />
                    </div>
                  </Space>
                </div>
              </Panel>
            ))}
          </Collapse>

          <Button
            type="dashed"
            icon={<PlusOutlined />}
            onClick={handleAddAccordion}
            className="mt-4 w-full"
          >
            Add Item
          </Button>
        </div>
      )}
    </div>
  );
};

export default Accordian;
