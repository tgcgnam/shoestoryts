import { Spin } from "antd";
import { useEffect } from "react";
import styled from "styled-components";

const Loader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: white;
  .ant-spin-spinning {
    position: static;
    display: inline-block;
    opacity: 1;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 20%;
  }
`;

function Loading() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Loader className="loader">
      <Spin tip="Loading..."></Spin>
    </Loader>
  );
}

export default Loading;
