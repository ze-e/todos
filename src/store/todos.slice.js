import { createSlice } from "@reduxjs/toolkit";
import { v4 as createId } from "uuid";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
          const newTodo = {
            id: createId(),
            ...action.payload,
          };
          state.todos = [newTodo, ...state.todos];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
