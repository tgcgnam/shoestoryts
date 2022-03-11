import { Button, Col, List, message, notification, Row, Space } from "antd";
import { useEffect, useContext, useState, createContext } from "react";
import { GlobalContext } from "../../utils/globalState";
import ProdItem from "./ProdItem";
import "antd/dist/antd.css";
import styled from "styled-components";
import ButtonAnt from "../button/Button";
import InputSearch from "../filter/Search";

const key: string = "updatable";

const ListItem = styled(List)`
  .ant-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;
const MainProd = styled.div`
  text-align: center;
  .btn-see {
    margin-top: 15px;
    background-color: #f8c052;
    margin-bottom: 30px;
    border-radius: 5px;
  }
`;

const InputSH = styled.div`
  /* position: relative; */
  width: 500px;
  margin: 50px auto;
  .input {
    height: 60px;
    width: 100%;
    min-width: 100%;
    padding: 0;
    border-radius: 0;
    line-height: 70px;
    background-color: transparent;
    color: white;
    font-size: 30px;
    border: none;
    outline: none;
    border-bottom: 3px solid #333333;
    font-family: $font-family;

    &:focus {
      + .input-highlight {
        border-top: 3px solid #fbc91b;
      }
    }
  }
`;

interface iQty {
  quantity: number;
}

function ProdItemContainer({ quantity }: iQty) {
  const { products, setProducts, setIsLoader } = useContext(GlobalContext);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    fetch(`https://shoestory-server.herokuapp.com/products`)
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .then(() => setIsLoader(false));
  }, []);

  const key = "updatable";

  function handleSeeMore(): void {
    notification.open({
      key,
      message: "Thông báo",
      description: "Đang tải sản phẩm !",
    });
    setTimeout(() => {
      notification.open({
        key,
        message: "Thông báo",
        description: "Đã tải xong !",
      });
      setSeeMore(true);
    }, 1000);
  }

  const Products = products.filter(
    (item: { id: number }) => item.id - 1 < (seeMore ? 24 : quantity)
  );

  //
  return (
    <MainProd className="products-main">
      <InputSearch />

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
        dataSource={Products}
        renderItem={(props: any) => (
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
        )}
      />

      {!seeMore && (
        <ButtonAnt text={"Xem thêm"} onclick={handleSeeMore}></ButtonAnt>
      )}
    </MainProd>
  );
}

export default ProdItemContainer;
