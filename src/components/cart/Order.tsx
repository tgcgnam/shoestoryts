import { Button, Modal, notification, Result } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import GlobalFunction from "../../utils/globalFunction";

import { GlobalContext } from "../../utils/globalState";

import "./CartItem.scss";

function Order() {
  const {
    cart,
    letSubmit,
    cusInfo,
    cartSizeWarnings,
    setIsLoader,
    setCart,
    setOrderedProds,
  } = useContext(GlobalContext);

  const { handlePrice } = GlobalFunction();

  let deliveryFee = 0;
  const calculateOrderTotal = () => {
    if (cusInfo["phương thức giao hàng"] === "Giao nhanh") {
      deliveryFee = 35000;
    }
    const result = cart.reduce(
      (
        initValue: number,
        curValue: { cartPrice: number; cartQuantity: number }
      ) => {
        return initValue + curValue.cartPrice * curValue.cartQuantity;
      },
      0
    );

    return result + deliveryFee;
  };

  setIsLoader(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const confirmOrder = () => {
    let check = false;
    let newData = { ...cartSizeWarnings };

    cart.forEach((item: { cartChosenSize: string; cartName: string }) => {
      if (item.cartChosenSize === "") {
        check = true;
        newData = {
          ...newData,
          [item.cartName]: true,
        };
      } else {
        newData = {
          ...newData,
          [item.cartName]: false,
        };
      }
    });

    if (check) {
      notification.warn({
        message: "Thông báo",
        description: "Vui lòng kiểm tra lại thông tin nhận hàng !",
      });
      notification.warn({
        message: "Thông báo",
        description: "Bạn chưa chọn sizes giày !",
      });
    } else {
      if (cart.length !== 0) {
        if (letSubmit) {
          setIsModalVisible(true);

          setOrderedProds(cart);

          setCart([]);
        }
      } else {
      }
    }

    // if (!letSubmit) {
    // }
  };

  return (
    <div className="order-container">
      <div className="order-left">
        <div className="address">
          <h1>Giao tới</h1>
          <span className="name">
            {letSubmit ? (
              <p>{cusInfo["tên"]}</p>
            ) : (
              <div className="so-on-wrapper">
                <div>Đang xác nhận</div>
                <div className="loading"></div>
              </div>
            )}
          </span>
          <span className="phone">
            {letSubmit ? (
              <p>{cusInfo["số điện thoại"]}</p>
            ) : (
              <div className="so-on-wrapper">
                <div>Đang xác nhận</div>
                <div className="loading"></div>
              </div>
            )}
          </span>
          <span className="email">
            {letSubmit ? (
              <p>{cusInfo.email}</p>
            ) : (
              <div className="so-on-wrapper">
                <div>Đang xác nhận</div>
                <div className="loading"></div>
              </div>
            )}
          </span>
          <span className="address-item">
            {letSubmit ? (
              cusInfo["địa chỉ"] ? (
                <p>
                  {cusInfo["địa chỉ"]}, {cusInfo["xã, phường"]},{" "}
                  {cusInfo["quận, huyện"]}, {cusInfo["tỉnh, thành phố"]}
                </p>
              ) : (
                "Vui lòng xác nhận"
              )
            ) : (
              <div className="so-on-wrapper">
                <div>Đang xác nhận</div>
                <div className="loading"></div>
              </div>
            )}
          </span>
        </div>
        <div className="methods">
          <h1>Phương thức</h1>
          <span>
            {letSubmit ? (
              cusInfo["phương thức giao hàng"] ? (
                <p>{cusInfo["phương thức giao hàng"]}</p>
              ) : (
                "Vui lòng xác nhận"
              )
            ) : (
              <div className="so-on-wrapper">
                <div>Đang xác nhận</div>
                <div className="loading"></div>
              </div>
            )}
          </span>
          <span>
            {letSubmit ? (
              <p>{cusInfo["phương thức thanh toán"]}</p>
            ) : (
              <div className="so-on-wrapper">
                <div>Đang xác nhận</div>
                <div className="loading"></div>
              </div>
            )}
          </span>
        </div>
        <div className="order-cost">
          <div className="product">
            <p>Sản phẩm</p>
            <span>{`${handlePrice(
              calculateOrderTotal() - deliveryFee
            )} đ`}</span>
          </div>
          <div className="delivery">
            <p>Vận chuyển</p>
            <span>{`${handlePrice(deliveryFee)} đ`}</span>
          </div>
          <div className="sale">
            <p>Giảm giá</p>
            <span>0 đ</span>
          </div>
          <div className="total">
            <p className="total-text">Tổng cộng</p>
            <span>{`${handlePrice(calculateOrderTotal())} đ`}</span>
          </div>
        </div>
      </div>
      <div onClick={confirmOrder} className="confirm-order">
        Xác nhận đặt hàng
      </div>
      <Modal visible={isModalVisible} footer={null} closeIcon>
        <Result
          status="success"
          title="Đặt hàng thành công !"
          extra={[
            <>
              <div className="address">
                <h1>Giao tới</h1>
                <span className="name">
                  {letSubmit ? (
                    <p>{cusInfo["tên"]}</p>
                  ) : (
                    <div className="so-on-wrapper">
                      <div>Đang xác nhận</div>
                      <div className="loading"></div>
                    </div>
                  )}
                </span>
                <span className="phone">
                  {letSubmit ? (
                    <p>{cusInfo["số điện thoại"]}</p>
                  ) : (
                    <div className="so-on-wrapper">
                      <div>Đang xác nhận</div>
                      <div className="loading"></div>
                    </div>
                  )}
                </span>
                <span className="email">
                  {letSubmit ? (
                    <p>{cusInfo.email}</p>
                  ) : (
                    <div className="so-on-wrapper">
                      <div>Đang xác nhận</div>
                      <div className="loading"></div>
                    </div>
                  )}
                </span>
                <span className="address-item">
                  {letSubmit ? (
                    cusInfo["địa chỉ"] ? (
                      <p>
                        {cusInfo["địa chỉ"]}, {cusInfo["xã, phường"]},{" "}
                        {cusInfo["quận, huyện"]}, {cusInfo["tỉnh, thành phố"]}
                      </p>
                    ) : (
                      "Vui lòng xác nhận"
                    )
                  ) : (
                    <div className="so-on-wrapper">
                      <div>Đang xác nhận</div>
                      <div className="loading"></div>
                    </div>
                  )}
                </span>
              </div>

              <Button key="buy">
                <Link to={"/"}>Tiếp tục mua sắm </Link>
              </Button>
            </>,
          ]}
        />
      </Modal>
    </div>
  );
}

export default Order;
