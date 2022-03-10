import { useState } from "react";
import { Drawer, Button, Space } from "antd";
import { DrawerProps } from "antd/es/drawer";
import styled from "styled-components";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Navigation from "../navigation/Navigation";

const IconMenu = styled(Button)`
  margin-top: 13px;
  margin-left: 12px;
  display: none;
  border-color: #fff !important;
  svg {
    font-size: 2.5rem;
    color: #000;
  }
  @media (max-width: 1023px) {
    display: block;
  }
`;
const DrawerCustom = styled(Drawer)`
  .btn-close {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    :hover {
      color: #ec2a21;
    }
    .icon-close {
      svg {
        font-size: 3rem;
      }
    }
  }
  .ant-drawer-body {
    padding: 0 !important;
  }
`;
const Navi = styled(Navigation)``;
// 
function NaviRespon() {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();

  const showDefaultDrawer = () => {
    setSize("default");
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Space>
        <IconMenu onClick={showDefaultDrawer}>
          <MenuOutlined />
        </IconMenu>
      </Space>
      <DrawerCustom
        width={240}
        placement="left"
        size={size}
        onClose={onClose}
        visible={visible}
        headerStyle={{ display: "none" }}
      >
        <Button className="btn-close" onClick={onClose}>
          <CloseCircleOutlined className="icon-close" />
        </Button>
        <Navi />
      </DrawerCustom>
    </>
  );
}

export default NaviRespon;
