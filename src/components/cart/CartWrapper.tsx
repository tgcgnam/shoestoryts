import { useContext } from "react";
import { GlobalContext } from "../../utils/globalState";
import CartItem from "./CartItem";

function CartWrapper() {
    const { cart } = useContext(GlobalContext)
  
    return (
      <>
        <div className="cart-wrapper">
          <h5>Giỏ hàng của bạn</h5>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <h2>Giỏ hàng của bạn đang trống !</h2>
            </div>
          ) : (
            cart.map(
              (item: {
                cartId: number | undefined;
                cartImg: string;
                cartName: string;
                cartQuantity: number;
                cartPrice: number;
                cartSale: number;
                cartStatus: string;
                cartCondition: string;
                cartSizes: number;
                cartChosenSize: number;
              }) => (
                <CartItem
                  key={item.cartId}
                  id={item.cartId}
                  img={item.cartImg}
                  name={item.cartName}
                  quantity={item.cartQuantity}
                  price={item.cartPrice}
                  sale={item.cartSale}
                  status={item.cartStatus}
                  condition={item.cartCondition}
                  sizes={item.cartSizes}
                  chosenSize={item.cartChosenSize}
                />
              )
            )
          )}
        </div>
      </>
    );
}

export default CartWrapper;