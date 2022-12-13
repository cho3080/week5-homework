import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import todoSlice from "../redux/modules/todoSlice";

const CommentForm = () => {
  const dispatch = useDispatch();

  const [comments, setComments] = useState(null);

  const getComments = async () => {
    const { data } = await axios.get("http://localhost:3001/comments");
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  console.log(comments);
  // 액션 보내주기 위해 dispatch 정의
  //input값 하나니까 커스텀훅 useInput 안쓰고 , 간단히 commentForm 안에서 useState로 관리
  const [comment, setComment] = useState({
    commentId: 0,
    commentBody: "" /* id: {post.id} */,
  });

  //todos의 id값을 store로부터 가져와서 addComment의 id(todos의 id) 값에 매칭시켜주고싶다.
  const idForComment = useSelector((state) => state.todos.id);

  const onChangeHandler = (e) => {
    e.preventDefault();
    //댓글의 내용이 빈 값일 경우 아무것도 리턴하지 않기 위한 코드
    if (comment.body === "") return;

    const payload = {
      commentId: comments.length + 1,
      body: comment.body,
      id: idForComment, //todos의 id임
    };

    // dispatch(addComment(payload));
    setComment({ body: "" });
  };

  return (
    <StCommentBox>
      <div>
        <input type="text" placeholder="댓글을 입력해주세요." />
        <button onClick={onChangeHandler}>댓글 작성</button>
      </div>
      <div>
        <div>
          {comments.map((comment) => (
            <div>
              <div>{comment.commentBody}</div>
              <button>수정</button>
              <button>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </StCommentBox>
  );
};

export default CommentForm;

const StCommentBox = styled.div`
  border: 1px solid red;
  width: 500px;
`;
