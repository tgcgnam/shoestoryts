import { Carousel } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

const BannerMain = styled(Carousel)`
margin: 56px 8px 0 8px;
  & > div {
    position: unset !important;
    top: 100px;
    left: 218px;
    right: 16px;
    height: 300px;
    border-radius: 10px;
    .item1 {
      border-radius: 10px;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: 0 92%;
        border-radius: 10px;
      }
    }

    .item2 {
      border-radius: 10px;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: 0 78%;
        border-radius: 10px;
      }
    }

    .item3 {
      border-radius: 10px;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: 0 80%;
        border-radius: 10px;
      }
    }

    .slick-dots li button {
      margin-top: 8px;
      width: 28px;
      height: 6px;
      border-radius: 6px;
      padding: 0;
      background-color: #ccc;
      &::before {
        display: none;
      }
    }

    .slick-dots li.slick-active button {
      background-color: #555;
    }

    .slick-next {
      right: -4px;
      z-index: 1;
    }

    .slick-prev {
      left: -14px;
      z-index: 1;
    }

    .slick-next:before {
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
      color: #fff;
      font-size: 3rem;
    }

    .slick-prev:before {
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
      color: #fff;
      font-size: 3rem;
    }
  }
  .slick-list {
    position: absolute;
  }
`;
function Banner() {
  return (
    <BannerMain autoplay >
      <div className="item1">
        <img src="/images/banner1.jpg" alt="banner1" />
      </div>
      <div className="item2">
        <img src="/images/banner2.jpg" alt="banner2" />
      </div>
      <div className="item3">
        <img src="/images/banner3.jpg" alt="banner3" />
      </div>
    </BannerMain>
  );
}

export default Banner;
