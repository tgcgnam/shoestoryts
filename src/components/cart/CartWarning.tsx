import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../utils/globalState";

function CartWarning({title}:any) {
  const {
    setIsCartWarning,
    setIsSoldOut,
    setIsWarningConfirmInfo,
    setIsSizeWarning,
    setIsWarningInfo,
    setIsWarningCartEmpty,
  } = useContext(GlobalContext);

  const offWarning = () => {
    setIsCartWarning(false);
    setIsSoldOut(false);
    setIsWarningConfirmInfo(false);
    setIsSizeWarning(false);
    setIsWarningInfo(false);
    setIsWarningCartEmpty(false);
  };

  return (
    <div className="cart-warning" onClick={offWarning}>
      <div className="cart-warning-inner">
        <FontAwesomeIcon icon={faTimes} className="close-btn"></FontAwesomeIcon>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default CartWarning;
