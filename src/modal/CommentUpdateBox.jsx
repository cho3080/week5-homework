import { useState } from "react";
import { useDispatch } from "react-redux";
import { __updateComment } from "../redux/modules/todoSlice";

const CommentUpdateBox = ({ commentUpdate, setCommentUpdate }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(commentUpdate.comment);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = async () => {
    const updatedCommentList = commentUpdate.detail.comment.map((item) => {
      if (item.id === input.id) {
        return input;
      } else {
        return item;
      }
    });
    const payload = {
      id: commentUpdate.detail.id,
      updatedDetail: { ...commentUpdate.detail, comment: updatedCommentList },
    };
    await dispatch(__updateComment(payload));
    setCommentUpdate({
      isOpen: false,
      detail: undefined,
      comment: undefined,
    });
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="commentBody"
          value={input.commentBody}
          onChange={handleInput}
        ></input>
        <button type="button" onClick={onSubmit}>
          수정
        </button>
      </div>
    </>
  );
};

export default CommentUpdateBox;
