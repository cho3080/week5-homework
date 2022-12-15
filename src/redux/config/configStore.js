import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../modules/todoSlice";

const store = configureStore({
  reducer: { todos: todoReducer },
  devTools:false
});

export default store;
