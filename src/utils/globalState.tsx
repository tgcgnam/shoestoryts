import { createContext, useState } from "react";

export const GlobalContext: any = createContext(GlobalState);

function GlobalState({ children }:{children:any}) {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState();
  const [favProducts, setFavProducts] = useState(() => {
    const favProducts = localStorage.getItem("favProds");
    if (favProducts) {
      return JSON.parse(favProducts);
    } else {
      return [];
    }
  });
  localStorage.setItem("favProds", JSON.stringify(favProducts));
  const [brandItems, setBrandItems] = useState([]);

  const [cart, setCart] = useState(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  const [isUpdatedFavorite, setIsUpdatedFavorite] = useState(() => {
    const isUpdatedFavorite = localStorage.getItem("isUpdated");
    if (isUpdatedFavorite) {
      return JSON.parse(isUpdatedFavorite);
    } else {
      return [];
    }
  });
  localStorage.setItem("isUpdated", JSON.stringify(isUpdatedFavorite));
  const [quantity, setQuantity] = useState(1);
  const [cusInfo, setCusInfo] = useState({});
  const [errors, setErrors] = useState({});
  const [confirmInfo, setConfirmInfo] = useState(false);
  const [letSubmit, setLetSubmit] = useState(false);
  const [isLoader, setIsLoader] = useState(true);
  const [cartSizeWarnings, setCartSizeWarnings] = useState({});
  const [orderedProds, setOrderedProds] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        setSeeMore,
        seeMore,
        products,
        setProducts,
        brandItems,
        setBrandItems,
        cart,
        setCart,
        productId,
        setProductId,
        favProducts,
        setFavProducts,
        isUpdatedFavorite,
        setIsUpdatedFavorite,
        quantity,
        setQuantity,
        cusInfo,
        setCusInfo,
        errors,
        setErrors,
        confirmInfo,
        setConfirmInfo,
        letSubmit,
        setLetSubmit,
        cartSizeWarnings,
        setCartSizeWarnings,
        setOrderedProds,
        isLoader,
        setIsLoader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
