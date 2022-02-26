import { useEffect, useContext } from "react";
import ProdItem from "../components/ProdItem/ProdItem";
import { GlobalContext } from "../globalState";
import { Button, List } from "antd";

import "antd/dist/antd.css";
import styled from "styled-components";

const ListItem = styled(List)`
  margin-top: 40px;
  .ant-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;
interface Brand {
  brand: string;
}
function Vans() {
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

const Converse = brandItems.filter((item: { brand: string; }) => item.brand == 'converse')

  return (
    <div className="prods-container brand-container">
      <div className="brand-banner">
        <img src="/images/converse_banner.jpg" alt="converse banner" />
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
        dataSource={Converse}
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

export default Vans;
