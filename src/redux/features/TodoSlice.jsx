/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const loadTodos = () => {
  try {
    const todos = localStorage.getItem('todos');
    if (todos === null) return [];
    return JSON.parse(todos);
  } catch (error) {
    console.error('Error loading Todos from localStorage:', error);
    return [];
  }
};

const initialState = {
  Todos: loadTodos(),
  filteredTodos: loadTodos()

}

export const TodoSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.Todos.push(action.payload)
      localStorage.setItem('todos', JSON.stringify(state.Todos))
      state.filteredTodos = state.Todos
    },
    deleteTodo: (state, action) => {
      state.Todos = state.Todos.filter((todo) => todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(state.Todos))
      state.filteredTodos = state.Todos
    },
    updateTodo: (state, action) => {
      const update = state.Todos.find((todo) => todo.id === action.payload)
      if(update) {
        update.completed = !update.completed
      }
      state.filteredTodos = state.Todos
    },
    deleteAllTodo: (state) => {
      state.Todos = []
      localStorage.setItem('todos', JSON.stringify(state.Todos))
      state.filteredTodos = state.Todos
    },
    updatedAllTodo: (state) => {
      state.Todos.forEach((todo) => {
        todo.completed = true
      })
      state.filteredTodos = state.Todos
    },
    searchTodos: (state, action) => {
      const term = action.payload.toLowerCase()
      state.filteredTodos = state.Todos.filter(todo => todo.todo.toLowerCase().includes(term))
    },
    clearSearch: (state) => {
      state.filteredTodos = state.Todos
    },
    setTodosAgain: (state, action) => {
      state.Todos = action.payload
      localStorage.setItem('todos', JSON.stringify(state.Todos))
      state.filteredTodos = state.Todos
    },
    sortSelect: (state, action) => {
      if(action.payload === 'completed') {
        state.filteredTodos = state.Todos.filter((data) => data.completed === true)
      } else {
        state.filteredTodos = state.Todos.filter((data) => data.completed === false)
      }
    }
  }
})


export default TodoSlice.reducer
export const {addTodo, deleteTodo, updateTodo, updatedAllTodo, sortSelect, deleteAllTodo, searchTodos, clearSearch, setTodosAgain} = TodoSlice.actions
