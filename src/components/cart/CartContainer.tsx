import { Link, Outlet } from "react-router-dom";

import CartWrapper from "./CartWrapper";

// import SelectCity from "./SelectCity";

function CartContainer() {
  return (
    <div className="cart-container">
      <CartWrapper />
      <Link to={"/info"}>Tiếp tục thanh toán</Link>
    </div>
  );
}

export default CartContainer;
