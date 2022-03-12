import { Result, Button } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../utils/globalState";
import CartItem from "./CartItem";
import styled from "styled-components";

export const SubtitleAnt = styled.div`
  font-size: 3rem;
`;

function CartWrapper() {
  const { cart, setIsLoader } = useContext(GlobalContext);
  setIsLoader(false);
  return (
    <>
      <div className="cart-wrapper">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <Result
              status="404"
              subTitle={
                <SubtitleAnt>Không có sản phẩm trong giỏ hàng !</SubtitleAnt>
              }
              extra={
                <Link type="primary" to={"/"}>
                  Trang chủ
                </Link>
              }
            />
          </div>
        ) : (
          cart.map(
            (item: {
              cartId: number;
              cartImg: string;
              cartName: string;
              cartQuantity: number;
              cartPrice: number;
              cartSale: number;
              cartStatus: string;
              cartCondition: string;
              cartSizes: number;
              cartChosenSize: number;
            }) => (
              <CartItem
                key={item.cartId}
                id={item.cartId}
                img={item.cartImg}
                name={item.cartName}
                quantity={item.cartQuantity}
                price={item.cartPrice}
                sale={item.cartSale}
                status={item.cartStatus}
                condition={item.cartCondition}
                sizes={item.cartSizes}
                chosenSize={item.cartChosenSize}
              />
            )
          )
        )}
      </div>
    </>
  );
}

export default CartWrapper;
