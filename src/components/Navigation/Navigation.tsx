import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../globalState";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  HeartFilled,
  CopyrightOutlined,
} from "@ant-design/icons";

import styled from "styled-components";

const { Sider } = Layout;

import "antd/dist/antd.css";

const NavLayout = styled(Layout)`
  position: fixed;
  z-index: 2;
  top: 120px;
  ul {
    border: none;
  }
 
`;

const LiItem = styled(Menu.Item)`
  align-items: baseline !important;
  margin-bottom: 30px !important;
  :last-child {
    margin-bottom: 0 !important;
  }
  :active {
  }
  :after {
    background-color: #dadada;
    border-right: 3px solid #f8c052 !important;
  }

  .ant-menu-title-content {
    a:hover {
      color: #f8c052 !important;
    }
    .active {
      color: #f8c052;
    }
  }
  .quantity {
    position: absolute;
    top: 0;
    left: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: tomato;
    color: #fff;
    font-size: 1.1rem;
  }
`;

const LinkItem = styled(NavLink)`
  display: flex;
  align-items: center;
  svg {
    font-size: 2.2rem;
  }
  .Badge {
    display: flex;
  }
  p {
    margin-bottom: 0;
    padding-left: 12px;
  }
`;

function Navigation() {
  const {
    isHideNav,
    setIsHideNav,
    cart,
    isUpdatedFavorite,
    setIsUpdatedFavorite,
  }: any = useContext(GlobalContext);

  const hideNav = () => {
    setIsHideNav(true);
  };

  const handleFavNav = () => {
    hideNav();
    setIsUpdatedFavorite(false);
  };

  return (
    <div className="navigation">
      <NavLayout>
        <Sider>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["6"]}>
            <LiItem key="6">
              <LinkItem to="/">
                <HomeOutlined />

                <p> Trang chủ </p>
              </LinkItem>
            </LiItem>
            <LiItem key="5">
              <LinkItem to="/cart">
                <ShoppingCartOutlined />
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
                <img src="/vuejs-brands.svg" alt="" style={{ width: "15%" }} />
                <p> Vans </p>
              </LinkItem>
            </LiItem>
            <LiItem key="1">
              <a href="/choose-size/size.html" target="_blank">
                <i className="fab fa-pushed"> </i> <p> Hướng dẫn chọn size </p>
              </a>
            </LiItem>
          </Menu>
        </Sider>
      </NavLayout>
    </div>
  );
}

export default Navigation;
