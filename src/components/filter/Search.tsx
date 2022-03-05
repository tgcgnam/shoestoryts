import { useState, useEffect } from "react";

function SearchProd() {
  const [prod, setProd] = useState<[]>([]);
  const [keyword, setKeyword] = useState<string>(" ");
  console.log(prod);
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
    </div>
  );
}

export default SearchProd;
