import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../utils/globalState";
import { Layout, Menu } from "antd";
import {
  HeartFilled,
  CopyrightOutlined,
  ShoppingFilled,
  HomeFilled,
} from "@ant-design/icons";

import styled from "styled-components";

const { Sider } = Layout;
// 
import "antd/dist/antd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";

const NavLayout = styled(Layout)`
  margin-top: 60px;
  ul {
    border: none;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #f0f0f0 !important;
  }
  background-color: #fff;
`;

const LiItem = styled(Menu.Item)`
  padding: 42px !important;
  margin: 0px !important;
border-radius: 5px;
  :hover {
    background-color: #ec2b2183 !important;
    border-radius: 5px;
  }
  :hover:last-child {
    background-color: #fff !important;
    margin-left: 12px;
    transition: all 1.2s linear;
  }
  :last-child {
  }
  :active {
  }
  :after {
    border-right: 3px solid #dadada !important;
  }

  .ant-menu-title-content {
    a:hover {
    }
    .active {
      color: #ec2a21 !important;
    }
  }
  .quantity {
    position: absolute;
    top: 5px;
    right: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: tomato;
    color: #fff;
    font-size: 1.3rem;
  }
`;

const LinkItem = styled(NavLink)`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333 !important;
  svg {
    font-size: 2rem;
  }
  .Badge {
    display: flex;
  }
  p {
    margin-bottom: 0;
    font-size: 1.4rem !important;
  }
`;

function Navigation() {
  const { cart, isUpdatedFavorite }: any = useContext(GlobalContext);

  return (
    <div className="navigation">
      <NavLayout>
        <Sider>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["6"]}>
            <LiItem key="6">
              <LinkItem to="/">
                <HomeFilled />
                <p> Trang chủ </p>
              </LinkItem>
            </LiItem>
            <LiItem key="5">
              <LinkItem to="/cart">
                <ShoppingFilled />
                <p> Giỏ hàng </p>
              </LinkItem>
              {cart.length !== 0 && (
                <span className="quantity">
                  {cart.length < 100 ? cart.length : "99+"}
                </span>
              )}
            </LiItem>
            <LiItem key="4">
              <LinkItem to={"/favorite"}>
                <HeartFilled />
                {isUpdatedFavorite && <div className="updated-circle"> </div>}
                <p> Yêu thích </p>
              </LinkItem>
            </LiItem>
            <LiItem key="3">
              <LinkItem to="/converse">
                <CopyrightOutlined />
                <p> Converse </p>
              </LinkItem>
            </LiItem>
            <LiItem key="2">
              <LinkItem to="/vans">
                <FontAwesomeIcon icon={faVuejs} />
                <p> Vans </p>
              </LinkItem>
            </LiItem>
            <LiItem key="1">
              <a href="/choose-size/size.html" target="_blank">
                <i className="fab fa-pushed"> </i>{" "}
                <p style={{ fontSize: "14px", textAlign: "center" }}>
                  {" "}
                  Hướng dẫn chọn size{" "}
                </p>
              </a>
            </LiItem>
          </Menu>
        </Sider>
      </NavLayout>
    </div>
  );
}

export default Navigation;
