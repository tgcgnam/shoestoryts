import { useContext, useEffect } from "react";
import CartContainer from "../components/cart/CartContainer";
import { GlobalContext } from "../utils/globalState";


function CartPage() {
  const {
    setErrors,
    setCusInfo,

    setLetSubmit,
  } = useContext(GlobalContext);

  useEffect(() => {
    setErrors({});
    setCusInfo({});
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
