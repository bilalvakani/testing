import React, { useEffect } from "react";
import { Table, Button, Modal, Empty } from "antd";
import Qualification from "../qualification";
import { Axios } from "@/config/summaryAPI";
import { AxiosError } from "@/utils/axiosError";
import Spinner from "../spinner/spinner";
const TableList = ({ columns, data, loading, error }) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const CustomEmpty = () => (
    <div style={{
      height: "200px", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   }}>
      <Spinner size={74} />
    </div>
  );
  return (
    <div className="w-auto sm:w-full">
      <Table
        columns={columns}
        rowKey="id"
        dataSource={data}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
        locale={{
          emptyText: loading ? <CustomEmpty /> : <Empty />,
        }}
      />
    </div>
  );
};

export default TableList;
