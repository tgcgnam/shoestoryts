import { GlobalContext } from "./globalState";
import { useContext } from "react";

function ChosenSize(props: any) {
  const { cart, cartSizeWarnings, setCartSizeWarnings, setCart } =
    useContext(GlobalContext);

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
          console.log(item.cartId, props.id);
      console.log(item.cartId, props.id);

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
    <select
      defaultValue={"Sizes"}
      onChange={(e) => handleChooseSize(e)}
      className="sizes-select"
    >
      <option>
        {props.chosenSize !== "" ? "Sizes" : props.chosenSize}
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
  );
}

export default ChosenSize;
