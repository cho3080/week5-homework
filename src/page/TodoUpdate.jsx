import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __updateTodo } from "../redux/modules/todoSlice";

const TodoUpdate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [input, setInput] = useState(location.state);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onClickEditButtonHandler = async () => {
    if (input.title.length === 0 && input.body.length === 0) {
      alert("제목과 내용을 입력해주세요!");
    } else if (input.title.length === 0) {
      alert("제목을 입력해주세요!");
    } else if (input.title.length < 10) {
      alert("제목은 10자 이상 작성해주셔야 합니다!");
    } else if (input.body.length === 0) {
      alert("내용을 작성해주세요!");
    } else {
      await dispatch(__updateTodo(input));
      navigate("/");
    }
  };

  return (
    <>
      <DetailWrap>
        <Topline>수정할 내용을 입력해주세요</Topline>
        <TitleWrap>
          <Title>
            <NewInput
              type="text"
              value={input.title}
              name="title"
              onChange={handleInput}
            />
          </Title>
          <Body>
            <NewInput
              type="text"
              value={input.body}
              name="body"
              onChange={handleInput}
            />
          </Body>
        </TitleWrap>
        <ButtonWrap>
          <EditBtn onClick={() => onClickEditButtonHandler("", "")}>
            수정완료
          </EditBtn>
          <GoBack onClick={() => navigate(-1)}>뒤로가기</GoBack>
        </ButtonWrap>
      </DetailWrap>
    </>
  );
};

export default TodoUpdate;

const Topline = styled.p`
  color: #616161;
  font-size: 25px;
  font-weight: 600;
`;

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

const NewInput = styled.input`
  border: 1px solid gray;
  width: 200px;
  height: 30px;
  border-radius: 7px;
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
