import { useContext } from "react";
import { GlobalContext } from "../../utils/globalState";
import { PageHeader } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";


const Header = styled(PageHeader)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  z-index: 3;
  & > div {
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .menu-bars {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 8%;
      color: #222;
      cursor: pointer;
      display: none;
      i {
        font-size: 2.2rem;
      }
    }
    p {
      font-family: "Kaushan Script", cursive;
      font-weight: bold;
      font-size: 1.9rem;
      color: #000;
      margin: 0;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
  .clear {
    width: 100px;
  }
  .logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      width: 120px;
      margin-right: 16px;
    }
    h1 {
      font-size: 3rem;
      color: #000;
    }
  }
  @media (max-width: 772px) {
    .logo-bar {
      p {
        margin: 0;
      }
      .clear {
        display: none;
      }
      .logo {
        h1 {
          font-size: 2.2rem;
        }
        img {
          width: 48px;
        }
      }
      & > div {
        .menu-bars {
          display: block;
        }
      }
    }
  }
`;

function Logo() {

  return (
    <Header>
      <div>
        <span
          className="menu-bars">
          <i className="fas fa-bars" />
        </span>

        <a className="logo" href="/">
          <p style={{ fontSize: "40px" }}>Shoe Story</p>
        </a>
      </div>
    </Header>
  );
}

export default Logo;
