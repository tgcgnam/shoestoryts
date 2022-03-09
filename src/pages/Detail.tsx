import { useParams } from "react-router-dom";
import DetailItem from "../components/detailItem/DetailItem";
import { GlobalContext } from "../utils/globalState";
import { useContext } from "react";
import Loading from "../components/loading/Loading";

function Detail() {
  const { id } = useParams();
  const { isLoader } = useContext(GlobalContext);
  return (
    <>
      <DetailItem prodId={id} />
      {/* {isLoader && <Loading />} */}
    </>
  );
}

export default Detail;
