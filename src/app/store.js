import { configureStore } from '@reduxjs/toolkit'
// this is creating a store

import todoReducer from "../features/todo/TodoSlice"
export const store = configureStore({
    reducer : {
        todos :  todoReducer
    }
});