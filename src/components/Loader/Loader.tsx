// import "./Loader.scss";
import { Spin } from "antd";
import "antd/dist/antd.css";


function Loader() {
  return (
    <div className="lds-hourglass-container">
      <Spin tip="Loading..." size="large" style={{zIndex:10000}} />
    </div>
  );
}

export default Loader;
