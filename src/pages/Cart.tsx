import { useContext, useEffect } from "react";
import CartContainer from "../components/cart/CartContainer";
import { GlobalContext } from "../utils/globalState";

function CartPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <CartContainer />
    </div>
  );
}

export default CartPage;
