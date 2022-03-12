import {
  faCreditCard,
  faLocationDot,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Order from "../cart/Order";
import Inputcheck from "../inputcheck/Inputcheck";
import { GlobalContext } from "../../utils/globalState";
import { notification } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

function Infomation() {
  const [errors, setErrors]: any = useState({});
  const [confirmInfo, setConfirmInfo] = useState(false);

  const { setLetSubmit, cusInfo, setCusInfo } = useContext(GlobalContext);

  const handleChange = (e: any) => {
    setLetSubmit(false);
    setCusInfo({
      ...cusInfo,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: undefined,
    });
  };

  const handleError = (e: any) => {
    const { name, value } = e.target;

    if (!value.trim()) {
      setErrors({
        ...errors,
        [name]: `Vui lòng nhập ${name} của bạn`,
      });
    } else {
      if (name === "email") {
        if (!/\S+@\S+\.\S+/.test(value)) {
          setErrors({
            ...errors,
            [name]: "Giá trị nhập vào không hợp lệ",
          });
        } else {
          setErrors({
            ...errors,
            [name]: undefined,
          });
        }
      }
      if (name === "phone") {
        if (
          !/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
            value
          )
        ) {
          setErrors({
            ...errors,
            [name]: "Số điện thoại không hợp lệ",
          });
        } else {
          setErrors({
            ...errors,
            [name]: undefined,
          });
        }
      }
      if (name !== "email" && name !== "phone") {
        setErrors({
          ...errors,
          [name]: undefined,
        });
      }
    }
  };

  const handleRadio = (e: any) => {
    setCusInfo({
      ...cusInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const errorsValue = Object.values(errors);

    const check = errorsValue.filter((item) => item).length;

    if (Object.keys(cusInfo).length === 9 && check === 0) {
      setConfirmInfo(true);
    } else {
      setConfirmInfo(false);
    }
  }, [errors, cusInfo]);

  const submitInfo = () => {
    if (confirmInfo) {
      setLetSubmit(true);
      window.scrollTo(0, 0);
    } else {
      setLetSubmit(false);

      notification.warn({
        message: "Thông báo",
        description: "Vui lòng kiểm tra lại thông tin nhận hàng !",
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <br />
      <Link style={{ marginLeft: "20px", color: "black" }} to={"/cart"}>
        <CaretLeftOutlined />
        Quay lại giỏ hàng
      </Link>

      <div className="customer-information">
        <div className="address">
          <div className="address-wrapper">
            <h1>
              <FontAwesomeIcon icon={faLocationDot} />
              <span style={{ fontSize: "16px" }}> Địa chỉ</span>
            </h1>
            <Inputcheck
              title={"Họ và tên: "}
              name={"tên"}
              type={"text"}
              handleChange={(e) => handleChange(e)}
              handleError={(e) => handleError(e)}
            />
            {errors["tên"] && <p>{errors["tên"]}</p>}
            <Inputcheck
              title={"Email: "}
              name={"email"}
              type={"email"}
              handleChange={(e) => handleChange(e)}
              handleError={(e) => handleError(e)}
            />
            {errors["email"] && <p>{errors["email"]}</p>}
            <Inputcheck
              title={"Số điện thoại: "}
              name={"phone"}
              type={"phone"}
              handleChange={(e) => handleChange(e)}
              handleError={(e) => handleError(e)}
            />
            {errors["phone"] && <p>{errors["phone"]}</p>}
            <Inputcheck
              handleChange={(e) => handleChange(e)}
              handleError={(e) => handleError(e)}
              type="text"
              name="tỉnh, thành phố"
              title={"Tỉnh, thành phố"}
            />
            {errors["tỉnh, thành phố"] && <p>{errors["tỉnh, thành phố"]}</p>}
            <Inputcheck
              handleChange={(e) => handleChange(e)}
              handleError={(e) => handleError(e)}
              type="text"
              name="quận, huyện"
              title={"Quận, huyện"}
            />
            {errors["quận, huyện"] && <p>{errors["quận, huyện"]}</p>}
            <Inputcheck
              handleChange={(e) => handleChange(e)}
              handleError={(e) => handleError(e)}
              type="text"
              name="xã, phường"
              title={"Xã, phường"}
            />
            {errors["xã, phường"] && <p>{errors["xã, phường"]}</p>}
            <Inputcheck
              handleChange={(e) => handleChange(e)}
              handleError={(e) => handleError(e)}
              type="text"
              name="địa chỉ"
              title={"Địa chỉ"}
            />
            {errors["địa chỉ"] && <p>{errors["địa chỉ"]}</p>}
          </div>
        </div>
        <div className="methods">
          <div className="delivery-method">
            <h1>
              <FontAwesomeIcon icon={faTruck} />
              <span style={{ fontSize: "16px" }}> Phương thức giao hàng</span>
            </h1>
            <div className="selections">
              <div className="item">
                <div>
                  <input
                    id="1"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                    value="Giao nhanh"
                    name="phương thức giao hàng"
                    type="radio"
                  />
                  <label htmlFor="1">Giao nhanh</label>
                </div>
                <div className="price">35.000 đ</div>
              </div>
              <div className="item">
                <div>
                  <input
                    id="2"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                    value="Giao tiêu chuẩn"
                    name="phương thức giao hàng"
                    type="radio"
                  />
                  <label htmlFor="2">Giao tiêu chuẩn</label>
                </div>
                <div className="price">0 đ</div>
              </div>
            </div>
            {errors["phương thức giao hàng"] && (
              <p>{errors["phương thức giao hàng"]}</p>
            )}
          </div>

          <div className="payment-method">
            <h1>
              <FontAwesomeIcon icon={faCreditCard} />
              <span style={{ fontSize: "16px" }}> Phương thức thanh toán</span>
            </h1>
            <div className="selections">
              <div className="item">
                <div>
                  <input
                    id="3"
                    type="radio"
                    name="phương thức thanh toán"
                    value="Thanh toán khi nhận hàng"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                  />
                  <label htmlFor="3">Thanh toán khi nhận hàng</label>
                </div>
              </div>
              <div className="item">
                <div>
                  <input
                    id="4"
                    type="radio"
                    name="phương thức thanh toán"
                    value="Thanh toán bằng ATM nội địa (Internet Banking)"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                  />
                  <label htmlFor="4">
                    Thanh toán bằng ATM nội địa (Internet Banking)
                  </label>
                </div>
              </div>
              <div className="item">
                <div>
                  <input
                    id="5"
                    type="radio"
                    name="phương thức thanh toán"
                    value="Thanh toán bằng Credit/Debit Card (VISA, MASTER, JCB, AMEX)"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                  />
                  <label htmlFor="5">
                    Thanh toán bằng Credit/Debit Card (VISA, MASTER, JCB, AMEX)
                  </label>
                </div>
              </div>
              <div className="item">
                <div>
                  <input
                    id="6"
                    type="radio"
                    name="phương thức thanh toán"
                    value="Chuyển khoản ngân hàng"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                  />
                  <label htmlFor="6">Chuyển khoản ngân hàng</label>
                </div>
              </div>
            </div>
            {errors["phương thức thanh toán"] && (
              <p>{errors["phương thức thanh toán"]}</p>
            )}
          </div>
          <div onClick={submitInfo} className="confirm-info-btn">
            Xác nhận thông tin
          </div>
        </div>
        <Order />
      </div>
    </div>
  );
}

export default Infomation;
