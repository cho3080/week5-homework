import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const TodoUpdate = () => {
  return (
    <Wrapper>
      <Header />
      <div>투두 수정 페이지 입니다.</div>
    </Wrapper>
  );
};

export default TodoUpdate;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
