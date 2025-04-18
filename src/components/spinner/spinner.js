import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const Spinner = ({size}) => (
  <Flex align="center" gap="middle">
    <Spin indicator={<LoadingOutlined size={size} spin />} />
  </Flex>
);
export default Spinner;
