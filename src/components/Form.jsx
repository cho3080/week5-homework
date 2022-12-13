import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addTodo } from "../redux/modules/todoSlice";
import { useInput } from "../hooks/useInput";

const Form = () => {
  const { input, handleInput, setInput } = useInput({ title: "", body: "" });

  const { isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addSubmitHandler = (e) => {
    e.preventDefault();
    const param = {
      ...input,
      id: new Date().toString(),
    };
    dispatch(__addTodo(param));
    setInput({ title: "", body: "" });
  };

  if (isLoading) {
    return <div>로딩중....</div>;
  }

  if (error) {
    return <div>확인하기 어려운 에러가 발생했습니다.</div>;
  }

  return (
    <FormBox>
      <CreateForm onSubmit={addSubmitHandler}>
        <InputBox>
          <label>
            <StSpan>제목</StSpan>
            <StInput
              type="text"
              name="title"
              value={input.title}
              onChange={(e) => handleInput(e)}
            />
          </label>
        </InputBox>
        <InputBox>
          <label>
            <StSpan>내용</StSpan>
            <StInput
              type="text"
              name="body"
              value={input.body}
              onChange={(e) => handleInput(e)}
            />
          </label>
        </InputBox>
        <StButton>추가하기</StButton>
      </CreateForm>
    </FormBox>
  );
};

export default Form;

const FormBox = styled.div`
  width: 1220px;
  height: 100px;
  margin-top: 30px;
  border: 2px solid #008080;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const CreateForm = styled.form`
  display: flex;
  align-items: center;
`;

const InputBox = styled.div`
  margin-right: 30px;
`;

const StSpan = styled.span`
  font-weight: 600;
  margin-right: 15px;
`;

const StInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #808080;
`;

const StButton = styled.button`
  width: 150px;
  height: 35px;
  font-size: 18px;
  font-weight: 600;
  border: 2px solid #008080;
  background-color: #008080;
  color: white;
  margin-left: 50px;
  cursor: pointer;
`;
