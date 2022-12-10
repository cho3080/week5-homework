import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "", title: "", content: "", comment: [] }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {},

    deleteTodos: (state, action) => {},
  },
});

export const { addTodos, deleteTodos } = todoSlice.actions;

export default todoSlice.reducer;
