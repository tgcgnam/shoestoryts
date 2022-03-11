import { Link } from "react-router-dom";
import { useContext } from "react";
import { Card, notification } from "antd";
import { ShoppingOutlined, HeartFilled, CheckCircleTwoTone, HeartTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import globalFunction from "../../utils/globalFunction";
import { GlobalContext } from "../../utils/globalState";

import "antd/dist/antd.css";


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
      color: #ec2a21;
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
      color: #ec2a21;
      border-color: #ec2a21;
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
      color: #ec2a21;
      font-weight: bold;
      margin: 8px 0;
      span {
        margin-right: 6px;
        font-size: 1.7rem;
        &.old-price {
          color:#333 ;
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

function ProdItem(props: {
  condition: string;
  id: number;
  img: string | undefined;
  name: string;
  price: number;
  sale: number;
  status: string;
  brand: string;
  sizes: number;
  material: string;
  color: string;
}) {
  const { handlePrice } = globalFunction();

  const {
    cart,
    setCart,
    favProducts,
    setIsUpdatedFavorite,
    setFavProducts,
  } = useContext(GlobalContext);

  //antd

  const [api, contextHolder] = notification.useNotification();

  //
  const addToCart = () => {
    let newData = [...cart];
    let check = true;

    if (props.condition === "Tạm Hết hàng") {
      // setIsSoldOut(true);
      api.info({
        message: `Sản phẩm tạm hết hàng !`,

      });
    } else {
      newData.map((item) => {
        if (item.cartId === props.id) {
          check = false;
          api.info({
            message: `Sản phẩm đã có trong giỏ hàng !`,
          });
          return item;
        }
        return item;
      });

      if (check) {
        api.success({
          message: `Đã thêm vào giỏ hàng !`,
          icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
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

  const addToFavorite = () => {
    let check = true;
    let newData = [...favProducts];
  
    newData.map((item) => {
      if (item.id === props.id) {
        check = false;
        api.info({
          type:'success',
          message: `Sản phẩm đã có trong yêu thích!`,
        });
        setIsUpdatedFavorite(false);

        return item;
      }
      return item;
    });

    if (check) {
      api.success({
        message: `Đã thêm vào yêu thích!`,
        icon : <HeartTwoTone twoToneColor="#eb2f96" />,
      });
      setIsUpdatedFavorite(true);
      newData.push({
        id: props.id,
        img: props.img,
        name: props.name,
        price: props.price,
        sale: props.sale,
        status: props.status,
        condition: props.condition,
        brand: props.brand,
        sizes: props.sizes,
        material: props.material,
        color: props.color,
      });
    }

    setFavProducts(newData);
  };

  return (
    <CardProd className="">
      <div className="prod-item">
        {contextHolder}
        <div className="cart-plus-btn" onClick={addToCart}>
          <ShoppingOutlined />
        </div>
        <div className="cart-fav-btn" onClick={addToFavorite}>
          <HeartFilled />
        </div>
        <Link to={`/detail/${props.id}`} style={{ textAlign: "center" }}>
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
    </CardProd>
  );
}

export default ProdItem;
