import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { __getTodo } from "../redux/modules/todoSlice";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo(id));
  }, [dispatch]);

  const { isLoading, error, detail } = useSelector((state) => state.todos);

  ///////////////////////////////

  const [todo, setTodo] = useState({
    title: "",
  });

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodo(data);
  };

  //삭제하기
  const onClickDeleteButtonHandler = (todoId) => {
    axios.delete(`http://localhost:3001/todos/${todoId}`);
  };

  if (isLoading) {
    return <div>로딩중....</div>;
  }

  return (
    <>
      <p>디테일 페이지 입니다</p>
      <DetailWrap>
        <TitleWrap>
          <Title>{detail?.title}</Title>
          <Body>{detail?.body}</Body>
        </TitleWrap>

        <ButtonWrap>
          <EditBtn
            onClick={() => {
              navigate(`/update/${id}`, { state: detail });
            }}
          >
            게시글 수정
          </EditBtn>
          <DeleteBtn onClick={() => onClickDeleteButtonHandler(todo.id)}>
            게시글 삭제
          </DeleteBtn>
          <GoBack onClick={() => navigate(-1)}>뒤로가기</GoBack>
        </ButtonWrap>
      </DetailWrap>
    </>
  );
};

export default Detail;

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

const DeleteBtn = styled.button`
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
