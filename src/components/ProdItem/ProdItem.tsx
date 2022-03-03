import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Card, Button, message, Modal } from "antd";
import { ShoppingOutlined, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";
import globalFunction from "../../globalFunction";
import { GlobalContext } from "../../globalState";
import "./ProdItem.scss";
import { iCart } from "antd/lib/list";
import "antd/dist/antd.css";

// styled
const CardProd = styled(Card)`
  border: none;

  .cart-fav-btn {
    position: absolute;
    top: 14px;
    right: 28px;
    cursor: pointer;
    color: #333;
    svg {
      font-size: 2.2rem;
    }
    :hover {
      color: #ff8873;
    }
  }
  .cart-plus-btn {
    cursor: pointer;
    position: absolute;
    top: 14px;
    left: 28px;
    color: #333;
    svg {
      font-size: 2.2rem;
    }
    :hover {
      color: #f8c052;
    }
  }
  .ant-card-body {
    padding: 12px;
  }
  .prod-item {
    padding: 0;
    margin: 0;
    text-align: center;
    position: relative;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
    padding: 36px 0 28px 0;
    transition: all 0.2s linear;
    text-decoration: none;
    color: #000;
    &:hover {
      transform: translateY(-6px);
      .ant-btn {
        transform: translateY(0);
        border-color: #fff;
        background-color: #fff;
        opacity: 1;
        pointer-events: visible;
      }
    }
    .ant-btn {
      border-radius: 12px;
      transform: translateY(200%);
      color: #f8c052;
      border-color: #f8c052;
      pointer-events: none;
      z-index: -1;
      opacity: 0;
    }
    .new-img {
      width: 3.5rem;
      height: 4.5rem;
      position: absolute;
      top: 12px;
      right: 12px;
    }
    img {
      width: 70%;
    }
    p {
      margin: 0 16px;
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: center;
      min-height: 36px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: #000;
    }
    .prod-price {
      color: #f8c052;
      font-weight: bold;
      margin: 8px 0;
      span {
        margin-right: 6px;
        font-size: 1.7rem;
        &.old-price {
          text-decoration: line-through;
          font-size: 1.5rem;
        }
      }
    }
    .status {
      position: absolute;
      margin-left: 50%;
      background: white;
      margin-top: -35px;
      transform: translateX(-50%);
      span {
        font-size: 1.8rem;
        font-weight: bold;
        color: tomato;
      }
    }
  }
`;


function ProdItem(props: iCart) {
  const { handlePrice } = globalFunction();

  const {
    cart,
    setCart,
    setIsCartWarning,
    favProducts,
    setFavProducts,
    setIsSoldOut,
  } = useContext(GlobalContext);

  const addToCart = () => {
   
    let newData = [...cart];
    let check = true;

    if (props.condition === "Tạm Hết hàng") {
      setIsSoldOut(true);
    } else {
      newData.map((item) => {
        if (item.cartId === props.id) {
          check = false;
          setIsCartWarning(true);
          return item;
        }
        return item;
      });

      if (check) {
        message.success({
          content: "Đã thêm vào giỏ hàng",
          style: {
            marginTop: "100px",
          },
        });
        newData.push({
          cartId: props.id,
          cartImg: props.img,
          cartName: props.name,
          cartQuantity: 1,
          cartPrice: props.price,
          cartSale: props.sale,
          cartStatus: props.status,
          cartCondition: props.condition,
          cartBrand: props.brand,
          cartSizes: props.sizes,
          cartMaterial: props.material,
          cartColor: props.color,
          cartChosenSize: "",
        });
      }

      setCart(newData);
    }
  };

  const deleteFavProd = () => {
    let newData = [...favProducts];

    const filterFavProducts = newData.filter((item) => item.id !== props.id);

    setFavProducts(filterFavProducts);
  };

  return (
    <CardProd className="">
      <div className="prod-item">
        <div className="cart-plus-btn" onClick={addToCart}>
          <ShoppingOutlined />
        </div>
   
        <Link
          // onClick={showModal}
          to={`/detail/${props.id}`}
          style={{ textAlign: "center" }}
        >
          <img src={props.img} />
          <p>{props.name}</p>
        </Link>
        <div className="prod-price">
          <span className="cur-price">{handlePrice(props.price)}</span>
          {props.sale !== 0 && (
            <span className="old-price">
              {handlePrice(props.price / (1 - props.sale))}
            </span>
          )}
        </div>
        <div className="status">
          <span>{props.condition === "Tạm Hết hàng" && "Tạm Hết hàng"}</span>
        </div>
      </div>

      {props.displayTrash && (
        <div onClick={deleteFavProd} className="delete-btn fas fa-trash"></div>
      )}
    </CardProd>
  );
}

export default ProdItem;
