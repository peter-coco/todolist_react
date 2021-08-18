import React, { useEffect } from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 479px;
  height: 85px;

  background: #bd8080;
  border-radius: 20px 20px 0px 0px;
`;

const HeaderTitle = styled.div`
  line-height: 85px;
  text-align: center;
  font-size: 21px;
  color: #ffffff;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderTitle>CRUD React Practice</HeaderTitle>
    </HeaderWrap>
  );
};
export default Header;
