import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faCcPaypal,
  faCcVisa,
  faCcMastercard,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  .facebook {
    color: #3b5999;
  }
  .github {
    color: #333;
  }
  .twitter {
    color: #46c1f6;
  }
  .instagram {
    color: #e1306c;
  }

  display: flex;
  .icon {
    margin-right: 15px;
    cursor: pointer;
    position: relative;
    :hover .tooltip {
      opacity: 1;
      pointer-events: auto;
      top: 38px;
    }

    .svg-inline--fa {
      border-radius: 50%;
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
    }
    .tooltip {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      padding: 5px 16px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 25px;
      opacity: 0;
      pointer-events: none;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }
    .tooltip:before {
      position: absolute;
      content: "";
      height: 15px;
      width: 15px;
      left: 50%;
      top: -6px;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  .money {
    color: #333;
    svg {
      font-size: 3.5rem !important;
    }
  }
  .mastercard {
    color: #e1306c;
    svg {
      font-size: 3rem !important;
    }
  }
  .paypal {
    color: #41bdf2;
    svg {
      font-size: 3rem !important;
    }
  }
  .visa {
    color: #2e4789;
    svg {
      font-size: 3rem !important;
    }
  }
  .facebook .tooltip:before,
  .facebook:hover i,
  .facebook .tooltip,
  .visa .tooltip:before,
  .visa:hover i,
  .visa .tooltip {
    background: #3b5999;
  }
  .github .tooltip:before,
  .github:hover i,
  .github .tooltip,
  .money .tooltip:before,
  .money:hover i,
  .money .tooltip {
    background: #333;
  }
  .twitter .tooltip:before,
  .twitter:hover i,
  .twitter .tooltip,
  .paypal .tooltip:before,
  .paypal:hover i,
  .paypal .tooltip {
    background: #46c1f6;
  }
  .instagram .tooltip:before,
  .instagram:hover i,
  .instagram .tooltip,
  .mastercard .tooltip:before,
  .mastercard:hover i,
  .mastercard .tooltip {
    background: #e1306c;
  }
`;

const ListBig = styled(Row)`
  display: flex;
  flex-wrap: wrap !important;
  justify-content: space-around;

  p:first-child {
    font-family: "Kaushan Script", cursive;
    font-size: 1.9rem;
    color: #000;
    margin: 0;
    white-space: nowrap;
  }
  .atm-icon {
    .wrapper {
      display: flex;
      align-items: center;
      span {
        white-space: nowrap;
      }
    }
  }
`;
const RowSP = styled(Row)`
  flex-direction: column;
  a {
    transition: all 0.4s linear;
    color: #333;
    width: fit-content;
  }
  a:hover {
    margin-left: 16px;
    transition: all 0.4s linear;
    color: #ec2a21;
  }
`;

function FooterPage() {
  return (
    <>
      <ListBig>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 4 }}>
          <div className="footer-infor-title">
            <p style={{ fontSize: "40px" }}>Shoe Story</p>
          </div>
          <div style={{ marginLeft: 8 }}>
            <h5>Theo Dõi Chúng Tôi</h5>
            <Wrapper className="wrapper">
              <div className="icon facebook">
                <FontAwesomeIcon icon={faFacebook} />
                <span className="tooltip">Facebook</span>
              </div>
              <div className="icon github">
                <FontAwesomeIcon icon={faGithub} />
                <span className="tooltip">Github</span>
              </div>

              <div className="icon twitter">
                <FontAwesomeIcon icon={faTwitter} />
                <span className="tooltip">Twitter</span>
              </div>
              <div className="icon instagram">
                <FontAwesomeIcon icon={faInstagram} />
                <span className="tooltip">Instagram</span>
              </div>
            </Wrapper>
          </div>
          <br />
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 4 }}>
          <div className="footer-infor-title">
            <h5>Hỗ Trợ Mua Hàng</h5>
            <RowSP className="footer-list-service">
              <Link to={"/"}>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ marginRight: "8px" }}
                />
                Hướng dẫn mua hàng
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ marginRight: "8px" }}
                />
                Hướng dẫn tranh toán
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ marginRight: "8px" }}
                />
                Phương thức vận chuyển
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ marginRight: "8px" }}
                />
                Tra cứu đơn hàng
              </Link>
            </RowSP>
          </div>
          <br />
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 4 }}>
          <div className="footer-infor-title">
            <div>
              <h5>Địa chỉ:</h5> 48 P. Tố Hữu Trung Văn Từ Liêm Hà Nội
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.862232448302!2d105.7921227153517!3d20.998158886015045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acba7ddb0f43%3A0xe7d7c05f85f830a!2zNDggUC4gVOG7kSBI4buvdSwgVHJ1bmcgVsSDbiwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1645772300190!5m2!1svi!2s"
              width="90%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <br />
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 4 }}>
          <div className="footer-infor-title">
            <h5>Thanh Toán</h5>
            <p>Chúng tôi chấp nhận thanh toán với tất cả loại thẻ</p>
            <div className="atm-icon">
              <Wrapper className="wrapper">
                <div className="icon money">
                  <FontAwesomeIcon icon={faMoneyBill} />
                  <span className="tooltip">Tiền mặt</span>
                </div>
                <div className="icon mastercard">
                  <FontAwesomeIcon icon={faCcMastercard} />
                  <span className="tooltip">Master Card</span>
                </div>

                <div className="icon paypal">
                  <FontAwesomeIcon icon={faCcPaypal} />
                  <span className="tooltip">PayPal</span>
                </div>
                <div className="icon visa">
                  <FontAwesomeIcon icon={faCcVisa} />
                  <span className="tooltip">Visa</span>
                </div>
              </Wrapper>
            </div>
          </div>
        </Col>
      </ListBig>
    </>
  );
}


<></>
export default FooterPage;
