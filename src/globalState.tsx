import { createContext, useState } from "react";

export const GlobalContext: any = createContext(GlobalState);

function GlobalState({ children }: any) {
  const [products, setProducts] = useState<[]>([]);

  const [productId, setProductId] = useState<number>();

  const [favProducts, setFavProducts] = useState<any[]>(() => {
    const favProducts = localStorage.getItem("favProds");
    if (favProducts) {
      return JSON.parse(favProducts);
    } else {
      return [];
    }
  });
  localStorage.setItem("favProds", JSON.stringify(favProducts));

  const [brandItems, setBrandItems] = useState<any[]>([]);

  const [isHideNav, setIsHideNav] = useState<boolean>(true);

  const [isDisplayNav, setIsDisplayNav] = useState<boolean>(false);
  //
  const [imgLink, setImgLink] = useState<string>("");

  const [cart, setCart] = useState<any[]>(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  });
  localStorage.setItem("cart", JSON.stringify(cart));

  const [isCartWarning, setIsCartWarning] = useState<boolean>(false);

  const [isRemoveWarning, setIsRemoveWarning] = useState<boolean>(false);

  const [isAddFavSuccess, setIsAddFavSuccess] = useState<boolean>(false);

  const [isAddCartSuccess, setIsAddCartSuccess] = useState<boolean>(false);

  const [isAddFavWarn, setIsAddFavWarn] = useState<boolean>(false);

  const [isUpdatedFavorite, setIsUpdatedFavorite] = useState<any[]>(() => {
    const isUpdatedFavorite = localStorage.getItem("isUpdated");
    if (isUpdatedFavorite) {
      return JSON.parse(isUpdatedFavorite);
    } else {
      return [];
    }
  });
  localStorage.setItem("isUpdated", JSON.stringify(isUpdatedFavorite));

  const [quantity, setQuantity] = useState<number>(1);

  const [cusInfo, setCusInfo] = useState<any>({});

  const [errors, setErrors] = useState<any>({});

  const [confirmInfo, setConfirmInfo] = useState<boolean>(false);

  const [letSubmit, setLetSubmit] = useState<boolean>(false);

  const [isWarningInfo, setIsWarningInfo] = useState<boolean>(false);

  const [isWarningConfirmInfo, setIsWarningConfirmInfo] =
    useState<boolean>(false);

  const [isSizeWarning, setIsSizeWarning] = useState<boolean>(false);

  const [isLoader, setIsLoader] = useState<boolean>(true);

  const [cartSizeWarnings, setCartSizeWarnings] = useState<any>({});

  const [isOrderSuccess, setIsOrderSuccess] = useState<boolean>(false);

  const [orderedProds, setOrderedProds] = useState<any[]>([]);

  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);

  const [isWarningCartEmpty, setIsWarningCartEmpty] = useState<boolean>(false);

  const [seeMore, setSeeMore] = useState<boolean>(false);

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
