import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Detail = () => {
  return (
    <Wrapper>
      <Header />
      <div>디테일 페이지 입니다</div>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
