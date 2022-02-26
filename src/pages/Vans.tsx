import { useEffect, useContext, Key } from "react";
import Loader from "../components/Loader/Loader";
import ProdItem from "../components/ProdItem/ProdItem";
import { GlobalContext } from "../globalState";
import { Button, List, Space } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const ListItem = styled(List)`
  margin-top: 40px;
  .ant-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;

function VansPage() {
  const { brandItems, setBrandItems, isLoader, setIsLoader } =
    useContext(GlobalContext);

  useEffect(() => {
    setIsLoader(true);
    fetch("https://shoestory-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((brandItems) => setBrandItems(brandItems))
      .then(() => setIsLoader(false));
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  console.log(brandItems);

  // vansItem
  const Vans = brandItems.filter(
    (item: { brand: string }) => item.brand == "vans"
  );

  return (
    <div className="prods-container brand-container">
      <div className="brand-banner">
        <img src="/images/vans_banner.jpg" alt="vans banner" />
      </div>
      <ListItem
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={Vans}
        renderItem={(brandItem: any, index: number) => {
          return (
            <ProdItem
              key={index}
              id={brandItem.id}
              name={brandItem.name}
              condition={brandItem.condition}
              status={brandItem.status}
              price={brandItem.price}
              sale={brandItem.sale}
              img={brandItem.image1}
              brand={brandItem.brand}
              sizes={brandItem.sizes}
              material={brandItem.material}
              color={brandItem.color}
            ></ProdItem>
          );
        }}
      />
    </div>
  );
}

export default VansPage;
