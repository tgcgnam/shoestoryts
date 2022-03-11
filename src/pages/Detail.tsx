import { useParams } from "react-router-dom";
import DetailItem from "../components/detailItem/DetailItem";

function Detail() {
  const {id} = useParams();
  return (
    <>
      <DetailItem prodId={id}  />
    </>
  );
}

export default Detail;
