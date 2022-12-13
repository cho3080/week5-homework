import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import todoSlice from "../redux/modules/todoSlice";
import { useParams } from "react-router-dom";
import { __getTodo, __addComment } from "../redux/modules/todoSlice";

const CommentForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, isLoading, error } = useSelector((state) => state.todos);
  console.log(detail);

  // input
  const [comment, setComment] = useState({ commentBody: "" });

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    //댓글의 내용이 빈 값일 경우 아무것도 리턴하지 않기 위한 코드
    // if (comment.body === "") return;
    setComment({ [name]: value });
  };

  const onSubmit = () => {
    const payload = {
      id: id,
      content: {
        ...detail,
        comment: [...detail.comment, { ...comment, id: new Date().toString() }],
      },
    };
    dispatch(__addComment(payload));
  };

  // const [comments, setComments] = useState(null);

  // const getComments = async () => {
  //   const { data } = await axios.get(`http://localhost:3001/todos/${id}`);
  //   setComments(data);
  // };

  // useEffect(() => {
  //   dispatch(__getTodo(id));
  // }, [dispatch]);

  // useEffect(() => {
  //   getComments();
  // }, []);

  return (
    <StCommentContainer>
      <div>
        <input
          type="text"
          name="commentBody"
          placeholder="댓글을 입력해주세요."
          value={comment.commentBody}
          onChange={onChangeHandler}
        />
        <button onClick={onSubmit}>댓글 작성</button>
      </div>
      <div>
        <div>
          {detail.comment.map((comment) => (
            <StCommentBox>
              <div>{comment.commentBody}</div>
              <div>
                <button>수정</button>
                <button>삭제</button>
              </div>
            </StCommentBox>
          ))}
        </div>
      </div>
    </StCommentContainer>
  );
};

export default CommentForm;

const StCommentContainer = styled.div`
  border: 1px solid red;
  width: 500px;
`;

const StCommentBox = styled.div`
  border: 1px solid blue;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
