import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../utils/globalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Inputcheck from "../inputcheck/Inputcheck";
import CartWrapper from "./CartWrapper";
import Order from "./Order";
// import SelectCity from "./SelectCity";

function CartContainer() {
  const {
    cart,
    setCart,
    isRemoveWarning,
    setIsRemoveWarning,
    productId,
    isAddFavSuccess,
    setIsAddFavSuccess,
    isAddFavWarn,
    setIsAddFavWarn,
    cusInfo,
    setCusInfo,
    errors,
    setErrors,
    confirmInfo,
    setConfirmInfo,
    setLetSubmit,
    isWarningInfo,
    setIsWarningInfo,
    isSizeWarning,
    setIsSizeWarning,
    isWarningConfirmInfo,
    setIsWarningConfirmInfo,
    isOrderSuccess,
    isWarningCartEmpty,
    setIsWarningCartEmpty,
  } = useContext(GlobalContext);

  const remove = () => {
    let newData = [...cart];

    const filterData = newData.filter((item) => item.cartId !== productId);

    setCart(filterData);
    setIsRemoveWarning(false);
  };

  const undo = () => {
    setIsRemoveWarning(false);
  };

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
      setIsWarningInfo(true);
    }
  };

  return (
    <div className="cart-container">
      <CartWrapper />
      <h5>Thông tin giao hàng</h5>
      <div className="customer-information">
        <div className="address">
          <h1>
            <span>Địa chỉ</span>
          </h1>
          <div className="address-wrapper">
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
            {errors["số điện thoại"] && <p>{errors["số điện thoại"]}</p>}
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
              title={"Tỉnh, thành phố"}
            />
            {errors["quận, huyện"] && <p>{errors["quận, huyện"]}</p>}
            <Inputcheck
              handleChange={(e) => handleChange(e)}
              handleError={(e) => handleError(e)}
              type="text"
              name="xã, phường"
              title={"Tỉnh, thành phố"}
            />
            {errors["xã, phường"] && <p>{errors["xã, phường"]}</p>}
            <Inputcheck
              handleChange={(e) => handleChange(e)}
              handleError={(e) => handleError(e)}
              type="text"
              name="địa chỉ"
              title={"Tỉnh, thành phố"}
            />
            {errors["địa chỉ"] && <p>{errors["địa chỉ"]}</p>}
          </div>
        </div>
        <div className="methods">
          <div className="delivery-method">
            <h1>
              <i className="fas fa-truck" />
              <span>Phương thức giao hàng</span>
            </h1>
            <div className="selections">
              <div className="item">
                <div>
                  <input
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                    value="Giao nhanh"
                    name="phương thức giao hàng"
                    type="radio"
                  />
                  <span>Giao nhanh</span>
                </div>
                <div className="price">35.000 đ</div>
              </div>
              <div className="item">
                <div>
                  <input
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                    value="Giao tiêu chuẩn"
                    name="phương thức giao hàng"
                    type="radio"
                  />
                  <span>Giao tiêu chuẩn</span>
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
              <i className="far fa-credit-card" />
              <span>Phương thức thanh toán</span>
            </h1>
            <div className="selections">
              <div className="item">
                <div>
                  <input
                    type="radio"
                    name="phương thức thanh toán"
                    value="Thanh toán khi nhận hàng"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                  />
                  <span>Thanh toán khi nhận hàng</span>
                </div>
              </div>
              <div className="item">
                <div>
                  <input
                    type="radio"
                    name="phương thức thanh toán"
                    value="Thanh toán bằng ATM nội địa (Internet Banking)"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                  />
                  <span>Thanh toán bằng ATM nội địa (Internet Banking)</span>
                </div>
              </div>
              <div className="item">
                <div>
                  <input
                    type="radio"
                    name="phương thức thanh toán"
                    value="Thanh toán bằng Credit/Debit Card (VISA, MASTER, JCB, AMEX)"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                  />
                  <span>
                    Thanh toán bằng Credit/Debit Card (VISA, MASTER, JCB, AMEX)
                  </span>
                </div>
              </div>
              <div className="item">
                <div>
                  <input
                    type="radio"
                    name="phương thức thanh toán"
                    value="Chuyển khoản ngân hàng"
                    onChange={(e) => {
                      handleRadio(e);
                    }}
                  />
                  <span>Chuyển khoản ngân hàng</span>
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
          {/* <SelectCity /> */}
        </div>
        <Order />
      </div>

      {isRemoveWarning && (
        <div className="remove-warning">
          <div className="remove-warning-inner">
            <span className="close-btn" onClick={undo}>
              <FontAwesomeIcon icon={faTimes} />
            </span>

            <h2>Bạn có chắc chắn muốn xóa sản phẩm ?</h2>
            <div className="response">
              <div className="choice yes" onClick={remove}>
                Có
              </div>
              <div className="choice no" onClick={undo}>
                Không
              </div>
            </div>
          </div>
        </div>
      )}
      {isAddFavSuccess && (
        <div className="add-fav" onClick={() => setIsAddFavSuccess(false)}>
          <div className="add-fav-inner">
            <h2>Sản phẩm đã được thêm vào mục Yêu thích !</h2>
          </div>
        </div>
      )}
      {isOrderSuccess && (
        <div className="add-fav">
          <div className="add-fav-inner">
            <img src="/images/success.png" alt="" />
            <h2>Quý khách đã đặt hàng thành công!</h2>
            <h4>Chúng tôi sẽ liên hệ và giao hàng trong thời gian sớm nhất!</h4>
            <Link to="/" className="back-home-btn">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      )}
      {isAddFavWarn && (
        <div className="add-fav" onClick={() => setIsAddFavWarn(false)}>
          <div className="add-fav-inner warn">
            <h2>Sản phẩm đã có trong mục Yêu thích !</h2>
          </div>
        </div>
      )}
      {isWarningInfo && (
        <div className="add-fav" onClick={() => setIsWarningInfo(false)}>
          <div className="add-fav-inner warn">
            <h2>
              Thông tin của quý khách chưa đầy đủ hoặc chưa đúng.
              <br /> Vui lòng kiểm tra lại !
            </h2>
          </div>
        </div>
      )}
      {isSizeWarning && (
        <div className="add-fav" onClick={() => setIsSizeWarning(false)}>
          <div className="add-fav-inner warn">
            <h2>Vui lòng chọn size cho sản phẩm !</h2>
          </div>
        </div>
      )}
      {isWarningCartEmpty && (
        <div className="add-fav" onClick={() => setIsWarningCartEmpty(false)}>
          <div className="add-fav-inner warn">
            <h2>Giỏ hàng hiện không có sản phẩm nào !</h2>
          </div>
        </div>
      )}
      {isWarningConfirmInfo && (
        <div className="add-fav" onClick={() => setIsWarningConfirmInfo(false)}>
          <div className="add-fav-inner warn">
            <h2>Vui lòng xác nhận thông tin của quý khách !</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
