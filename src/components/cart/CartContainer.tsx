import { Link } from "react-router-dom";

import CartWrapper from "./CartWrapper";

import { GlobalContext } from "../../utils/globalState";
import { useContext, useEffect } from "react";

function CartContainer() {
  const { setIsLoader } = useContext(GlobalContext);

  useEffect(() => {
    setIsLoader(false);
  }, []);

  return (
    <div className="cart-container">
      <CartWrapper />
      <Link to={"/info"}>Tiếp tục thanh toán</Link>
    </div>
  );
}

export default CartContainer;
