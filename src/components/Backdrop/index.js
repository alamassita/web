import React from "react";
import styled from "styled-components";
const BackdropWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(var(--gray-800), 0.8);
  z-index: 98;
`;

const Backdrop = () => {
  return <BackdropWrapper></BackdropWrapper>;
};

export default Backdrop;
