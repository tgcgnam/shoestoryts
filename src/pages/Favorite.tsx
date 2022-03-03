import { useEffect } from "react";
import FavoriteProd from "../components/favoriteProd/FavoriteProd";

function FavoritePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <FavoriteProd />
    </>
  );
}

export default FavoritePage;
