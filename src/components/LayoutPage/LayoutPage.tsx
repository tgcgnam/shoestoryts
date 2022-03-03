import { Routes, Route } from "react-router-dom";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import HomePage from "../../pages/Home";
import ConversePage from "../../pages/Converse";
import VansPage from "../../pages/Vans";
import CartPage from "../../pages/Cart";
import FavoritePage from "../../pages/Favorite";
import DetailPage from "../../pages/Detail";
import FooterPage from "../footer/Footer";
import { Layout, BackTop } from "antd";
import { GlobalContext } from "../../globalState";
import Loader from "../loader/Loader";
import { useContext, useState } from "react";
import styled from "styled-components";
const { Header, Footer, Sider, Content } = Layout;
import "antd/dist/antd.css";
import NaviRespon from "../naviRespon/NaviRespon";

const SiderNav = styled(Sider)`
  @media (max-width: 1023px) {
    display: none;
    transition: all 0.16s linear;
  }
`;

const NavHeader = styled(Layout)`
  .ant-space-item {
    position: fixed;
    top: 10px;
    z-index: 4;
  }
`;


function LayoutPage() {


 
  return (
    <>
      <NavHeader style={{ background: "#fff" }}>
        <NaviRespon />
        <Header style={{ background: "#fff" }}>
          <Logo />
        </Header>
        <Layout style={{ background: "#fff" }}>
          <SiderNav style={{ background: "#fff" }}>
            <Navigation />
          </SiderNav>
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route
                path="/converse"
                element={
                  <ConversePage displayTrash={undefined} id={0} price={0} img={""} image2={""} image3={""} image4={""} name={""} sale={0} status={""} condition={""} brand={""} sizes={0} material={""} color={""}             
                  />
                }
              ></Route>
              <Route
                path="/vans"
                element={
                  <VansPage displayTrash={undefined} id={0} price={0} img={""} image2={""} image3={""} image4={""} name={""} sale={0} status={""} condition={""} brand={""} sizes={0} material={""} color={""}                   
                  />
                }
              ></Route>
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/favorite" element={<FavoritePage />}></Route>
              <Route path="/detail/:id" element={<DetailPage />}></Route>
            </Routes>
          </Content>
        </Layout>
        <Footer style={{ background: "#f0f2f5" }}>
          <FooterPage />
          <BackTop>
            <div>UP</div>
          </BackTop>
        </Footer>
      </NavHeader>
    </>
  );
}

export default LayoutPage;
