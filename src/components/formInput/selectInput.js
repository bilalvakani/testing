import { Select } from "antd";
import Spinner from "../spinner/spinner";

export const SelectInput = ({
  placeholder,
  register,
  data,
  loading,
  options,
  width,
}) => {
  console.log(data, "data");
  const { Option } = Select;
  return (
    <div>
      <Select
        placeholder={placeholder}
        className={`${width ? `w-[${width}]` : "w-full"}`}
        allowClear={true}
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
