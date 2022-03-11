import { useEffect, useContext } from "react";
import ProdItem from "../components/prodItem/ProdItem";
import { GlobalContext } from "../utils/globalState";
import { List } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import InputSearch from "../components/filter/Search";

const ListItem = styled(List)`
  margin-top: 40px;
  .ant-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;

function VansPage() {
  const { brandItems, setBrandItems, setIsLoader } = useContext(GlobalContext);

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
        <img
          src="/images/vans_banner.jpg"
          alt="vans banner"
          style={{ width: "100%", marginTop: "60px" }}
        />
      </div>
<InputSearch/>
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
        renderItem={(props: any) => {
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
            ></ProdItem>
          );
        }}
      ></ListItem>
    </div>
  );
}

export default VansPage;
