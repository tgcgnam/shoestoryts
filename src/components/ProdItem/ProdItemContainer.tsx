import { Button, Col, Input, List, message, Row } from "antd";
import { useEffect, useContext, useState, Key, SetStateAction } from "react";
import { GlobalContext } from "../../globalState";
import ProdItem from "./ProdItem";
import "antd/dist/antd.css";
import styled from "styled-components";
// import { iCart } from "antd/lib/list";
import Filter from "../filter/Filter";
import Search from "antd/lib/input/Search";

const key: string = "updatable";

function openMessage(): void {
  message.loading({ content: "Bạn đợi một tí nhé ^^", key });
  setTimeout(() => {
    message.success({ content: "Xong rồi nè!", key, duration: 2 });
  }, 1500);
}

const ListItem = styled(List)`
  /* margin-top: 40px; */
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

  function handleSeeMore(): void {
    setTimeout(() => {
      setSeeMore(true);
    }, 1000);
  }

  const Products = products.filter(
    (item: { id: number }) => item.id - 1 < (seeMore ? 24 : quantity)
  );
  const [filter, setFilter] = useState();

  const updateFilter = (value: undefined) => {
    setFilter(value);
  };

  //
  //  const [prod, setProd] = useState<[]>([]);
  const [keyword, setKeyword] = useState<string>(" ");

  // console.log(keyword);
  useEffect(() => {
    if (keyword != " ") {
      fetch(
        `https://shoestory-server.herokuapp.com/products/?q=` + keyword.trim()
      )
        .then((res) => res.json())
        .then((item) => setProducts(item));
    }
  }, [keyword]);
  //
  return (
    <MainProd className="products-main">
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <Col className="gutter-row" span={4} style={{ marginLeft: "16px" }}>
          <Search
            placeholder="Tìm kiếm sản phẩm..."
            style={{ width: 200 }}
            type="text"
            // value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col className="gutter-row" span={3} style={{ marginRight: "16px" }}>
          <Filter updateFilter={updateFilter} />
        </Col>
      </Row>

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
        renderItem={(props):any => (
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
        <Button className="btn-see" onClick={openMessage}>
          <p onClick={handleSeeMore} className="see-more">
            Xem thêm...
          </p>
        </Button>
      )}
    </MainProd>
  );
}

export default ProdItemContainer;
