import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "", title: "", body: "", comment: [] }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
