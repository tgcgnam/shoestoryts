import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import globalFunction from "../../globalFunction";
import styled from "styled-components";
import { GlobalContext } from "../../globalState";

const CarItem = styled.div`
  padding: 12px;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
@media (max-width:991px){
    text-align: center;
}
  .cart-left {
    width: 50%;
    .cart-img {
      width: 100px;
    }
  }
  .cart-right {
    text-align: center;
    .del-fav {
      cursor: pointer;
      :hover {
        color: #a36e0f;
      }
    }
  }
`;

function CartFav(props: any) {
  const { handlePrice } = globalFunction();

  const { favProducts, setFavProducts } = useContext(GlobalContext);

  const deleteFavProd = () => {
    let newData = [...favProducts];

    const filterFavProducts = newData.filter((item) => item.id !== props.id);

    setFavProducts(filterFavProducts);
  };

  return (
    <CarItem className="cart-item">
      <div className="cart-left">
        <img src={props.img} className="cart-img" alt="cart-item" />
        <p className="name">{props.name}</p>
      </div>
      <div className="cart-right">
        <p className="price">{handlePrice(props.price)}</p>

        <div className="del-fav">
          <FontAwesomeIcon icon={faTrash} onClick={deleteFavProd} />
        </div>
      </div>
    </CarItem>
  );
}

export default CartFav;