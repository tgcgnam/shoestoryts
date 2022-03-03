import Banner from "../components/banner/Banner";
import ProdItemContainer from "../components/prodItem/ProdItemContainer";
import Search from "antd/lib/input/Search";

function HomePage() {


  const onSearch = (value: any) => console.log(value);
  
  return (
    <>
      <Banner />

      <ProdItemContainer quantity={12} />
    </>
  );
}

export default HomePage;
