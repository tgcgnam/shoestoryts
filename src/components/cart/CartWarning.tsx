import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Result, Button } from "antd";
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
      <div className="" onClick={offWarning}>
        {/* <FontAwesomeIcon icon={faTimes} className="close-btn"></FontAwesomeIcon> */}
        <Result
          // status="success"
          title={title}
          // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
      </div>
    </div>
  );
}

export default CartWarning;
