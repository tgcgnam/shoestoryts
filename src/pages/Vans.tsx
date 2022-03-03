import { useEffect, useContext, Key } from "react";
import ProdItem from "../components/prodItem/ProdItem";
import { GlobalContext } from "../globalState";
import { Button, List, Space } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { iCart } from "antd/lib/list";

const ListItem = styled(List)`
  margin-top: 40px;
  .ant-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;

function VansPage(_props: iCart) {
  const { brandItems, setBrandItems, isLoader, setIsLoader } =
    useContext(GlobalContext);

  useEffect(() => {
    setIsLoader(true);
    fetch("https://shoestory-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((brandItems) => setBrandItems(brandItems))
      .then(() => setIsLoader(false));
  }, []);



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
          xs: 2,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={Vans}
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
      ></ListItem>
    </div>
  );
}

export default VansPage;
