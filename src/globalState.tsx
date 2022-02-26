import { createContext, useState } from "react";

export const GlobalContext: any = createContext(null);

function GlobalState({ children }: any): any {
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

  const [isHideNav, setIsHideNav] = useState(true);

  const [isDisplayNav, setIsDisplayNav] = useState(false);

  const [imgLink, setImgLink] = useState("");

  const [cart, setCart] = useState(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  });
  localStorage.setItem("cart", JSON.stringify(cart));

  const [isCartWarning, setIsCartWarning] = useState(false);

  const [isRemoveWarning, setIsRemoveWarning] = useState(false);

  const [isAddFavSuccess, setIsAddFavSuccess] = useState(false);

  const [isAddCartSuccess, setIsAddCartSuccess] = useState(false);

  const [isAddFavWarn, setIsAddFavWarn] = useState(false);

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

  const [isWarningInfo, setIsWarningInfo] = useState(false);

  const [isWarningConfirmInfo, setIsWarningConfirmInfo] = useState(false);

  const [isSizeWarning, setIsSizeWarning] = useState(false);

   interface IsLoader {
     isLoader: boolean;
     setIsLoader: boolean;
   }
  const [isLoader, setIsLoader] = useState <IsLoader['isLoader']>(true);

  const [cartSizeWarnings, setCartSizeWarnings] = useState({});

  const [isOrderSuccess, setIsOrderSuccess] = useState(false);

  const [orderedProds, setOrderedProds] = useState([]);

  const [isSoldOut, setIsSoldOut] = useState(false);

  const [isWarningCartEmpty, setIsWarningCartEmpty] = useState(false);
  
  interface SeeMore {
    seeMore: boolean;
    setSeeMore: boolean;
  }
  const [seeMore, setSeeMore] = useState<SeeMore["seeMore"]>(false);

  return (
    <GlobalContext.Provider
      value={{
        setSeeMore,
        seeMore,
        isHideNav,
        setIsHideNav,
        isDisplayNav,
        setIsDisplayNav,
        products,
        setProducts,
        brandItems,
        setBrandItems,
        imgLink,
        setImgLink,
        cart,
        setCart,
        isCartWarning,
        setIsCartWarning,
        isRemoveWarning,
        setIsRemoveWarning,
        productId,
        setProductId,
        favProducts,
        setFavProducts,
        isAddFavSuccess,
        setIsAddFavSuccess,
        isAddCartSuccess,
        setIsAddCartSuccess,
        isAddFavWarn,
        setIsAddFavWarn,
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
        isWarningInfo,
        setIsWarningInfo,
        isSizeWarning,
        setIsSizeWarning,
        cartSizeWarnings,
        setCartSizeWarnings,
        isWarningConfirmInfo,
        setIsWarningConfirmInfo,
        isOrderSuccess,
        setIsOrderSuccess,
        orderedProds,
        setOrderedProds,
        isSoldOut,
        setIsSoldOut,
        isLoader,
        setIsLoader,
        isWarningCartEmpty,
        setIsWarningCartEmpty,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
