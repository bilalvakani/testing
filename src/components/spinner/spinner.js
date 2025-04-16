
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const Spinner = ({ size = 48 }) => (
  <Flex align="center" justify="center" style={{ width: "100%" }}>
    <Spin
      indicator={<LoadingOutlined style={{ fontSize: size }} spin />}
    />
  </Flex>
);

export default Spinner;
