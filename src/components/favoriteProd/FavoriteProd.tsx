import { List, Result } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../../utils/globalState";
import styled from "styled-components";
import CartFav from "./CardFav";
import { Link } from "react-router-dom";
import { SubtitleAnt } from "../cart/CartWrapper";

const ListFlex = styled.div`
  .ant-row {
    @media (max-width: 1023px) {
      flex-direction: column;
      width: 100%;
    }
  }
`;

function FavoriteProd() {
  const { favProducts, setIsLoader } = useContext(GlobalContext);
  setIsLoader(false);
  return (
    <div
      className="favorite-container"
      style={{ padding: "30px", marginTop: "0px" }}
    >
      <ListFlex className="Lists-fav">
        {favProducts.length === 0 ? (
          <div className="empty-cart">
            <Result
              status="404"
              subTitle={
                <SubtitleAnt>Không có sản phẩm trong yêu thích!</SubtitleAnt>
              }
              extra={
                <Link type="primary" to={"/"}>
                  Trang chủ
                </Link>
              }
            />
          </div>
        ) : (
          <List
            dataSource={favProducts}
            renderItem={(props: any) => (
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
              ></CartFav>
            )}
          />
        )}
      </ListFlex>
    </div>
  );
}

export default FavoriteProd;
