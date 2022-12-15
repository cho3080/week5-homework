import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  detail: {
    id: "",
    title: "",
    body: "",
    comment: [],
  },
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const todos = await axios.get(`${process.env.REACT_APP_PORT}/todos`);
      return thunkAPI.fulfillWithValue(todos.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodo = createAsyncThunk(
  "todos/getTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_PORT}/todos/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload, thunkAPI) => {
    try {
      const todo = await axios.post(`${process.env.REACT_APP_PORT}/todos`, payload);
      return thunkAPI.fulfillWithValue(todo.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_PORT}/todos/${id}`);
      if (res.status === 200) {
        return thunkAPI.fulfillWithValue(id);
      } else {
        // return thunkAPI.rejectWithValue(response.message)
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (detail, thunkAPI) => {
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_PORT}/todos/${detail.id}`,
        detail
      );
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __addComment = createAsyncThunk(
  "todos/addComment",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_PORT}/todos/${payload.id}`,
        payload.content
      );
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "todos/updateComment",
  async (payload, thunkAPI) => {
    const res = await axios.patch(
      `${process.env.REACT_APP_PORT}/todos/${payload.id}`,
      payload.updatedDetail
    );

    try {
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "todos/deleteComment",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_PORT}/todos/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    //__getTodos
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __getTodo
    [__getTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //__addTodo
    [__addTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload);
    },
    [__addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __deleteTodo
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __updateTodo
    [__updateTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    [__updateTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addComment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail.comment = action.payload.comment;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // updateComment
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // deleteComment
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },

    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;
