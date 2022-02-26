import { Button, List, message } from "antd";
import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../../globalState";
import ProdItem from "./ProdItem";
import "antd/dist/antd.css";
import styled from "styled-components";

const key = "updatable";

const openMessage = () => {
  message.loading({ content: "Bạn đợi một tí nhé ^^", key });
  setTimeout(() => {
    message.success({ content: "Xong rồi nè!", key, duration: 2 });
  }, 1500);
};

const ListItem = styled(List)`
  margin-top: 40px;
  .ant-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;
const MainProd = styled.div`
  text-align: center;
  .btn-see {
    margin-bottom: 30px;
  }
`;

interface Loading {
  loadings: any;
  setLoadings: any;
}

const ProdItemContainer = ({ quantity }: any) => {
  const { products, setProducts, setIsLoader } = useContext(GlobalContext);
  const [loadings, setLoadings] = useState<Loading[]>([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    setTimeout(() => {
      fetch(`https://shoestory-server.herokuapp.com/products`)
        .then((res) => res.json())
        .then((products) => setProducts(products))
        .then(() => setIsLoader(false));
    }, 1000);
  }, []);

  const handleSeeMore = () => {
    setTimeout(() => {
      setSeeMore(true);
    }, 1000)
  };


  return (
    <MainProd className="products-main">
      <ListItem
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={products}
        renderItem={(product: any, index: any) => {
          if (index < (seeMore ? 24 : quantity)) {
            return (
              <ProdItem
                key={product.id}
                id={product.id}
                name={product.name}
                condition={product.condition}
                status={product.status}
                price={product.price}
                sale={product.sale}
                img={product.image1}
                brand={product.brand}
                sizes={product.sizes}
                material={product.material}
                color={product.color}
              ></ProdItem>
            );
          }
          return <div key={product.id} className="empty"></div>;
        }}
      />
      {!seeMore && (
        <Button className="btn-see" onClick={openMessage}>
          <p onClick={handleSeeMore} className="see-more">
            Xem thêm...
          </p>
        </Button>
      )}
    </MainProd>
  );
};

export default ProdItemContainer;
