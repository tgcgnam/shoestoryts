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
    setIsAddFavSuccess,
    setIsAddFavWarn,
  } = useContext(GlobalContext);

  const offWarning = () => {
    setIsCartWarning(false);
    setIsSoldOut(false);
    setIsWarningConfirmInfo(false);
    setIsSizeWarning(false);
    setIsWarningInfo(false);
    setIsWarningCartEmpty(false);
    setIsAddFavSuccess(false);setIsAddFavWarn(false);
  };

  return (
   <div>
      {/* <div className="" onClick={offWarning}>
  
          <FontAwesomeIcon icon={faTimes} className="close-btn"></FontAwesomeIcon>
  
  
      </div> */}
   </div>
  );
}

export default CartWarning;
