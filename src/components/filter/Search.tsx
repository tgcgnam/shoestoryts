import { useEffect, useState, useContext, SetStateAction } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../utils/globalState";

const InputStl = styled.div`
  position: relative;
  width: 500px;
  margin: 10px auto;
  input {
    height: 60px;
    width: 100%;
    min-width: 100%;
    padding: 0;
    border-radius: 0;
    line-height: $input-line-height;
    background-color: transparent;
    color: #333;
    font-size: $input-font-size;
    border: none;
    outline: none;
    border-bottom: 3px solid #333333;
    font-family: $font-family;

    &:focus {
      + .input-highlight {
        border-top: 3px solid #fbc91b;
      }
    }
  }
`;

function InputSearch() {
  const [keyword, setKeyword] = useState<string>(" ");
  const { setProducts } = useContext(GlobalContext);
  useEffect(() => {
    if (keyword != " ") {
      fetch(
        `https://shoestory-server.herokuapp.com/products/?q=` + keyword.trim()
      )
        .then((res) => res.json())
        .then((item) => setProducts(item));
    }
  }, [keyword]);

  return (
   <InputStl>
        <input
          className="input"
          placeholder="Tìm kiếm sản phẩm..."
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
        />
   </InputStl>
  );
}

export default InputSearch;
