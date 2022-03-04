import { List, Row } from "antd";

import { useContext } from "react";
import { GlobalContext } from "../../globalState";

import CartWarning from "../cart/CartWarning";

import styled from "styled-components";
import CartFav from "./CardFav";


const ListFlex = styled.div`
  .ant-row {
    @media (max-width: 1023px) {
      flex-direction: column;
      width: 100%;
    }
  }
`;

function FavoriteProd() {
  const { favProducts, isCartWarning } = useContext(GlobalContext);
  return (
    <div
      className="favorite-container"
      style={{ padding: "30px", marginTop: "0px" }}
    >
      <h5>Sản phẩm yêu thích</h5>
      <ListFlex className="Lists-fav">
        {favProducts.length === 0 ? (
          <div className="empty">
            <h1>Bạn không có sản phẩm yêu thích nào !</h1>
          </div>
        ) : (
          <List
            dataSource={favProducts}
            renderItem={(props):any => (
              <CartFav
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
              ></CartFav>
            )}
          />
        )}
      </ListFlex>
      {isCartWarning && <CartWarning />}
    </div>
  );
}

export default FavoriteProd;
