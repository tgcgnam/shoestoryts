import { useEffect, useContext } from "react";
import ProdItem from "../components/prodItem/ProdItem";
import { iCart } from "antd/lib/list";
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

function Vans(_props: iCart) {
  const { brandItems, setBrandItems, isLoader, setIsLoader } =
    useContext(GlobalContext);

  useEffect(() => {
    setIsLoader(true);
    fetch("https://shoestory-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((brandItems) => setBrandItems(brandItems))
      .then(() => setIsLoader(false));
  }, []);

  const Converse = brandItems.filter(
    (item: { brand: string }) => item.brand == "converse"
  );

  return (
    <div className="prods-container brand-container">
      <div className="brand-banner">
        <img src="/images/converse_banner.jpg" alt="converse banner" />
      </div>
      <ListItem
        grid={{
          gutter: 16,
          xs: 2,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={Converse}
        renderItem={(props) => {
          return (
            <ProdItem
              key={props.id}
              id={props.id}
              name={props.name}
              condition={props.condition}
              status={props.status}
              price={props.price}
              sale={props.sale}
              img={props.img}
              brand={props.brand}
              sizes={props.sizes}
              material={props.material}
              color={props.color}
              displayTrash={undefined}
              image2={""}
              image3={""}
              image4={""}
            ></ProdItem>
          );
        }}
      />
    </div>
  );
}

export default Vans;
