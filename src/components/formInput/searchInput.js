import { Search } from "lucide-react";
import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const SearchInput = ({
  searchTerm,
  setSearchTerm,
  setCurrentPage,
  placeholder,
}) => {
  return (
    <div className="">
      <Input
        placeholder={placeholder}
        prefix={<SearchOutlined size={15} className="mr-2"/>}
        // onChange={(e) => onSearch(e.target.value)}
        allowClear
      />
    </div>
  );
};

export default SearchInput;
