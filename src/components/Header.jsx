import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <div>We can do it!</div>
      <div>React study</div>
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  color: #008080;
  width: 1200px;
  margin-top: 20px;
  padding: 0 10px 0 10px;
  border: 2px solid #008080;
`;
