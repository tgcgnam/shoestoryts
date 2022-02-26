// import { useState } from "react";
// import { Sidebar } from "primereact/sidebar";
// import { Button } from "primereact/button";
// import "primereact/resources/themes/md-dark-indigo/theme.css"; //theme
// import "primereact/resources/primereact.min.css"; //core css
// import "primeicons/primeicons.css";

// function NaviRespon() {
//   const [visible, setVisible] = useState<any>(false);

//   return (
//     <div>
//       <Sidebar visible={visible} onHide={() => setVisible(false)}>
//         Content
//       </Sidebar>
//       <Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)} />
//     </div>
//   );
// }

// export default NaviRespon;

import { useState } from "react";
import { Drawer, Button, Space } from "antd";
import { DrawerProps } from "antd/es/drawer";
import styled from "styled-components";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Navigation from "../Navigation/Navigation";

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
      color: #f8c052;
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
const Navi = styled(Navigation)`
  .ant-layout.ant-layout-has-sider {
    top: 60px !important;
  }
`;

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
