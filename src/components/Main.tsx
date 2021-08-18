import React, { useEffect } from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";
import TodoLists from "./TodoLists";

const MainWrap = styled.div`
  width: 479px;
  height: 597px;
  background: #c4c4c4;
  border-radius: 20px;
`;

const Main = () => {
  return (
    <MainWrap>
      <Header />
      <TodoLists />
      <Footer />
    </MainWrap>
  );
};
export default Main;
