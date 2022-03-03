import { useContext } from "react";
import { GlobalContext } from "../../globalState";
import CartWarning from "../cart/CartWarning";
import ProdItem from "../prodItem/ProdItem";

import "./FavoriteProd.scss";

function FavoriteProd() {
  const { favProducts, isCartWarning } = useContext(GlobalContext);
  return (
    <div className="favorite-container">
      <div className="row">
        {favProducts.length === 0 ? (
          <div className="empty">
            <h1>Bạn không có sản phẩm yêu thích nào !</h1>
          </div>
        ) : (
          favProducts.map(
            (item: {
              key: number;
              id: number;
              name: string;
              condition: string;
              status: string;
              price: number;
              sale: number;
              img: string;
              brand: string;
              sizes: number;
              material: string;
              color: string;
            }) => (
              <ProdItem
                key={item.id}
                id={item.id}
                name={item.name}
                condition={item.condition}
                status={item.status}
                price={item.price}
                sale={item.sale}
                img={item.img}
                brand={item.brand}
                sizes={item.sizes}
                material={item.material}
                color={item.color}
                displayTrash
                image2={""}
                image3={""}
                image4={""}
              />
            )
          )
        )}
      </div>
      {isCartWarning && <CartWarning />}
    </div>
  );
}

export default FavoriteProd;
