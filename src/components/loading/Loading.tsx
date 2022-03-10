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
  .ant-spin-dot {
    width: 1.6em;
    height: 1.6em;
    .ant-spin-dot-item {
      background-color: #ec2a21 !important;
      width: 12px;
      height: 12px;
    }
  }
  .ant-spin-spinning {
    position: static;
    display: inline-block;
    color: #ec2a21;
    opacity: 1;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 25%;
  }
`;

function Loading() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Loader className="loader">
      <Spin className="color" tip="Đang tải dữ liệu"></Spin>
    </Loader>
  );
}

export default Loading;
