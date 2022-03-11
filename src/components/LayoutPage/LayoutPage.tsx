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
import styled from "styled-components";
const { Header, Footer, Sider, Content } = Layout;
import "antd/dist/antd.css";
import NaviRespon from "../naviRespon/NaviRespon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Infomation from "../infomation/Infomation";
import Loading from "../loading/Loading";
import { useContext } from "react";
import { GlobalContext } from "../../utils/globalState";

const SiderNav = styled(Sider)`
  @media (max-width: 1023px) {
    display: none;
    transition: all 0.16s linear;
  }
`;
const SbackTop = styled(BackTop)`
  background: #ec2a21;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  svg {
    margin-top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
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
  const { isLoader } = useContext(GlobalContext);

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
              <Route path="/info" element={<Infomation />}></Route>
              <Route path="/favorite" element={<FavoritePage />}></Route>
              <Route path="/detail/:id" element={<DetailPage />}></Route>
            </Routes>
          </Content>
        </Layout>
        <Footer style={{ background: "#f0f2f5" }}>
          <FooterPage />
          <SbackTop>
            <FontAwesomeIcon icon={faArrowUp} />
          </SbackTop>
        </Footer>
      </NavHeader>
      {isLoader && <Loading />}
    </>
  );
}

export default LayoutPage;
