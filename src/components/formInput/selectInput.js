import { Select } from "antd";

export const SelectInput = ({ placeholder, register }) => {
  const { Option } = Select;
  return (
    <div>
      <Select
        placeholder={placeholder}
        style={{ width: 200 }}
        allowClear={true}
        // onChange={handleChange}
      >
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
        <Option value="mango">Mango</Option>
      </Select>
    </div>
  );
};
