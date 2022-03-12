import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../utils/globalState";
import GlobalFunction from "../../utils/globalFunction";
import "react-image-gallery/styles/scss/image-gallery.scss";
import styled from "styled-components";
import ImagesGallery from "./ImgWrapper";
import { notification } from "antd";
import { Link } from "react-router-dom";
import ButtonAnt from "../button/Button";
import ChosenSize from "../../utils/ChosenSize";
import { CheckCircleTwoTone } from "@ant-design/icons";

function DetailItem({ prodId }: { prodId: any }) {
  const [product, setProduct]: any = useState({
    sizes: [],
  });

  const [desc, setDesc]: any= useState({});
  const { quantity, cart, setCart, setIsLoader } = useContext(GlobalContext);

  useEffect(() => {
    setIsLoader(true);
    fetch(`https://tstoreserver.herokuapp.com/products/${prodId}`)
      .then((res) => res.json())
      .then((product) => (setProduct(product), setIsLoader(false)));

    fetch(`https://tstoreserver.herokuapp.com/description/${prodId}`)
      .then((res) => res.json())
      .then((desc) => setDesc(desc));
  }, []);
  const { handlePrice } = GlobalFunction();

  const [api, contextHolder] = notification.useNotification();

  const addToCart = () => {
    let newData = [...cart];
    let check = true;

    if (product.condition === "Hết hàng") {
      api.info({
        message: `Sản phẩm tạm hết hàng !`,
      });
    } else {
      newData.map((item) => {
        if (item.cartId === product.id) {
          check = false;
          api.info({
            message: `Sản phẩm đã có trong giỏ hàng !`,
          });
          return item;
        }
        return item;
      });

      if (check) {
        api.info({
          message: `Đã thêm vào giỏ hàng !`,
          icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
        });
        newData.push({
          cartId: product.id,
          cartImg: product.image1,
          cartName: product.name,
          cartQuantity: quantity,
          cartPrice: product.price,
          cartSale: product.sale,
          cartStatus: product.status,
          cartCondition: product.condition,
          cartBrand: product.brand,
          cartSizes: product.sizes,
          cartMaterial: product.material,
          cartColor: product.color,
        });
      }

      setCart(newData);
    }
    if (product.sizes !== product.sizes) {
      api.info({
        message: `Sản phẩm đã có trong yêu thích!`,
      });
    }
  };

  return (
    <div className="detail-item-container">
      <DetailWrapper className="detail-item-wrapper">
        <div className="detail-item">
          <ImagesGallery id={prodId} />
          <div className="info-wrapper">
            <h1 className="name">{product.name}</h1>
            <p className="material">{`Chất liệu: ${product.material}`}</p>
            <p className="color">{`Màu sắc: ${product.color}`}</p>
            <div className="price">
              <span className="cur-price">{handlePrice(product.price)}</span>
              <span className="old-price">
                {handlePrice(product.price / (1 - product.sale))}
              </span>
            </div>
            <div>Trạng thái: {product.condition}</div>
            <br />
            Chọn size: <ChosenSize id={product.id} sizes={product.sizes} />
            <br />
            <br />
            {contextHolder}
            <BuyNow className="order-btn" to={"/cart"} onClick={addToCart}>
              Mua ngay
            </BuyNow>
            <ButtonAnt onclick={addToCart} text={"Thêm vào giỏ hàng"} />
            <div className="description">
              <h5>Mô tả sản phẩm</h5>
              <p>{desc.content}</p>
            </div>
          </div>
        </div>
      </DetailWrapper>
    </div>
  );
}

export default DetailItem;

const BuyNow = styled(Link)`
  padding: 11px 25px !important;
  background-color: #ec2a21 !important;
  margin-right: 12px !important;
  :hover {
    background-color: #ff00007a !important;
  }
`;
const DetailWrapper = styled.div`
  margin: 50px;
  .detail-item {
    display: flex;
    padding: 20px;
    border-radius: 20px;
    .img-wrapper {
      img {
        border-radius: 8px;
        width: 300px;
      }
      .img-slider.slick-slider {
        width: 306px;
        height: fit-content;
        margin-top: 24px;
        .item1,
        .item2,
        .item3,
        .item4 {
          outline: none;
          width: 56%;
          display: flex !important;
          justify-content: center;
        }
        .slick-next::before,
        .slick-prev::before {
          color: tomato;
        }
        img {
          width: 92%;
          cursor: pointer;
        }
      }
    }
    .info-wrapper {
      border-radius: 8px;
      text-align: left;
      margin-left: 40px;
      h1 {
        font-size: 2.2rem;
      }
      .material {
        margin: 14px 0;
        font-size: 1.5rem;
        color: #333;
      }
      .color {
        font-size: 1.5rem;
        color: #333;
      }
      .price {
        margin: 12px 0;
        color: tomato;
        font-weight: 600;
        .cur-price {
          font-size: 1.8rem;
          margin-right: 10px;
        }
        .old-price {
          font-size: 1.8rem;
          text-decoration: line-through;
          color: #333;
        }
      }
      .quantity {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        color: #333;
        span {
          font-size: 1.5rem;
          font-weight: 500;
          color: #333;
          margin-right: 12px;
        }
        & > div {
          display: flex;
          align-items: center;
          border: 1px solid #c4c4c4;
          border-radius: 4px;
          div {
            padding: 5px 10px;
            font-size: 1.8rem;
            cursor: pointer;
            user-select: none;
            &:nth-child(2) {
              cursor: default;
              font-size: 1.7rem;
            }
          }
        }
      }
      .description {
        margin-top: 24px;
        p {
          font-size: 1.4rem;
          line-height: 2.4rem;
          color: #333;
        }
      }
    }
    .order-btn {
      width: max-content;
      padding: 6px 24px;
      border-radius: 6px;
      color: #fff;
      background-color: tomato;
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1240px) {
    .detail-item {
      flex-direction: column;
      align-items: center;
      .img-wrapper {
        margin-bottom: 24px;
      }
      .info-wrapper {
        margin: 0;
      }
    }
    .info-slider {
      width: 360px;
    }
  }

  @media (max-width: 772px) {
    margin: 0;
    .info-wrapper {
      margin-top: 20px !important;
    }
    .detail-item-wrapper {
      margin-left: 0;
    }
    .detail-item {
      margin: 0 auto;
    }
    .info-slider {
      width: 300px;
    }
  }

  @media (max-width: 476px) {
    .detail-item {
      border-radius: unset;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
      width: 100%;
    }
  }

  @media (max-width: 320px) {
    .detail-item .img-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 150px;
      }
      .img-slider.slick-slider {
        width: 200px;
      }
    }
    .info-slider {
      width: 220px;
    }
  }
`;
