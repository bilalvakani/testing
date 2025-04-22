import { Select } from "antd";
import Spinner from "../spinner/spinner";
import { Controller } from "react-hook-form";

export const SelectInput = ({
  placeholder,
  register,
  data,
  loading,
  options,
  width,
  errors
}) => {
  console.log(data, "data");
  const { Option } = Select;
  return (
    <div>
      <Select
        placeholder={placeholder}
        allowClear={true}
        style={{ width: width || '100%' }}
        // onChange={handleChange}
      >
        {loading ? (
          <Option key="loading" value="loading">
            <Spinner size={16} />
          </Option>
        ) : (
          data?.map(
            (item) =>
              item?.id != null &&
              item?.name != null && (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              )
          )
        )}
      </Select>
    </div>
  );
};
