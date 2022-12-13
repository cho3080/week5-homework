import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [{ id: "", title: "", content: "", comment: [] }],
};

// todos 안에서 comment를 처리하는 방법 !
//thunk를 만든다. ( 이 thunk는 처음에는 이 posts 와 comment를 매칭시켜주는 것, posts의 postid 와 comments의 postid )
//thunk의 로직은 posts 를 조회해오고 각 post를 돌면서 for each , map 돌리든, 그 안에서 그 각각의 post id 에 맞는 댓글들을
//comments collection 에서 가져오는거임.
//가져온 애를 todos객체의 comment의 value 로 준다.

const getComments = createAsyncThunk(
  "todoSlice/detailTodos",
  async (payload) => {
    const todosData = await axios.get("https://localhost:3001/posts");
    //콘솔 찍어서 todosData 있는 id값을 뽑아야함.
    const dataForComment = todosData.data.filter((todo) => todo.id === payload); // 그 게시글 담겼고 [{그 게시글}]

    //  todosData.data를 filter해서 todos의 id와 이에 맞는 comments의 id 매칭시켜서 합친다. => 이러면 9번째줄 로직이 됨.

    // 모든 댓글이 다 commentThat으로 옴
    const commentsAll = await axios.get("https://localhost:3001/comments");
    const resultComment = commentsAll.data.filter(
      (el) => el.postId === payload
    ); // 그 게시글의 댓글들이 담겼죠.

    // const lastResult = { ...result[0], comment: resultComment };
    // return lastResult;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {},

    deleteTodos: (state, action) => {},
  },
  extraReducers: {
    // [detailTodos.fulfilled]: (state, payload) => {
    //   // thunk에서 결과로 return된 값
    //   state.detail = payload;
    // },
  },
});

export const { addTodos, deleteTodos } = todoSlice.actions;

export default todoSlice.reducer;
