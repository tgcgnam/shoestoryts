import { Routes, Route } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/Home";
import ConversePage from "../../pages/Converse";
import VansPage from "../../pages/Vans";
import CartPage from "../../pages/Cart";
import FavoritePage from "../../pages/Favorite";
import DetailPage from "../../pages/Detail";
import FooterPage from "../Footer/Footer";
import { Layout } from "antd";
import { GlobalContext } from "../../globalState";
import Loader from "../Loader/Loader";
import { useContext, useState } from "react";
import styled from "styled-components";
const { Header, Footer, Sider, Content } = Layout;
import "antd/dist/antd.css";
import NaviRespon from "../NaviRespon/NaviRespon";

const SiderNav = styled(Sider)`
  @media (max-width: 1023px) {
    display: none;
    transition: all 0.16s linear;
  }
`;

const NavHeader = styled(Layout)`
  .ant-space-item{
    position: fixed;
    top: 10px;
    z-index: 4;
  }
`;


function LayoutPage() {
  const { isLoader } = useContext(GlobalContext);
  console.log(isLoader);

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
              <Route path="/converse" element={<ConversePage />}></Route>
              <Route path="/vans" element={<VansPage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/favorite" element={<FavoritePage />}></Route>
              <Route path="/detail/:id" element={<DetailPage />}></Route>
            </Routes>
          </Content>
        </Layout>
        <Footer style={{ background: "#f0f2f5" }}>
          <FooterPage />
        </Footer>
      </NavHeader>
      {/* {!isLoader && <Loader />} */}
    </>
  );
}

export default LayoutPage;
