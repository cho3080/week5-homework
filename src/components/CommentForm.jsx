import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __addComment, __deleteComment } from "../redux/modules/todoSlice";
import CommentUpdateBox from "../modal/CommentUpdateBox";

const CommentForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [commentUpdate, setCommentUpdate] = useState({
    isOpen: false,
    detail: undefined,
    comment: undefined,
  });
  const { detail } = useSelector((state) => state.todos);

  // input
  const [comment, setComment] = useState({ commentBody: "" });

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setComment({ [name]: value });
  };

  const onSubmit = () => {
    const payload = {
      id: id,
      content: {
        ...detail,
        comment: [
          ...detail.comment,
          { ...comment, id: new Date().getTime().toString() },
        ],
      },
    };
    dispatch(__addComment(payload));
  };

  const handleUpdateModal = (detail, comment) => {
    setCommentUpdate((prev) => {
      return { ...prev, isOpen: !prev.isOpen, detail, comment };
    });
  };

  // 삭제하기
  const handleDelete = (detail, commentId) => {
    const updatedDetail = {
      ...detail,
      comment: detail.comment.filter((item) => {
        return item.id !== commentId;
      }),
    };
    dispatch(__deleteComment(updatedDetail));
  };

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
          {detail.comment?.map((comment, idx) => (
            <StCommentBox key={idx}>
              <div>{comment.commentBody}</div>
              <div>
                <button
                  onClick={() => {
                    handleUpdateModal(detail, comment);
                  }}
                >
                  수정
                </button>
                <button onClick={() => handleDelete(detail, comment.id)}>
                  삭제
                </button>
              </div>
            </StCommentBox>
          ))}
          {commentUpdate.isOpen === false ? null : (
            <CommentUpdateBox
              commentUpdate={commentUpdate}
              setCommentUpdate={setCommentUpdate}
            />
          )}
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
