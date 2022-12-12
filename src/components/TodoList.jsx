import React from "react";
import styled from "styled-components";
import TodoCard from "../elements/TodoCard";

const TodoList = () => {
  return (
    <ListWrap>
      <TodoCard />
    </ListWrap>
  );
};

export default TodoList;

const ListWrap = styled.div`
  margin-top: 20px;
  width: 1200px;
`;
