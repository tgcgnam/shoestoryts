import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import globalFunction from "../../utils/globalFunction";

import { GlobalContext } from "../../utils/globalState";

import "./CartItem.scss";
import { message, Popconfirm } from "antd";

function CartItem(props: any) {
  const { handlePrice } = globalFunction();

  const {
    cart,
    setCart,
    favProducts,
    setFavProducts,
    setIsUpdatedFavorite,
    cartSizeWarnings,
    setCartSizeWarnings,
  } = useContext(GlobalContext);

  const increase = () => {
    let newData = [...cart];

    newData.map((item) => {
      if (item.cartId === props.id) {
        return {
          ...item,
          cartQuantity: item.cartQuantity++,
        };
      }
      return item;
    });

    setCart(newData);
  };

  const decrease = () => {
    let newData = [...cart];

    newData.map((item) => {
      if (item.cartId === props.id) {
        return {
          ...item,
          cartQuantity: item.cartQuantity > 1 ? item.cartQuantity-- : 0,
        };
      }
      return item;
    });
    setCart(newData);
  };

  function confirm() {
    let newData = [...cart];

    const filterCart = newData.filter((item) => item.cartId !== props.id);

    setCart(filterCart);

    message.success("Đã xoá sản phẩm khỏi giỏ hàng");
  }

  function cancel() {
    message.error("Không xoá sản phẩm");
  }

  const addToFavorite = () => {
    let check = true;
    let newData = [...favProducts];

    newData.map((item) => {
      if (item.id === props.id) {
        check = false;
        setIsUpdatedFavorite(false);
        return item;
      }
      return item;
    });

    if (check) {
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

    let newCart = [...cart];
    const newCartFilter = newCart.filter((item) => item.cartId !== props.id);

    setCart(newCartFilter);
  };

  const handleChooseSize = (e: any) => {
    let data = [...cart];

    if (e.target.value !== props.sizes) {
      const newData = {
        ...cartSizeWarnings,
        [props.name]: false,
      };
      setCartSizeWarnings(newData);
    }

    const newData = data.map((item) => {
      if (item.cartId === props.id) {
        return {
          ...item,
          cartChosenSize: Number(e.target.value),
        };
      }
      return item;
    });

    setCart(newData);
  };

  return (
    <>
      <div className="cart-item">
        <div className="wrapper">
          <img src={props.img} className="cart-img" alt="cart-item" />
          <p className="name">{props.name}</p>
        </div>
        <div className="one">
          <select
            onChange={(e) => handleChooseSize(e)}
            className="sizes-select"
          >
            <option value="Sizes">
              {props.chosenSize === "" ? "Sizes" : props.chosenSize}
            </option>
            {props.sizes.map((item: any) => {
              if (item !== props.chosenSize) {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              }
            })}
          </select>
          <div className="quantity">
            <div onClick={decrease}>–</div>
            <div>{props.quantity}</div>
            <div onClick={increase}>+</div>
          </div>
        </div>
        <div className="two">
          <div className="price">
            <span>Đơn giá</span>
            <p>{handlePrice(props.price)}</p>
          </div>
          <div className="total">
            <span>Tổng cộng</span>
            <p>{handlePrice(props.price * props.quantity)}</p>
          </div>
        </div>
        <div className="three">
          <div className="cart-del" style={{ cursor: "pointer" }}>
            <Popconfirm
              title="Bạn muốn xoá sản phẩm ?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <FontAwesomeIcon icon={faTrash} />
            </Popconfirm>
          </div>
          <div className="buy-later" onClick={addToFavorite}>
            Mua sau
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
