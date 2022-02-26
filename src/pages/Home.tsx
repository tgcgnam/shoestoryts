import { useState, useContext } from "react";
import { GlobalContext } from "../globalState";
import Loader from "../components/Loader/Loader";
import Banner from "../components/Banner/Banner";
import ProdItemContainer from "../components/ProdItem/ProdItemContainer";
import { useEffect } from "react";


function HomePage() {
  const { isLoader } = useContext(GlobalContext);
  const [seeMore, setSeeMore] = useState(false)

    useEffect(() => {
      window.scroll(0, 0);
    }, []);
  return (
    <>
      <Banner />
      <ProdItemContainer
        seeMore={seeMore}
        setSeeMore={setSeeMore}
        quantity={8}
      />
      {/* {isLoader && <Loader />} */}
    </>
  );
}

export default HomePage;
