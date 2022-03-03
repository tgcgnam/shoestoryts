import { useContext, useEffect } from "react";
import CartContainer from "../components/cart/CartContainer";
import { GlobalContext } from "../globalState";


function CartPage() {
  const {
    setErrors,
    setCusInfo,
    setIsOrderSuccess,
    setLetSubmit,
    isLoader,
  } = useContext(GlobalContext);

  useEffect(() => {
    setErrors({});
    setCusInfo({});
    setIsOrderSuccess(false);
    setLetSubmit(false);
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <CartContainer />
    </div>
  );
}

export default CartPage;
