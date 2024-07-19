import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '@/redux/features/TodoSlice'

export const store = configureStore({
  reducer: {
    Todos: TodoReducer
  }
})
