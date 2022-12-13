import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TodoCard = ({todo}) => {
  return (
    <CardBox>
      <StLink to={`detail/${todo.id}`}>
        <DetailLink>상세보기</DetailLink>
      </StLink>
      <Content>
        <TitleSpan>{todo.title}</TitleSpan>
        <ContentSpan>{todo.body}</ContentSpan>
      </Content>
    </CardBox>
  );
};

export default TodoCard;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 340px;
  height: 200px;
  border: 3px solid #008080;
  border-radius: 10px;
  margin: 10px 0 20px 0;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const DetailLink = styled.div`
  font-size: 16px;
  margin: 0 0 20px 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TitleSpan = styled.span`
  font-size: 24px;
  margin: 0 0 20px 20px;
`;

const ContentSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 20px 20px;
`;
