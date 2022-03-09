import Banner from "../components/banner/Banner";
import ProdItemContainer from "../components/prodItem/ProdItemContainer";

function HomePage() {


  return (
    <>
      <Banner />
      <ProdItemContainer quantity={12} />
    </>
  );
}

export default HomePage;
