import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router";
import axios from "axios";

const TodoUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  console.log(state);

  const [input, setInput] = useState(state);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onClickEditButtonHandler = (todoId, edit) => {
    axios.patch(`http://localhost:3001/todos/${todoId}`, edit);
  };

  return (
    <>
      <p>수정하는 페이지 입니다</p>
      <DetailWrap>
        <TitleWrap>
          <Title>
            <input
              type="text"
              value={input.title}
              name="title"
              onChange={handleInput}
            />
          </Title>
          <Body>
            <input
              type="text"
              value={input.body}
              name="body"
              onChange={handleInput}
            />
          </Body>
        </TitleWrap>

        <ButtonWrap>
          <EditBtn onClick={() => onClickEditButtonHandler("sdf", "sdf")}>
            수정완료
          </EditBtn>
          <GoBack onClick={() => navigate(-1)}>뒤로가기</GoBack>
        </ButtonWrap>
      </DetailWrap>
    </>
  );
};

export default TodoUpdate;

const DetailWrap = styled.div`
  padding: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  border: 1px solid gray;
  padding: 3%;
  border-radius: 20px;
  background-color: white;
`;

const Title = styled.div`
  color: #616161;
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 30px;
`;

const Body = styled.div`
  color: #616161;
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 70px;
`;

const ButtonWrap = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const EditBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: gray;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  height: 40px;
  width: 80px;
  border-radius: 12px;
  margin-bottom: 20px;
  margin-right: 40px;
`;

const GoBack = styled.button`
  border: none;
  cursor: pointer;
  background-color: gray;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  height: 40px;
  width: 80px;
  border-radius: 12px;
  margin-bottom: 20px;
  margin-left: 40px;
`;
