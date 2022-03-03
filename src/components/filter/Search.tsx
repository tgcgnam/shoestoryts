import { Card, List } from "antd";
import { iCart } from "antd/lib/list";
import { useState, useEffect } from "react";
import ProdItem from "../prodItem/ProdItem";
import SearchForm from "./SearchForm";

function SearchProd() {
  const [prod, setProd] = useState<[]>([]);
  const [keyword, setKeyword] = useState<string>(" ");
  console.log(prod);
  // console.log(keyword);
  useEffect(() => {
    if (keyword != "") {
      fetch(`https://shoestory-server.herokuapp.com/products/?q=` + keyword)
        .then((res) => res.json())
        .then((item) => setProd(item));
    }
  }, [keyword]);
  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value.trim())}
        />
      </div>

      <div className="main">
        {/* {prod && (
          <List
            dataSource={prod}
            renderItem={(props) => (
              <div
                // key={props.id}
                // id={props.id}
                // name={props.name}
                // condition={props.condition}
                // status={props.status}
                // price={props.price}
                // sale={props.sale}
                // img={props.img}
                // brand={props.brand}
                // sizes={props.sizes}
                // material={props.material}
                // color={props.color}
                // displayTrash={undefined}
                // image2={""}
                // image3={""}
                // image4={""}
              >
                {props.img}
              </div>
            )} */}
          {/* ></List> */}
        {/* )} */}
      </div>
    </div>
  );
}

export default SearchProd;
