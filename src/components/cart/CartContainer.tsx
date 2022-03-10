import { Link } from "react-router-dom";
import CartWrapper from "./CartWrapper";
import { GlobalContext } from "../../utils/globalState";
import { useContext, useEffect } from "react";
import styled from "styled-components";

const LinkTink = styled(Link)`
  background-color: tomato;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin: auto;
  :hover {
    color: white;
    background-color: red;
  }
`;

function CartContainer() {
  const { setIsLoader, cart } = useContext(GlobalContext);

  useEffect(() => {
    setIsLoader(false);
  }, []);

  const CartLength =
    cart.length > 0 ? (
      <LinkTink to={"/info"}>Tiếp tục thanh toán</LinkTink>
    ) : (
      ""
    );

  return (
    <div className="cart-container" style={{textAlign:'center'}}>
      <CartWrapper />
      {CartLength}
    </div>
  );
}

export default CartContainer;
