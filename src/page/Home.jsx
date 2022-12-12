import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Form />
        <TodoList />
      </Wrapper>
    </>
  );
};

export default Home;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
