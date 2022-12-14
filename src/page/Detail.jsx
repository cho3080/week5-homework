import React, { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { __getTodo, __deleteTodo } from "../redux/modules/todoSlice";
import CommentForm from "../components/CommentForm";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo(id));
  }, [dispatch]);

  const { isLoading, detail } = useSelector((state) => state.todos);

  const onClickDeleteButtonHandler = async () => {
    await dispatch(__deleteTodo(id));
    navigate("/");
  };

  if (isLoading) {
    return <div>로딩중....</div>;
  }

  return (
    <>
      <Header />
      <DetailWrap>
        <Topline>게시글 상세보기 페이지입니다</Topline>
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
          <DeleteBtn onClick={onClickDeleteButtonHandler}>
            게시글 삭제
          </DeleteBtn>
          <GoBack onClick={() => navigate(-1)}>뒤로가기</GoBack>
        </ButtonWrap>
        <CommentForm />
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

const Topline = styled.p`
  color: #616161;
  font-size: 25px;
  font-weight: 600;
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
