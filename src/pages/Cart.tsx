import { useContext, useEffect } from "react";

import { GlobalContext } from "../globalState";



import Loader from "../components/Loader/Loader";

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
   
    </div>
  );
}

export default CartPage;
